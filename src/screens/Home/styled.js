import {
  homeReactorImage,
  homeReactorImageMobile,
  homeRndlabImage,
  homeRndlabImageMobile,
  homeRndlabImageTablet,
  homeTypeIIImage,
  homeTypeIIImageMobile,
  homepolishingImage,
  homepolishingImageMobile,
} from "@/constants/images";
import { styled } from "@mui/system";
import { isIOS } from "react-device-detect";

export const BannerSection = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BannerSliderSection = styled("div")`
  position: relative;
  width: 100%;
  /* height: 100vh; */
`;

// export const HomeSliderWrapper = styled("div")`
//   background-image: ${(props) => `url(${props.url})`};
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   color: #fff;
//   display: flex !important;
//   align-items: center !important;
//   height: 830px;

//   @media screen and (max-width: 1880px) {
//     height: 725px;
//   }

//   @media screen and (max-width: 1440px) {
//     height: 725px;
//   }

//   @media screen and (max-width: 1024px) {
//   }

//   @media screen and (max-width: 500px) {
//     align-items: flex-end !important;
//   }
// `;

// export const HomeBannerContainer = styled("div")`
//   max-width: 1000px;
//   margin: 120px auto;

//   .header {
//     font-family: "IBM Plex Sans";
//     font-weight: 600;
//     font-size: 16px;
//     text-transform: capitalize;
//     margin-bottom: 20px;
//   }

//   @media screen and (max-width: 2560px) {
//     max-width: 1800px;

//     .header {
//       font-size: 35px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     max-width: 1350px;

//     .header {
//       font-size: 16px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     max-width: 1000px;

//     .header {
//       font-size: 16px;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     margin: 70px 20px;
//   }

//   @media screen and (max-width: 500px) {
//     margin: 50px 20px;

//     .header {
//       font-size: 18px;
//       // text-align: justify;
//     }
//   }
// `;

export const HomeSliderWrapper = styled("div")`
  background-image: ${(props) => `url('${props.webUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex !important;
  align-items: center !important;
  height: 890px;
  /* height: 100%; */

  margin-top: 80px;

  @media screen and (max-width: 1880px) {
    height: 790px;
  }

  @media screen and (max-width: 1440px) {
    height: 790px;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    background-image: ${(props) => `url('${props.tabletUrl}')`};
  }

  @media screen and (max-width: 500px) {
    background-image: ${(props) => `url('${props.mobileUrl}')`};
    align-items: flex-end !important;
    margin-top: 60px;
  }
`;

export const BannerWrapper = styled("div")`
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const IOSBanner = styled("div")`
  background-image: ${(props) => `url(${props.webUrl})`};
  min-height: 95vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transform: translateZ(0);
  will-change: transform;

  .container {
    max-width: 1000px;
    margin: 0 20px;
    height: 100vh;
    display: flex;
    align-items: flex-start;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 143.5%;
    text-transform: capitalize;
    color: #024638;
    font-weight: 400;
    margin-top: 200px;
    font-style: normal;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
      margin-top: 400px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .header {
      font-size: 64px;
      margin-top: 260px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 55px;
      margin-top: 150px;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: ${(props) => `url(${props.tablatUrl})`};
    .header {
      font-size: 36px;
      margin-top: 84%;
    }
  }

  @media screen and (max-width: 500px) {
    background-image: ${(props) => `url(${props.mobileUrl})`};
    .container {
      align-items: flex-end;
    }

    .header {
      margin: 100px 0 110px;
      font-size: 37px;
      line-height: 48.4px;
    }
  }
`;

export const WebBanner = styled("div")`
  /* background-image: ${(props) => `url(${props.webUrl})`};
  min-height: 95vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  display: flex;
  justify-content: center;
  /* background-attachment: fixed; */

  /* ------------ only for parallax animation---------------- */
  /* position: fixed; */
  /* display: block; */
  top: 7%;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transform: translateZ(0);
  will-change: transform;

  /* ------------------------- */

  .banner-title {
    width: 100%;
    max-width: 580px;
  }

  .container {
    max-width: 1000px;
    margin: 0 20px;
    height: 100vh;
    display: flex;
    align-items: flex-start;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 143.5%;
    text-transform: capitalize;
    color: #024638;
    font-weight: 400;
    margin-top: 200px;
    font-style: normal;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
      margin-top: 290px;
    }
    .banner-title {
      width: 100%;
      max-width: 860px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .header {
      font-size: 64px;
      margin-top: 370px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 55px;
      margin-top: 260px;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: ${(props) => `url(${props.tablatUrl})`};
    .header {
      font-size: 36px;
      margin-top: 84%;
    }
    .banner-title {
      width: 100%;
      max-width: 324px;
    }
  }

  @media screen and (max-width: 500px) {
    background-image: ${(props) => `url(${props.mobileUrl})`};
    .container {
      align-items: flex-end;
    }

    .header {
      margin: 100px 0 110px;
      font-size: 32px;
      line-height: 48.4px;
    }
  }

  @media screen and (max-width: 320px) {
    .header {
      font-size: 30px;
    }
  }
`;

export const IOSNumbers = styled("div")`
  .container {
    max-width: 1000px;
    margin: 0 20px;
  }

  .techs {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transform: translateZ(0);
    will-change: transform;
  }

  .cvd-reactors {
    background-image: url(${homeReactorImage});
  }

  .rnd-labs {
    background-image: url(${homeRndlabImage});
  }

  .polishing {
    background-image: url(${homepolishingImage});
  }

  .header {
    font-family: "Prumo Deck";
    font-weight: 400;
    font-size: 92px;
    text-transform: capitalize;
    color: #efedf2;
    font-style: normal;
    line-height: normal;
  }

  .mobile {
    display: none;
  }

  .title {
    margin-top: 20px;
    font-family: "IBM Plex Sans";
    font-weight: 500;
    font-size: 30px;
    line-height: 144%;
    text-transform: uppercase;
    color: #efedf2;
    font-style: normal;
  }

  .discription {
    font-family: "IBM Plex Sans";
    font-size: 20px;
    line-height: 135.94%;
    text-transform: capitalize;
    color: #efedf2;
    font-style: normal;
    font-weight: 400;
    margin: 15px 0 30px;
  }

  .button {
    width: 169px;
    height: 48px;
    background: #efedf2;
    font-size: 16px;
    line-height: 135.94%;
    text-transform: capitalize;
    color: #000000;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }
    .header {
      font-size: 150px;
    }
    .title {
      font-size: 50px;
    }
    .discription {
      font-size: 30px;
    }
    .button {
      width: 230px;
      height: 60px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }
    .header {
      font-size: 92px;
    }
    .title {
      font-size: 30px;
    }
    .cvd-reactors-title {
      max-width: 560px;
    }
    .rnd-labs-title {
      max-width: 590px;
    }
    .discription {
      font-size: 20px;
    }
    .rnd-labs-discription {
      max-width: 470px;
    }
    .polishing-discription {
      max-width: 475px;
    }
    .button {
      width: 169px;
      height: 48px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }
    .header {
      font-size: 70px;
    }
    .title {
      font-size: 22px;
      width: 45% !important;
    }
    .discription {
      font-size: 16px;
    }
    .button {
      width: 130px;
      height: 38px;
      font-size: 16px;
      font-weight: 500 !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 60px;
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      width: 75% !important;
    }
    .rnd-labs {
      background-image: url(${homeRndlabImageTablet});
      background-position: right;
    }
  }

  @media screen and (max-width: 500px) {
    .techs {
      align-items: flex-end;
    }

    .cvd-reactors {
      background-image: url(${homeReactorImageMobile});
      background-size: 100% 100vh;
      // background-size:cover;
    }

    .rnd-labs {
      background-image: url(${homeRndlabImageMobile});
      background-size: 100% 100vh;
      // background-size:cover;
    }

    .polishing {
      background-image: url(${homepolishingImageMobile});
      // background-size: 100% 100vh;
      background-size: cover;
    }

    .header {
      font-size: 54px;
      font-weight: 300;
    }

    .web {
      display: none;
    }

    .mobile {
      display: block;
    }

    .title {
      font-size: 24px;
      margin-top: 15px;
      line-height: 144%;
    }
    .cvd-reactors-title {
      font-weight: 500;
      width: 100% !important;
    }
    .rnd-labs-title {
      font-weight: 400;
      width: 100% !important;
    }
    .polishing-title {
      font-weight: 300;
      line-height: 114.031%;
      width: 100% !important;
    }

    .discription {
      font-weight: 300;
      text-transform: none;
      font-size: 16px;
      line-height: 135.938%;
      margin: 10px 0 20px;
    }

    .cvd-reactors-discription {
      max-width: 310px;
      font-size: 20px;
      font-weight: 300;
      line-height: 145.9%;
    }

    .rnd-labs-discription {
      max-width: 330px;
    }

    .polishing-discription {
      max-width: 380px;
      font-weight: 400;
    }

    .button {
      width: 139px;
      height: 42px;
      margin-bottom: 50px;
    }
  }
`;

// export const Numbers = styled("div")`
//   .container {
//     max-width: 1000px;
//     margin: 0 20px;
//   }

//   .techs {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     ${() =>
//       !isIOS &&
//       `
//     background-attachment: fixed;
//   `}
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//   }

//   .cvd-reactors {
//     background-image: url(${homeReactorImage});
//   }

//   .rnd-labs {
//     background-image: url(${homeRndlabImage});
//   }

//   .polishing {
//     background-image: url(${homepolishingImage});
//   }

//   .header {
//     font-family: "Prumo Deck";
//     font-weight: 400;
//     font-size: 92px;
//     text-transform: capitalize;
//     color: #efedf2;
//     font-style: normal;
//     line-height: normal;
//   }

//   .mobile {
//     display: none;
//   }

//   .title {
//     margin-top: 20px;
//     font-family: "IBM Plex Sans";
//     font-weight: 500;
//     font-size: 30px;
//     line-height: 144%;
//     text-transform: uppercase;
//     color: #efedf2;
//     font-style: normal;
//   }

//   .discription {
//     font-family: "IBM Plex Sans";
//     font-size: 20px;
//     line-height: 135.94%;
//     text-transform: capitalize;
//     color: #efedf2;
//     font-style: normal;
//     font-weight: 400;
//     margin: 15px 0 30px;
//   }

//   .button {
//     width: 169px;
//     height: 48px;
//     background: #efedf2;
//     font-size: 16px;
//     line-height: 135.94%;
//     text-transform: capitalize;
//     color: #000000;
//     font-family: "IBM Plex Sans";
//     font-style: normal;
//     font-weight: 500;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }
//     .header {
//       font-size: 150px;
//     }
//     .title {
//       font-size: 50px;
//     }
//     .discription {
//       font-size: 30px;
//     }
//     .button {
//       width: 230px;
//       height: 60px;
//       font-size: 20px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }
//     .header {
//       font-size: 92px;
//     }
//     .title {
//       font-size: 30px;
//     }
//     .cvd-reactors-title {
//       max-width: 560px;
//     }
//     .rnd-labs-title {
//       max-width: 590px;
//     }
//     .discription {
//       font-size: 20px;
//     }
//     .rnd-labs-discription {
//       max-width: 470px;
//     }
//     .polishing-discription {
//       max-width: 475px;
//     }
//     .button {
//       width: 169px;
//       height: 48px;
//       font-size: 16px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }
//     .header {
//       font-size: 70px;
//     }
//     .title {
//       font-size: 22px;
//     }
//     .discription {
//       font-size: 16px;
//     }
//     .button {
//       width: 130px;
//       height: 38px;
//       font-size: 16px;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     .header {
//       font-size: 60px;
//     }
//   }
//   @media screen and (max-width: 768px) {
//     .rnd-labs {
//       background-image: url(${homeRndlabImageTablet});
//       background-position: right;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     .techs {
//       align-items: flex-end;
//     }

//     .cvd-reactors {
//       background-image: url(${homeReactorImageMobile});
//       background-size: 100% 100vh;
//     }

//     .rnd-labs {
//       background-image: url(${homeRndlabImageMobile});
//       background-size: 100% 100vh;
//     }

//     .polishing {
//       background-image: url(${homepolishingImageMobile});
//       // background-size: 100% 100vh;
//       background-size: cover;
//     }

//     .header {
//       font-size: 54px;
//       font-weight: 300;
//     }

//     .web {
//       display: none;
//     }

//     .mobile {
//       display: block;
//     }

//     .title {
//       font-size: 24px;
//       margin-top: 15px;
//       line-height: 144%;
//     }
//     .cvd-reactors-title {
//       font-weight: 500;
//     }
//     .rnd-labs-title {
//       font-weight: 400;
//     }
//     .polishing-title {
//       font-weight: 300;
//       line-height: 114.031%;
//     }

//     .discription {
//       font-weight: 300;
//       text-transform: none;
//       font-size: 16px;
//       line-height: 135.938%;
//       margin: 10px 0 20px;
//     }

//     .cvd-reactors-discription {
//       max-width: 310px;
//       font-size: 20px;
//       font-weight: 300;
//       line-height: 145.9%;
//     }

//     .rnd-labs-discription {
//       max-width: 330px;
//     }

//     .polishing-discription {
//       max-width: 380px;
//       font-weight: 400;
//     }

//     .button {
//       width: 139px;
//       height: 42px;
//       margin-bottom: 50px;
//     }
//   }
// `;
export const DiamondManufacturer = styled("div")`
  // margin: 0 3%;
  background-color: rgb(249, 249, 249);
  width: 75%;
  margin: auto;
  .container {
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }

  .first-pere .main-title {
    font-size: 36px;
    font-weight: 700;
  }

  .main-title {
    font-size: 32px;
    font-family: "Prumo Deck";
    line-height: 140.6%;
    font-style: normal;
    font-weight: 500;
    margin: 40px 0px 12px 0px;
  }
  .inner-p {
    font-family: "IBM Plex Sans";
    color: #000;
    font-size: 18px;
    line-height: 140.6%;
    font-style: normal;
    font-weight: 400;
    margin: 10px 0px;
  }
  .innercontain {
    padding: 7% 0 8% 0;
  }
  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }
  }

  @media screen and (max-width: 1920px) {
    width: 75%;
    .container {
      max-width: 1300px;
    }
    .innercontain {
      padding: 5% 0;
    }
  }
  @media screen and (max-width: 1440px) {
    width: 80%;
    .container {
      max-width: 1000px;
    }
    .innercontain {
      padding: 7% 3% 8% 3%;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 95%;
    .main-title {
      font-size: 34px;
    }
    .first-pere .main-title {
      font-size: 36px;
    }
    .innercontain {
      padding: 7% 4% 8% 4%;
    }
  }
  @media screen and (max-width: 425px) {
    width: 90%;
    margin: 0 4%;
    .main-title {
      font-size: 22px;
    }
    .inner-p {
      font-size: 16px;
    }
    .first-pere .main-title {
      font-size: 29px;
    }
  }
  @media screen and (max-width: 320px) {
    .main-title {
      font-size: 21px;
    }
    .first-pere .main-title {
      font-size: 23px;
    }
  }
`;

export const IIADiamonds = styled("div")`
  background-image: url(${homeTypeIIImage});
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .container {
    max-width: 1000px;
    margin: 0 20px;
    height: 97vh;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .main {
    width: 500px;
  }

  .title {
    font-family: "Prumo Deck";
    font-size: 64px;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-size: 20px;
    line-height: 135.94%;
    // text-align: justify;
    color: #efedf2;
    font-style: normal;
    font-weight: 400;
  }

  .button {
    width: 169px;
    height: 48px;
    background: #a4c89a;
    font-family: "IBM Plex Sans";
    font-size: 16px;
    line-height: 135.94%;
    text-transform: capitalize;
    font-style: normal;
    font-weight: 600;
    color: #024638;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .main {
      width: 700px;
    }

    .title {
      font-size: 90px;
    }

    .description {
      font-size: 3 0px;
    }

    .button {
      width: 230px;
      height: 60px;
      font-size: 20px;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .main {
      width: 561px;
    }

    .title {
      font-size: 64px;
    }

    .description {
      font-size: 20px;
      width: 98%;
      letter-spacing: 0.9px;
    }

    .button {
      width: 169px;
      height: 48px;
      font-size: 16px;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }
    .title {
      font-size: 55px;
    }

    .description {
      font-size: 16px;
      width: 100%;
    }
    .main {
      padding-left: 90px;
    }
    .button {
      width: 130px;
      height: 38px;
      font-size: 14px;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    .main {
      width: 50%;
      padding-left: 0px;
    }

    .title {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 890px) {
    .main {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    height: 950px;
    background-image: url(${homeTypeIIImageMobile});
    background-position: right;

    .container {
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    .main {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 0;
      width: auto;
    }

    .title {
      font-size: 60px;
      text-transform: capitalize;
      margin-right: 13px;
    }

    .description {
      font-size: 16px;
      line-height: 143.625%;
    }

    .button {
      width: 142px;
      height: 41px;
      margin: 20px 0 10px;
      font-size: 16px;
    }
    .inner-title {
      display: inline-flex;
      align-items: baseline;
    }
  }

  @media screen and (max-width: 660px) {
    height: 840px;
    .title {
      font-size: 45px;
    }
    .main {
      padding: 20px 0;
    }
    // .inner-title{
    //   // display:block;
    //   margin-bottom:20px;
    // }
    .description {
      font-size: 16px;
      line-height: 143.625%;
    }
  }
  @media screen and (max-width: 500px) {
    .title {
      font-size: 40px;
    }
    .description {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 434px) {
    .inner-title {
      display: block;
    }
    .title {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 430px) {
    height: 900px;
    .title {
      font-size: 50px;
    }
    .inner-title {
      display: block;
    }
  }

  @media screen and (max-width: 400px) {
    height: 950px;
  }
`;

// export const NetworkPartners = styled("div")`
//   display: flex;
//   justify-content: center;
//   margin-top: 70px;

//   .container {
//     max-width: 1000px;

//     .header {
//       font-family: "Prumo Deck";
//       text-transform: capitalize;
//       color: #000000;
//       font-size: 64px;
//       line-height: 135.031%;
//       margin-bottom: 80px;
//       font-style: normal;
//       font-weight: 400;
//     }

//     .main {
//       width: 90%;
//       margin: auto;
//       display: flex;
//       justify-content: center;
//       gap: 100px;

//       .card {
//         flex: 1;
//         max-width: 450px;
//         height: 100%;

//         .title {
//           margin-bottom: 30px;
//           font-family: "Prumo Deck";
//           font-size: 36px;
//           line-height: 140.62%;
//           text-transform: uppercase;
//           color: #000000;
//         }

//         .wrapper {
//           position: relative;

//           .content {
//             width: 317px;
//             position: absolute;
//             bottom: -80px;
//             right: 0;

//             .mobile-title {
//               display: none;
//               font-family: "Prumo Deck";
//               font-size: 36px;
//               line-height: 140.62%;
//               color: #000000;
//               font-style: normal;
//               font-weight: 400;
//               text-transform: uppercase;
//             }

//             .description {
//               font-family: "IBM Plex Sans";
//               color: #000000;
//               font-size: 32px;
//               line-height: 135.938%;
//               font-style: normal;
//               font-weight: 400;
//             }

//             .button {
//               width: 155px;
//               height: 43px;
//               background: #024638;
//               font-family: "IBM Plex Sans";
//               font-size: 16px;
//               line-height: 135.94%;
//               text-transform: capitalize;
//               color: white;
//               font-style: normal;
//               font-weight: 500;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               margin-top: 30px;
//               cursor: pointer;
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;

//       .header {
//         font-size: 90px;
//       }

//       .main {
//         .card {
//           .title {
//           }

//           .wrapper {
//             .content {
//               .mobile-title {
//               }

//               .description {
//               }

//               .button {
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;

//       .header {
//         font-size: 64px;
//       }

//       .main {
//         .card {
//           .title {
//             font-size: 36px;
//             line-height: 140.62%;
//           }

//           .wrapper {
//             .content {
//               width: 317px;

//               .mobile-title {
//               }

//               .description {
//                 font-size: 32px;
//               }

//               .button {
//                 width: 155px;
//                 height: 43px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;

//       .header {
//         font-size: 55px;
//       }

//       .main {
//         .card {
//           .title {
//           }

//           .wrapper {
//             .content {
//               width: 250px;

//               .mobile-title {
//               }

//               .description {
//                 font-size: 22px;
//               }

//               .button {
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     margin: 70px 20px;

//     .container {
//       .header {
//         font-size: 45px;
//         margin-bottom: 40px;
//       }

//       .main {
//         .card {
//           .title {
//             font-size: 30px;
//           }

//           .wrapper {
//             .content {
//               width: 180px;

//               .description {
//                 font-size: 18px;
//                 margin-top: 20px;
//               }

//               .button {
//                 width: 155px;
//                 height: 43px;
//                 background: #024638;
//                 font-size: 14px;
//                 margin-top: 30px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 700px) {
//     .container {
//       .header {
//         display: none;
//       }

//       .main {
//         width: 100%;
//         flex-direction: column;
//         align-items: center;
//         gap: 150px;

//         .card {
//           .title {
//             display: none;
//           }

//           .wrapper {
//             .content {
//               width: 200px;

//               .mobile-title {
//                 display: block;
//               }

//               .description {
//                 font-size: 16px;
//                 margin-top: 10px;
//               }

//               .button {
//                 width: 155px;
//                 height: 43px;
//                 background: #024638;
//                 font-size: 15px;
//                 margin-top: 20px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 375px) {
//     .container {
//       .main {
//         .card {
//           .wrapper {
//             .content {
//               width: 155px;
//               bottom: -90px;

//               .mobile-title {
//                 font-size: 30px;
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const Marquee = styled("div")`
//   margin-top: 180px;
//   height: 90px;
//   width: 100%;
//   overflow: hidden;
//   position: relative;
//   background-color: #024638;

//   div {
//     display: block;
//     width: 200%;
//     height: 100%;
//     position: absolute;
//     overflow: hidden;
//     animation: marquee 5s linear infinite;
//   }

//   span {
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     float: left;
//     width: 20%;
//     font-family: "Prumo Deck";
//     text-transform: uppercase;
//     color: #efedf2;
//     font-size: 64px;
//     font-weight: 700;
//     font-style: normal;
//     line-height: normal;
//   }

//   @keyframes marquee {
//     0% {
//       left: 0;
//     }
//     100% {
//       left: -100%;
//     }
//   }

//   @media screen and (max-width: 2560px) {
//     height: 140px;

//     span {
//       font-size: 90px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     height: 90px;

//     span {
//       font-size: 55px;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     height: 70px;

//     span {
//       font-size: 45px;
//     }
//   }

//   @media screen and (max-width: 850px) {
//     height: 60px;

//     span {
//       font-size: 40px;
//       width: 30%;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     height: 50px;

//     span {
//       font-size: 38px;
//       font-weight: 400;
//     }
//   }

//   @media screen and (max-width: 460px) {
//     height: 40px;

//     span {
//       font-size: 25px;
//     }
//   }
// `;

// export const Benefits = styled("div")`
//   display: flex;

//   .left {
//     flex: 1;
//     display: flex;
//     justify-content: end;
//     align-items: center;
//   }

//   .right {
//     flex: 1;

//     img {
//       width: 100%;
//     }
//   }

//   .left > div {
//     width: 440px;
//     margin-right: 55px;
//   }

//   .header {
//     font-family: "Prumo Deck";
//     font-size: 64px;
//     line-height: 118%;
//     text-transform: capitalize;
//     color: #000000;
//     font-weight: 400;
//     font-style: normal;
//   }

//   .mobile {
//     display: none;
//   }

//   .title {
//     font-family: "IBM Plex Sans";
//     font-size: 20px;
//     line-height: 140.62%;
//     color: #000000;
//     font-style: normal;
//     font-weight: 600;
//     text-transform: capitalize;
//   }

//   .points {
//     display: flex;
//     justify-content: space-between;

//     ul {
//       margin-right: 15px;

//       li {
//         list-style-type: disc;
//         margin-left: 15px;
//         padding: 10px 0;
//         font-family: "IBM Plex Sans";
//         font-style: normal;
//         font-size: 20px;
//         line-height: 140.62%;
//         color: #000000;
//         font-weight: 400;
//       }
//     }
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }

//     .left > div {
//       width: 840px;
//     }

//     .header {
//       font-size: 90px;
//       margin-bottom: 70px;
//     }

//     .title {
//       font-size: 40px;
//       margin-bottom: 40px;
//       line-height: 50px;
//     }

//     .points {
//       ul {
//         li {
//           font-size: 40px;
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }

//     .left > div {
//       width: 620px;
//     }

//     .header {
//       font-size: 64px;
//       margin-bottom: 20px;
//     }

//     .title {
//       font-size: 20px;
//       line-height: 140.62%;
//       margin-bottom: 10px;
//     }

//     .points {
//       ul {
//         li {
//           font-size: 20px;
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }

//     .left > div {
//       width: 440px;
//       margin-right: 55px;
//     }

//     .header {
//       font-size: 49px;
//       margin-bottom: 50px;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     .left {
//       justify-content: center;
//     }

//     .left > div {
//       width: 100%;
//       margin: 20px;
//     }

//     .header {
//       font-size: 45px;
//       margin-bottom: 30px;
//     }

//     .title {
//       font-size: 20px;
//       margin-bottom: 10px;
//     }

//     .points {
//       ul {
//         li {
//           font-size: 20px;
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 768px) {
//     flex-direction: column;

//     .right {
//       order: 1;
//     }

//     .left {
//       order: 2;
//     }

//     .left > div {
//       margin: 20px 20px 60px;
//     }

//     .header {
//       font-size: 45px;
//       margin-bottom: 30px;
//     }

//     .title {
//       font-size: 18px;
//       margin-bottom: 10px;
//       line-height: 1.3;
//     }

//     .points {
//       ul {
//         li {
//           font-size: 18px;
//         }
//       }
//     }
//   }

//   @media screen and (max-width: 650px) {
//     .header {
//       margin: 0 0 20px;
//       font-size: 36px;
//       line-height: 110.125%;
//     }

//     .web {
//       display: none;
//     }

//     .mobile {
//       display: block;
//     }

//     .title {
//       font-weight: 500;
//       font-size: 16px;
//     }

//     .points {
//       ul {
//         li {
//           color: #414141;
//           font-size: 14px;
//         }
//       }
//     }
//   }
// `;

export const TradeShows = styled("div")`
  display: flex;
  justify-content: center;
  margin: 50px 0;

  .container {
    margin: 0 20px;
    max-width: 1000px;

    .header {
      font-family: "Prumo Deck";
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 140.62%;
      text-transform: capitalize;
      color: #000000;
      margin-bottom: 60px;
    }
  }

  .slick-slider {
    margin: 0 20px;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-slide {
    height: auto;
  }

  .slick-track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
      .header {
        font-size: 90px;
      }
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
      .header {
        font-size: 64px;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
      .header {
        font-size: 55px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      .header {
        font-size: 45px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      .header {
        margin-bottom: 20px;
        font-size: 36px;
        line-height: 129.6%;
        text-align: center;
      }
    }
  }
`;

export const Cards = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: flex-start;
  grid-gap: 15px;

  @media screen and (max-width: 2560px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 1920px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const CardImageWrapper = styled("div")`
  height: 274px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const WebCard = styled("div")`
  background-color: #024638;
  color: white;
  margin: 5px 0;
  position: relative;

  width: 100%;
  max-width: 427px;

  .chip {
    position: absolute;
    top: 0;
    /* right: 20px; */
    /* width: 100px;
    height: 100px; */
    background: #a4c89a;
    font-family: Prumo Deck;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    text-transform: capitalize;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    display: flex;
    right: 0px;
    flex-direction: row;
    padding: 13px 15px;

    .date {
      color: #fff;
      text-align: center;
      leading-trim: both;
      text-edge: cap;
      font-family: Prumo Deck;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 127.125%; /* 30.51px */
      text-transform: uppercase;
    }
  }

  img {
    width: 100%;
  }

  .content {
    height: 300px;
  }

  .title {
    font-family: Prumo Deck;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 132.12%;
    text-transform: capitalize;
    color: #ffffff;
    padding: 20px;
  }

  .description {
    padding: 0 20px 25px;
    font-family: IBM Plex Sans;
    font-size: 20px;
    line-height: 151.1%;
    color: #ffffff;
    font-weight: 300;
  }

  @media screen and (max-width: 2560px) {
    .title {
      font-size: 35px;
      line-height: 50px;
    }

    .description {
      font-size: 26px;
      line-height: 45px;
    }
  }

  @media screen and (max-width: 1920px) {
    .title {
      font-size: 36px;
      line-height: 132.12%;
    }

    .description {
      font-size: 20px;
      line-height: 151.1%;
    }
  }

  @media screen and (max-width: 1440px) {
    .chip {
      .date {
        font-size: 20px;
      }
    }

    .title {
      font-size: 30px;
      line-height: 34px;
    }

    .description {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    .chip {
      .date {
        font-size: 25px;
        text-transform: uppercase;
      }
    }
    .content {
      height: 200px;
    }
  }

  @media screen and (max-width: 500px) {
    .content {
      height: 300px;
    }

    .title {
      padding: 15px;
      font-size: 24px;
      line-height: 35px;
      color: #ffffff;
    }

    .description {
      padding: 0 15px 15px;
      margin-bottom: 0;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 376px) {
    .content {
      height: 320px;
    }
  }
`;

export const Card = styled("div")`
  background-color: #024638;
  color: white;
  margin: 5px 0;
  position: relative;

  // width: 100%;
  // max-width: 427px;

  .chip {
    position: absolute;
    top: 0;
    /* right: 20px;
    width: 100px;
    height: 100px; */
    background: #a4c89a;

    font-family: Prumo Deck;
    font-style: normal;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    color: #ffffff;

    /* display: flex; */
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;

    display: flex;
    right: 0px;
    flex-direction: row;
    padding: 13px 15px;

    .date {
      color: #fff;
      text-align: center;
      leading-trim: both;
      text-edge: cap;
      font-family: Prumo Deck;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 127.125%; /* 30.51px */
      text-transform: uppercase;
    }
  }

  img {
    width: 100%;
  }

  .content {
    height: 300px;
  }

  .title {
    font-family: Prumo Deck;
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 132.12%;
    text-transform: uppercase;
    color: #ffffff;
    padding: 20px;
  }

  .description {
    padding: 0 20px 25px;
    font-family: IBM Plex Sans;
    font-size: 20px;
    line-height: 151.1%;
    color: #ffffff;
    font-weight: 300;
  }

  @media screen and (max-width: 2560px) {
    .title {
      font-size: 35px;
      line-height: 50px;
    }

    .description {
      font-size: 26px;
      line-height: 45px;
    }
  }

  @media screen and (max-width: 1920px) {
    .title {
      font-size: 30px;
      line-height: 132.12%;
    }

    .description {
      font-size: 20px;
      line-height: 151.1%;
    }
  }

  @media screen and (max-width: 1440px) {
    .chip {
      .date {
        font-size: 24px;
      }
    }

    .title {
      font-size: 24px;
      line-height: 24px;
    }

    .description {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      height: 200px;
    }
  }

  @media screen and (max-width: 500px) {
    .chip {
      .date {
        font-size: 16px;
      }
    }
    .content {
      height: 300px;
    }

    .title {
      padding: 15px;
      font-size: 24px;
      line-height: 35px;
      color: #ffffff;
    }

    .description {
      padding: 0 15px 15px;
      margin-bottom: 0;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 376px) {
    .content {
      height: 320px;
    }
  }
`;
