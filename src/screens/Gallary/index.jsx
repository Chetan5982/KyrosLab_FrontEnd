"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { isIOS } from "react-device-detect";
import {
  Card,
  Cards,
  Banner,
  Gallary,
  BannerSection,
  BannerWrapper,
  IOSBanner,
} from "./styled";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import FullPageLoader from "@/components/common/fullpageloader";
import { GET } from "@/services/methods";
import CustomDialog from "@/components/common/CustomDialog/CustomDialog";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

const Gallery = () => {
  const [showGallary, setShowGallary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gallary, setGallary] = useState([]);
  const [selectYear, setSelectYear] = useState("All Events");
  const [selectAsset, setSelectAsset] = useState("images");
  const [allYear, setAllYear] = useState(["All Events"]);
  const [open, setOpen] = React.useState(false);
  const [notFoundImage, setNotFoundImage] = useState(false);

  const handleCloseDialog = () => {
    setNotFoundImage(false);
  };

  const handleOpen = (gallary) => {
    setOpen(true);
    setShowGallary(
      gallary.map((img) => ({
        original: img,
        thumbnail: img,
      }))
    );
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setIsLoading(true);
    GET(`/gallery/getYears`)
      .then((data) => {
        setAllYear([...data.data, "All Events"]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (selectYear && selectYear !== "All Events") {
      GET(`/gallery/year/${selectYear}`)
        .then((data) => {
          if (selectAsset === "images") {
            setGallary(data.data);
          } else {
            setGallary(
              data.data.map((item) => ({ ...item, images: item?.videos || [] }))
            );
          }
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else {
      GET(`/gallery`)
        .then((data) => {
          if (selectAsset === "images") {
            setGallary(data.data);
          } else {
            setGallary(
              data.data.map((item) => ({ ...item, images: item?.videos || [] }))
            );
          }
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [selectAsset, selectYear]);

  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);

  function renderItem(item) {
    return (
      <div className="image-gallery-image">
        <div className="video-wrapper">
          {/* <YouTube videoId={item.embedUrl} opts={opts} onReady={this._onReady}/> */}
          <video src={item.original} controls />
        </div>
      </div>
    );
  }

  const galleryProps = selectAsset === "videos" ? { renderItem } : {};

  return (
    <>
      {isIphone ? (
        <BannerSection>
          <BannerWrapper>
            <IOSBanner>
              <div style={{ padding: "20px" }}>
                <div className="container">
                  <div className="header">
                    <div className="mobile">
                      Explore a{" "}
                      <span className="highlight">Captivating Gallery </span>
                      of Bhanderi Lab Grown Diamonds:{" "}
                      <span className="highlight">
                        {" "}
                        Ethically Crafted, Uniquely Beautiful.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </IOSBanner>
          </BannerWrapper>
        </BannerSection>
      ) : (
        // <Banner>
        //   <div className="container">
        //     <div className="header">
        //       <div className="web">
        //         <div>Explore a Captivating Gallery of</div>
        //         <div>Bhanderi Lab Grown Diamonds:</div>
        //         <div>Ethically Crafted, Uniquely</div>
        //         <div>Beautiful.</div>
        //       </div>
        //       <div className="mobile">
        //         Explore a Captivating Gallery of Bhanderi Lab Grown Diamonds:
        //         Ethically Crafted, Uniquely Beautiful.
        //       </div>
        //     </div>
        //   </div>
        // </Banner>
        <BannerSection>
          <BannerWrapper>
            <Banner>
              <div className="container">
                <div className="header">
                  <div className="web">
                    <div>Explore a Captivating Gallery of</div>
                    <div>Bhanderi Lab Grown Diamonds:</div>
                    <div>Ethically Crafted, Uniquely</div>
                    <div>Beautiful.</div>
                  </div>
                  <div className="mobile">
                    Explore a Captivating Gallery of Bhanderi Lab Grown
                    Diamonds: Ethically Crafted, Uniquely Beautiful.
                  </div>
                </div>
              </div>
            </Banner>
          </BannerWrapper>
        </BannerSection>
      )}
      <FullPageLoader open={isLoading} />
      <Gallary>
        <div className="container">
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            mb="20px"
            gap="10px"
          >
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectYear}
                label="Age"
                onChange={(e) => setSelectYear(e.target.value)}
              >
                {allYear.map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Asset</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectAsset}
                label="Asset"
                onChange={(e) => setSelectAsset(e.target.value)}
              >
                {["images", "videos"].map((i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Cards>
            {gallary.length ? (
              gallary.map((item) => (
                <Card
                  key={item.title}
                  onClick={() =>
                    item.images.length
                      ? handleOpen(item.images)
                      : setNotFoundImage(true)
                  }
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      // image={item.image}
                      src={item.coverImage}
                      alt="green iguana"
                      style={{
                        width: "100%",
                        height: "250px",
                        // maxHeight: "250px",
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        component="div"
                        style={{
                          color: "#000",
                          fontFamily: "Prumo Deck",
                          fontSize: "26px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "135.031%",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions> */}
                </Card>
              ))
            ) : (
              <h1 style={{ textAlign: "center" }}>No Data Found</h1>
            )}
          </Cards>
        </div>
      </Gallary>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReactImageGallery
            items={showGallary}
            showBullets={false}
            showIndex={false}
            showThumbnails={selectAsset === "images"}
            lazyLoad={false}
            showPlayButton={selectAsset === "images"}
            showNav={true}
            showFullscreenButton={true}
            thumbnailPosition={"bottom"}
            // onSlide={onSlide}
            {...galleryProps}
          />
        </Box>
      </Modal>

      <CustomDialog
        open={notFoundImage}
        title={`Event ${selectAsset === "images" ? "Images" : "Videos"}`}
        content={`This event has no any ${
          selectAsset === "images" ? "images" : "videos"
        }`}
        actions={[
          {
            label: "Ok",
            color: "success",
            onClick: handleCloseDialog,
          },
        ]}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default Gallery;
