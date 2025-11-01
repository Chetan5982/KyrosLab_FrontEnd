import { gallarymainbanner } from "@/constants/images";
import { styled } from "@mui/system";
import { isIOS } from "react-device-detect";

export const BannerSection = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
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
  background-image: url(${gallarymainbanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  display: flex !important;
  align-items: center !important;

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
    display: flex;
    align-items: center;
  }

  .header {
    margin-bottom: 100px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 129.53%;
    text-transform: capitalize;
    color: #000000;

    .highlight {
      color: #024638;
    }

    .mobile {
      display: none;
    }
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
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      justify-content: center;
      align-items: center;
    }

    .header {
      font-size: 36px;
      line-height: 115.53%;
    }
  }

  @media screen and (max-width: 600px) {
    background-image: url(${gallarymainbanner});

    .header {
      font-weight: 700;
      font-size: 22px;
      line-height: 150%;

      .mobile {
        display: initial;
      }

      .web {
        display: none;
      }
    }
  }
  @media screen and (max-width: 320px) {
    top: 63px;
  }
`;

export const Banner = styled("div")`
  min-height: 95vh;
  background-image: url(${gallarymainbanner});
  /* ${() =>
    !isIOS &&
    `
  background-attachment: fixed;
`} */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  /* ------  */

  position: fixed;
  /* display: block; */
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 79px);
  background-size: cover;
  background-position: center center;
  transform: translateZ(0);
  will-change: transform;

  /* ------- */

  .container {
    max-width: 1000px;
    margin: 0 20px;
    display: flex;
    align-items: center;
  }

  .header {
    margin-bottom: 100px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 129.53%;
    text-transform: capitalize;
    color: #000000;

    .mobile {
      display: none;
    }
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
    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      justify-content: center;
      align-items: center;
    }

    .header {
      font-size: 36px;
      line-height: 115.53%;
    }
  }

  @media screen and (max-width: 600px) {
    min-height: 87vh;
    top: 60px;
    background-image: url(${gallarymainbanner});

    .header {
      font-size: 22px;
      line-height: 150%;

      .mobile {
        display: initial;
      }

      .web {
        display: none;
      }
    }
  }
  @media screen and (max-width: 320px) {
    top: 63px;
  }
`;

export const Gallary = styled("div")`
  display: flex;
  justify-content: center;
  margin: 150px 0;

  .container {
    max-width: 1000px;
    margin: 0 20px;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 80px 0;
  }

  @media screen and (max-width: 768px) {
    margin: 50px 0;
  }
`;

export const Cards = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 50px 15px;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px 15px;
  }
`;

export const Card = styled("div")`
  img {
    width: 100%;
  }

  .title {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 135.03%;
    text-transform: capitalize;
    color: #024638;
    padding: 20px 0;
  }

  @media screen and (max-width: 2560px) {
    .title {
      font-size: 50px;
      padding: 40px 0;
    }
  }

  @media screen and (max-width: 1920px) {
    .title {
      font-size: 36px;
      padding: 20px 0;
    }
  }

  @media screen and (max-width: 1440px) {
    .title {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    .title {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      padding: 15px 0;
      font-size: 20px;
      line-height: 135.031%;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 426px) {
    .title {
      padding: 10px 0;
      font-size: 16px;
    }
  }
`;
