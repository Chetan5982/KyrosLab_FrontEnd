"use client";
import { useMemo, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import CustomSwipeableDrawer from "@/components/common/Drawer/CustomSwipeableDrawer";
import PageTableLayout from "@/components/common/PageTableLayout";
import CustomTable from "@/components/common/CustomTable/CustomTable";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import FullPageLoader from "@/components/common/fullpageloader";
import { useSession } from "next-auth/react";
import { DELETE_POP_UP, GET_POP_UP } from "@/redux/homeBanner/homeBanner.type";
import HomePopupForm from "@/components/ui-components/forms/homePopupForm";
import { DELETE_REDIRECT, GET_REDIRECT } from "@/redux/redirect/redirect.type";
import RedirectForm from "@/components/ui-components/forms/redirectForm";
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
            <RedirectForm
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

const RedirectPage = () => {
  const dispatch = useDispatch();
  const [isImageDelete, setIsImageDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsImageDelete(id);
  };
  const handleCloseDialog = () => {
    setIsImageDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_REDIRECT, payload: { id: isImageDelete } });
    setIsImageDelete(false);
  };

  const columns = useMemo(
    () => [
      {
        label: "Status",
        field: "",
        component: (params) => {
          return params.permanent ? 301 : 302;
        },
      },
      {
        label: "Source",
        field: "source",
      },
      {
        label: "Destination",
        field: "destination",
      },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Redirect"
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

  const { redirectData } = useSelector((state) => state.redirect);

  useEffect(() => {
    dispatch({ type: GET_REDIRECT });
  }, [dispatch]);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(
      redirectData,
      `BLGD-Redirects-${new Date().toJSON().slice(0, 10)}.json`
    );
  };
  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={<CardHeader sx={{ padding: "0px" }} title="Redirect" />}
            icon={<AddIcon />}
            toolTipText="Add Redirect"
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
          />
        }
        content={<CustomTable data={redirectData || []} columns={columns} />}
      />
      <CustomDialog
        open={isImageDelete}
        title="Delete Redirect"
        content="Are you sure you want to delete this Redirect"
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

export default RedirectPage;
