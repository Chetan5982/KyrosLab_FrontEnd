import { styled } from "@mui/material";

export const MainSection = styled("div")`
  width: 100%;
  margin-top: 76px;
  display: flex;
  align-items: center;
  margin-bottom: clamp(3.125rem, 2.25rem + 4.375vw, 7.5rem);
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
  }
  .mainBannerHeading {
    color: #000;
    font-family: Prumo Deck;
    font-size: 56px;
    width: 30%;
    position: absolute;
    top: 0;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .highlight {
    font-size: clamp(1.625rem, 0.8rem + 4.125vw, 5.75rem);
    line-height: 1;
  }
  .FourC-Heading {
    height: 500px;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  .main-img {
    position: relative;
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 63px;

    
    .mainBannerHeading {
      font-size: 22px;
      top: unset;
      padding-left: 2%;
    }
  }
  @media only screen and (min-width: 320px) {
    
    .mainBannerHeading {
      width: 50%;
      font-size: 20px;
      top: unset;
      padding-left: 2%;
    }
  }

  @media only screen and (min-width: 375px) {
    
    .mainBannerHeading {
      width: 46%;
      font-size: 20px;
      top: unset;
      padding-left: 2%;
    }
  }

  @media only screen and (min-width: 600px) {
    
    .mainBannerHeading {
      width: 40%;
      font-size: 22px;
      top: unset;
      padding-left: 2%;
    }
  }

  @media only screen and (min-width: 768px) {
    
    .mainBannerHeading {
      font-size: 32px;
      top: unset;
      padding-left: 2%;
    }
  }

  @media only screen and (min-width: 992px) {
    
    .mainBannerHeading {
      font-size: 42px;
      top: unset;
      padding-left: 2%;
    }
  }

  @media only screen and (min-width: 1200px) {
    .mainBannerHeading {
      left: 12%;
    }
    .mainBannerHeading {
      font-size: 42px;
      padding-left: 0;
    }
  }
  @media only screen and (min-width: 1400px) {
    .mainBannerHeading {
      left: 17%;
    }
    .mainBannerHeading {
      font-size: 42px;
      padding-left: 0;
    }
  }
`;
export const CaratWeightSection = styled("div")`
  margin-bottom: clamp(3.125rem, 2.25rem + 4.375vw, 7.5rem);
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
  .caratWeightHeading {
    font-family: Prumo Deck;
    font-size: clamp(1.25rem, 1.05rem + 1vw, 2.25rem);
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-bottom: 50px;
  }
  .diamond-one {
    width: 72px;
    height: 72px;
  }
  .diamond-two {
    width: 88px;
    height: 88px;
  }
  .diamond-three {
    width: 98px;
    height: 98px;
  }
  .diamond-four {
    width: 108px;
    height: 108px;
  }
  .diamond-five {
    width: 122px;
    height: 122px;
  }
  .diamond-six {
    width: 130px;
    height: 130px;
  }
  .diamond-seven {
    width: 142px;
    height: 142px;
  }
  .diamond-eight {
    width: 152px;
    height: 152px;
  }
  .diamond-one p,
  .diamond-two p,
  .diamond-three p,
  .diamond-four p,
  .diamond-five p,
  .diamond-six p,
  .diamond-seven p,
  .diamond-eight p {
    margin-top: 10px;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 700;
  }
  .maincarat {
    align-items: end;
    text-align: center;
  }
  @media only screen and (max-width: 375px) {
    .maincarat{
      grid-template-columns: repeat(2, minmax(0, 1fr));
      justify-items: center;
      row-gap:50px;
    }
  }
@media only screen and (min-width: 375px) {
  .maincarat{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
    row-gap:50px;
  }
}
@media only screen and (min-width: 425px) {
  .maincarat{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
    row-gap:50px;
  }
}
@media only screen and (min-width: 600px) {
  .maincarat {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    row-gap:50px;
    justify-items: center;
  }
}
@media only screen and (min-width: 768px) {
  .maincarat {
    row-gap:50px;
    justify-items: center;
  }
}
@media only screen and (min-width: 1024px) {
  .maincarat {
    row-gap:50px;
    justify-items: center;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media only screen and (min-width: 1240px) {
  .maincarat {
    row-gap:0px;
    justify-items: center;
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .diamond-one {
    width: 47px;
    height: 47px;
  }
  .diamond-two {
    width: 63px;
    height: 63px;
  }
  .diamond-three {
    width: 73px;
    height: 73px;
  }
  .diamond-four {
    width: 83px;
    height: 83px;
  }
  .diamond-five {
    width: 96px;
    height: 96px;
  }
  .diamond-six {
    width: 105px;
    height: 105px;
  }
  .diamond-seven {
    width: 117px;
    height: 117px;
  }
  .diamond-eight {
    width: 130px;
    height: 130px;
  }
}
@media only screen and (min-width: 1400px) {...}
@media only screen and (min-width: 1600px) {...}
@media only screen and (min-width: 1800px) {
  .diamond-one {
    width: 72px;
    height: 72px;
  }
  .diamond-two {
    width: 88px;
    height: 88px;
  }
  .diamond-three {
    width: 98px;
    height: 98px;
  }
  .diamond-four {
    width: 108px;
    height: 108px;
  }
  .diamond-five {
    width: 122px;
    height: 122px;
  }
  .diamond-six {
    width: 130px;
    height: 130px;
  }
  .diamond-seven {
    width: 142px;
    height: 142px;
  }
  .diamond-eight {
    width: 152px;
    height: 152px;
  }
}
`;
export const DaimondFeature = styled("div")`
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
  .featureTitle {
    font-family: IBM Plex Sans;
    font-size: 26px;
    font-weight: 500;
  }
  .featureDes {
    font-family: IBM Plex Sans;
    font-size: 20px;
    color: #000;
    font-weight: 400;
    margin-top:14px;
  }
  .mainfeature {
    margin-bottom: 15px;
  }
  .mainfeature:last-child {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 375px) {
    .featureTitle {
        font-size:24px;
    }
    .featureDes {
        font-size:16px;
    }
    .mainfeature{
        padding:0 15px;
    }
  }
@media only screen and (min-width: 375px) {
    .featureTitle {
        font-size:24px;
    }
    .featureDes {
        font-size:16px;
    }
    .mainfeature{
        padding:0 15px;
    }
}
@media only screen and (min-width: 1400px) {
  .featureTitle {
    font-size:26px;
  }
  .featureDes {
      font-size:20px;
  }
}
@media only screen and (min-width: 1600px) {...}
`;
