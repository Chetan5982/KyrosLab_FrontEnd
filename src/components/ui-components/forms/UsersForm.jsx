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
import { clearBlogImage } from "../../../redux/blog/blog.reducer";
import Dropdown from "@/components/common/Dropdown";
import { CREATE_USERS, EDIT_USERS } from "@/redux/users/users.type";

const roles = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

const validation = (formData) =>
  Yup.object({
    username: Yup.string().required("Please enter username"),
    email: Yup.string().email().required("Please enter email."),
    ...(!formData
      ? { password: Yup.string().required("Please enter password.") }
      : {}),
  });

const UsersForm = ({ setOpenDrawer, openDrawer, formData = null }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const payload = values;
    dispatch({
      type: formData ? EDIT_USERS : CREATE_USERS,
      payload,
      id: formData?._id || "",
    });
    resetForm();
    setOpenDrawer(false);
  };

  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                username: formData.username,
                email: formData.email,
                // role: formData.role,
              }
            : {
                username: "",
                email: "",
                // role: roles[0].value,
                password: "",
              }
        }
        validationSchema={validation(formData)}
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
              {formData ? "Edit User" : "Add User"}
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
                    error={params.touched.username && params.errors.username}
                    helperText={
                      params.touched.username && params.errors.username
                    }
                    id="filled-error-helper-text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    color="primary"
                    value={params.values.username}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.touched.email && params.errors.email}
                    helperText={params.touched.email && params.errors.email}
                    id="filled-error-helper-text"
                    label="Email"
                    variant="outlined"
                    name="email"
                    color="primary"
                    value={params.values.email}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <Dropdown
                    error={params.touched.role && params.errors.role}
                    helperText={params.touched.role && params.errors.role}
                    label="Role"
                    name="role"
                    options={roles || []}
                    value={params.values.role}
                    onChange={params.handleChange}
                    fullWidth
                  />
                </Grid> */}
                {!formData && (
                  <Grid item xs={12}>
                    <TextField
                      error={params.touched.password && params.errors.password}
                      helperText={
                        params.touched.password && params.errors.password
                      }
                      id="filled-error-helper-text"
                      label="Password"
                      variant="outlined"
                      name="password"
                      color="primary"
                      value={params.values.password}
                      onChange={params.handleChange}
                      onBlur={params.handleBlur}
                      fullWidth
                    />
                  </Grid>
                )}
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpenDrawer(false);
                  dispatch(clearBlogImage());
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

export default UsersForm;
