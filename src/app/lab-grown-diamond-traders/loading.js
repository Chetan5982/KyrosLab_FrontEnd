"use client";
import React from "react";
import { Backdrop } from "@mui/material";
import DiamondLoader from "@/components/diamondLoader";

const Loading = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <DiamondLoader />
    </Backdrop>
  );
};

export default Loading;
