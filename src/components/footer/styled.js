import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

export const FooterWrapper = styled("div")`
  /* background: #070604; */
  background: #1e1e1e;
  .main_mo_Logo {
    color: rgba(239, 237, 242, 0.5);
    margin: 1rem 0rem 2rem 0rem;
  }
  // .img_play{
  //   width:200px;
  // }
  .download_app_mo {
    display: flex;
    gap: 30px;
  }
  .download_app_mo img {
    width: 230px;
    // height: 38px;
  }
  .gtwPrC{
    border:2px solid #fff;
  }
  .sc-bxivhb{
    width:0px;
    height:0px;
    border:0px;
  }
`;

export const FooterRingWrapper = styled("div")`
  display: flex;
  background: #070604;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterRingImageWrapper = styled("div")`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterRingContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 52px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
`;

export const FooterRingText = styled("div")`
  font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 200;
  font-size: 40px;
  line-height: 140.62%;
  text-transform: uppercase;
  color: rgb(164, 200, 154);
  width: 100%;
  max-width: 336px;

  @media (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FooterRingBolderText = styled("span")`
  font-weight: 400;
`;

export const FooterRingInputWrapper = styled("div")`
  // display: flex;
  // gap: 10px;
  background: #070604;
`;

export const FooterRingInput = styled("input")`
  width: 289px;
  height: 42px;
  border: 1px solid rgb(164, 200, 154);
  background-color: black;
  padding: 10px;
  font-size: 13px;
  color: rgb(255, 255, 255);
  font-family: IBM Plex Sans;
  font-weight: 400;

  @media (max-width: 1024px) {
    width: 200px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
  }
`;

export const FooterRingButton = styled("div")`
  width: 96px;
  height: 42px;
  left: 1389px;
  top: 6945px;
  background: rgb(164, 200, 154);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterRingButtonIcon = styled(Image)`
  color: transparent;
  background-color: rgb(164, 200, 154);
  border: 0px;
  border-radius: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// -----------------------------------------------

export const FooterMenuTitle = styled("div")`
  color: #efedf2;
  font-size: 20px;
  font-family: Prumo Deck;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const FooterMenuItem = styled("li")`
  :hover,
  :focus {
    color: #a4c89a;
    transform: scale(1.2);
    overflow: hidden;
    // margin-bottom: 11px;
  }

  transition: transform 0.5s ease-out;
  width: fit-content;
  color: rgba(239, 237, 242, 0.5);
  font-size: 18px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 14px;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1440px) {
    :hover,
    :focus {
      transform: scale(1);
    }
  }
`;

export const FooterContactNew = styled("div")`
  .tel:hover {
    color: white;
  }
  .tel {
    transition: transform 1s, color 1s;
  }
  .pare {
    text-transform: capitalize;
  }
  color: rgba(239, 237, 242, 0.5);
  font-size: 18px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  text-transform: lowercase;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    display: block;
    width: 100%;
  }
  @media (max-width: 320px) {
    font-size: 11px;
  }
`;
export const FooterContactItem = styled("div")`
  .tel:hover {
    color: white;
    text-decoration: underline;
  }
  .tel {
    transition: transform 1s, color 1s;
  }
  color: rgba(239, 237, 242, 0.5);
  font-size: 18px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  text-transform: lowercase;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    display: block;
    width: 100%;
  }
  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

// ------------------------------- Mobile Footer

export const MobileFooterTitle = styled(Typography)`
  color: #efedf2;
  font-family: "Prumo Deck";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-transform: uppercase;
  margin-left: 20px;
  // margin: 20px 0px 20px 20px;
`;

export const MobileFooterItemContainer = styled("ul")`
  border-bottom: 1px solid rgb(41, 41, 41);
  padding: 15px 0px 15px 20px;
`;
export const MobileFooterItem = styled("li")`
  list-style: none;
  transition: transform 0.5s ease-out;
  :hover,
  :focus {
    color: #a4c89a;
    transform: scale(1);
    overflow: hidden;
  }
  width: 120px;
  color: #efedf2;
  font-family: "IBM Plex Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140.625%;
  text-transform: capitalize;
  padding-bottom: 15px;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const WebFooterContainer = styled("div")`
  max-width: 1000px;
  margin: 0px auto;
  .twitter-icon {
    margin-top: 3px;
  }
  .gtwPrC{
    border:2px solid #fff;
  }
  .sc-bxivhb{
    width:0px;
    height:0px;
    border:0px;
  }
  .divider{
    position:relative;
  }
    .flex-col{
    max-width: 406px;
    width : 100%;
    }
  .divider:after{
    position:absolute;
    content:"";
    background-color:gray;
    width:100%;
    height:2px;
    top:50%;
    left:0;
    transform:translateY(-50%);
  }
 
  @media screen and (max-width: 2560px) {
    max-width: 1800px;
  }

  @media screen and (max-width: 1920px) {
    max-width: 1300px;
  }

  @media screen and (max-width: 1440px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    margin: 0px 20px;
  }
`;
export const MobileFooterWrapper = styled("div")`
  color: white;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
  .twitter-icon {
    margin-top: 5px;
  }
  .icon-container {
    width: 24px;
    height: 24px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }

  .icon {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease; /* Add transition effect for smooth hover */
  }

  .icon.icon-b {
    opacity: 0; /* Initially hide Icon B */
  }

  .icon-container:hover .icon-a {
    opacity: 0; /* Hide Icon A on hover */
  }

  .icon-container:hover .icon-b {
    opacity: 1; /* Show Icon B on hover */
  }
`;
export const WebFooterWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  /* border-bottom: 2px solid rgb(41, 41, 41); */

  .tel:hover {
    color: white;
  }
  .tel {
    transition: transform 1s, color 1s;
  }
  .download_app {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .download_app img {
    width: 130px;
    height: 38px;
  }
  .icon-container {
    width: 24px;
    height: 24px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }

  .icon {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease; /* Add transition effect for smooth hover */
  }

  .icon.icon-b {
    opacity: 0; /* Initially hide Icon B */
  }

  .icon-container:hover .icon-a {
    opacity: 0; /* Hide Icon A on hover */
  }

  .icon-container:hover .icon-b {
    opacity: 1; /* Show Icon B on hover */
  }
  .footer_logo {
    width: 20%;
  }
  .global_add {
    width: 25%;
  }
  .pare {
    color: rgba(239, 237, 242, 0.5);
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .custom-width {
    width: 13%;
  }
  .address {
    width: 100%;
    max-width: 248px;
  }

  @media (max-width: 1440px) {
    .custom-width {
      width: 17%;
    }
  }
  @media (max-width: 1024px) {
    .pare {
      font-size: 15px;
    }
    .logo {
      width: 80%;
    }

    .address {
      width: 100%;
      max-width: 180px;
    }
  }
  @media (max-width: 480px) {
    .icon-container:active .icon-a {
      opacity: 0; /* Hide Icon A on hover */
    }

    .icon-container:active .icon-b {
      opacity: 1; /* Show Icon B on hover */
    }
  }
  @media (max-width: 768px) {
    .download_app Link img {
      width: 130px;
      height: 50px;
    }
  }
`;

export const CopyrightWrapper = styled("div")`
  display: flex;
  justify-content: center;
  border-top: 1px solid #8e8e8e;
`;

export const CopyrightContent = styled("div")`
  color: #efedf2;
  text-align: center;
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: 140.625%;
  padding: 20px 0px;
  width: 100%;
  max-width: 367px;
`;
