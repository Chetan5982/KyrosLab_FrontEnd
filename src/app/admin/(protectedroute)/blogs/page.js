"use client";
import { useMemo, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import CustomSwipeableDrawer from "@/components/common/Drawer/CustomSwipeableDrawer";
import BlogForm from "@/components/ui-components/forms/BlogForm";
import PageTableLayout from "@/components/common/PageTableLayout";
import CustomTable from "@/components/common/CustomTable/CustomTable";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";
import { DELETE_BLOG, GET_ALL_BLOG } from "@/redux/blog/blog.type";
import { storeBlogImage } from "@/redux/blog/blog.reducer";
import Image from "next/image";
import { useSession } from "next-auth/react";
import FullPageLoader from "@/components/common/fullpageloader";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { blogNewsUrl } from "@/constants/constants";
import { IconDatabaseExport } from "@tabler/icons-react";
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
            <BlogForm setOpenDrawer={setOpenDrawer} formData={data} />
          ) : null
        }
      </CustomSwipeableDrawer>
    </>
  );
}

const Blogs = () => {
  debugger;
  const dispatch = useDispatch();
  const router = useRouter();

  const [isBlogDelete, setIsBlogDelete] = useState(false);

  const handleOpenDialog = (id) => {
    setIsBlogDelete(id);
  };
  const handleCloseDialog = () => {
    setIsBlogDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_BLOG, payload: { id: isBlogDelete } });
    setIsBlogDelete(false);
  };

  const columns = useMemo(
    () => [
      { label: "Main Title", field: "mainTitle", component: null },
      // { label: "Main Description", field: "mainDescription", component: null },
      // { label: "Meta Title", field: "metaTitle", component: null },
      // { label: "Meta Description", field: "metaDescription", component: null },
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
      // { label: "Date", field: "date", component: null },
      { label: "Blog Type", field: "blogType", component: null },
      { label: "Visibility", field: "visibility", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params) => {
          return (
            <Box display="flex" alignItems="center">
              <Link
                target="_blank"
                href={`${blogNewsUrl}/${params.redirectUrl}`}
              >
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </Link>
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Blog"
                onClick={() => {
                  dispatch(storeBlogImage(params.image));
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

  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch({ type: GET_ALL_BLOG });
  }, [dispatch]);

  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <FullPageLoader open={true} />;
  }

  const exportData = () => {
    downloadJSON(blogs, `BLGD-blogs-${new Date().toJSON().slice(0, 10)}.json`);
  };

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Blog List" />
            }
            exportIcon={<FileDownloadIcon />}
            exportToolTipText="Export"
            exportData={exportData}
            icon={<AddIcon />}
            toolTipText="Add Blog"
          />
        }
        content={<CustomTable data={blogs?.allBlogs || []} columns={columns} />}
      />
      <CustomDialog
        open={isBlogDelete}
        title="Delete Blog"
        content="Are you sure you want to delete this blog"
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

export default Blogs;
