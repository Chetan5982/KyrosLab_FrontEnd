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
import UsersForm from "@/components/ui-components/forms/UsersForm";
import { DELETE_USERS, GET_ALL_USERS } from "@/redux/users/users.type";
import { useSession } from "next-auth/react";
import FullPageLoader from "@/components/common/fullpageloader";
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
            <UsersForm
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

const Users = () => {
  const dispatch = useDispatch();
  const [isUserDelete, setIsUserDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsUserDelete(id);
  };

  const handleCloseDialog = () => {
    setIsUserDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_USERS, payload: { id: isUserDelete } });
    setIsUserDelete(false);
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_USERS });
  }, [dispatch]);

  const columns = useMemo(
    () => [
      { label: "username", field: "username", component: null },
      { label: "role", field: "role", component: null },
      { label: "email", field: "email", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit User"
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
  const { users } = useSelector((state) => state.users);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(users, `BLGD-Users-${new Date().toJSON().slice(0, 10)}.json`);
  };
  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="User List" />
            }
            icon={<AddIcon />}
            toolTipText="Add User"
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
          />
        }
        content={<CustomTable data={users || []} columns={columns} />}
      />
      <CustomDialog
        open={isUserDelete}
        title="Remove User"
        content="Are you sure you want to remove this User"
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

export default Users;
