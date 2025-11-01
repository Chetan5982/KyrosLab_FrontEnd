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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
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
import {
  CREATE_REDIRECT,
  UPDATE_REDIRECT,
} from "@/redux/redirect/redirect.type";

const validation = Yup.object({
  source: Yup.string()
    .required()
    .test("uniq", "", function () {
      if (this.parent?.destination === this.parent?.source) {
        return this.createError({
          message: "Don't allow to source and destination are same",
        });
      }
      return true;
    }),
  destination: Yup.string()
    .required()
    .test("uniq", "", function () {
      if (this.parent?.destination === this.parent?.source) {
        return this.createError({
          message: "Don't allow to destination and source are same",
        });
      }
      return true;
    }),
  permanent: Yup.string().required(),
});

const RedirectForm = ({ setOpenDrawer, formData = null }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const payload = { ...values, permanent: values.permanent === "301" };
    dispatch({
      type: formData ? UPDATE_REDIRECT : CREATE_REDIRECT,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    resetForm();
  };
  return (
    <div>
      <FormikForm
        initialValues={{
          source: formData?.source ?? "",
          destination: formData?.destination ?? "",
          permanent: formData?.permanent
            ? formData.permanent
              ? "301"
              : "302"
            : "301",
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
              }}
            >
              {formData ? "Edit Redirect" : "Add Redirect"}
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
                <Grid item xs={2}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={`${params.values.permanent}`}
                      label="Status"
                      name="permanent"
                      onChange={params.handleChange}
                    >
                      {["301", "302"].map((i) => (
                        <MenuItem key={i} value={i}>
                          {i}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    error={params.touched.source && params.errors.source}
                    helperText={params.touched.source && params.errors.source}
                    id="filled-error-helper-text"
                    label="Source"
                    variant="outlined"
                    name="source"
                    color="primary"
                    value={params.values.source}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    error={
                      params.touched.destination && params.errors.destination
                    }
                    helperText={
                      params.touched.destination && params.errors.destination
                    }
                    id="filled-error-helper-text"
                    label="Destination"
                    variant="outlined"
                    name="destination"
                    color="primary"
                    value={params.values.destination}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  //   dispatch(storeBlogImage(""));
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

export default RedirectForm;
