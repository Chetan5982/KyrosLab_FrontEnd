import { styled } from "@mui/material";

export const MainSection = styled("div")`
  width: 100%;
  margin-top: 76px;
  margin-bottom: 120px;
  position: relative;

  display: flex;
  align-items: center;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
  }
  .mainBannerHeading {
    color: #000;
    font-family: Prumo Deck;
    font-size: clamp(0.75rem, 0.3875rem + 1.8125vw, 2.5625rem);
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    bottom: 12%;
  }
  .highlight {
    font-size: clamp(1.5rem, 0.675rem + 4.125vw, 5.625rem);
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
 
  @media only screen and (max-width: 375px) {
    margin-top: 60px;
    margin-bottom: 50px;
  }
@media only screen and (min-width: 375px) {
  margin-top: 60px;
  margin-bottom: 50px;
}
@media only screen and (min-width: 425px) {...}
@media only screen and (min-width: 600px) {...}
@media only screen and (min-width: 768px) {
  margin-top: 76px;
}
@media only screen and (min-width: 1024px) {
  margin-bottom: 100px;
}
@media only screen and (min-width: 1240px) {...}
@media only screen and (min-width: 1400px) {
  margin-bottom: 120px;
}
@media only screen and (min-width: 1600px) {...}
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
    margin-top:14px;
    font-weight: 400;
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

export const ClearitySection = styled("div")`
  margin-bottom: 120px;
  // img {
  //   width: 80px;
  // }
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
  }
  .clearity-heading{
    font-family: Prumo Deck;
    font-size: clamp(1.25rem, 1.05rem + 1vw, 2.25rem);
    font-weight: 500;
    color: #000;
    text-align: center;
    margin-bottom:50px;
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
  .group {
    display: flex;
    justify-content: space-around;
  }

  .flawless,
  .internally-flawless,
  .very-very-slightly-included,
  .very-slightly-included {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flawless p,
  .internally-flawless p,
  .very-very-slightly-included p,
  .very-slightly-included p {
    display: inline;
    margin-top: 20px;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem);
    font-weight: 700;
  }

  .flawless img,
  .internally-flawless img,
  .very-slightly-included img,
  .slightly-includedone img,
  .slightly-includedtwo img,
  .includedone img,
  .includedtwo img {
    width: 80px;
  }

  .very-very-slightly-included img {
    width: 100px;
  }

  .main-groupOne p,
  .maingroupTwo p {
    text-align: center;
    margin-top: 20px;
    font-family: IBM Plex Sans;
    font-size: clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem);
    font-weight: 700;
  }
  .main-diamonds {
    gap: 33px;
  }

  .flawless,
  .internally-flawless,
  .daimond-groupone,
  .main-groupOne,
  .maingroupTwo {
    position: relative;
  }
  .flawless:after,
  .internally-flawless:after,
  .daimond-groupone:after,
  .main-groupOne:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 80%;
    border: 1px dashed #a7a7a7;
    top: 0;
    right: -30px;
  }
  .seconfirst {
    gap: 25px;
  }

  @media only screen and (max-width: 375px) {
    .flawless:after,
    .internally-flawless:after,
    .daimond-groupone:after,
    .main-groupOne:after {
      display: none;
    }
    .flawless{
      margin-left:25px;
    }
    .very-very-slightly-included img{
      width:102px;
    }
    .seconfirst{
      gap:8px;
    }
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px 29px;
    }
  }
@media only screen and (min-width: 375px) {
  .flawless:after,
    .internally-flawless:after,
    .daimond-groupone:after,
    .main-groupOne:after {
      display: none;
    }
    .flawless{
      margin-left:25px;
    }
    .very-very-slightly-included img{
      width:102px;
    }
    .seconfirst{
      gap:8px;
    }
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px 29px;
    }
}
@media only screen and (min-width: 425px) {...}
@media only screen and (min-width: 600px) {...}
@media only screen and (min-width: 768px) {
  .flawless:after,
    .internally-flawless:after,
    .main-groupOne:after {
      display: block;
    }
}
@media only screen and (min-width: 1024px) {
  .flawless:after,
  .internally-flawless:after,
  .daimond-groupone:after,
  .main-groupOne:after {
    display: block;
  }
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px;
    }
    .main-diamonds{
      gap:13px;
    }
    .seconfirst {
      gap:0;
    }
    .flawless {
      margin-left: 18px;
    }

    .flawless:after,
  .daimond-groupone:after,
  .main-groupOne:after {
    right: -17px;
  }
  .internally-flawless:after{
    right:8px;
  }
}
@media only screen and (min-width: 1240px) {
  .main-diamonds{
    gap:0px;
  }
  .daimond-groupone:after,
  .main-groupOne:after {
    right: -10px;
  }
}
@media only screen and (min-width: 1400px) {
  .internally-flawless p{
    padding:0px 1px;
  }
}
@media only screen and (min-width: 1600px) {
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px 20px;
    }

    .flawless:after,
    .internally-flawless:after,
     {
      right: -50px;
    }
}

@media only screen and (min-width: 1920px) {
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px;
    }

    .flawless:after,
    .internally-flawless:after,
     {
      right: -18px;
    }
}
@media only screen and (min-width: 2000px) {
  .very-very-slightly-included p,
  .very-slightly-included p {
    padding:0px 20px;
    }

    .flawless:after,
    .internally-flawless:after,
     {
      right: -50px;
    }
}
`;
