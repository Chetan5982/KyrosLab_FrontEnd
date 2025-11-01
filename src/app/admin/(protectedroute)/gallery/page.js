"use client";
import { useMemo, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import CustomSwipeableDrawer from "@/components/common/Drawer/CustomSwipeableDrawer";
import PageTableLayout from "@/components/common/PageTableLayout";
import CustomTable from "@/components/common/CustomTable/CustomTable";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";
import GallaryForm from "@/components/ui-components/forms/GallaryForm";
import { DELETE_GALLARY, GET_ALL_GALLARY } from "@/redux/gallary/gallary.type";
import Image from "next/image";
import FullPageLoader from "@/components/common/fullpageloader";
import { useSession } from "next-auth/react";
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
            data ? (
              <GallaryForm setOpenDrawer={setOpenDrawer} formData={data} />
            ) : (
              <GallaryForm setOpenDrawer={setOpenDrawer} formData={data} />
            )
          ) : null
        }
      </CustomSwipeableDrawer>
    </>
  );
}

const Gallary = () => {
  const dispatch = useDispatch();
  const [isImageDelete, setIsImageDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsImageDelete(id);
  };
  const handleCloseDialog = () => {
    setIsImageDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_GALLARY, payload: { id: isImageDelete } });
    setIsImageDelete(false);
  };

  const columns = useMemo(
    () => [
      { label: "Title", field: "title", component: null },
      {
        label: "Image",
        field: "",
        component: (data) => {
          return (
            <Image
              src={data?.coverImage}
              alt={"images"}
              loading="lazy"
              height={100}
              width={200}
            />
          );
        },
      },
      { label: "Year", field: "year", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Gallery"
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
    []
  );

  const { gallary } = useSelector((state) => state.gallary);

  useEffect(() => {
    dispatch({ type: GET_ALL_GALLARY });
  }, [dispatch]);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(
      gallary,
      `BLGD-gallery-${new Date().toJSON().slice(0, 10)}.json`
    );
  };
  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Gallery List" />
            }
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
            icon={<AddIcon />}
            toolTipText="Add Gallery"
          />
        }
        content={<CustomTable data={gallary || []} columns={columns} />}
      />
      <CustomDialog
        open={isImageDelete}
        title="Delete Image"
        content="Are you sure you want to delete this Image"
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

export default Gallary;
