// import {
//   TradersMainBanner,
//   TradersMainBannerMobile,
//   TradersMainBannerMobiles,
//   TradersMainBannerTablat,
// } from "@/constants/images";
// import { styled } from "@mui/system";
// import { isIOS } from "react-device-detect";

// export const BannerSection = styled("div")`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `;

// export const BannerWrapper = styled("div")`
//   clip: rect(0, auto, auto, 0);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
// `;

// export const IOSBanner = styled("h1")`
//   min-height: 95vh;
//   background-image: url(${TradersMainBanner});
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
//     display: flex;
//     align-items: center;
//   }

//   .header {
//     font-family: "Prumo Deck";
//     font-size: 64px;
//     line-height: 129.531%;
//     text-transform: capitalize;
//     color: #000000;
//     font-weight: 400;
//     margin-bottom: 100px;

//     .highlight {
//       font-weight: 400;
//       color: #000;
//     }
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }

//     .header {
//       font-size: 90px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }

//     .header {
//       font-size: 64px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }

//     .header {
//       font-size: 50px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     background-image: url(${TradersMainBannerTablat});
//     .header {
//       font-size: 36px;
//       margin-top: 40%;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     .container {
//       align-items: flex-start;
//     }

//     .header {
//       margin-top: 110px;
//       font-size: 29px;
//       line-height: 157.5%;
//     }
//   }
//   @media screen and (max-width: 425px) {
//     background-image: url(${TradersMainBannerMobiles});
//     .header {
//       margin-top: 182px;
//       font-size: 25px;
//       line-height: 157.5%;
//       width: 370px;
//       font-weight: 500;
//     }
//   }
//   @media screen and (max-width: 375px) {
//     .header {
//       margin-top: 212px;
//       font-size: 23px;
//       line-height: 157.5%;
//       width: 340px;
//     }
//   }
//   @media screen and (max-width: 320px) {
//     .header {
//       margin-top: 230px;
//       font-size: 18px;
//       line-height: 157.5%;
//       width: 290px;
//     }
//   }
// `;

// const Banner = styled("h1")`
//   /* min-height: 95vh; */
//   background-image: url(${TradersMainBanner});
//   /* ${() =>
//     !isIOS &&
//     `
//   background-attachment: fixed;
// `} */

//   /* ------  */

//   position: fixed;
//   /* display: block; */
//   top: 63px;
//   left: 0;
//   width: 100%;
//   height: calc(100vh - 60px);
//   background-size: cover;
//   background-position: center center;
//   transform: translateZ(0);
//   will-change: transform;

//   /* ------- */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
//   justify-content: center;

//   .container {
//     max-width: 1000px;
//     margin: 0 20px;
//     display: flex;
//     align-items: center;
//   }

//   .header {
//     font-family: "Prumo Deck";
//     font-style: normal;
//     font-size: 64px;
//     line-height: 129.531%;
//     text-transform: capitalize;
//     color: #000000;
//     font-weight: 400;
//     margin-bottom: 100px;
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }

//     .header {
//       font-size: 90px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }

//     .header {
//       font-size: 64px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }

//     .header {
//       font-size: 50px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     background-image: url(${TradersMainBannerTablat});
//     .header {
//       font-size: 36px;
//       margin-bottom: 30%;
//     }
//   }
//   @media screen and (max-width: 500px) {
//     .header {
//       margin-top: 200px;
//       font-size: 30px;
//     }
//     .container {
//       align-items: flex-start;
//     }
//   }
//   @media screen and (max-width: 425px) {
//     background-image: url(${TradersMainBannerMobiles});
//     .header {
//       margin-top: 182px;
//       font-size: 25px;
//       line-height: 157.5%;
//       width: 370px;
//       font-weight: 500;
//     }
//   }
//   @media screen and (max-width: 375px) {
//     .header {
//       margin-top: 212px;
//       font-size: 23px;
//       line-height: 157.5%;
//       width: 340px;
//     }
//   }
//   @media screen and (max-width: 320px) {
//     .header {
//       margin-top: 230px;
//       font-size: 18px;
//       line-height: 157.5%;
//       width: 290px;
//     }
//   }
// `;

// const Welcome = styled("div")`
//   margin: 75px 0;
//   display: flex;
//   justify-content: center;

//   .container {
//     max-width: 1000px;
//     margin: 0 20px;
//   }

//   .title {
//     color: #000;
//     font-size: 36px;
//     font-family: "Prumo Deck";
//     font-style: normal;
//     font-weight: 500;
//     line-height: 135.031%;
//     text-transform: capitalize;
//     margin-bottom: 40px;
//   }

//   .description {
//     color: #000;
//     font-size: 20px;
//     font-family: IBM Plex Sans;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 184%;
//     margin-bottom: 55px;
//   }

//   @media screen and (max-width: 2560px) {
//     .container {
//       max-width: 1800px;
//     }

//     .title {
//       font-size: 50px;
//     }

//     .description {
//       font-size: 35px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .container {
//       max-width: 1300px;
//     }

//     .title {
//       font-size: 36px;
//     }

//     .description {
//       font-size: 20px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .container {
//       max-width: 1000px;
//     }

//     .description {
//       font-size: 18px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     margin: 50px 0;

//     .description {
//       font-size: 17px;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     margin: 20px 0;

//     .title {
//       font-size: 24px;
//       font-weight: 500;
//       margin-bottom: 20px;
//       margin-top: 40px;
//     }

//     .description {
//       font-size: 16px;
//       line-height: 146.5%;
//       margin-bottom: 20px;
//     }
//   }
//   @media screen and (max-width: 425px) {
//     .card-description {
//       font-size: 16px;
//     }
//   }
// `;

// const Cards = styled("div")`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   justify-content: center;
//   // grid-gap: 15px;

//   @media screen and (max-width: 2560px) {
//     grid-template-columns: auto auto auto;
//   }

//   @media screen and (max-width: 1920px) {
//     grid-template-columns: auto auto auto;
//   }

//   @media screen and (max-width: 1440px) {
//     grid-template-columns: auto auto auto;
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: auto auto;
//     grid-gap: 20px;
//   }

//   @media screen and (max-width: 500px) {
//     grid-template-columns: 1fr;
//     grid-gap: 5px;
//   }
// `;

// const Card = styled("div")`
//   background-color: #024638;
//   margin: 5px 0;
//   width: 97%;
//   img {
//     width: 100%;
//     height: 33%;
//   }

//   .content {
//     padding: 30px 30px 40px;
//   }

//   .card-header {
//     color: #fff;
//     font-size: 26px;
//     font-family: "Prumo Deck";
//     font-style: normal;
//     font-weight: 500;
//     line-height: normal;
//     text-transform: capitalize;
//   }

//   .card-title {
//     color: #fff;
//     font-size: 19px;
//     font-family: "IBM Plex Sans";
//     font-style: normal;
//     font-weight: 500;
//     line-height: normal;
//     text-transform: capitalize;
//     margin: 10px 0 20px;
//   }

//   .card-description {
//     color: #fff;
//     font-size: 19px;
//     font-family: "IBM Plex Sans";
//     font-style: normal;
//     font-weight: 300;
//     line-height: 140.6%;
//   }

//   @media screen and (max-width: 2560px) {
//     .card-header {
//       font-size: 42px;
//     }

//     .card-title {
//       font-size: 35px;
//     }

//     .card-description {
//       font-size: 35px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .card-header {
//       font-size: 24px;
//     }

//     .card-title {
//       font-size: 20px;
//     }

//     .card-description {
//       font-size: 20px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .content {
//       padding: 30px 20px 40px;
//     }

//     .card-title {
//       font-size: 18px;
//     }

//     .card-description {
//       font-size: 18px;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     .content {
//       padding: 20px;
//     }

//     .card-header {
//       font-size: 26px;
//     }

//     .card-title {
//       line-height: 154.3%;
//       margin: 10px 0;
//     }
//   }
//   @media screen and (max-width: 375px) {
//     .card-description {
//       font-size: 14px;
//     }
//     .card-title {
//       line-height: 126.3%;
//     }
//   }
//   @media screen and (max-width: 320px) {
//     width: 100%;
//     .card-description {
//       font-size: 13px;
//     }
//     .content {
//       padding: 10px;
//     }
//   }
// `;

// const Contact = styled("div")`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .img {
//     width: 100%;
//   }

//   .description {
//     position: absolute;
//     top: 0;
//     max-width: 1000px;
//     height: 100%;
//     margin: 0 20px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }

//   p {
//     color: #fff;
//     text-align: center;
//     font-size: 30px;
//     font-family: "IBM Plex Sans";
//     font-style: normal;
//     font-weight: 300;
//     line-height: 145.5%;
//     margin-bottom: 30px;
//   }

//   button {
//     font-size: 20px;
//     width: 235px;
//     height: 50px;
//     background: #a4c89a;
//     color: #024638;
//     font-family: "IBM Plex Sans";
//     font-weight: 600;
//     line-height: 135.938%;
//     text-transform: capitalize;
//   }

//   @media screen and (max-width: 2560px) {
//     .description {
//       max-width: 1800px;
//     }

//     p {
//       font-size: 38px;
//       margin-bottom: 50px;
//     }

//     button {
//       font-size: 28px;
//       width: 300px;
//       height: 70px;
//     }
//   }

//   @media screen and (max-width: 1920px) {
//     .description {
//       max-width: 1300px;
//     }

//     p {
//       font-size: 28px;
//       margin-bottom: 30px;
//     }

//     button {
//       font-size: 16px;
//       width: 183px;
//       height: 47px;
//     }
//   }

//   @media screen and (max-width: 1440px) {
//     .description {
//       max-width: 1000px;
//     }

//     p {
//       font-size: 24px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     p {
//       font-size: 18px;
//     }

//     button {
//       width: 131px;
//       height: 40px;
//       font-size: 16px;
//     }
//   }

//   @media screen and (max-width: 500px) {
//     .img {
//       height: 320px;
//     }

//     p {
//       font-size: 14px;
//       line-height: 137.5%;
//     }
//   }
// `;

// export { Banner, Welcome, Card, Cards, Contact };
