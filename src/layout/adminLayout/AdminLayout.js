"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import adminThemes from "@/theme/adminTheams";
import FullLayout from "@/layout/adminLayout/full/FullLayout";

const AdminLayout = ({ children }) => {
  return (
    <ThemeProvider theme={adminThemes}>
      <Toaster />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
     
        <FullLayout>{children}</FullLayout>
    </ThemeProvider>
  );
};

export default AdminLayout;
