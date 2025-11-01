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
import EditImageForm from "@/components/ui-components/forms/EditImageForm";
import Image from "next/image";
import FullPageLoader from "@/components/common/fullpageloader";
import { useSession } from "next-auth/react";
import HomeBannerForm from "@/components/ui-components/forms/HomeBannerForm";
import {
  DELETE_HOME_BANNER,
  GET_ALL_HOME_BANNER,
} from "@/redux/homeBanner/homeBanner.type";
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
            <HomeBannerForm
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

const HomeBanner = () => {
  const dispatch = useDispatch();
  const [isImageDelete, setIsImageDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsImageDelete(id);
  };
  const handleCloseDialog = () => {
    setIsImageDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_HOME_BANNER, payload: { id: isImageDelete } });
    setIsImageDelete(false);
  };

  const columns = useMemo(
    () => [
      {
        label: "Web Image",
        field: "",
        component: (data) => {
          return (
            <Image
              src={data?.webImage}
              alt={"images"}
              loading="lazy"
              height={100}
              width={200}
            />
          );
        },
      },
      {
        label: "Mobile Image",
        field: "",
        component: (data) => {
          return (
            <Image
              src={data?.mobileImage}
              alt={"images"}
              loading="lazy"
              height={100}
              width={200}
            />
          );
        },
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
                toolTipText="Edit Banner"
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

  const { homeBanners } = useSelector((state) => state.homeBanner);

  useEffect(() => {
    dispatch({ type: GET_ALL_HOME_BANNER });
  }, [dispatch]);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(
      homeBanners,
      `BLGD-HomeBanner-${new Date().toJSON().slice(0, 10)}.json`
    );
  };

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Banner List" />
            }
            icon={<AddIcon />}
            toolTipText="Add Banner"
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
          />
        }
        content={<CustomTable data={homeBanners || []} columns={columns} />}
      />
      <CustomDialog
        open={isImageDelete}
        title="Delete Banner"
        content="Are you sure you want to delete this Banner"
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

export default HomeBanner;
