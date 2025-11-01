"use client";
import { styled } from "@mui/material";

export const MainSection = styled("div")`
  // margin: 100px;
  .container {
    max-width: 1000px;
    margin: 100px 20px;
  }
  .iconofthankyou {
    width: 100%;
    margin: 25% 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .thanksText {
    margin-top: 20px;
    font-size: 26px;
    font-family: IBM Plex Sans;
    font-weight: 500;
    text-transform: capitalize;
  }
  .thanksBtn {
    background-color: #024638;
    padding: 10px 50px;
    font-family: IBM Plex Sans;
    font-size: 18px;
    color: white;
    margin-top: 50px;
  }
  .thanksDes {
    color: #9b9b9b;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 22px;
    font-weight: 400;
    margin-top: 20px;
  }
  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
      margin: 100px auto;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`;
