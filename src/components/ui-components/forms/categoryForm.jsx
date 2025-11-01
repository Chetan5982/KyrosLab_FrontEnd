// @ts-nocheck
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import FormikForm from "../../common/FormikForm";
import { clearEventImages } from "@/redux/event/event.reducer";
import CloseIcon from "@mui/icons-material/Close";
import {
  CREATE_SINGLE_CATEGORY,
  EDIT_CATEGORY,
} from "@/redux/category/category.type";

const validation = Yup.object({
  name: Yup.string().required("Please enter category name"),
});

const CategoryForm = ({ setOpenDrawer, openDrawer, formData = null }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const payload = { ...values };
    dispatch({
      type: formData ? EDIT_CATEGORY : CREATE_SINGLE_CATEGORY,
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
                name: formData.name,
              }
            : {
                name: "",
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
              <span>{formData ? "Edit Category" : "Add Category"}</span>
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
                    error={params.touched.name && params.errors.name}
                    helperText={params.touched.name && params.errors.name}
                    id="filled-error-helper-text"
                    label="Category Name"
                    variant="outlined"
                    name="name"
                    color="primary"
                    value={params.values.name}
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
                  setOpenDrawer(false);
                  dispatch(clearEventImages());
                  params.resetForm();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">{formData ? "update" : "create"}</Button>
            </DialogActions>
          </>
        )}
      </FormikForm>
    </div>
  );
};

export default CategoryForm;
