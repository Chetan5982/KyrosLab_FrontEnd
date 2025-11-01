"use client";
import AdminLayout from "@/layout/adminLayout/AdminLayout";
import { store } from "@/redux/store";
import { usePathname } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  const pathname = usePathname();
  return (
    <Provider store={store}>
        {pathname === "/admin" ? (
          children
        ) : (
          <AdminLayout>{children}</AdminLayout>
        )}
    </Provider>
  );
};

export default Layout;

