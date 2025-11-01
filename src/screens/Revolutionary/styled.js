import {
  NoEarth,
  NoEarthMobile,
  NoWater,
  NoWaterMobile,
  NonConflict,
  NonConflictMobile,
  NonDestructive,
  NonDestructiveMobile,
  NonPolluting,
  NonPollutingMobile,
  NonToxic,
  NonToxicMobile,
  RevolutionaryMainBanner,
  RevolutionaryMainBannerMobile,
} from "@/constants/images";
import { styled } from "@mui/system";
import { isIOS } from "react-device-detect";

export const BannerSection = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const WebBannerSection = styled("div")`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: ${(props) => props.maxHeight};
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

export const IOSRevolutionaryArchetype = styled("div")`
  min-height: 100vh;
  background-image: url(${RevolutionaryMainBanner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex !important;
  justify-content: flex-end !important;

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
    position: relative;
  }

  .header {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 118.53%;
    text-transform: capitalize;
    color: #ffffff;

    position: fixed;
    right: 100px;
    top: 478px;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
      right: 23%;
      top: 270px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
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
      font-size: 50px;
      right: 21%;
      top: 130px;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 36px;
      right: 170px;
      top: 100px;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      font-size: 36px;
      right: 40px;
      top: 100px;
    }
  }

  @media screen and (max-width: 600px) {
    background-image: url(${RevolutionaryMainBannerMobile});
    background-size: 100% auto;
    width: 100%;

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .header {
      position: initial;
      margin: 100px 20px;
      font-weight: 500;
      font-size: 32px;
      line-height: 118.53%;
      color: #000000;
      text-align: center;

      .highlight {
        color: #024638;
      }
    }
  }
`;

export const IOSNoHarms = styled("div")`
  .no-water-wasted,
  .non-polluting-energy,
  .no-earth-uprooted,
  .non-toxic-air,
  .non-conflict,
  .non-destructive-production {
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
  }

  .no-water-wasted {
    display: flex;
    align-items: center;
    background-image: url(${NoWater});
    min-height: 500px;
  }

  .non-polluting-energy {
    display: flex;
    align-items: center;
    background-image: url(${NonPolluting});
    min-height: 600px;
  }

  .no-earth-uprooted {
    display: flex;
    align-items: center;
    background-image: url(${NoEarth});
    min-height: 700px;
  }

  .non-toxic-air {
    display: flex;
    align-items: center;
    background-image: url(${NonToxic});
    min-height: 800px;
  }

  .non-conflict {
    display: flex;
    align-items: center;
    background-image: url(${NonConflict});
    min-height: 900px;
  }

  .non-destructive-production {
    display: flex;
    align-items: center;
    background-image: url(${NonDestructive});
    min-height: 1000px;
  }

  .container {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-family: "Prumo Deck";
      font-style: normal;
      font-weight: 300;
      font-size: 64px;
      line-height: 135.03%;
      text-transform: capitalize;
      color: #ffffff;
    }

    .mobile {
      display: none;
    }

    .description {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      // text-align: justify;
      color: #ffffff;
      width: 400px;
    }
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;

      .title {
        font-size: 90px;
      }

      .description {
        font-size: 32px;
        width: 700px;
      }
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;

      .title {
        font-size: 64px;
      }

      .description {
        font-size: 24px;
        width: 493px;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;

      .title {
        font-size: 55px;
      }

      .description {
        font-size: 20px;
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 0 20px;

      .title {
        font-size: 35px;
      }

      .description {
        font-size: 16px;
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      .title {
        font-size: 30px;
      }

      .description {
        font-size: 14px;
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .no-water-wasted {
      background-image: url(${NoWaterMobile});
      min-height: 350px;
    }

    .non-polluting-energy {
      background-image: url(${NonPollutingMobile});
      min-height: 450px;
    }

    .no-earth-uprooted {
      background-image: url(${NoEarthMobile});
      min-height: 550px;
    }

    .non-toxic-air {
      background-image: url(${NonToxicMobile});
      min-height: 650px;
    }

    .non-conflict {
      background-image: url(${NonConflictMobile});
      min-height: 750px;
    }

    .non-destructive-production {
      background-image: url(${NonDestructiveMobile});
      min-height: 850px;
    }

    .container {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0 20px 40px;

      .title {
        font-size: 32px;
        line-height: 135.03%;
        margin-bottom: 20px;
        font-weight: 300;
      }

      .web {
        display: none;
      }

      .mobile {
        display: block;
      }

      .description {
        font-size: 16px;
        line-height: 146%;
        width: auto;
      }
    }
  }
`;

export const RevolutionaryTitle = styled("div")`
  font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  line-height: 123.5%;
  text-transform: capitalize;
  color: #333;

  @media screen and (max-width: 2560px) {
    font-size: 90px;
  }

  @media screen and (max-width: 1920px) {
    font-size: 61px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 45px;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const RevolutionaryArchetype = styled("div")`
  width: 100%;
  height: 100vh;
  background-image: ${({ isImage }) =>
    isImage && `url(${RevolutionaryMainBanner})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 79px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  border: 1px solid #efefef;

  .container {
    max-width: 1000px;
    margin: 0 20px;
    position: relative;
  }

  .header {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 61px;
    line-height: 123.5%;
    text-transform: capitalize;
    color: #333;
    z-index: 1;

    @media screen and (max-width: 2560px) {
      .container {
        max-width: 1800px;
      }

      .header {
        font-size: 90px;
        right: 20%;
        top: 363px;
        text-align: center;
      }
    }

    @media screen and (max-width: 1920px) {
      .container {
        max-width: 1350px;
      }

      .header {
        font-size: 61px;
        right: 21%;
        top: 263px;
      }
    }

    @media screen and (max-width: 1440px) {
      .container {
        max-width: 1000px;
      }

      .header {
        font-size: 50px;
        right: 90px;
        top: 240px;
      }
    }

    @media screen and (max-width: 1024px) {
      .header {
        font-size: 45px;
        right: 80px;
        top: 255px;
      }
    }

    @media screen and (max-width: 768px) {
      .header {
        font-size: 36px;
        right: 40px;
        top: 30%;
      }
    }

    @media screen and (max-width: 600px) {
      background-image: url(${RevolutionaryMainBannerMobile});
      background-size: 100% auto;

      .container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      .header {
        position: fixed;
        margin: 100px 15px;
        font-weight: 500;
        font-size: 32px;
        line-height: 118.53%;
        color: #000000;
        text-align: center;
        top: 71%;
        left: 5%;
        z-index: 1;
      }
    }
  }
  @media screen and (max-width: 425px) {
    top: 62px;
  }
  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .header {
      font-size: 90px;
      right: 20%;
      top: 363px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .header {
      font-size: 61px;
      right: 21%;
      top: 263px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .header {
      font-size: 50px;
      right: 90px;
      top: 240px;
    }
  }

  @media screen and (max-width: 1024px) {
    .header {
      font-size: 45px;
      right: 80px;
      top: 255px;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      font-size: 36px;
      right: 40px;
      top: 30%;
    }
  }

  @media screen and (max-width: 600px) {
    background-image: url(${RevolutionaryMainBannerMobile});
    background-size: 100% auto;

    .container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .header {
      position: fixed;
      margin: 100px 15px;
      font-weight: 500;
      font-size: 32px;
      line-height: 118.53%;
      color: #000000;
      text-align: center;
      top: 71%;
      left: 5%;
      z-index: 1;
    }
  }
`;

export const NoHarms = styled("div")`
  .no-water-wasted,
  .non-polluting-energy,
  .no-earth-uprooted,
  .non-toxic-air,
  .non-conflict,
  .non-destructive-production {
    ${() =>
      !isIOS &&
      `
    background-attachment: fixed;
  `}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
  }

  .no-water-wasted {
    background-image: url(${NoWater});
    min-height: 500px;
  }

  .non-polluting-energy {
    background-image: url(${NonPolluting});
    min-height: 600px;
  }

  .no-earth-uprooted {
    background-image: url(${NoEarth});
    min-height: 700px;
  }

  .non-toxic-air {
    background-image: url(${NonToxic});
    min-height: 800px;
  }

  .non-conflict {
    background-image: url(${NonConflict});
    min-height: 900px;
  }

  .non-destructive-production {
    background-image: url(${NonDestructive});
    min-height: 1000px;
  }

  .container {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-family: "Prumo Deck";
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 135.03%;
      text-transform: capitalize;
      color: #ffffff;
    }

    .mobile {
      display: none;
    }

    .description {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: #ffffff;
      width: 493px;
    }
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;

      .title {
        font-size: 90px;
      }

      .description {
        font-size: 32px;
        width: 700px;
      }
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;

      .title {
        font-size: 64px;
      }

      .description {
        font-size: 24px;
        width: 493px;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;

      .title {
        font-size: 55px;
      }

      .description {
        font-size: 20px;
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      padding: 0 20px;

      .title {
        font-size: 35px;
      }

      .description {
        font-size: 16px;
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      .title {
        font-size: 30px;
      }

      .description {
        font-size: 14px;
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .no-water-wasted {
      background-image: url(${NoWaterMobile});
      min-height: 350px;
    }

    .non-polluting-energy {
      background-image: url(${NonPollutingMobile});
      min-height: 450px;
    }

    .no-earth-uprooted {
      background-image: url(${NoEarthMobile});
      min-height: 550px;
    }

    .non-toxic-air {
      background-image: url(${NonToxicMobile});
      min-height: 650px;
    }

    .non-conflict {
      background-image: url(${NonConflictMobile});
      min-height: 750px;
    }

    .non-destructive-production {
      background-image: url(${NonDestructiveMobile});
      min-height: 850px;
    }

    .container {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0 20px 30px;

      .title {
        font-size: 32px;
        margin-bottom: 20px;
      }

      .web {
        display: none;
      }

      .mobile {
        display: block;
      }

      .description {
        font-size: 16px;
        line-height: 146%;
        width: auto;
      }
    }
  }
`;

export const Infrastructure = styled("div")`
  display: flex;
  z-index: 1;
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
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 128.94%;
    text-transform: capitalize;
    color: #000;
  }

  .description {
    margin-top: 10px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-size: 20px;
    line-height: 184%;
    color: #000000;
    font-weight: 400;
  }

  .title {
    color: #000;
    font-size: 24px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    line-height: 38.2px;
    margin: 10px 0 40px;
    text-transform: capitalize;
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
    }

    .description {
      font-size: 30px;
    }

    .title {
      font-size: 38px;
      margin: 20px 0 50px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .right > div {
      max-width: 620px;
    }

    .header {
      font-size: 64px;
    }

    .description {
      font-size: 20px;
    }

    .title {
      font-size: 24px;
      margin: 10px 0 40px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .right > div {
      max-width: 440px;
    }
  }

  @media screen and (max-width: 1250px) {
    .right {
      justify-content: center;
    }

    .right > div {
      margin: 30px 20px;
    }

    .header {
      font-size: 45px;
    }

    .description {
      font-size: 14px;
      margin-top: 5px;
    }

    .title {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 850px) {
    .header {
      font-size: 30px;
    }

    .description {
      font-size: 13px;
    }

    .title {
      font-size: 15px;
      margin: 10px 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .right > div {
      max-width: fit-content;
    }

    .header {
      font-size: 45px;
    }

    .description {
      margin-top: 10px;
      font-size: 16px;
      color: #9e9e9e;
      font-weight: 400;
      line-height: 146%;
    }

    .title {
      font-size: 18px;
      font-weight: 500;
      line-height: 145%;
      margin: 15px 0;
    }
  }
`;

export const Benefits = styled("div")`
  display: flex;

  .left {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .right {
    flex: 1;

    img {
      width: 100%;
    }
  }

  .left > div {
    width: 440px;
    margin-right: 92px;
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 118%;
    text-transform: capitalize;
    color: #000000;
    font-weight: 400;
    font-style: normal;
  }

  .mobile {
    display: none;
  }

  .title {
    font-family: "IBM Plex Sans";
    font-size: 20px;
    line-height: 140.62%;
    color: #000000;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
  }

  .points {
    display: flex;
    justify-content: space-between;

    ul {
      margin-right: 15px;

      li {
        list-style-type: disc;
        margin-left: 33px;
        padding: 10px 0;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-size: 20px;
        line-height: 140.62%;
        color: #000000;
        font-weight: 400;
      }
    }
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .left > div {
      width: 840px;
    }

    .header {
      font-size: 90px;
      margin-bottom: 70px;
    }

    .title {
      font-size: 40px;
      margin-bottom: 40px;
      line-height: 50px;
    }

    .points {
      ul {
        li {
          font-size: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .left > div {
      width: 620px;
    }

    .header {
      font-size: 64px;
      margin-bottom: 20px;
    }

    .title {
      font-size: 20px;
      line-height: 140.62%;
      margin-bottom: 10px;
    }

    .points {
      ul {
        li {
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .left > div {
      width: 440px;
      margin-right: 55px;
    }

    .header {
      font-size: 49px;
      margin-bottom: 50px;
    }
    .points {
      ul {
        li {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .left {
      justify-content: center;
    }

    .left > div {
      width: 100%;
      margin: 20px;
    }

    .header {
      font-size: 45px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .points {
      ul {
        li {
          font-size: 16px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .right {
      order: 1;
    }

    .left {
      order: 2;
    }

    .left > div {
      margin: 20px 20px 60px;
    }

    .header {
      font-size: 45px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 18px;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .points {
      ul {
        li {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    .header {
      margin: 0 0 20px;
      font-size: 36px;
      line-height: 110.125%;
    }

    .web {
      display: none;
    }

    .mobile {
      display: block;
    }

    .title {
      font-weight: 500;
      font-size: 16px;
    }

    .points {
      ul {
        li {
          font-size: 14px;
          padding: 5px 0;
        }
      }
    }
  }
`;

export const OurProcess = styled("div")`
  .our-process {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 135.03%;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    margin: 100px 0;
  }

  .line1,
  .line2 {
    margin: auto;
  }

  @media screen and (max-width: 2560px) {
    .our-process {
      font-size: 90px;
    }
  }

  @media screen and (max-width: 1920px) {
    .our-process {
      font-size: 64px;
    }
  }

  @media screen and (max-width: 1024px) {
    .our-process {
      font-size: 35px;
      margin: 60px 0;
    }
  }

  @media screen and (max-width: 768px) {
    .our-process {
      margin: 50px 0;
      font-size: 36px;
      line-height: 128.94%;
    }

    .line1,
    .line2 {
      width: 200px;
    }
  }
`;

export const Section1 = styled("div")`
  display: flex;

  .left {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .right {
    flex: 1;

    img {
      width: 100%;
    }
  }

  .left > div {
    max-width: 440px;
    padding: 55px;
    background: #f9f9f9;
  }

  .header {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 128.94%;
    text-transform: capitalize;
    color: #024638;
    margin-bottom: 60px;
  }

  .title {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: normal;
    text-transform: capitalize;
    color: #000000;
    margin-bottom: 15px;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 184%;
    color: #000000;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .left > div {
      max-width: 895px;
    }

    .header {
      font-size: 90px;
      margin-bottom: 100px;
    }

    .title {
      font-size: 45px;
      margin-bottom: 20px;
    }

    .description {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .left > div {
      max-width: 675px;
      padding: 40px;
    }

    .header {
      font-size: 64px;
      margin-bottom: 60px;
    }

    .title {
      font-size: 36px;
      margin-bottom: 15px;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .left {
      justify-content: center;
      background: #f9f9f9;
    }

    .left > div {
      max-width: 440px;
      padding: 20px;
    }

    .header {
      font-size: 35px;
      margin-bottom: 40px;
    }

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .left {
      order: 2;
      background: none;
    }

    .right {
      order: 1;

      img {
        padding: 0 20px;
      }
    }

    .left > div {
      max-width: fit-content;
      padding: 20px;
      margin: 0 20px;
    }

    .header {
      font-size: 44px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .description {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Section2 = styled("div")`
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
    padding: 55px;
    background: #f9f9f9;
  }

  .header {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 128.94%;
    text-transform: capitalize;
    color: #024638;
    margin-bottom: 60px;
  }

  .title {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: normal;
    text-transform: capitalize;
    color: #000000;
    margin-bottom: 15px;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 184%;
    color: #000000;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .right > div {
      max-width: 895px;
    }

    .header {
      font-size: 90px;
      margin-bottom: 100px;
    }

    .title {
      font-size: 45px;
      margin-bottom: 20px;
    }

    .description {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .right > div {
      max-width: 675px;
      padding: 40px;
    }

    .header {
      font-size: 64px;
      margin-bottom: 60px;
    }

    .title {
      font-size: 36px;
      margin-bottom: 15px;
    }

    .description {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .right {
      justify-content: center;
      background: #f9f9f9;
    }

    .right > div {
      max-width: 440px;
      padding: 20px;
    }

    .header {
      font-size: 35px;
      margin-bottom: 40px;
    }

    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .left {
      img {
        padding: 0 20px;
      }
    }

    .right {
      background: none;
    }

    .right > div {
      max-width: fit-content;
      padding: 20px;
      margin: 0 20px;
    }

    .header {
      font-size: 44px;
      margin-bottom: 30px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .description {
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Certifications = styled("div")`
  display: flex;
  justify-content: center;
  margin: 150px 0;

  .container {
    max-width: 1000px;
    margin: 0 20px;
    display: flex;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;

    img {
      width: 300px;
    }
  }

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    line-height: 128.94%;
    text-transform: capitalize;
    color: #000000;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .description {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140.62%;
    color: #000000;
    margin-bottom: 10px;
  }

  .footer {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140.62%;
    color: #024638;
    margin-top: 20px;
  }

  .certificationsLogo-mobile {
    display: none;
  }

  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }

    .right {
      img {
        width: 500px;
      }
    }

    .header {
      font-size: 90px;
    }

    .description {
      font-size: 30px;
    }

    .footer {
      font-size: 34px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1350px;
    }

    .right {
      img {
        width: 400px;
      }
    }

    .header {
      font-size: 64px;
    }

    .description {
      font-size: 20px;
    }

    .footer {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }

    .right {
      img {
        width: 300px;
      }
    }

    .header {
      font-size: 64px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 100px 0;

    .header {
      font-size: 35px;
    }

    .description {
      font-size: 16px;
    }

    .footer {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 70px 0;

    .container {
      flex-direction: column;
    }

    .right {
      justify-content: center;

      img {
        display: none;
      }
    }

    .header {
      font-size: 36px;
      font-weight: 500;
    }

    .certificationsLogo-mobile {
      display: block;
      margin: auto;
      width: 300px;
      margin-bottom: 40px;
    }

    .description {
      font-size: 18px;
      color: #9e9e9e;
      font-weight: 500;
      margin-bottom: 20px;
    }

    .footer {
      font-size: 20px;
      line-height: 140.62%;
      text-transform: uppercase;
      color: #024638;
      font-weight: 600;
    }
  }
`;
