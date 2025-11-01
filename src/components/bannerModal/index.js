import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
// import homebannerpopup from "@/asset/images/homebannerpopup.jpeg";
import CloseIcon from "@mui/icons-material/Close";
import { homePopupImage } from "@/constants/images";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";
import { isIOS } from "react-device-detect";
import { useState } from "react";
import { useEffect } from "react";

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
};
export default function BannerModal({ open, setOpen, popupImage }) {
  const isMobile = useMediaQuery("(max-width: 425px)");
  const [isIphone, setIsIphone] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "100%",
            width: "700px",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            display: "flex",
            overflow: "hidden",
            // img: {
            //   height: "400px",
            //   width: "700px",
            // },
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            {isIphone ? (
              <Slider {...settings}>
                {popupImage.map((img) => (
                  <img
                    key={img.image}
                    src={img.image}
                    alt="popupImage"
                    className={isIphone ? `h-[200px]` : `h-[400px]`}
                  />
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {popupImage.map((img) => (
                  <img
                    key={img.image}
                    src={img.image}
                    alt="popupImage"
                    className={isMobile ? `h-[200px]` : `h-[400px]`}
                  />
                ))}
              </Slider>
            )}
          </div>
          <CloseIcon
            style={{
              marginLeft: "-35px",
              fontSize: "35px",
              cursor: "pointer",
              zIndex: 999,
            }}
            onClick={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
