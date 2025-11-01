// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function CustomSwipeableDrawer({
  children,
  buttonLabel,
  childrenProps,
  ...props
}: any) {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <React.Fragment>
        <Box
          onClick={(e) => {
            setOpenDrawer(true);
          }}
        >
          {buttonLabel}
        </Box>
        <SwipeableDrawer
          anchor="right"
          open={openDrawer}
          onClose={(e, res) => {
            if (res && res == "backdropClick") return;

            handleClose();
          }}
          onOpen={() => {
            setOpenDrawer(true);
          }}
          {...props}
        >
          <Box sx={{ width: "600px" }} {...childrenProps}>
            {children({ openDrawer, setOpenDrawer })}
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
