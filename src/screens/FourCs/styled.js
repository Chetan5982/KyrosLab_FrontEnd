import {
  CvdheroMobile,
  Cvdherodesktop,
  FourCs,
  FourDiamondCaratWeight,
  FourDiamondClarity,
  FourDiamondColor,
  FourDiamondCut,
} from "@/constants/images";
import { styled } from "@mui/material";

export const MainSection = styled("div")`
  // background-image: url(${FourCs});
  background-size: cover;
  width: 100%;
  // height: 60%;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 76px;

  display:flex;
  align-items:center;
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
    position:absolute;
    top:0;

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
  .main-img{
    position:relative;
    width:100%;
  }
@media only screen and (max-width: 600px) {
  margin-top: 63px;

  .highlight{
    font-size:40px;
  }
  .mainBannerHeading {
    font-size: 22px;
    top:unset;
    padding-left: 2%;
  }
}
@media only screen and (min-width: 320px) {
  .highlight{
    font-size:34px;
  }
  .mainBannerHeading {
    width: 50%;
    font-size: 20px;
    top:unset;
    padding-left: 2%;
  }
}

@media only screen and (min-width: 375px) {
  .highlight{
    font-size:34px;
  }
  .mainBannerHeading {
    width: 40%;
    font-size: 20px;
    top:unset;
    padding-left: 2%;
  }
}

@media only screen and (min-width: 600px) {
  .highlight{
    font-size:52px;
  }
  .mainBannerHeading {
    width: 30%;
    font-size: 22px;
    top:unset;
    padding-left: 2%;
  }
}

@media only screen and (min-width: 768px) {
  .highlight{
    font-size:62px;
  }
  .mainBannerHeading {
    font-size: 32px;
    top:unset;
    padding-left: 2%;
  }
}

@media only screen and (min-width: 992px) {
  .highlight{
    font-size:72px;
  }
  .mainBannerHeading {
    font-size: 42px;
    top:unset;
    padding-left: 2%;
  }
}

@media only screen and (min-width: 1200px) {
  .mainBannerHeading{
    left:12%;
  }
  .highlight{
    font-size:92px;
  }
  .mainBannerHeading {
    font-size: 42px;
    padding-left: 0;
  }
}
@media only screen and (min-width: 1400px) {
  .mainBannerHeading{
    left:17%;
  }
  .highlight{
    font-size:92px;
  }
  .mainBannerHeading {
    font-size: 42px;
    padding-left: 0;
  }
}
`;

export const DiamondCut = styled("div")`
  margin-top: 100px;
  position: relative;
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
  .section-title {
    background-color: #f9f9f9;
    padding: 20px;
    width: fit-content;
  }
  .main-section-title {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translate(0, 50%);
  }

  .section-title span {
    font-size: 36px;
    font-family: Prumo Deck;
    font-weight: 500;
  }

  .section-description {
    background-color: #f9f9f9;
    padding: 45px 110px 0px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3%;
    position: relative;
    z-index: 1;
  }

  .section-description p {
    font-family: IBM Plex Sans;
    color: #8f8f8f;
    font-size: 20px;
    font-weight: 400;
  }
  .section-description .section-btn {
    background-color: #024638;
    padding: 16px 50px;
    color: #fff;
    font-family: IBM Plex Sans;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin-top:50px;
    .section-title span{
      font-size:26px;
    }
    .section-title{
      padding: 10px;
    }
    .section-description{
      padding: 25px 35px 0px;
    }
    .section-description p{
      font-size:16px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 40px;
      font-size: 14px;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .section-title span{
      font-size:20px;
    }
    .section-description{
      padding: 15px 20px 0px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 30px;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {...}
  
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    .section-description {
      padding: 30px 40px 0px;
    }
    .section-title span {
      font-size: 28px;
    }
    .section-title{
      padding: 16px;
    }
    .section-description p {
      font-size: 18px;
    }
  }
  
  @media only screen and (min-width: 992px) {
    margin-top: 40px;
    .section-title span{
      font-size:36px;
    }
    .section-description{
      padding: 30px 50px 0px;
    }
    .section-description .section-btn{
      padding: 16px 50px;
      font-size: 16px;
      margin: 40px 0px;
    }
    .section-title {
      padding: 20px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
    .section-description{
      padding: 40px 80px 0px;
    }
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 100px;
    .section-description{
      padding: 25px 40px 0px;
    }
    .section-description p{
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 100px;
    .section-description{
      padding: 45px 110px 0px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
`;

export const DiamondColor = styled("div")`
  margin-top: 100px;
  position: relative;
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
  .section-title {
    background-color: #f9f9f9;
    padding: 20px;
    width: fit-content;
  }

  .main-section-title {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translate(0, 50%);
  }
  .section-title span {
    font-size: 36px;
    font-family: Prumo Deck;
    font-weight: 500;
  }

  .section-description {
    background-color: #f9f9f9;
    padding: 45px 110px 0px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3%;
    position: relative;
    z-index: 1;
  }

  .section-description p {
    font-family: IBM Plex Sans;
    color: #8f8f8f;
    font-size: 20px;
    font-weight: 400;
  }
  .section-description .section-btn {
    background-color: #024638;
    padding: 16px 50px;
    color: #fff;
    font-family: IBM Plex Sans;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin-top:50px;
    .section-title span{
      font-size:26px;
    }
    .section-title{
      padding: 10px;
    }
    .section-description{
      padding: 25px 35px 0px;
    }
    .section-description p{
      font-size:16px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 40px;
      font-size: 14px;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .section-title span{
      font-size:20px;
    }
    .section-description{
      padding: 15px 20px 0px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 30px;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {...}
  
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    .section-description {
      padding: 30px 40px 0px;
    }
    .section-title span {
      font-size: 28px;
    }
    .section-title{
      padding: 16px;
    }
    .section-description p {
      font-size: 18px;
    }
  }
  
  @media only screen and (min-width: 992px) {
    margin-top: 40px;
    .section-title span{
      font-size:36px;
    }
    .section-description{
      padding: 30px 50px 0px;
    }
    .section-description .section-btn{
      padding: 16px 50px;
      font-size: 16px;
      margin: 40px 0px;
    }
    .section-title {
      padding: 20px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
    .section-description{
      padding: 40px 80px 0px;
    }
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 100px;
    .section-description{
      padding: 25px 40px 0px;
    }
    .section-description p{
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 100px;
    .section-description{
      padding: 45px 110px 0px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
`;

export const DiamondClarity = styled("div")`
  margin-top: 100px;
  position: relative;
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

  .section-title {
    background-color: #f9f9f9;
    padding: 20px;
    width: fit-content;
  }

  .main-section-title {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translate(0, 50%);
  }

  .section-title span {
    font-size: 36px;
    font-family: Prumo Deck;
    font-weight: 500;
  }

  .section-description {
    background-color: #f9f9f9;
    padding: 45px 110px 0px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3%;
    position: relative;
    z-index: 1;
  }

  .section-description p {
    font-family: IBM Plex Sans;
    color: #8f8f8f;
    font-size: 20px;
    font-weight: 400;
  }
  .section-description .section-btn {
    background-color: #024638;
    padding: 16px 50px;
    color: #fff;
    font-family: IBM Plex Sans;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin-top:50px;
    .section-title span{
      font-size:26px;
    }
    .section-title{
      padding: 10px;
    }
    .section-description{
      padding: 25px 35px 0px;
    }
    .section-description p{
      font-size:16px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 40px;
      font-size: 14px;
    }
  }
  
  @media only screen and (max-width: 425px) {
    .section-title span{
      font-size:20px;
    }
    .section-description{
      padding: 15px 20px 0px;
    }
    .section-description .section-btn{
      margin: 20px 0px;
      padding: 12px 30px;
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {...}
  
  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    .section-description {
      padding: 30px 40px 0px;
    }
    .section-title span {
      font-size: 28px;
    }
    .section-title{
      padding: 16px;
    }
    .section-description p {
      font-size: 18px;
    }
  }
  
  @media only screen and (min-width: 992px) {
    margin-top: 40px;
    .section-title span{
      font-size:36px;
    }
    .section-description{
      padding: 30px 50px 0px;
    }
    .section-description .section-btn{
      padding: 16px 50px;
      font-size: 16px;
      margin: 40px 0px;
    }
    .section-title {
      padding: 20px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
  
  @media only screen and (min-width: 1200px) {
    margin-top: 100px;
    .section-description{
      padding: 40px 80px 0px;
    }
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 100px;
    .section-description{
      padding: 25px 40px 0px;
    }
    .section-description p{
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 100px;
    .section-description{
      padding: 45px 110px 0px;
    }
    .section-description p{
      font-size: 20px;
    }
  }
`;

export const DiamondCaratWeight = styled("div")`
  margin-top: 100px;
  position: relative;
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

  .section-title {
    background-color: #f9f9f9;
    padding: 20px;
    width: fit-content;
  }

  .main-section-title {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translate(0, 50%);
  }

  .section-title span {
    font-size: 36px;
    font-family: Prumo Deck;
    font-weight: 500;
  }

  .section-description {
    background-color: #f9f9f9;
    padding: 45px 110px 0px;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -3%;
    position: relative;
    z-index: 1;
  }

  .section-description p {
    font-family: IBM Plex Sans;
    color: #8f8f8f;
    font-size: 20px;
    font-weight: 400;
  }
  .section-description .section-btn {
    background-color: #024638;
    padding: 16px 50px;
    color: #fff;
    font-family: IBM Plex Sans;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px;
    cursor: pointer;
  }
@media only screen and (max-width: 600px) {
  margin-top:50px;
  .section-title span{
    font-size:26px;
  }
  .section-title{
    padding: 10px;
  }
  .section-description{
    padding: 25px 35px 0px;
  }
  .section-description p{
    font-size:16px;
  }
  .section-description .section-btn{
    margin: 20px 0px;
    padding: 12px 40px;
    font-size: 14px;
  }
}
@media only screen and (max-width: 425px) {
  .section-title span{
    font-size:20px;
  }
  .section-description{
    padding: 15px 20px 0px;
  }
  .section-description .section-btn{
    margin: 20px 0px;
    padding: 12px 30px;
    font-size: 14px;
  }
}
@media only screen and (min-width: 600px) {...}

@media only screen and (min-width: 768px) {
  margin-top: 40px;
  .section-description {
    padding: 30px 40px 0px;
  }
  .section-title span {
    font-size: 30px;
  }
  .section-title{
    padding: 16px;
  }
  .section-description p {
    font-size: 18px;
  }
}

@media only screen and (min-width: 992px) {
  margin-top: 40px;
  .section-title span{
    font-size:36px;
  }
  .section-description{
    padding: 30px 50px 0px;
  }
  .section-description .section-btn{
    padding: 16px 50px;
    font-size: 16px;
    margin: 40px 0px;
  }
  .section-title {
    padding: 20px;
  }
  .section-description p{
    font-size: 20px;
  }
}

@media only screen and (min-width: 1200px) {
  margin-top: 100px;
  .section-description{
    padding: 40px 80px 0px;
  }
}
@media only screen and (min-width: 1400px) {
  margin-top: 100px;
  .section-description{
    padding: 25px 40px 0px;
  }
  .section-description p{
    font-size: 18px;
  }
}
@media only screen and (min-width: 1600px) {
  margin-top: 100px;
  .section-description{
    padding: 45px 110px 0px;
  }
  .section-description p{
    font-size: 20px;
  }
}
`;

export const LastContain = styled("div")`
  margin-bottom: 100px;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 120px auto 30px auto;
  }
  .section_bg {
    background-color: #f9f9f9;
    width: 100%;
    padding: 53px 30px 56px 30px;
  }
  .section_bg .section_bg_title {
    color: #000;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .inner_contain p {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-weight: 400;
  }
  .countries {
    margin: 30px 0px 0px 0px;
  }
  .countries .countries_title {
    color: #000;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .contries_wrapper p {
    padding: 10px 0px 10px 10px;
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-weight: 400;
    position: relative;
  }
  .contries_wrapper p a {
    text-decoration: underline;
  }
  .contries_wrapper p::after {
    content: " / ";
    // right:30px;
    margin-left: 20px;
    position: absolute;
  }
  .widthMumbai {
    right: 30px;
  }
  .widthSurat {
    right: 32px;
  }
  .widthDubai {
    right: 60px;
  }
  .widthAntwerp {
    right: 0px;
  }
  .widthHongKong {
    right: 0px;
  }
  .contries_wrapper p:last-child::after {
    display: none;
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
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .section_bg {
      padding: 53px 30px 56px 22px;
    }
    .section_bg .section_bg_title {
      font-size: 26px;
    }
    .inner_contain p {
      font-size: 16px;
    }
    .contries_wrapper p::after {
      display: none;
      margin-left: 0px;
    }
    .countries {
      margin: 30px 0px 0px 20px;
    }
    .widthMumbai {
      right: 0px;
    }
    .widthSurat {
      right: 0px;
    }
    .widthDubai {
      right: 0px;
    }
    .widthAntwerp {
      right: 0px;
    }
    .widthHongKong {
      right: 0px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .countries {
      margin: 30px 0px 0px 0px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .contries_wrapper p {
      font-size: 17px;
    }
    .widthMumbai {
      right: 0px;
    }
    .widthSurat {
      right: 0px;
    }
    .widthDubai {
      right: 0px;
    }
    .widthAntwerp {
      right: 0px;
    }
    .widthHongKong {
      right: 0px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .contries_wrapper p {
      font-size: 17px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .widthMumbai {
      right: 30px;
    }
    .widthSurat {
      right: 32px;
    }
    .widthDubai {
      right: 60px;
    }
    .widthAntwerp {
      right: 0px;
    }
    .widthHongKong {
      right: 0px;
    }
    .widthManufacturers {
      right: -20px;
    }
    .contries_wrapper p {
      font-size: 20px;
    }
  }
`;

export const Faqsection = styled("div")`
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
  .innerfirsttitle {
    color: #000;
    text-align: center;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .innerfirstdes {
    color: #3c3c3b;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 400;
    margin: 0px 10px 34px 10px;
  }
  .answer {
    font-family: "IBM Plex Sans";
    color: #ffffff;
    font-size: 20px;
    line-height: 140.6%;
    font-style: normal;
    font-weight: 400;
    padding: 30px;
  }
  @media only screen and (max-width: 600px) {
    .innerfirsttitle {
      font-size: 24px;
      font-weight: 700;
    }
    .innerfirstdes {
      color: #8f8f8f;
      font-size: 14px;
    }
    .css-1qvr50w-MuiTypography-root {
      font-size: 1.1rem;
    }
    .answer {
      color: #d1d1d1;
      font-size: 14px;
      padding: 0px 18px 23px 18px;
    }
  }

  @media only screen and (min-width: 600px) {
    .innerfirsttitle {
      font-size: 24px;
      font-weight: 700;
    }
    .innerfirstdes {
      color: #8f8f8f;
      font-size: 14px;
    }
    .css-1qvr50w-MuiTypography-root {
      font-size: 1.1rem;
    }
    .answer {
      color: #d1d1d1;
      font-size: 14px;
      padding: 0px 18px 23px 18px;
    }
  }

  @media only screen and (min-width: 768px) {
    .innerfirsttitle {
      font-size: 36px;
      font-weight: 500;
    }
    .innerfirstdes {
      color: #3c3c3b;
      font-size: 16px;
    }
    .css-1qvr50w-MuiTypography-root {
      font-size: 1.5rem;
    }
    .answer {
      color: #ffffff;
      font-size: 20px;
      padding: 30px;
    }
  }
`;
