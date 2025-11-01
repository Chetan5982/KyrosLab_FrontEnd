"use client";
import { useMemo, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import CustomSwipeableDrawer from "@/components/common/Drawer/CustomSwipeableDrawer";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import PageTableLayout from "@/components/common/PageTableLayout";
import CustomTable from "@/components/common/CustomTable/CustomTable";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";
import FullPageLoader from "@/components/common/fullpageloader";
import { useSession } from "next-auth/react";
import { storeEventImages } from "@/redux/event/event.reducer";
import {
  DELETE_CATEGORY,
  GET_ALL_CATEGORY,
} from "@/redux/category/category.type";
import CategoryForm from "@/components/ui-components/forms/categoryForm";
import { downloadJSON } from "@/components/common/Downloader";

function Header({
  cardHeader,
  icon,
  toolTipText,
  exportIcon,
  exportData,
  exportToolTipText,
  data,
  onClick = () => {},
}) {
  return (
    <>
      {cardHeader && cardHeader}
      <CustomSwipeableDrawer
        onClick={onClick}
        buttonLabel={
          <>
            <Tooltip title={exportToolTipText && exportToolTipText}>
              <IconButton
                sx={{
                  background: "primary",
                }}
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  exportData();
                }}
              >
                {exportIcon && exportIcon}
              </IconButton>
            </Tooltip>
            <Tooltip title={toolTipText && toolTipText}>
              <IconButton
                sx={{
                  background: "primary",
                }}
                size="small"
                onClick={onClick}
              >
                {icon && icon}
              </IconButton>
            </Tooltip>
          </>
        }
      >
        {({ openDrawer, setOpenDrawer }) =>
          openDrawer ? (
            <CategoryForm
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              formData={data}
            />
          ) : null
        }
      </CustomSwipeableDrawer>
    </>
  );
}

const Category = () => {
  const dispatch = useDispatch();
  const [isCategoryDelete, setIsCategoryDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsCategoryDelete(id);
  };

  const handleCloseDialog = () => {
    setIsCategoryDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_CATEGORY, payload: { id: isCategoryDelete } });
    setIsCategoryDelete(false);
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_CATEGORY });
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { label: "Category Name", field: "name", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Category"
                onClick={() => {
                  dispatch(storeEventImages(params.image));
                }}
              />
              <IconButton
                onClick={() => {
                  handleOpenDialog(params._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        },
      },
    ],
    [dispatch]
  );
  const { categories } = useSelector((state) => state.category);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(
      categories,
      `BLGD-categories-${new Date().toJSON().slice(0, 10)}.json`
    );
  };

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Category List" />
            }
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
            icon={<AddIcon />}
            toolTipText="Add Category"
          />
        }
        content={<CustomTable data={categories || []} columns={columns} />}
      />
      <CustomDialog
        open={isCategoryDelete}
        title="Remove Category"
        content="Are you sure you want to remove this Category"
        actions={[
          {
            label: "Cancel",
            color: "primary",
            onClick: handleCloseDialog,
          },
          {
            label: "Remove",
            color: "error",
            onClick: handleDialogAction,
          },
        ]}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default Category;
