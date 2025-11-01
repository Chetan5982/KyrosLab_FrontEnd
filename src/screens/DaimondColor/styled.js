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
    color: #fff;
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
export const DaimondColorSection = styled("div")`
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
  .FourC-Heading{
    text-align: center;
    font-family: Prumo Deck;
    font-size: clamp(1.625rem, 1.5rem + 0.625vw, 2.25rem);
    font-weight: 500;
    margin-bottom:50px;
  }
  .daimond-color-img {
    width: 100%;
    max-width: 80%;
    height: 70%;
    object-fit: cover;
  }
  .daimond-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;
  }
  .daimond-heading {
    font-family: IBM Plex Sans;
    font-size: clamp(0.8125rem, 0.75rem + 0.3125vw, 1.125rem);
    font-weight: 700;
  }
  .daimond-main:nth-child(-n + 2)::before {
    content: "";
    position: absolute;
    top: 16%;
    left: 0;
    width: 100%;
    height: 160px;
    z-index: -1;
    border-right: 1px dashed #a7a7a7;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 50px;
    .daimond-main{
      margin-bottom:30px;
      gap:15px;
    }
    .daimond-color-img {
      width: 100%;
      max-width: 50%;
      height: 80%;
      object-fit: contain;
    }
    .diffrant-img{
      max-width: 80%;
    }
    .FourC-Heading{
      font-weight: 500;
      margin-bottom: 30px;
    }

    .daimond-main:nth-child(2)::before {
      display:none;
    }
    .daimond-main:nth-child(-n + 2)::before {
      display:none;
    }
    .dashed-img:nth-child(1)::before {
      content: "";
      position: absolute;
      top: 10%;
      left: 0;
      width: 100%;
      height: 100px;
      z-index: -1;
      border-right: 1px dashed #a7a7a7;
      display:block;
    }
    .align-sec{
      align-items: start;
    }
    .abc{
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
@media only screen and (min-width: 375px) {
  margin-bottom: 50px;
  .daimond-main{
    margin-bottom:30px;
    gap:15px;
  }
  .daimond-color-img {
    width: 100%;
    max-width: 50%;
    height: 80%;
    object-fit: contain;
  }
  .diffrant-img{
    max-width: 70%;
  }
  .FourC-Heading{
    font-weight: 500;
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 425px) {
  .FourC-Heading{
    font-weight: 500;
    margin-bottom: 30px;
  }
  .daimond-color-img {
    max-width: 60%;
    object-fit: contain;
  }
  .daimond-main:nth-child(2)::before {
    display:none;
  }
  .daimond-main:nth-child(-n + 2)::before {
    display:none;
  }
  .dashed-img:nth-child(1)::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: -1;
    border-right: 1px dashed #a7a7a7;
    display:block;
  }
  .align-sec{
    align-items: start;
  }
  .abc{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .diffrant-img{
    max-width: 82%;
  }
}
@media only screen and (min-width: 600px) {
  .FourC-Heading{
    margin-bottom: 50px;
  }

  .daimond-color-img {
    max-width: 66%;
    object-fit: contain;
  }
  .daimond-main:nth-child(2)::before {
    display:block;
  }
  .daimond-main:nth-child(-n + 2)::before {
    display:block;
  }
  .abc{
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .daimond-main:nth-child(-n + 2)::before {
    top: 6%;
    left: 4px;
    height: 80px;
  }
  .vartical-section{
    align-items: start;
  }
  
}
@media only screen and (min-width: 768px) {
  .daimond-main{
    margin-bottom:0px;
    gap:30px;
  }
  .daimond-color-img {
    height: 80%;
    max-width:  80%;
  }
  .daimond-main:nth-child(-n + 2)::before {
    content: "";
    position: absolute;
    top: 6%;
    left: 0;
    width: 100%;
    height: 120px;
    z-index: -1;
    border-right: 1px dashed #a7a7a7;
  }
}
@media only screen and (min-width: 1024px) {
  margin-bottom: 100px;
  .daimond-color-img {
    height: 80%;
    max-width:  80%;
  }
  .daimond-main:nth-child(-n + 2)::before {
    content: "";
    position: absolute;
    top: 6%;
    left: 0;
    width: 100%;
    height: 140px;
    z-index: -1;
    border-right: 1px dashed #a7a7a7;
  }
}
@media only screen and (min-width: 1240px) {...}
@media only screen and (min-width: 1400px) {
  margin-bottom: 120px;
  .daimond-main:nth-child(-n + 2)::before {
    content: "";
    position: absolute;
    top:6%;
    left: 0;
    width: 100%;
    height: 150px;
    z-index: -1;
    border-right: 1px dashed #a7a7a7;
  }
  .daimond-color-img {
    height: 80%;
    max-width:  80%;
  }
  .daimond-main{
    margin-bottom:0px;
    gap:30px;
  }
}
@media only screen and (min-width: 1600px) {
  .daimond-main:nth-child(-n + 2)::before {
    top:10%;
    height: 160px;
  }
}
`;

export const DaimondColorTable = styled("div")`
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
  .main-table {
    width: 100%;
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
  }
  .table_row {
    color: #fff;
    font-family: IBM Plex Sans;

    padding: 10px 26px;
  }
  .main-table .table_row:nth-child(1) {
    background-color: #024638;
    color: white;
    font-weight: 700;
    font-size: 18px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(odd) {
    background-color: #ededed;
    color: black;
    font-weight: 400;
    font-size: 16px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(even) {
    background-color: #f1f4f4;
    color: black;
    font-weight: 400;
    font-size: 16px;
  }
  @media only screen and (max-width: 375px) {
    margin-bottom: 50px;
    .main-table .table_row:nth-child(n + 2):nth-child(odd) {
      padding-left:80px;
    }
  
    .main-table .table_row:nth-child(n + 2):nth-child(even) {
      padding-left:80px;
    }
    .main-table .table_row:nth-child(1) {
      font-weight: 600;
      font-size: 14px;
    }
    .main-table {
      max-width: 300px;
    }
  }
@media only screen and (min-width: 375px) {
  margin-bottom: 50px;
  .main-table .table_row:nth-child(n + 2):nth-child(odd) {
    padding-left:80px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(even) {
    padding-left:80px;
  }
  .main-table .table_row:nth-child(1) {
    font-weight: 600;
    font-size: 14px;
  }
  .main-table {
    max-width: 320px;
  }
}
@media only screen and (min-width: 425px) {
  .main-table {
    max-width: 380px;
  }
}
@media only screen and (min-width: 600px) {
  .main-table {
    max-width: 540px;
  }
}
@media only screen and (min-width: 768px) {
  margin-bottom: 50px;
  .main-table .table_row:nth-child(1) {
    font-weight: 700;
    font-size: 18px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(odd) {
    font-weight: 400;
    font-size: 16px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(even) {
    font-weight: 400;
    font-size: 16px;
  }
  .main-table {
    max-width: 700px;
  }
}
@media only screen and (min-width: 1024px) {
  .main-table {
    max-width: 800px;
  }
  .main-table .table_row:nth-child(n + 2):nth-child(odd) {
    font-weight: 500;
    font-size: 16px;
  }

  .main-table .table_row:nth-child(n + 2):nth-child(even) {
    font-weight: 500;
    font-size: 16px;
  }
}
@media only screen and (min-width: 1240px) {
  margin-bottom: 100px;
}
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
