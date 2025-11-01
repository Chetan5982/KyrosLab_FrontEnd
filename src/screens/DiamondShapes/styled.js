import { Cvdherodesktop, daimondShapeHero } from "@/constants/images";
import { styled } from "@mui/material";

export const DaimondShapeHeroSection = styled("div")`
  margin-top: 4%;
  margin-bottom: clamp(2.125rem, 1.05rem + 5.375vw, 7.5rem);
  .main-img {
    position: relative;
  }

  .mainBannerHeading {
    position: absolute;
    bottom: 9%;
    right: clamp(1.875rem, -1.5rem + 16.875vw, 18.75rem);
    color: #fff;
    font-family: Prumo Deck;
    font-size: clamp(1.25rem, 1rem + 1.25vw, 2.5rem);
    display: inline-grid;
    justify-items: center;
    line-height: clamp(1.875rem, 1.375rem + 2.5vw, 4.375rem);
    font-weight: 400;
  }
  .highlight {
    font-size: clamp(1.6875rem, 0.9rem + 3.9375vw, 5.625rem);
  }

  @media only screen and (max-width: 375px) {
    margin-top: 63px;
  }
  @media only screen and (min-width: 375px) {
  }
  @media only screen and (min-width: 425px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1240px) {
  }
  @media only screen and (min-width: 1400px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

export const ShapesSection = styled("div")`
  .shapes_title .innerTitle {
    text-align: center;
  }
  .shapes_title .innerTitle {
    font-family: Prumo Deck;
    font-size: clamp(1.125rem, 0.9rem + 1.125vw, 2.25rem);
    font-weight: 500;
  }
  .innerTitle {
    margin-bottom: clamp(1.875rem, 1.475rem + 2vw, 3.875rem);
  }
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
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

  .contentShape .title {
    font-family: IBM Plex Sans;
    font-size: clamp(1.125rem, 1.025rem + 0.5vw, 1.625rem);
    font-weight: 500;
  }
  .contentShape .description {
    font-family: IBM Plex Sans;
    color: #8f8f8f;
    font-size: clamp(0.875rem, 0.8rem + 0.375vw, 1.25rem);
    line-height: clamp(1.25rem, 1.05rem + 1vw, 2.25rem);
  }

  .contentShape {
    margin: 0px 0px 14px 24px;
  }

  .mainRound {
    display: flex;
  }
  .mainRound img {
    width: clamp(15rem, 13.375rem + 8.125vw, 23.125rem);
    height: clamp(11.25rem, 10rem + 6.25vw, 17.5rem);
  }
  .mainRound:nth-child(even) {
    flex-direction: row-reverse;
  }

  .mainRound:nth-child(odd) .shapeG {
    position: absolute;
    left: 20%;
  }
  .mainRound:nth-child(even) .shapeG {
    position: absolute;
    right: 20%;
    text-align: right;
  }
  .mainRound:nth-child(even) img {
    // transform: scaleX(-1);
  }
  .mainRound:nth-child(even) .contentShape {
    margin: 0px 24px 14px 0px;
  }

  .shapImg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 375px) {
    margin-top: 63px;
    .mainRound {
      display: flex;
      margin: 50px 0px;
      flex-direction: column-reverse;
    }
    .mainRound:nth-child(odd) .shapeG {
      position: unset;
    }
    .mainRound:nth-child(even) .shapeG {
      position: unset;
      text-align: left;
    }
    .mainRound .contentShape {
      margin: 14px 14px;
    }
    .mainRound:nth-child(even) .contentShape {
      margin: 0px 14px;
    }
    .shapImg {
      display: flex;
      justify-content: center;
    }
    .shapes_title .innerTitle {
      font-weight: 600;
    }
    .mainRound:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
  @media only screen and (min-width: 375px) {
    margin-top: 63px;
    .mainRound {
      display: flex;
      margin: 50px 0px;
      flex-direction: column-reverse;
    }
    .mainRound:nth-child(odd) .shapeG {
      position: unset;
    }
    .mainRound:nth-child(even) .shapeG {
      position: unset;
      text-align: left;
    }
    .mainRound .contentShape {
      margin: 0 14px 15px 14px;
    }
    .mainRound:nth-child(even) .contentShape {
      margin: 0 14px 15px 14px;
    }
    .shapImg {
      display: flex;
      justify-content: center;
    }
    .shapes_title .innerTitle {
      font-weight: 600;
    }
    .mainRound:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
  @media only screen and (min-width: 425px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    margin-top: 63px;
    .mainRound {
      display: flex;
      margin: 50px 0px;
      flex-direction: unset;
    }
    .mainRound:nth-child(odd) .shapeG {
      position: absolute;
    }
    .mainRound:nth-child(even) .shapeG {
      position: absolute;
      text-align: right;
    }
    .mainRound .contentShape {
      margin: 0 7px 15px 32px;
    }
    .mainRound:nth-child(even) .contentShape {
      margin: 0 32px 15px 7px;
    }
    .mainRound:nth-child(even) .shapImg {
      justify-content: right;
    }
    .shapImg {
      display: flex;
      justify-content: left;
    }
    .shapes_title .innerTitle {
      font-weight: 600;
    }
    .mainRound:nth-child(even) {
      flex-direction: unset;
    }
  }
  @media only screen and (min-width: 1024px) {
    .mainRound .contentShape {
      margin: 0px 0px 14px 24px;
    }
    .mainRound:nth-child(even) .contentShape {
      margin: 0px 24px 14px 0px;
    }
  }
  @media only screen and (min-width: 1240px) {
  }
  @media only screen and (min-width: 1400px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;

export const SeoSection = styled("div")`
  margin-top: clamp(3.4375rem, 2.625rem + 4.0625vw, 7.5rem);
  margin-bottom: clamp(3.4375rem, 2.625rem + 4.0625vw, 7.5rem);

  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
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
  .mainseo {
    background-color: #f9f9f9;
    padding: 53px 30px 53px 30px;
  }
  .seotitle {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: clamp(1.125rem, 1rem + 0.625vw, 1.75rem);
    font-weight: 500;
    text-transform: capitalize;
  }
  .seodes {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: clamp(0.75rem, 0.675rem + 0.375vw, 1.125rem);
    font-weight: 400;
  }


@media only screen and (max-width: 600px) {
  
  .seodes {
    color: #8F8F8F;
  }
}

@media only screen and (min-width: 600px) {
  
  .seodes {
    color: #8F8F8F;
}

@media only screen and (min-width: 768px) {
  
  .seodes {
    color: #000;
}
`;

export const LastSection = styled("div")`
  background-color: #024638;
  text-align: center;
  padding-top: clamp(3.75rem, 2.7375rem + 5.0625vw, 8.8125rem);
  padding-bottom: clamp(3.75rem, 2.7375rem + 5.0625vw, 8.8125rem);

  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
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

  .mainSection .Heading {
    font-family: Prumo Deck;
    font-size: clamp(1.125rem, 0.9rem + 1.125vw, 2.25rem);
    font-weight: 500;
    color: #fff;
  }
  .mainSection .lastDes {
    font-family: IBM Plex Sans;
    font-size: clamp(0.875rem, 0.8rem + 0.375vw, 1.25rem);
    font-weight: 400;
    color: #c1c1c1;
  }
  .mainSection .lastBtn {
    font-family: IBM Plex Sans;
    font-size: clamp(0.875rem, 0.85rem + 0.125vw, 1rem);
    font-weight: 500;
    color: #024638;
    background-color: #fff;
    border: 1px solid #fff;
    padding: 16px 50px;
    margin-top: 25px;
  }

  @media only screen and (max-width: 375px) {
  }
  @media only screen and (min-width: 375px) {
  }
  @media only screen and (min-width: 425px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1240px) {
  }
  @media only screen and (min-width: 1400px) {
  }
  @media only screen and (min-width: 1600px) {
  }
`;
