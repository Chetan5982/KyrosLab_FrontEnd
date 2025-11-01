"use client";

import * as Yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import FormikForm from "../../common/FormikForm";
import { storeBlogImage } from "../../../redux/blog/blog.reducer";
import "./gallaryForm.css";
import {
  CREATE_HOME_BANNER,
  EDIT_HOME_BANNER,
  UPLOAD_HOME_BANNER_IMAGE,
} from "@/redux/homeBanner/homeBanner.type";

const validation = Yup.object({
  webImage: Yup.string("choose image*").required("image is required"),
  tabletImage: Yup.string("choose image*").required("image is required"),
  mobileImage: Yup.string("choose image*").required("image is required"),
});

const HomeBannerForm = ({ setOpenDrawer, formData = null }) => {
  const dispatch = useDispatch();

  const uploadImage = (e, setFieldValue, name) => {
    const file = e.target.files[0];
    const getImageUrl = (url) => {
      setFieldValue(name, url);
    };
    dispatch({ type: UPLOAD_HOME_BANNER_IMAGE, file, getImageUrl });
  };

  const handleSubmit = (values, { resetForm }) => {
    const payload = values;
    dispatch({
      type: formData ? EDIT_HOME_BANNER : CREATE_HOME_BANNER,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    resetForm();
  };
  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                title: formData.title,
                webImage: formData.webImage,
                tabletImage: formData.tabletImage,
                mobileImage: formData.mobileImage,
              }
            : {
                title: "",
                webImage: "",
                tabletImage: "",
                mobileImage: "",
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
              }}
            >
              {formData ? "Edit Banner" : "Add Banner"}
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
                  <TextField
                    error={params.touched.title && params.errors.title}
                    helperText={params.touched.title && params.errors.title}
                    id="filled-error-helper-text"
                    label="Banner Description"
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
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid item xs={12}>
                      Image of Web view
                    </Grid>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `webImage`)
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.webImage && params.errors?.webImage}
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px dotted black",
                            height: "150px",
                            width: "100%",
                          }}
                        >
                          <img
                            src={params.values?.webImage || "/noImage.png"}
                            alt={"images"}
                            loading="lazy"
                            // height={150}
                            // width={100}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid item xs={12}>
                      Image of Tablet view
                    </Grid>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `tabletImage`)
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.tabletImage &&
                            params.errors?.tabletImage}
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px dotted black",
                            height: "150px",
                            width: "100%",
                          }}
                        >
                          <img
                            src={params.values?.tabletImage || "/noImage.png"}
                            alt={"images"}
                            loading="lazy"
                            // height={150}
                            // width={100}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid item xs={12}>
                      Image of Mobile view
                    </Grid>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `mobileImage`)
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.mobileImage &&
                            params.errors?.mobileImage}
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px dotted black",
                            height: "150px",
                            width: "100%",
                          }}
                        >
                          <img
                            src={params.values?.mobileImage || "/noImage.png"}
                            alt={"images"}
                            loading="lazy"
                            // height={150}
                            // width={100}
                            style={{ height: "100%", width: "100%" }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
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

export default HomeBannerForm;
