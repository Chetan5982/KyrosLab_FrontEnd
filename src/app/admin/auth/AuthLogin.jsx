"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import CustomTextField from "@/components/forms/theme-elements/CustomTextField";
import FormikForm from "@/components/common/FormikForm";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";



const validation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const AuthLogin = ({ title }) => {
  const router = useRouter();
  const pathname=usePathname()
  const handleSubmit = async (values, { resetForm }) => {
    const resp = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (resp.error) {
      toast.error(resp.error);
      return;
    } else {
      router.replace("/admin/blogs");
    }
  };

  return (
    <FormikForm
      initialValues={{
        email: "",
        password: "",
      }}
       validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {(params) => {
        return (
          <>
            {title ? (
              <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
              </Typography>
            ) : null}

            <Stack>
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="email"
                  mb="5px"
                >
                  Email
                </Typography>
                <CustomTextField
                  variant="outlined"
                  fullWidth
                  name="email"
                  onChange={params.handleChange}
                />
              </Box>
              <Box mt="25px">
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="password"
                  mb="5px"
                >
                  Password
                </Typography>
                <CustomTextField
                  type="password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  onChange={params.handleChange}
                />
              </Box>
              <Stack
                justifyContent="space-between"
                direction="row"
                alignItems="center"
                my={2}
              >
                {/* <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remeber this Device"
                  />
                </FormGroup> */}
              </Stack>
            </Stack>
            <Box>
              <Button
                color="primary"
                variant="outlined"
                size="large"
                fullWidth
                type="submit"
              >
                Sign In
              </Button>
            </Box>
          </>
        );
      }}
    </FormikForm>
  );
};

export default AuthLogin;
