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
    color: #024638;
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
    font-size: 92px;
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
  @media only screen and (min-width: 320px) {
    margin-bottom: 20px;
    .highlight {
      font-size: 24px;
    }
    .mainBannerHeading {
      width: 50%;
      font-size: 12px;
      top: 22%;
      padding-left: 0;
      right: 20px;
    }
  }

  @media only screen and (min-width: 375px) {
    margin-bottom: 30px;
    .highlight {
      font-size: 24px;
    }
    .mainBannerHeading {
      width: 50%;
      font-size: 12px;
      top: 22%;
      padding-left: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 425px) {
    margin-bottom: 40px;
    .highlight {
      font-size: 28px;
    }
    .mainBannerHeading {
      width: 50%;
      font-size: 16px;
      top: 22%;
      padding-left: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 600px) {
    margin-bottom: 50px;
    .highlight {
      font-size: 48px;
    }
    .mainBannerHeading {
      width: 60%;
      font-size: 22px;
      top: 22%;
      padding-left: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
    .highlight {
      font-size: 62px;
    }
    .mainBannerHeading {
      width: 60%;
      font-size: 26px;
      top: 22%;
      padding-left: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 992px) {
    .highlight {
      font-size: 72px;
    }
    .mainBannerHeading {
      width: 50%;
      font-size: 28px;
      top: 22%;
      padding-left: 0;
      right: 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 100px;
    .mainBannerHeading {
      width: 50%;
      font-size: 30px;
      top: 22%;
      padding-left: 0;
      right: 4%;
      text-align: center;
    }
    .highlight {
      font-size: 70px;
    }
  }
  @media only screen and (min-width: 1400px) {
    margin-bottom: 120px;
    .mainBannerHeading {
      width: 50%;
      font-size: 36px;
      top: 22%;
      padding-left: 0;
      right: 0;
      text-align: center;
    }
    .highlight {
      font-size: 90px;
    }
  }
  @media only screen and (min-width: 1600px) {
    margin-bottom: 120px;
    .mainBannerHeading {
      width: 50%;
      font-size: 40px;
      top: 22%;
      padding-left: 0;
      right: 4%;
      text-align: center;
    }
    .highlight {
      font-size: 92px;
    }
  }
`;

export const CutSection = styled("div")`
  margin-bottom: 100px;
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
  .daimondCutHeading {
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
  }
  .daimondCutpare {
    font-family: IBM Plex Sans;
    font-size: 20px;
    color: #8f8f8f;
    font-weight: 400;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 40px;
    .daimondCutHeading {
        font-size:26px;
    }
    .daimondCutpare{
        font-size:14px;
    }
    .cut-content{
        padding:0 20px;
    }
  }
@media only screen and (min-width: 375px) {
    margin-bottom: 40px;
    .daimondCutHeading {
        font-size:26px;
    }
    .daimondCutpare{
        font-size:16px;
    }
    .cut-content{
        padding:0 20px;
    }
}
@media only screen and (min-width: 425px) {
  margin-bottom: 50px;
  .daimondCutHeading {
      font-size:28px;
  }
  .daimondCutpare{
      font-size:16px;
  }
  .cut-content{
      padding:0 20px;
  }
}
@media only screen and (min-width: 600px) {
  margin-bottom: 50px;
  .daimondCutHeading {
      font-size:30px;
  }
  .daimondCutpare{
      font-size:16px;
  }
}
@media only screen and (min-width: 768px) {...}
@media only screen and (min-width: 1024px) {
  margin-bottom: 100px;
  .daimondCutHeading {
      font-size:32px;
  }
  .daimondCutpare{
      font-size:16px;
  }
}
@media only screen and (min-width: 1200px) {
  margin-bottom: 120px;
  .daimondCutHeading {
      font-size:34px;
  }
  .daimondCutpare{
      font-size:16px;
  }
}
@media only screen and (min-width: 1400px) {
  margin-bottom: 120px;
  .daimondCutHeading {
      font-size:36px;
  }
  .daimondCutpare{
      font-size:20px;
  }
}
@media only screen and (min-width: 1600px) {
  margin-bottom: 120px;
  .daimondCutHeading {
      font-size:38px;
  }
  .daimondCutpare{
      font-size:20px;
  }
}
`;

export const DaimondTypes = styled("div")`
  margin-bottom: 120px;
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
  .daimond_shap img {
    width: 100%;
    max-width: 110px;
    height: 110px;
    object-fit: contain;
  }
  .daimond_shap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .daimondTypeHeading {
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 40px;
    .daimondTypeHeading {
        font-size:28px;
        margin-bottom: 16px;
    } 
    .daimond_shap img {
        width: 100%;
        max-width: 50px;
        height: 50px;
        object-fit: contain;
    }  
    .row{
        row-gap:20px;
    } 
    .daimond_shap p{
        font-size:12px;
        margin-top:5px;
        font-weight:600;
    }
  }
@media only screen and (min-width: 375px) {
    margin-bottom: 40px;
    .daimondTypeHeading {
        font-size:32px;
        margin-bottom: 16px;
    } 
    .daimond_shap img {
        width: 100%;
        max-width: 50px;
        height: 50px;
        object-fit: contain;
    }  
    .row{
        row-gap:20px;
    } 
    .daimond_shap p{
        font-size:12px;
        margin-top:5px;
        font-weight:600;
    }
}
@media only screen and (min-width: 425px) {
  margin-bottom: 50px;
    .daimondTypeHeading {
        font-size:32px;
        margin-bottom: 16px;
    } 
    .daimond_shap img {
        width: 100%;
        max-width: 50px;
        height: 50px;
        object-fit: contain;
    }  
    .row{
        row-gap:20px;
    } 
    .daimond_shap p{
        font-size:14px;
        margin-top:5px;
    }
}
@media only screen and (min-width: 600px) {
  margin-bottom: 50px;
    .daimondTypeHeading {
        font-size:32px;
        margin-bottom: 16px;
    } 
    .daimond_shap img {
        width: 100%;
        max-width: 70px;
        height: 70px;
        object-fit: contain;
    }  
    .row{
        row-gap:20px;
    } 
    .daimond_shap p{
        font-size:16px;
        margin-top:5px;
        font-weight:600;
    }
}
@media only screen and (min-width: 768px) {
  margin-bottom: 80px;
  .daimondTypeHeading {
      font-size:32px;
      margin-bottom: 36px;
  }
}
@media only screen and (min-width: 1024px) {
  margin-bottom: 100px;
  .daimondTypeHeading {
      font-size:32px;
      margin-bottom: 40px;
  } 
}
@media only screen and (min-width: 1200px) {...}
@media only screen and (min-width: 1400px) {
  margin-bottom: 120px;
  .daimondTypeHeading {
      font-size:32px;
      margin-bottom: 40px;
  } 
  .daimond_shap img {
      width: 100%;
      max-width: 90px;
      height: 90px;
      object-fit: contain;
      margin-bottom: 10px;
  }
}
@media only screen and (min-width: 1600px) {
  margin-bottom: 120px;
  .daimondTypeHeading {
      font-size:36px;
      margin-bottom: 50px;
  } 
  .daimond_shap img {
      width: 100%;
      max-width: 110px;
      height: 110px;
      object-fit: contain;
      margin-bottom: 14px;
  }
  .daimond_shap p{
    font-size:12px;
    font-weight:600;
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
