"use client";

import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  TextField,
  createFilterOptions,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import FormikForm from "../../common/FormikForm";
import {
  UPLOAD_BLOG_IMAGE,
  CREATE_BLOG,
  EDIT_BLOG,
  UPLOAD_BLOG_IMAGE_WITH_URL,
  CREATE_CATEGORY,
  GET_ALL_BLOG,
  GET_CATEGORY,
} from "../../../redux/blog/blog.type";
import {
  deleteBlogImage,
  storeBlogImage,
} from "../../../redux/blog/blog.reducer";
import Dropdown from "../../common/Dropdown";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "./blogForm.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import "./gallaryForm.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const blogTypes = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Main",
    value: "main",
  },
  {
    label: "Banner",
    value: "banner",
  },
];

const visibility = [
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Public",
    value: "public",
  },
];

const validation = Yup.object({
  mainTitle: Yup.string().required("Please enter Title"),
  mainDescription: Yup.string().required("Please enter main description"),
  description: Yup.string().required("Please enter description"),
  date: Yup.string().required("Please select date."),
  redirectUrl: Yup.string().required("Please enter the Slug (URL)"),
});

const quillModules = {
  toolbar: [
    [{ font: ["PrumoDeck", "IBMPlexSans"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["image", "link"],
    [
      { align: [] },
      {
        color: [
          "#000000",
          "#024638",
          "#FFFFFF",
          "#C0C0C0",
          "#808080",
          "#FF0000",
          "#800000",
          "#FFFF00",
          "#808000",
          "#00FF00",
          "#008000",
          "#00FFFF",
          "#008080",
          "#0000FF",
          "#000080",
          "#FF00FF",
          "#800080",
        ],
      },
      { background: [] },
    ], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];
const filter = createFilterOptions();

const BlogForm = ({ setOpenDrawer, openDrawer, formData = null }) => {
  const dispatch = useDispatch();
  const [categoryValue, setCategoryValue] = useState(null);
  const [tagValues, setTagValues] = useState([]);

  const { isFileUploadLoading, blogsImage, category } = useSelector(
    (state) => state.blogs
  );
  const [modules, setModules] = useState(quillModules);
  const [isImageUploading, setIsImageUploading] = useState({
    openGraphImage: false,
    twitterCardImage: false,
    blogImage: false,
  });

  useEffect(() => {
    dispatch({ type: GET_CATEGORY });
  }, [dispatch]);

  useEffect(() => {
    if (formData) {
      setCategoryValue({ name: formData.category });
      setTagValues(formData.tags || []);
      console.log("formData", formData.tags);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (window !== undefined) {
        const NBlotFormatter = await import("quill-blot-formatter");
        const BlotFormatter = NBlotFormatter.default;
        const NQuill = await import("react-quill");
        const Quill = NQuill.default.Quill;
        const Font = Quill.import("formats/font");
        Font.whitelist = ["PrumoDeck", "IBMPlexSans"];
        Quill.register(Font, true);
        // Quill.register("modules/blotFormatter", BlotFormatter);
        // const parchment = Quill.import("parchment");
        // Quill.register(parchment, true);
        setModules((pre) => ({
          ...pre,
          // blotFormatter: {}
        }));
      }
    })();
  }, []);

  useEffect(() => {
    return () => {
      dispatch(storeBlogImage(""));
    };
  }, [dispatch]);

  // const uploadImage = (files) => {
  //   dispatch({ type: UPLOAD_BLOG_IMAGE, files });
  // };

  const uploadImage = (e, setFieldValue, name) => {
    const file = e.target.files[0];
    const getImageUrl = (url) => {
      setFieldValue(name, url);
      setIsImageUploading({
        openGraphImage: false,
        twitterCardImage: false,
        blogImage: false,
      });
    };
    if (name === "openGraphImage") {
      setIsImageUploading({ ...isImageUploading, openGraphImage: true });
    } else if (name === "twitterImage") {
      setIsImageUploading({ ...isImageUploading, twitterCardImage: true });
    } else if (name === "image") {
      setIsImageUploading({ ...isImageUploading, blogImage: true });
    }

    dispatch({ type: UPLOAD_BLOG_IMAGE_WITH_URL, file, getImageUrl });
  };

  const handleSubmit = (values, { resetForm }) => {
    const payload = {
      ...values,
      category: categoryValue.name,
      tags: tagValues,
    };

    dispatch({
      type: formData ? EDIT_BLOG : CREATE_BLOG,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    dispatch(storeBlogImage(""));
    resetForm();
  };

  const handleDeleteImage = () => {
    dispatch(deleteBlogImage());
  };

  const handleAddCategory = (category) => {
    const payload = { name: category };
    dispatch({ type: CREATE_CATEGORY, payload });
  };

  const handleChangeDescription = (
    content,
    delta,
    source,
    editor,
    setFieldValue
  ) => {
    setFieldValue("description", editor.getHTML());
  };

  const handleChangeTitle = (content, delta, source, editor, setFieldValue) => {
    setFieldValue("title", editor.getHTML());
  };

  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                mainTitle: formData.mainTitle,
                mainDescription: formData.mainDescription,
                metaTitle: formData.metaTitle,
                metaDescription: formData.metaDescription,
                redirectUrl: formData.redirectUrl,
                tags: formData.tags,
                metaRobots: formData.metaRobots,
                canonical: formData.canonical,
                focusKeyword: formData.focusKeyword,
                schema: formData.schema,
                authorName: formData.authorName,
                date: formData.date,
                description: formData.description,
                blogType: formData.blogType,
                visibility: formData.visibility,
                image: formData.image,
                imageAltText: formData.imageAltText,
                openGraphImage: formData.openGraphImage,
                openGraphTitle: formData.openGraphTitle,
                openGraphDescription: formData.openGraphDescription,

                twitterImage: formData.twitterImage,
                twitterTitle: formData.twitterTitle,
                twitterDescription: formData.twitterDescription,
              }
            : {
                mainTitle: "",
                mainDescription: "",
                metaTitle: "",
                metaDescription: "",
                redirectUrl: "",
                tags: [],
                metaRobots: "",
                canonical: "",
                focusKeyword: "",
                schema: "",
                authorName: "",
                date: "",
                description: "",
                blogType: "normal",
                visibility: "draft",
                image: "",
                imageAltText: "",

                openGraphImage: "",
                openGraphTitle: "",
                openGraphDescription: "",

                twitterImage: "",
                twitterTitle: "",
                twitterDescription: "",
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
                alignItems:"center"
              }}
            >
              <span>{formData ? "Edit Blog" : "Add Blog"}</span>
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
                    error={params.touched.mainTitle && params.errors.mainTitle}
                    helperText={
                      params.touched.mainTitle && params.errors.mainTitle
                    }
                    id="filled-error-helper-text"
                    label="Main Title"
                    variant="outlined"
                    name="mainTitle"
                    color="primary"
                    value={params.values.mainTitle}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={
                      params.touched.mainDescription &&
                      params.errors.mainDescription
                    }
                    helperText={
                      params.touched.mainDescription &&
                      params.errors.mainDescription
                    }
                    id="filled-error-helper-text"
                    label="Main Description"
                    variant="outlined"
                    name="mainDescription"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.mainDescription}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    value={categoryValue}
                    onChange={(event, newValue) => {
                      if (typeof newValue === "string") {
                        setCategoryValue({
                          name: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        handleAddCategory(newValue.inputValue);
                        setCategoryValue({
                          name: newValue.inputValue,
                        });
                      } else {
                        setCategoryValue(newValue);
                      }
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option.name
                      );
                      if (inputValue !== "" && !isExisting) {
                        filtered.push({
                          inputValue,
                          name: `Add "${inputValue}"`,
                        });
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="auto-complete"
                    options={category}
                    getOptionLabel={(option) => {
                      // Value selected with enter, right from the input
                      if (typeof option === "string") {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.name;
                    }}
                    renderOption={(props, option) => (
                      <li {...props}>{option.name}</li>
                    )}
                    freeSolo
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Category" />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    value={tagValues}
                    onChange={(event, newValue) => {
                      if (typeof newValue === "string") {
                        setCategoryValue({
                          name: newValue,
                        });
                      } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setTagValues({
                          name: newValue.inputValue,
                        });
                      } else {
                        setTagValues(newValue);
                      }
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option.name
                      );
                      if (inputValue !== "" && !isExisting) {
                        filtered.push({
                          inputValue,
                          name: `Add "${inputValue}"`,
                        });
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="auto-complete-tags"
                    options={[]}
                    getOptionLabel={(option) => {
                      // Value selected with enter, right from the input
                      if (typeof option === "string") {
                        return option;
                      }
                      // Add "xxx" option created dynamically
                      if (option.inputValue) {
                        return option.inputValue;
                      }
                      // Regular option
                      return option.name;
                    }}
                    renderOption={(props, option) => (
                      <li {...props}>{option.name}</li>
                    )}
                    multiple
                    freeSolo
                    fullWidth
                    renderInput={(params) => (
                      <TextField {...params} label="Tags" />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Meta Title"
                    variant="outlined"
                    name="metaTitle"
                    color="primary"
                    value={params.values.metaTitle}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Meta Description"
                    variant="outlined"
                    name="metaDescription"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.metaDescription}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={
                      params.touched.redirectUrl && params.errors.redirectUrl
                    }
                    helperText={
                      params.touched.redirectUrl && params.errors.redirectUrl
                    }
                    id="filled-error-helper-text"
                    label="Slug (URL)"
                    variant="outlined"
                    name="redirectUrl"
                    color="primary"
                    value={params.values.redirectUrl}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>

                {/* <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Tags"
                    variant="outlined"
                    name="tags"
                    color="primary"
                    value={params.values.tags}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid> */}

                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Meta Robots"
                    variant="outlined"
                    name="metaRobots"
                    color="primary"
                    value={params.values.metaRobots}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Canonical"
                    variant="outlined"
                    name="canonical"
                    color="primary"
                    value={params.values.canonical}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Focus Keyword"
                    variant="outlined"
                    name="focusKeyword"
                    color="primary"
                    value={params.values.focusKeyword}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Schema"
                    variant="outlined"
                    name="schema"
                    color="primary"
                    value={params.values.schema}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-error-helper-text"
                    label="Author Name"
                    variant="outlined"
                    name="authorName"
                    color="primary"
                    value={params.values.authorName}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={params.touched.date && params.errors.date}
                    helperText={params.touched.date && params.errors.date}
                    id="filled-error-helper-text"
                    label=""
                    variant="outlined"
                    name="date"
                    color="primary"
                    value={params.values.date}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                    type="date"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ReactQuill
                    theme="snow"
                    placeholder="Enter description"
                    className={
                      params.touched.description && params.errors.description
                        ? "ql-error"
                        : null
                    }
                    style={{
                      height: "100%",
                      maxHeight: "500px",
                    }}
                    name="description"
                    modules={modules}
                    formats={formats}
                    id="editor-container"
                    value={params.values.description}
                    onChange={(content, delta, source, editor) => {
                      handleChangeDescription(
                        content,
                        delta,
                        source,
                        editor,
                        params.setFieldValue
                      );
                    }}
                  />
                </Grid>

                <Grid item xs={12} style={{ marginTop: "70px" }}>
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        Open Graph
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() =>
                            params.setFieldValue("openGraphImage", "")
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(
                              e,
                              params.setFieldValue,
                              `openGraphImage`
                            )
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.openGraphImage &&
                            params.errors?.openGraphImage}
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
                          {isImageUploading?.openGraphImage ? (
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              height="150px"
                              width="100%"
                            >
                              <CircularProgress />
                            </Box>
                          ) : (
                            <img
                              src={
                                params.values?.openGraphImage || "/noImage.png"
                              }
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
                          id="filled-error-helper-text"
                          label="Open Graph Title"
                          variant="outlined"
                          name="openGraphTitle"
                          color="primary"
                          value={params.values.openGraphTitle}
                          onChange={params.handleChange}
                          onBlur={params.handleBlur}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="filled-error-helper-text"
                          label="Open Graph Description"
                          variant="outlined"
                          name="openGraphDescription"
                          color="primary"
                          value={params.values.openGraphDescription}
                          onChange={params.handleChange}
                          onBlur={params.handleBlur}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        Twitter Card
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() =>
                            params.setFieldValue("twitterImage", "")
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `twitterImage`)
                          }
                          accept="image/*"
                        />
                        <Box
                          sx={{
                            color: "#FA896B",
                            fontSize: "0.75rem",
                          }}
                        >
                          {params.touched?.twitterImage &&
                            params.errors?.twitterImage}
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
                          {isImageUploading?.twitterCardImage ? (
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              height="150px"
                              width="100%"
                            >
                              <CircularProgress />
                            </Box>
                          ) : (
                            <img
                              src={
                                params.values?.twitterImage || "/noImage.png"
                              }
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
                          id="filled-error-helper-text"
                          label="Twitter Title"
                          variant="outlined"
                          name="twitterTitle"
                          color="primary"
                          value={params.values.twitterTitle}
                          onChange={params.handleChange}
                          onBlur={params.handleBlur}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="filled-error-helper-text"
                          label="Twitter Description"
                          variant="outlined"
                          name="twitterDescription"
                          color="primary"
                          value={params.values.twitterDescription}
                          onChange={params.handleChange}
                          onBlur={params.handleBlur}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Dropdown
                    error={params.touched.blogType && params.errors.blogType}
                    helperText={
                      params.touched.blogType && params.errors.blogType
                    }
                    name="blogType"
                    label="blogType"
                    options={blogTypes || []}
                    value={params.values.blogType}
                    onChange={params.handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Dropdown
                    error={
                      params.touched.visibility && params.errors.visibility
                    }
                    helperText={
                      params.touched.visibility && params.errors.visibility
                    }
                    name="visibility"
                    label="Visibility"
                    options={visibility || []}
                    value={params.values.visibility}
                    onChange={params.handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Paper style={{ padding: "5px", margin: "20px 0" }}>
                    <Grid container spacing={2} sx={{ alignItems: "center" }}>
                      <Grid item xs={6}>
                        Blog Image
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() => params.setFieldValue("image", "")}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>

                      <Grid item xs={6}>
                        <input
                          type="file"
                          onChange={(e) =>
                            uploadImage(e, params.setFieldValue, `image`)
                          }
                          accept="image/*"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <Box
                          sx={{
                            border: "1px dotted black",
                            height: "150px",
                            width: "100%",
                          }}
                        >
                          {isImageUploading?.blogImage ? (
                            <Box
                              display="flex"
                              justifyContent="center"
                              alignItems="center"
                              height="150px"
                              width="100%"
                            >
                              <CircularProgress />
                            </Box>
                          ) : (
                            <img
                              src={params.values?.image || "/noImage.png"}
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
                          id="filled-error-helper-text"
                          label=" Image Alt Text"
                          variant="outlined"
                          name="imageAltText"
                          color="primary"
                          value={params.values.imageAltText}
                          onChange={params.handleChange}
                          onBlur={params.handleBlur}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* <Grid item xs={12}>
                  <FileUploader
                    disabled={isFileUploadLoading}
                    multiple={true}
                    handleChange={
                      (file) => {
                        uploadImage(file);
                      }
                    }
                    name="file"
                    types={["JPEG", "PNG"]}
                  />
                </Grid> */}

                {/* <Grid item xs={12}>
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
                      {blogsImage?.length ? (
                        <ImageListItem key={blogsImage}>
                          <Image
                            src={`${blogsImage}?w=248&fit=crop&auto=format`}
                            srcSet={`${blogsImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
                </Grid> */}
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

export default BlogForm;
