"use client";
import { useMemo, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CustomSwipeableDrawer from "@/components/common/Drawer/CustomSwipeableDrawer";
import EventForm from "@/components/ui-components/forms/EventForm";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import PageTableLayout from "@/components/common/PageTableLayout";
import CustomTable from "@/components/common/CustomTable/CustomTable";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";
import { DELETE_EVENT, GET_ALL_EVENT } from "@/redux/event/event.type";
import Image from "next/image";
import FullPageLoader from "@/components/common/fullpageloader";
import { useSession } from "next-auth/react";
import { storeEventImages } from "@/redux/event/event.reducer";
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
            <EventForm
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

const Events = () => {
  const dispatch = useDispatch();
  const [isEventDelete, setIsEventDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsEventDelete(id);
  };

  const handleCloseDialog = () => {
    setIsEventDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_EVENT, payload: { id: isEventDelete } });
    setIsEventDelete(false);
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_EVENT });
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { label: "Title", field: "title", component: null },
      { label: "Description", field: "description", component: null },
      {
        label: "Image",
        field: "",
        component: (data) => {
          return (
            <Image
              src={data?.image}
              alt={"images"}
              loading="lazy"
              height={100}
              width={200}
            />
          );
        },
      },
      { label: "From Date", field: "fromDate", component: null },
      { label: "To Date", field: "toDate", component: null },
      // { label: "Oder", field: "oder", component: null },
      { label: "Location", field: "location", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Event"
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

  const { events } = useSelector((state) => state.event);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }
  const exportData = () => {
    downloadJSON(
      events,
      `BLGD-Events-${new Date().toJSON().slice(0, 10)}.json`
    );
  };

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Event List" />
            }
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
            icon={<AddIcon />}
            toolTipText="Add Event"
          />
        }
        content={<CustomTable data={events || []} columns={columns} />}
      />
      <CustomDialog
        open={isEventDelete}
        title="Remove Event"
        content="Are you sure you want to remove this event"
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

export default Events;
// Events.getLayout = function getLayout(page) {
//   return <FullLayout>{page}</FullLayout>;
// };
