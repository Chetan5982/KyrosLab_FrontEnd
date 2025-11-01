// @ts-nocheck
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  ImageList,
  ImageListItem,
  TextField,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import FormikForm from "../../common/FormikForm";
import { clearBlogImage } from "../../../redux/blog/blog.reducer";
import {
  CREATE_EVENT,
  EDIT_EVENT,
  UPLOAD_EVENT_IMAGE,
} from "../../../redux/event/event.type";
import Image from "next/image";
import { clearEventImages } from "@/redux/event/event.reducer";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

const validation = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  fromDate: Yup.string().required(),
  toDate: Yup.string().required(),
  location: Yup.string().required(),
});

const EventForm = ({ setOpenDrawer, openDrawer, formData = null }) => {
  const dispatch = useDispatch();
  const { isFileUploadLoading, eventImages } = useSelector(
    (state) => state.event
  );

  useEffect(() => {
    return () => {
      dispatch(clearEventImages());
    };
  }, [dispatch]);

  const uploadImage = (files) => {
    dispatch({ type: UPLOAD_EVENT_IMAGE, files });
  };

  const handleSubmit = (values, { resetForm }) => {
    const payload = { ...values, image: eventImages };
    dispatch({
      type: formData ? EDIT_EVENT : CREATE_EVENT,
      payload,
      id: formData?._id || "",
    });
    resetForm();
    dispatch(clearEventImages());
    setOpenDrawer(false);
  };

  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                title: formData.title,
                description: formData.description,
                image: formData.image,
                fromDate: formData.fromDate,
                toDate: formData.toDate,
                location: formData.location,
              }
            : {
                title: "",
                description: "",
                image: "",
                fromDate: "",
                toDate: "",
                location: "",
              }
        }
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
              <span>{formData ? "Edit Event" : "Add Event"}</span>
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
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    error={params.touched.title && params.errors.title}
                    helperText={params.touched.title && params.errors.title}
                    id="filled-error-helper-text"
                    label="Title"
                    variant="outlined"
                    name="title"
                    color="primary"
                    value={params.values.title}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={
                      params.touched.description && params.errors.description
                    }
                    helperText={
                      params.touched.description && params.errors.description
                    }
                    id="filled-error-helper-text"
                    label="Description"
                    variant="outlined"
                    name="description"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.description}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    error={params.errors.description}
                    id="filled-error-helper-text"
                    label="Product Description"
                    variant="outlined"
                    name="description"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.description}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <div>From date</div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.touched.fromDate && params.errors.fromDate}
                    helperText={
                      params.touched.fromDate && params.errors.fromDate
                    }
                    id="filled-error-helper-text"
                    label=""
                    variant="outlined"
                    name="fromDate"
                    color="primary"
                    value={params.values.fromDate}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                    type="date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div>To date</div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.touched.toDate && params.errors.toDate}
                    helperText={params.touched.toDate && params.errors.toDate}
                    id="filled-error-helper-text"
                    label=""
                    variant="outlined"
                    name="toDate"
                    color="primary"
                    value={params.values.toDate}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                    type="date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.touched.location && params.errors.location}
                    helperText={
                      params.touched.location && params.errors.location
                    }
                    id="filled-error-helper-text"
                    label="Location"
                    variant="outlined"
                    name="location"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.location}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploader
                    disabled={isFileUploadLoading}
                    multiple={true}
                    handleChange={
                      (file) => {
                        uploadImage(file);
                      }
                      // params.setFieldValue("file", file)
                    }
                    name="file"
                    types={["JPEG", "PNG"]}
                  />
                </Grid>

                <Grid item xs={12}>
                  {isFileUploadLoading ? (
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      height={300}
                      width="100%"
                    >
                      <CircularProgress />
                    </Box>
                  ) : (
                    <ImageList
                      sx={{
                        width: "100%",
                      }}
                    >
                      {eventImages?.length ? (
                        <ImageListItem key={eventImages}>
                          <Image
                            src={`${eventImages}?w=248&fit=crop&auto=format`}
                            srcSet={`${eventImages}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={"images"}
                            loading="lazy"
                            width={248}
                            height={248}
                          />
                        </ImageListItem>
                      ) : (
                        <div style={{ color: "red", flexGrow: 1 }}>
                          * Please upload Image
                        </div>
                      )}
                    </ImageList>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpenDrawer(false);
                  dispatch(clearEventImages());
                  params.resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isFileUploadLoading}>
                {formData ? "update" : "create"}
              </Button>
            </DialogActions>
          </>
        )}
      </FormikForm>
    </div>
  );
};

export default EventForm;
