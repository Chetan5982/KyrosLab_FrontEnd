"use client";
import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Menu from "@/components/menu";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { revolutionaryUrl } from "@/constants/constants";
import { Provider } from "react-redux";
import { store } from "@/redux/store";   

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isAdmin = !pathname.includes("/admin");
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);
  return (
    <div
      style={{
        width: "100%",
        height: pathname === revolutionaryUrl ? "500vh" : "100%",
      }}
      className="root"
    >
      <Provider store={store}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <div className="relative h-full">
            {isAdmin && !open && <Header open={open} setOpen={setOpen} />}
            {isAdmin && open && <Menu setOpen={setOpen} />}
            {children}
            {isAdmin && <Footer />}
          </div>
        </ThemeProvider>
      </SessionProvider>
      </Provider>
    </div>
  );
};

export default Layout;
