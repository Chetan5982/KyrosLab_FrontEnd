import {
  CvdheroMobile,
  Cvdherodesktop,
  contactimg,
  downarrow,
} from "@/constants/images";
import { styled } from "@mui/material";

export const MainSection = styled("div")`
  background-image: url(${Cvdherodesktop});
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
  .mainBannerHeading {
    color: #024638;
    font-family: Prumo Deck;
    font-size: 56px;
    width: 60%;
  }
  @media only screen and (max-width: 425px) {
    .mainBannerHeading {
      font-size: 22px;
      padding-top: 5rem;
      padding-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 596px) {
    .mainBannerHeading {
      font-size: 30px;
      width: 100%;
      padding-top: 12rem;
      padding-left: 3.5rem;
    }
  }
  @media only screen and (max-width: 600px) {
    background-image: url(${CvdheroMobile});
    background-size: cover;
    height: 630px;
    .mainBannerHeading {
      font-size: 20px;
      width: 90%;
    }

    .mapimg {
      height: 30vh;
    }
  }

  @media only screen and (min-width: 600px) {
    .mainBannerHeading {
      font-size: 22px;
      width: 80%;
      font-size: 36px;
    }
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${CvdheroMobile});
    background-size: cover;
    height: 630px;
    .mainBannerHeading {
      font-size: 36px;
      width: 60%;
      padding: 38% 0 20% 25px;
    }
  }

  @media only screen and (min-width: 992px) {
    background-image: url(${Cvdherodesktop});
    background-size: cover;
    height: 660px;
    .mainBannerHeading {
      font-size: 36px;
      width: 50%;
      padding: 180px 0 0 30px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 480px;
    margin-top: 60px;
  }
  @media only screen and (min-width: 1200px) {
    background-image: url(${Cvdherodesktop});
    height: 600px;
    background-size: cover;
    margin-top: 80px;
    .mainBannerHeading {
      padding: 240px 0 0 0px;
      font-size: 56px;
      width: 80%;
    }
  }
`;
export const WhatWeDo = styled("div")`
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
  .content_section {
    background: #fff;
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
    width: 66%;
    padding: 33px 73px;
    text-align: center;
    margin-bottom: -10%;
    z-index: 9;
  }
  .mainWedo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 119px 0px 150px 0px;
  }
  .whatwedohead {
    color: #000;
    text-align: center;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .whatwedopere {
    color: #8f8f8f;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  @media only screen and (max-width: 320px) {
    .content_section {
      margin-bottom: -10%;
    }
  }
  @media only screen and (max-width: 600px) {
    .content_section {
      width: 90%;
      padding: 33px 10px;
    }
    .whatwedopere {
      font-size: 16px;
      font-weight: 500;
    }
    .whatwedohead {
      font-size: 24px;
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 600px) {
    .content_section {
      width: 90%;
      padding: 33px 30px;
    }
    .whatwedohead {
      font-size: 24px;
      font-weight: 700;
    }
    .whatwedopere {
      font-size: 16px;
      font-weight: 500;
    }
  }

  @media only screen and (min-width: 768px) {
    .content_section {
      padding: 33px 30px;
      width: 96%;
    }
    .whatwedohead {
      font-size: 36px;
      font-weight: 500;
    }
    .whatwedopere {
      font-size: 18px;
      font-weight: 400;
    }
  }

  @media only screen and (min-width: 992px) {
    .content_section {
      padding: 33px 30px;
      width: 96%;
    }
  }
  @media only screen and (min-width: 1024px) {
    .content_section {
      width: 66%;
    }
  }
`;

export const Diamondmanufacturing = styled("div")`
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
  .process_title {
    color: #000;
    text-align: center;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .main_stap {
    margin: 53px 0px 120px 0px;
  }
  .process_contain {
    background-color: #f9f9f9;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 40px 0px 111px;
    margin-left: 21%;
  }
  .process_contain2 {
    background-color: #f9f9f9;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 40px 0px 111px;
    margin-right: 21%;
  }
  .flipped-horizontal {
    transform: scaleX(-1);
  }
  .line_center {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .line_center img {
    z-index: 1;
  }
  .stap_img img {
    position: relative;
    z-index: 9;
  }
  .staps p {
    color: #024638;
    font-family: Prumo Deck;
    font-size: 28px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .stap_heading {
    color: #000;
    font-family: Prumo Deck;
    font-size: 30px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 24px;
  }
  .stap_pare {
    color: #8f8f8f;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
  }
  @media only screen and (max-width: 375px) {
    .line_center {
      margin: 20px;
    }
  }
  @media only screen and (max-width: 600px) {
    .process_contain {
      background-color: #f9f9f9;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      margin-left: 0%;
    }
    .process_contain2 {
      background-color: #f9f9f9;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 20px;
      margin-right: 0%;
      order: 0;
    }
    .line_center img {
      z-index: -1;
    }
    .process_title {
      font-size: 24px;
      font-weight: 700;
    }
    .staps p {
      font-size: 22px;
    }
    .stap_heading {
      font-size: 18px;
      font-weight: 500;
    }
    .stap_pare {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {
    .process_contain {
      z-index: 9;
      height: 100%;
      margin: 0% 5%;
      padding: 40px;
    }
    .process_contain2 {
      z-index: 9;
      height: 100%;
      margin: 0% 5%;
      padding: 40px;
      order: 0;
    }
    .stap_img img {
      width: 90%;
    }
    .stap_img {
      display: flex;
      justify-content: center;
    }
    .process_title {
      font-size: 24px;
      font-weight: 700;
    }
    .staps p {
      font-size: 22px;
    }
    .stap_heading {
      font-size: 18px;
      font-weight: 500;
    }
    .stap_pare {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    .process_title {
      font-size: 36px;
      font-weight: 500;
    }
    .staps p {
      font-size: 28px;
    }
    .stap_heading {
      font-size: 30px;
      font-weight: 600;
    }
    .stap_pare {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .process_contain {
      // margin: 0% 0% 0% 21%;
      // padding: 0px 40px 0px 111px;
      // height: 90%;
      margin: 0% 0% 0% 0%;
      padding: 30px 40px 40px 40px;
      height: 100%;
    }
    .process_contain2 {
      // margin: 0% 21% 0% 0%;
      // padding: 0px 111px 0px 40px;
      // height: 90%;
      order: 2;
      margin: 0% 0% 0% 0%;
      padding: 30px 40px 40px 40px;
      height: 100%;
    }
    .stap_img img {
      width: 100%;
    }
    .stap_img {
      display: block;
    }
  }
  @media only screen and (min-width: 1200px) {
    .process_contain {
      // margin: 0% 0% 0% 21%;
      // padding: 0px 40px 0px 111px;
      // height: 90%;
      margin: 0% 0% 0% 0%;
      padding: 30px 40px 40px 32%;
      height: 100%;
    }
    .process_contain2 {
      // margin: 0% 21% 0% 0%;
      // padding: 0px 111px 0px 40px;
      // height: 90%;
      order: 2;
      margin: 0% 0% 0% 0%;
      padding: 30px 32% 40px 40px;
      height: 100%;
    }
    .stap_img img {
      width: 100%;
    }
    .stap_img {
      display: block;
    }
  }
  @media only screen and (min-width: 1900px) {
    .process_contain {
      padding: 30px 40px 40px 33%;
    }
    .process_contain2 {
      padding: 30px 33% 40px 40px;
    }
    .staps p{
      font-size:38px;
    }
  }
  @media only screen and (min-width: 2000px) {
    .process_contain {
      padding: 30px 40px 40px 30%;
      justify-content: space-evenly;
    }
    .process_contain2 {
      padding: 30px 30% 40px 40px;
      justify-content: space-evenly;
    }
    .staps p{
      font-size:58px;
    }
    .stap_heading{
      font-size:44px
    }
    .stap_pare{
      font-size:24px;
    }
  }

`;
export const ContactUs = styled("div")`
  background-image: url(${contactimg});
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled("div")`
  margin: 120px 0px;
  .custom-select-box {
    padding: 5px;
    font-size: 16px;
    line-height: 1;
    border: 0;
    height: 63px;
    background: url(${downarrow}) no-repeat right transparent;
    -webkit-appearance: none;
    background-position-y: -1px;
    position: relative;
    width: 100px;
    top: -30px;
    padding-top: 20px;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #ccc;
    transition: 1s;
  }

  input {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    color: #fff;
    font-family: "IBM Plex Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    outline: none;
  }

  .options-list {
    position: absolute;
    list-style: none;
    // padding: 10px;
    margin: 0;
    right: 0;
    background-color: #fff;
    color: #464e5f;
    width: 100%;
    max-height: 170px;
    overflow-y: auto;
    display: none;
    transition: 1s;
    border-radius: 5px;
    font-family: "IBM Plex Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #2ebb79;
  }

  .options-list.visible {
    display: block;
  }

  li {
    padding: 10px;
    cursor: pointer;
  }
  li:hover {
    background-color: #f9f9f9;
    color: #024638;
    font-weight: 600;
    font-size: 16px;
  }

  // .custom-select-box .options-list {
  //   display: none;
  // }

  // .custom-select-box:hover .options-list {
  //   display: block;
  // }

  select {
    padding: 5px;
    font-size: 16px;
    line-height: 1;
    border: 0;
    // border-radius: 5px;
    height: 63px;
    background: url(${downarrow}) no-repeat right #fff;
    -webkit-appearance: none;
    background-position-y: -1px;
    position: relative;
    width: 100px;
    top: -30px;
    color: #fff;
    padding-top: 20px;
  }
  .arrow_relative {
    position: relative;
  }
  .updownimage {
    width: 22px;
    height: 12px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact-us {
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: normal;
    text-transform: capitalize;
    color: #fff;
  }

  .appointment {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 135.938%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: #024638;
    background-color: #a4c89a;
    width: 238px;
    height: 54px;
    cursor: pointer;
  }

  .line {
    border-bottom: 1px solid #bdbdbd;
    margin: 22px 0 22px;
  }

  // .content {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr;
  //     gap: 100px;
  // }

  .form-label {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    text-transform: capitalize;
    color: #fff;
  }

  .form-control {
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 0.6px solid #bdbdbd;
    width: 100%;
    outline: none;
    background-color: transparent;
  }

  .message-control {
    border: 0.6px solid #bdbdbd;
    padding: 5px 10px;
    width: 100%;
    height: 140px;
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    outline: none;
    margin-top: 25px;
    background-color: transparent;
    color: #fff;
  }

  .contact-email {
    display: flex;
    justify-content: space-between;
    gap: 45px;
  }

  .custom-checkbox {
    display: none;
  }

  .custom-checkbox-label {
    width: 24px;
    height: 24px;
    background-color: #014538;
    border: 1px solid #fff;
    display: inline-block;
    position: relative;
  }

  .custom-checkmark {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
  }

  .custom-checkbox:checked + .custom-checkbox-label .custom-checkmark {
    display: block;
  }
  .confirmation-text {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
    text-transform: capitalize;
    color: #fff;
    margin: 25px 0 0 0;
    align-items: center;
  }
  .error-message {
    margin: 10px 0 10px 0px;
    color: #f64e60;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .submit {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 135.938%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    color: #024638;
    background-color: #fff;
    width: 155px;
    height: 54px;
    margin-top: 40px;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .send-message {
    color: #000;
    font-size: 32px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 500;
    line-height: 118.531%;
    text-transform: capitalize;
    display: none;
    margin-bottom: 30px;
  }

  .title {
    color: #000;
    font-size: 24px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .value {
    color: #000;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 40px;
  }

  .link {
    cursor: pointer;
    text-decoration: no-underline;
    text-transform: lowercase;
  }

  @media screen and (max-width: 1440px) {
    .contact-us {
      font-size: 36px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 50px;

    .contact-us {
      font-size: 30px;
      line-height: 118.53%;
    }

    .appointment {
      font-size: 16px;
      width: 168px;
      height: 36px;
      color: #024638;
    }

    .line {
      margin: 30px 0 0;
    }

    // .content {
    //     gap: 50px;
    // }

    .message-control {
      margin-top: 7px;
    }

    .contact-email {
      gap: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    .header {
      margin-bottom: 10px;
    }

    .contact-us {
      font-size: 30px;
      font-weight: 500;
    }

    // .line {
    //   display: none;
    // }

    // .content {
    //     grid-template-columns: 1fr;
    //     gap: 100px;
    // }

    .form-label {
      font-size: 16px;
      line-height: normal;
    }

    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    input.checkbox {
      width: 20px;
      height: 20px;
    }

    .confirmation-text {
      font-size: 14px;
      width: 413px;
    }

    .submit {
      font-size: 16px;
      line-height: 135.938%;
      font-weight: 500;
      width: 153px;
      height: 42px;
      margin-bottom: 20px;
    }
    .send-message {
      display: block;
    }

    .title {
      font-size: 18px;
    }

    .value {
      font-size: 18px;
      font-weight: 300;
    }

    .contact-details {
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    margin-top: 30px;
    margin-bottom: 30px;
    .value {
      margin-bottom: 20px;
    }

    .contact-container {
      width: 380px;
    }
    // .content {
    //     gap: 40px;
    // }
  }

  @media screen and (max-width: 375px) {
    .contact-container {
      width: 325px;
    }
  }
  @media screen and (max-width: 320px) {
    .contact-us {
      font-size: 22px;
    }
    .contact-container {
      width: 280px;
    }
    .appointment {
      font-size: 12px;
      width: 128px;
      height: 36px;
    }
  }
`;

export const ContainerWrapper = styled("div")`
        display: flex;
        justify-content: center;
        margin: 0 20px;
        position: relative;
        padding: 100px 0px;
        // top: 10%;
      
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
        padding:0px;
      }
      
      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {...}
      
      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        padding:0px;
      }
      
      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        padding:20px;
        .contact-us {
          font-size: 34px;
        }
      }
      
      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        padding: 30px 0px;
      }
`;

export const UspSection = styled("div")`
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

  .main-heading {
    color: #000;
    text-align: center;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .decription {
    color: #3c3c3b;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 400;
  }
  .mainSection .innerSection {
    padding: 44px 33px;
    background: #fff;
    box-shadow: 38.848px 33.021px 53.879px 0px rgba(51, 102, 255, 0.05);
    border-radius: 22px;
  }
  .main_icon {
    // max-width: 90px;
    width: fit-content;
    height: auto;
    background-color: #e6edec;
    text-align: center;
    padding: 22px;
    border-radius: 22px;
  }
  .innercontect {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .innerboxheading {
    margin: 33px 0 26px 0;
    color: #2d2d2d;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.28px;
  }
  .innerboxdescri {
    color: #2d2d2d;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 17.833px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .first_heading {
    padding: 120px 50px;
  }

  @media only screen and (max-width: 600px) {
    .main-heading {
      font-size: 24px;
      font-weight: 700;
    }
    .first_heading {
      padding: 50px 27px;
    }
    .decription {
      font-size: 14px;
    }
    .main_icon {
      padding: 16px;
    }
    .main_icon svg {
      width: 34px;
      height: 35px;
    }
    .innerboxheading {
      font-size: 18px;
    }
    .innerboxdescri {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 600px) {
    .main-heading {
      font-size: 24px;
      font-weight: 700;
    }
    .first_heading {
      padding: 50px 27px;
    }
    .decription {
      font-size: 14px;
    }
    .main_icon {
      padding: 16px;
    }
    .main_icon svg {
      width: 34px;
      height: 35px;
    }
    .innerboxheading {
      font-size: 18px;
    }
    .innerboxdescri {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    .main-heading {
      font-size: 36px;
      font-weight: 500;
    }
    .first_heading {
      padding: 120px 50px;
    }
    .innerboxheading {
      font-size: 28px;
    }
    .decription {
      font-size: 18px;
    }
    .main_icon {
      padding: 22px;
    }
    .main_icon svg {
      width: 46px;
      height: 47px;
    }
    .innerboxdescri {
      font-size: 17.833px;
    }
  }
`;
export const SeoSection = styled("div")`
  margin: 120px 0;
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
    padding: 53px 12% 53px 30px;
  }
  .seotitle {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 36px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .seodes {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-weight: 400;
  }


@media only screen and (max-width: 600px) {
  .seotitle {
    font-size: 24px;
  }
  .seodes {
    color: #8F8F8F;
    font-size: 14px;
  }
}

@media only screen and (min-width: 600px) {
  .seotitle {
    font-size: 24px;
  }
  .seodes {
    color: #8F8F8F;
    font-size: 14px;
}

@media only screen and (min-width: 768px) {
  .seotitle {
    font-size: 36px;
  }
  .seodes {
    color: #000;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-weight: 400;
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
