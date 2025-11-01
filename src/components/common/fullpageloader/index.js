import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import DiamondLoader from "@/components/diamondLoader";

export default function FullPageLoader({ open, setOpen }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        id="fullpageLoader"
      >
         <DiamondLoader />
        {/* <CircularProgress color="secondary" size={60} /> */}
      </Backdrop>
    </div>
  );
}
