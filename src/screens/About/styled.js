import {
  OurteamGlassMan,
  OurteamMan,
  OurteamWoman,
  aboutMainBanner,
  aboutMainLeptop,
  aboutMainMobile,
  aboutMainTablet,
  aboutringVision,
  aboutringVisionMobile,
  imactImg,
  imactImgMobile,
} from "@/constants/images";
import { styled } from "@mui/system";
import { isIOS } from "react-device-detect";

export const BannerSection = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
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
  min-height: 95vh;
  background-image: url(${aboutMainBanner});
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
    /* margin: 0 20px; */
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 143.5%;
    text-transform: capitalize;
    margin-bottom: 100px;
    font-weight: 400;
    color: #024638;
    font-style: normal;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .header {
      font-size: 64px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 55px;
    }
  }

  @media screen and (max-width: 1024px) {
    background-image: url(${aboutMainLeptop});
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: url(${aboutMainTablet});

    .container {
      justify-content: center;
      align-items: flex-start;
    }

    .header {
      font-size: 45px;
      margin: 70px 20px;
      font-weight: 500;
      text-align: center;
      line-height: 118.531%;
    }
  }

  @media screen and (max-width: 500px) {
    background-image: url(${aboutMainMobile});

    .header {
      font-size: 32px;
    }
  }
`;

export const WebBanner = styled("div")`
  min-height: 95vh;
  background-image: url(${aboutMainBanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  /* background-attachment: fixed; */

  /* --- only for parallax animation --- */
  position: fixed;
  /* display: block; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transform: translateZ(0);
  will-change: transform;
  /* ------------------------ */

  .container {
    max-width: 1000px;
    margin: 0 20px;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 143.5%;
    text-transform: capitalize;
    margin-bottom: 100px;
    font-weight: 400;
    color: #024638;
    font-style: normal;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .header {
      font-size: 64px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 55px;
    }
  }

  @media screen and (max-width: 1024px) {
    background-image: url(${aboutMainLeptop});
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    background-image: url(${aboutMainTablet});

    .container {
      justify-content: center;
      align-items: flex-start;
    }

    .header {
      font-size: 45px;
      margin: 160px 20px;
      font-weight: 500;
      text-align: center;
      line-height: 118.531%;
    }
  }

  @media screen and (max-width: 500px) {
    background-image: url(${aboutMainMobile});

    .header {
      font-size: 32px;
    }
  }
`;

export const Welcome = styled("div")`
  display: flex;

  .right {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .left {
    flex: 1;

    img {
      width: 100%;
    }
  }

  .right > div {
    max-width: 440px;
    margin-left: 55px;
  }

  .header {
    color: #000000;
    // text-align: justify;
    font-size: 64px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    line-height: 118%;
    margin-bottom: 30px;

    .mobile {
      display: none;
    }
  }

  .description {
    color: #000;
    // text-align: justify;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-top: 10px;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .right > div {
      max-width: 840px;
    }

    .header {
      font-size: 90px;
      margin-bottom: 70px;
    }

    .description {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .right > div {
      max-width: 590px;
    }

    .header {
      font-size: 64px;
      margin-bottom: 30px;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .right > div {
      max-width: 440px;
    }

    .header {
      font-size: 55px;
    }

    .description {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1250px) {
    .right {
      justify-content: center;
    }

    .right > div {
      margin: 20px 20px 40px;
    }

    .header {
      font-size: 35px;
    }

    .description {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .right > div {
      max-width: fit-content;
    }

    .header {
      font-size: 32px;
      margin-bottom: 20px;
      text-align: start;

      .mobile {
        display: block;
      }

      .web {
        display: none;
      }
    }

    .description {
      color: #9e9e9e;
      font-size: 16px;
      line-height: 146.5%;
      text-align: left;
      margin-top: 10px;
    }
  }
`;

export const MissionAndVision = styled("div")`
  display: flex;

  .left {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #024638;
  }

  .right {
    background-image: url(${aboutringVision});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    flex: 1;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .left > div {
    max-width: 440px;
    margin: 40px 55px 40px 0;
  }

  .right > div {
    max-width: 440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;
    margin-left: 107px;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    color: #ffffff;
  }

  .header {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 135.031%;
    text-transform: uppercase;
    color: #ffffff;
  }

  .title {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 135.03%;
    color: #ffffff;
    margin: 20px 0;
  }

  .web-right-title {
    max-width: 300px !important;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 50px;
  }

  .point {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 135.03%;
    text-transform: uppercase;
    color: #ffffff;
    margin: 10px 0;
  }

  .desc {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135.031%;
    color: #ffffff;
  }
  .desc1 {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 135.031%;
    color: #ffffff;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .left > div {
      max-width: 840px;
      margin: 85px 15px 85px 0;
    }

    .right > div {
      max-width: 840px;
      padding: 80px 0;
    }

    .description {
      font-size: 25px;
    }

    .mobile {
      display: none;
    }

    .header {
      font-size: 90px;
    }

    .title {
      font-size: 33px;
      margin: 40px 0 60px;
    }

    .content {
      gap: 70px 50px;
    }

    .logo {
      width: 130px;
      height: 130px;
    }
    .logodaimond {
      width: 130px;
      height: 130px;
    }

    .point {
      font-size: 33px;
    }

    .desc {
      font-size: 25px;
    }
    .desc1 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .left > div {
      max-width: 630px;
    }

    .right > div {
      max-width: 620px;
    }

    .description {
      max-width: 538px;
      font-size: 20px;
    }

    .header {
      font-size: 64px;
    }

    .title {
      max-width: 521px;
      margin: 20px 0 40px;
      font-size: 20px;
      line-height: 135.031%;
    }

    .content {
      gap: 50px 50px;
    }

    .logo {
      width: 85px;
      height: 85px;
    }
    .logodaimond {
      width: 90px;
      height: 100px;
    }

    .point {
      font-size: 24px;
    }

    .desc {
      font-size: 18px;
      width: 80%;
    }
    .desc1 {
      font-size: 18px;
      width: 100%;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .left > div {
      max-width: 440px;
      margin: 40px 55px 40px 0;
    }

    .right > div {
      max-width: 440px;
      padding: 40px 0;
    }

    .description {
      font-size: 17px;
    }

    .header {
      font-size: 55px;
    }

    .title {
      margin: 20px 0 30px;
      font-size: 18px;
    }

    .content {
      gap: 40px 50px;
    }

    .logo {
      width: 70px;
      height: 70px;
    }
    .logodaimond {
      width: 70px;
      height: 70px;
    }

    .point {
      font-size: 22px;
    }

    .desc {
      font-size: 17px;
    }
    .desc1 {
      font-size: 17px;
    }
  }

  @media screen and (max-width: 1250px) {
    .left,
    .right {
      justify-content: flex-start;
    }

    .left > div {
      margin: 20px;
    }

    .right > div {
      padding: 20px 0;
      margin: 0 20px;
      width: 100%;
    }

    .description {
      font-size: 16px;
    }

    .web {
      display: none;
    }

    .mobile {
      display: block;
    }

    .header {
      font-size: 35px;
    }

    .title {
      font-size: 16px;
      margin: 10px 0;
    }

    .content {
      gap: 20px 50px;
    }

    .logo {
      width: 60px;
    }
    .logodaimond {
      width: 60px;
    }

    .point {
      font-size: 16px;
    }

    .desc {
      font-size: 14px;
    }
    .desc1 {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1024px) {
    .desc {
      width: 104%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .left > div {
      max-width: fit-content;
      margin: 50px 20px;
    }

    .right {
      background-image: url(${aboutringVisionMobile});
    }

    .right > div {
      max-width: fit-content;
      padding: 50px 0;
      height: 800px;
    }

    .description {
      font-size: 16px;
    }

    .content {
      gap: 50px;
    }

    .header {
      font-size: 32px;
    }

    .title {
      font-weight: 400;
      font-size: 18px;
      margin: 15px 0 50px;
    }

    .logo {
      width: 60px;
    }
    .logodaimond {
      width: 60px;
    }

    .point {
      margin: 15px 0;
      font-size: 24px;
      font-weight: 600;
    }

    .desc {
      font-size: 16px;
      font-weight: 400;
    }
    .desc1 {
      font-size: 16px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 320px) {
    .desc1 {
      width: 120%;
    }
  }
`;

// export const IOSImpact = styled("div")`
//   min-height: 100vh;
//   background-image: url(${imactImg});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   justify-content: center;

//   position: fixed;
//   display: block;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center center;
//   transform: translateZ(0);
//   will-change: transform;

//   .container {
//     max-width: 1000px;
//     margin: 0 20px;
//   }

//   .main {
//     margin-top: 50px;
//   }

//   .header {
//     font-family: "Prumo Deck";
//     font-size: 64px;
//     line-height: 135.03%;
//     text-transform: capitalize;
//     color: #000;
//     font-style: normal;
//     font-weight: 400;
//     margin-bottom: 30px;
//   }

//   .description {
//     font-family: "IBM Plex Sans";
//     font-weight: 500;
//     font-size: 20px;
//     line-height: 177%;
//     // text-align: justify;
//     color: #000000;
//     font-style: normal;
//     max-width: 800px;
//   }

//   .highlight {
//     font-weight: 700;
//     color: #024638;
//     text-transform: capitalize;
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }

//     .header {
//       font-size: 90px;
//     }

//     .description {
//       font-size: 34px;
//       max-width: 1400px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }

//     .header {
//       font-size: 64px;
//     }

//     .description {
//       font-size: 20px;
//       max-width: 800px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     .header {
//       font-size: 35px;
//     }

//     .description {
//       font-size: 14px;
//       max-width: 578px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//   }

//   @media screen and (max-width: 500px) {
//     .main {
//       margin-top: 40px;
//     }

//     .header {
//       font-size: 32px;
//     }

//     .description {
//       font-weight: 400;
//       font-size: 16px;
//       line-height: 162.5%;
//     }

//     .highlight {
//       font-weight: 500;
//     }
//   }
// `;

export const Impact = styled("div")`
  min-height: 100vh;
  background-image: url(${imactImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .container {
    max-width: 1000px;
    margin: 0 20px;
  }

  .main {
    margin-top: 50px;
    margin-left: 5px;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 135.03%;
    text-transform: capitalize;
    color: #000;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 20px;
    line-height: 177%;
    // text-align: justify;
    color: #000000;
    font-style: normal;
    max-width: 800px;
  }

  .highlight {
    font-weight: 700;
    color: #024638;
    text-transform: capitalize;
    margin-left: 10px;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
    }

    .description {
      font-size: 34px;
      max-width: 1400px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }

    .header {
      font-size: 64px;
    }

    .description {
      font-size: 20px;
      max-width: 800px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 55px;
    }

    .description {
      font-size: 18px;
      max-width: 745px;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 35px;
    }

    .description {
      font-size: 16px;
      max-width: 660px;
    }
  }

  @media screen and (max-width: 768px) {
    
  }

  @media screen and (max-width: 425px) {
    background-image: url(${imactImgMobile});
  }

  @media screen and (max-width: 500px) {
    .main {
      margin-top: 40px;
    }

    .header {
      font-size: 32px;
    }

    .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 162.5%;
    }

    .highlight {
      font-weight: 500;
    }
  }
`;

export const OurTeam = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .mobile {
    display: none;
  }

  .img {
    min-height: 42vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .mobile-img {
    display: none;
  }

  .one {
    background-image: url(${OurteamMan});
  }

  .two {
    background-image: url(${OurteamGlassMan});
  }

  .three {
    background-image: url(${OurteamWoman});
  }

  .content {
    background-color: #024638;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header {
    font-family: "Prumo Deck";
    font-weight: 400;
    font-size: 64px;
    line-height: 135.031%;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 15px;
    font-style: normal;
  }

  .description {
    margin: 10px 0;
    font-family: "IBM Plex Sans";
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    font-style: normal;
  }

  @media screen and (max-width: 2560px) {
    .content {
      padding: 50px;
    }

    .header {
      font-size: 90px;
    }

    .description {
      font-size: 25px;
      line-height: 42px;
    }
  }

  @media screen and (max-width: 1920px) {
    .content {
      padding: 36px;
    }

    .header {
      font-size: 64px;
    }

    .description {
      font-size: 20px;
      line-height: 32px;
    }
  }

  @media screen and (max-width: 1440px) {
    .content {
      padding: 12px;
    }
    .header {
      font-size: 55px;
    }

    .description {
      font-size: 15px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    .mobile {
      display: initial;
    }

    .web {
      display: none;
    }

    .header {
      font-size: 35px;
      text-transform: capitalize;
    }

    .description {
      font-size: 16px;
      line-height: 166.437%;
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      padding: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;

    .img {
      min-height: auto;
    }

    .mobile-img {
      display: block;
    }

    .one,
    .two,
    .three {
      background: none;
    }

    .content {
      padding: 45px 20px;
    }

    .header {
      font-size: 32px;
      margin-bottom: 10px;
    }

    .description {
      margin: 5px 0;
    }
  }
`;
