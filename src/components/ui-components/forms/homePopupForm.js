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
} from "@mui/material";
import FormikForm from "../../common/FormikForm";
import { storeBlogImage } from "../../../redux/blog/blog.reducer";
import "./gallaryForm.css";
import {
  CREATE_HOME_BANNER,
  CREATE_POP_UP,
  EDIT_HOME_BANNER,
  UPLOAD_HOME_BANNER_IMAGE,
} from "@/redux/homeBanner/homeBanner.type";

const validation = Yup.object({
  image: Yup.string("choose image*").required("image is required"),
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
      type: CREATE_POP_UP,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    resetForm();
  };
  return (
    <div>
      <FormikForm
        initialValues={{ image: formData?.image ?? "" }}
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
              {formData ? "Edit Popup" : "Add Popup"}
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
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid item xs={12}>
                      Image of Popup
                    </Grid>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `image`)
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.image && params.errors?.image}
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
                            src={params.values?.image || "/noImage.png"}
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
