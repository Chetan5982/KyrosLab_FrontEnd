"use client";

import * as Yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "./blogForm.css";
import dynamic from "next/dynamic";
import {
  EDIT_GALLARY,
  UPLOAD_GALLARY_IMAGE,
} from "@/redux/gallary/gallary.type";
import Image from "next/image";

const validation = Yup.object({
  title: Yup.string().required("Please enter Title"),
  image: Yup.string().required("Please select Image"),
});

const EditImageForm = ({ setOpenDrawer, openDrawer, formData = null }) => {
  const dispatch = useDispatch();
  const { isFileUploadLoading, blogsImage } = useSelector(
    (state) => state.blogs
  );

  const uploadImage = (e, setFieldValue, name) => {
    const file = e.target.files[0];
    const getImageUrl = (url) => {
      setFieldValue(name, url);
    };
    dispatch({ type: UPLOAD_GALLARY_IMAGE, file, getImageUrl });
  };

  const handleSubmit = (values, { resetForm }) => {
    const payload = values;
    dispatch({
      type: EDIT_GALLARY,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    resetForm();
  };

  return (
    <div>
      <FormikForm
        initialValues={{ title: formData.title, image: formData.image }}
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
              Edit Image
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
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
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
                            uploadImage(e, params.setFieldValue, "image")
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched.image && params.errors.image}
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
                          <Image
                            src={params.values.image}
                            alt={"images"}
                            loading="lazy"
                            height={150}
                            width={100}
                          />
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
                          name={`title`}
                          color="primary"
                          value={params.values.title}
                          onChange={params.handleChange}
                          fullWidth
                          type="text"
                        />
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
              <Button type="submit" disabled={isFileUploadLoading}>
                {formData ? "Update" : "create"}
              </Button>
            </DialogActions>
          </>
        )}
      </FormikForm>
    </div>
  );
};

export default EditImageForm;
