"use client";

import * as Yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FormikForm from "../../common/FormikForm";
import { storeBlogImage } from "../../../redux/blog/blog.reducer";
import { FieldArray } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import "./gallaryForm.css";
import {
  CREATE_GALLARY,
  EDIT_GALLARY,
  UPLOAD_GALLARY_IMAGE,
} from "@/redux/gallary/gallary.type";
import Image from "next/image";
import DatePickerComponent from "@/components/common/yearPicker";
import dayjs from "dayjs";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const validation = Yup.object({
  title: Yup.string("Enter title").required("title is required"),
  year: Yup.string().required("year is required"),
  gallary: Yup.array().of(
    Yup.object().shape({
      image: Yup.string("choose image*").required("image is required"),
    })
  ),
});

const GallaryForm = ({ setOpenDrawer, formData = null }) => {
  const dispatch = useDispatch();
  const {
    coverImage = false,
    images = false,
    videos = false,
  } = useSelector((state) => state.gallary);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadImage = (e, setFieldValue, name, value = null) => {
    const file = e.target.files;
    if (file.length) {
      if (name === "coverImage") {
        const getImageUrl = (url) => {
          setFieldValue(name, url[0]);
        };
        dispatch({ type: UPLOAD_GALLARY_IMAGE, file, getImageUrl, key: name });
      } else {
        const getImageUrl = (url) => {
          setFieldValue(name, [...value, ...url]);
        };
        dispatch({ type: UPLOAD_GALLARY_IMAGE, file, getImageUrl, key: name });
      }
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch({
      type: formData ? EDIT_GALLARY : CREATE_GALLARY,
      payload: {
        year: values.year.slice(0, 4),
        title: values.title,
        images: [values.coverImage, ...values.images],
        videos: values.videos,
      },
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    resetForm();
  };

  return (
    <div>
      <FormikForm
        initialValues={{
          title: formData?.title ?? "",
          year: formData?.year
            ? `${formData?.year}-01-01`
            : `${new Date().getFullYear()}-01-01`,
          coverImage: formData?.coverImage ?? "",
          images: formData?.images ?? [],
          videos: formData?.videos ?? [],
        }}
        validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {(params) => (
          <>
            <DialogTitle
              sx={{
                margin: "0px",
                fontWeight: "500",
                color: "rgb(18, 25, 38)",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "1.6",
                padding: "16px 24px",
                flex: "0 0 auto",
                fontSize: "1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{formData ? "Edit Gallery" : "Add Gallery"}</span>
              <CloseIcon onClick={() => setOpenDrawer(false)} />
            </DialogTitle>

            <DialogContent
              sx={{ flex: "1 1 auto", overflowY: "auto", padding: "20px 24px" }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexFlow: "row wrap",
                  width: "calc(100% + 24px)",
                  marginLeft: "-24px",
                  marginTop: "2px",
                  "& .guZdik": {
                    width: "100%",
                    minWidth: "unset",
                    maxWidth: "unset",
                  },
                }}
              >
                <Grid item xs={12}>
                  <div>
                    <Paper style={{ padding: "5px", margin: "20px 0" }}>
                      <Grid container spacing={2} sx={{ alignItems: "center" }}>
                        <Grid item xs={12} style={{ paddingTop: "8px" }}>
                          Cover Image
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        ></Grid>
                        <Grid item xs={6}>
                          <input
                            type="file"
                            onChange={(e) =>
                              uploadImage(e, params.setFieldValue, `coverImage`)
                            }
                            accept="image/*"
                          />
                          <Box
                            sx={{
                              color: "#FA896B",
                              fontSize: "0.75rem",
                            }}
                          >
                            {params.touched.coverImage &&
                              params.errors.coverImage}
                          </Box>
                        </Grid>

                        <Grid item xs={6}>
                          <Box
                            sx={{
                              border: "1px dotted black",
                              height: "150px",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {coverImage ? (
                              <CircularProgress size={40} />
                            ) : (
                              <img
                                src={params.values.coverImage || "/noImage.png"}
                                alt={"images"}
                                loading="lazy"
                                // height={150}
                                // width={100}
                                style={{ height: "100%", width: "100%" }}
                              />
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            error={params.touched.title && params.errors.title}
                            helperText={
                              params.touched.title && params.errors.title
                            }
                            id="filled-error-helper-text"
                            label="Title"
                            variant="outlined"
                            name="title"
                            color="primary"
                            value={params.values.title}
                            onChange={params.handleChange}
                            // onBlur={params.handleBlur}
                            fullWidth
                            type="text"
                          />
                        </Grid>

                        <Grid item xs={12} style={{ paddingTop: "8px" }}>
                          <DatePickerComponent
                            label="year"
                            onChange={(e) => {
                              params.setFieldValue(
                                "year",
                                e.format("YYYY-MM-DD")
                              );
                            }}
                            name="year"
                            openTo="year"
                            views={["year"]}
                            value={dayjs(params?.values?.year, "YYYY-MM-DD")}
                            isError={params.touched.year && params.errors.year}
                            helperText={
                              params.touched.year && params.errors.year
                            }
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                    <Paper style={{ padding: "5px", margin: "20px 0" }}>
                      <Grid container spacing={2} sx={{ alignItems: "center" }}>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            // justifyContent: "space-between",
                          }}
                        >
                          Event Images
                        </Grid>
                        <Grid item xs={6} style={{ position: "relative" }}>
                          <input
                            multiple
                            type="file"
                            onChange={(e) =>
                              uploadImage(
                                e,
                                params.setFieldValue,
                                `images`,
                                params.values.images
                              )
                            }
                            accept="image/*"
                          />
                          <Box
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "32%",
                              width: "41%",
                              backgroundColor: "white",
                              height: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {params.values.images.length} Image selected
                          </Box>
                          <Box
                            sx={{
                              color: "#FA896B",
                              fontSize: "0.75rem",
                            }}
                          >
                            {params.touched.images && params.errors.images}
                          </Box>
                        </Grid>

                        <Grid
                          item
                          xs={6}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <PreviewDialog
                            name={"images"}
                            setFieldValue={params.setFieldValue}
                            data={params.values.images}
                            buttonElement={
                              <Button
                                disabled={
                                  images || !params.values.images.length
                                }
                                variant="outlined"
                                // onClick={handleClickOpen}
                                startIcon={
                                  images && <CircularProgress size={15} />
                                }
                              >
                                View Images
                              </Button>
                            }
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                    <Paper style={{ padding: "5px", margin: "20px 0" }}>
                      <Grid container spacing={2} sx={{ alignItems: "center" }}>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            display: "flex",
                            // justifyContent: "space-between",
                          }}
                        >
                          Event Videos
                        </Grid>
                        <Grid item xs={6} style={{ position: "relative" }}>
                          <input
                            multiple
                            type="file"
                            onChange={(e) =>
                              uploadImage(
                                e,
                                params.setFieldValue,
                                `videos`,
                                params.values.videos
                              )
                            }
                            accept="video/mp4,video/x-m4v,video/*"
                          />
                          <Box
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "32%",
                              width: "41%",
                              backgroundColor: "white",
                              height: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {params.values.videos.length} Video selected
                          </Box>
                          <Box
                            sx={{
                              color: "#FA896B",
                              fontSize: "0.75rem",
                            }}
                          >
                            {params.touched.videos && params.errors.videos}
                          </Box>
                        </Grid>

                        <Grid
                          item
                          xs={6}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <PreviewDialog
                            data={params.values.videos}
                            name={"videos"}
                            setFieldValue={params.setFieldValue}
                            buttonElement={
                              <Button
                                disabled={
                                  videos || !params.values.videos.length
                                }
                                variant="outlined"
                                startIcon={
                                  videos && <CircularProgress size={15} />
                                }
                              >
                                View Videos
                              </Button>
                            }
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  dispatch(storeBlogImage(""));
                  setOpenDrawer(false);
                  params.resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">{formData ? "Update" : "create"}</Button>
            </DialogActions>
          </>
        )}
      </FormikForm>
    </div>
  );
};

export default GallaryForm;

const PreviewDialog = ({ data = [], buttonElement, setFieldValue, name }) => {
  const [open, setOpen] = React.useState(false);
  const [isImageDelete, setIsImageDelete] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDialog = (id) => {
    setIsImageDelete(id);
  };
  const handleCloseDialog = () => {
    setIsImageDelete("");
  };

  const handleDialogAction = (images, setFieldValue) => {
    const filterImages = images.filter((img, index) => index !== isImageDelete);
    setFieldValue(name, filterImages);
    setIsImageDelete("");
  };
  return (
    <>
      <div onClick={handleClickOpen}>{buttonElement}</div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Preview
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <Box padding="20px">
          <ImageList
            // sx={{ width: 500, height: 450 }}
            cols={5}
            rowHeight={300}
            gap="10px"
          >
            {data.map((img, index) =>
              name === "images" ? (
                <ImageListItem key={img}>
                  <img
                    src={`${img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={img + "alt"}
                    loading="lazy"
                  />

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleOpenDialog(index)}
                    style={{ marginTop: "5px" }}
                  >
                    Delete
                  </Button>
                  {/* <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton> */}
                </ImageListItem>
              ) : (
                <ImageListItem key={img}>
                  <video src={img} key={img} controls />
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleOpenDialog(index)}
                    style={{ marginTop: "5px" }}
                  >
                    Delete
                  </Button>
                </ImageListItem>
              )
            )}
          </ImageList>
        </Box>
      </Dialog>

      <CustomDialog
        open={!!`${isImageDelete}`}
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
            onClick: () => handleDialogAction(data, setFieldValue),
          },
        ]}
        onClose={handleCloseDialog}
      />
    </>
  );
};
