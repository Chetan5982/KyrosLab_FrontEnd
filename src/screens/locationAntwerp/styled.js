import {
  Antwerpmain,
  Antwerpmap,
  Antwerpmobile,
  Antwerptablet,
  Mumbaimain,
  Mumbaimap,
  Mumbaimobile,
  Mumbaitablet,
  SuratMap,
  blackarrow,
  contactimg,
  downarrow,
  hongkongmain,
  hongkongmap,
  hongkongmobile,
  hongkongtablet,
  mainimgUsa,
  mainimgUsaMobile,
  mainimgUsaTablet,
  maploactionUsa,
  suratmain,
  suratmainMobile,
  suratmainTablate,
} from "@/constants/images";
import { styled } from "@mui/material";
export const MainSection = styled("div")`
  background-image: url(${Antwerpmain});
  width: 100%;
  height: auto;
  background-position: center;
  background-repeat: no-repeat;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
  }
  .position-text {
    height: 100%;
    align-items: center;
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
      // padding-top: 5rem;
      padding-left: 1.5rem;
    }
  }
  @media only screen and (max-width: 596px) {
    .mainBannerHeading {
      font-size: 30px;
      width: 100%;
      // padding-top: 12rem;
      // padding-left: 3.5rem;
      text-align: center;
    }
  }
  @media only screen and (max-width: 600px) {
    background-image: url(${Antwerpmobile});
    background-size: cover;
    height: 630px;
    .mainBannerHeading {
      font-size: 22px;
      width: 90%;
    }
    .position-text {
      height: 80%;
    }
    .mapimg {
      height: 30vh;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    height: 630px;
    .mainBannerHeading {
      font-size: 22px;
      width: 80%;
      font-size: 36px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    background-image: url(${Antwerptablet});
    background-size: cover;
    height: 630px;
    .mainBannerHeading {
      font-size: 36px;
      width: 90%;
      text-align: center;
      // padding: 18% 0 20% 25px;
    }
    .position-text {
      justify-content: center;
      height: 80%;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    background-image: url(${Antwerpmain});
    background-size: cover;
    height: 660px;
    .mainBannerHeading {
      font-size: 36px;
      width: 60%;
      // padding: 90px 0 0 30px;
      text-align: left;
    }
    .position-text {
      justify-content: left;
    }
  }
  @media only screen and (min-width: 1200px) {
    .mainBannerHeading {
      // padding: 160px 0 0 0px;
      font-size: 56px;
      width: 60%;
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 310px;
    margin-top: 70px;
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    background-image: url(${Antwerpmain});
    height: 450px;
    background-size: cover;
    margin-top: 80px;
    .mainBannerHeading {
      // padding: 170px 0 0 0px;
      font-size: 56px;
      width: 80%;
    }
  }

  @media only screen and (min-width: 2000px) {
    background-image: url(${Antwerpmain});
    height: 660px;
    background-size: cover;
    margin-top: 80px;
    .mainBannerHeading {
      // padding: 170px 0 0 0px;
      font-size: 56px;
      width: 80%;
    }
  }
`;
export const MapSection = styled("div")`
  .mapimg {
    background-image: url(${Antwerpmap});
    width: 100%;
    height: 85vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
  .map_title {
    font-family: Prumo Deck;
    color: #000;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin: 120px 0px 40px 0px;
    text-transform: capitalize;
  }
  @media only screen and (max-width: 600px) {
    .mapimg {
      height: 27vh;
    }
  }

  @media only screen and (min-width: 600px) {
    .mapimg {
      height: 50vh;
    }
  }

  @media only screen and (min-width: 768px) {
    .mapimg {
      height: 60vh;
    }
  }

  @media only screen and (min-width: 992px) {
    .mapimg {
      height: 70vh;
    }
  }

  @media only screen and (min-width: 1200px) {
    .mapimg {
      height: 77vh;
    }
  }
`;
export const Officeglobe = styled("div")`
  margin: 120px 0px;

  .maintitle {
    max-width: 500px;
    width: 100%;
    padding: 0px 50px;
  }
  .maintitle .titlebook {
    color: #024638;
    font-size: 26px;
    font-family: IBM Plex Sans;
    font-weight: 500;
    text-transform: capitalize;
  }
  .maintitle .description {
    color: #b5b5c3;
    font-size: 14px;
    font-family: IBM Plex Sans;
    font-weight: 400;
    padding: 0px 0px 20px 0px;
  }
  .virtual {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .offline {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .virtual::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 300px;
    background-color: #bcbcbc;
    right: 0;
    top: 40px;
  }
  .virtual button {
    background-color: #024638;
    color: #fff;
    padding: 10px 0px;
    width: 80%;
  }
  .offline button {
    background-color: #024638;
    color: #fff;
    padding: 10px 0px;
    width: 80%;
  }

  .titleClose {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titleClose h2 {
    color: #024638;
    font-family: Prumo Deck;
    font-size: 30px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    background: white;
    padding: 20px 20px 80px 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // z-index: 9;
    height: 70%;
    margin-top: 5%;
    overflow: auto;
  }

  .form-label,
  .form-control {
    position: relative;
  }

  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }
  // .row {
  //   display: flex;
  // }
  .office_title {
    font-family: Prumo Deck;
    color: #000;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    margin: 120px 0px 40px 0px;
    text-transform: capitalize;
  }
  .right_contain {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  .right_contain .newyork_title {
    font-family: Prumo Deck;
    color: #024638;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 41px 0 30px 0;
  }
  .office_address {
    font-family: IBM Plex Sans;
    color: #000;
    font-size: 22px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 21px;
    width: 100%;
    display: inline;
  }
  // .right_contain .row {
  //   justify-content: center;
  //   align-items: center;
  // }
  .phone_number {
    margin-bottom: 21px;
  }
  .phone_number p {
    font-family: IBM Plex Sans;
    color: #000;
    font-size: 22px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .mail_contain {
    margin-bottom: 30px;
  }
  .mail_contain a {
    font-family: IBM Plex Sans;
    color: #000;
    font-size: 22px;
    font-weight: 400;
    text-transform: lowercase;
    text-decoration-line: underline;
  }
  .manager {
    margin: 30px 0px 21px 0px;
  }
  .manager .manager_title {
    font-family: IBM Plex Sans;
    color: #024638;
    font-size: 24px;
    font-weight: 500;
  }
  .manager .manager_name {
    font-family: IBM Plex Sans;
    color: #000;
    font-size: 22px;
    font-weight: 400;
  }
  .store_time h5 {
    color: #024638;
    font-family: IBM Plex Sans;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .store_time p {
    color: #000;
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 22px;
    font-weight: 400;
    text-transform: capitalize;
  }
  .book_btn {
    width: 100%;
    height: 60px;
    background-color: #024638;
    color: white;
    font-family: IBM Plex Sans;
    font-weight: 400;
    display: grid;
    margin-top: 60px;
    font-size: 22px;
    align-items: center;
    cursor: pointer;
  }

  .mainBook {
    display: flex;
    justify-content: center;
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
    .office_address {
      font-size: 18px;
      margin-bottom: 5px;
      width: 100%;
    }
    .phone_number {
      margin-bottom: 5px;
    }
    .phone_number p {
      font-size: 16px;
    }
    .mail_contain a {
      font-size: 18px;
    }
    .manager .manager_title {
      font-size: 20px;
    }
    .manager .manager_name {
      font-size: 18px;
    }
    .store_time h5 {
      font-size: 20px;
    }
    .store_time p {
      font-size: 18px;
    }
    .store_time h5 {
      margin: 0;
    }
    .book_btn {
      width: 90%;
      margin-left: 18px;
      margin-top: 30px;
    }
    .right_contain .newyork_title {
      font-size: 36px;
    }
    .mail_contain {
      margin-bottom: 10px;
    }
    .manager {
      margin: 10px 0px 10px 0px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    text-align: -moz-center;
    text-align: -webkit-center;
    .office_address {
      margin-right: 0px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .book_btn {
      width: 90%;
      margin: 20px 0px 0px 0px;
    }
    .manager {
      margin: 0px 0px 21px 0px;
    }
    .mail_contain {
      margin-bottom: 10px;
    }
    .right_contain .newyork_title {
      margin: 40px 0 0px 0;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .mail_contain {
      margin: 0;
    }
    .phone_number {
      margin: 0;
    }
    .manager {
      margin: 5px 0px 21px 0px;
    }
    .book_btn {
      margin-top: 10px;
    }
    .right_contain .newyork_title {
      margin: 0px 0 0px 0;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .right_contain .newyork_title {
      margin: 30px 0 0px 0;
    }
    .book_btn {
      margin-top: 20px;
    }
    .office_address {
      margin-bottom: 21px;
    }
    .phone_number {
      margin-bottom: 21px;
    }
    .mail_contain {
      margin-bottom: 10px;
    }
    .manager {
      margin: 10px 0px 21px 0px;
    }
  }
  @media only screen and (min-width: 1500px) {
    .right_contain .newyork_title {
      margin: 0px 0px 30px 0px;
    }
    .book_btn {
      margin-top: 30px;
    }
    .office_address {
      margin-bottom: 26px;
      padding-right: 25px;
    }
    .phone_number {
      margin-bottom: 10px;
    }
    .mail_contain {
      margin-bottom: 26px;
    }
    .manager {
      margin: 0px 0px 25px 0px;
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
  margin-top: 128px;
  margin-bottom: 128px;
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
    max-height: 170px;
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

    // div {
    //   width: 100%;
    // }
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
  padding: 120px 0px;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  }

  .uspheading h3 {
    color: #000;
    text-align: center;
    font-family: Prumo Deck;
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 50px;
  }
  .Main_cart {
    box-shadow: 10px 20px 35px 0px rgba(0, 0, 0, 0.05);
    padding: 40px;
    border-radius: 30px;
    position: relative;
    height: 100%;
  }
  // .Main_cart:hover .topleft,
  // .Main_cart:hover .rightbottom {
  //   display: block;
  // }
  .Main_cart .topleft,
  .Main_cart .rightbottom {
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  .Main_cart:hover .topleft,
  .Main_cart:hover .rightbottom {
    opacity: 1;
  }
  .Main_cart .topleft {
    top: 0;
    left: 0;
  }
  .Main_cart .rightbottom {
    bottom: 0;
    right: 0;
  }
  .Main_cart .icons {
    background-color: rgba(2, 70, 56, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 60px;
    margin-bottom: 15px;
  }
  .Main_cart .title {
    margin-bottom: 20px;
    color: #024638;
    font-family: Prumo Deck;
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .Main_cart .description {
    color: #3c3c3b;
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 400;
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

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`;
export const Address = styled("div")`
  background-image: url(${contactimg});
  padding: 120px 0px;
  background-position: center;
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0px auto;
  }
  .address_heading {
    color: #fff;
    // text-align: center;
    font-family: Prumo Deck;
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .address {
    margin: 19px 0px;
    padding: 0 36px 0 0;
  }
  .phone {
    margin-bottom: 13px;
  }
  .address_main {
    color: #fff;
    font-family: IBM Plex Sans;
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  .address_main::before {
    content: "";
    position: absolute;
    right: 0px;
    width: 1px;
    height: 330px;
    background-color: #fff;
    top: -15px;
  }
  .before:last-child::before {
    display: none;
  }
  .mail {
    text-transform: lowercase;
    text-decoration: underline;
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
      margin: 100px auto;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 1px 0px;

    .address_main::before {
      content: "";
      position: absolute;
      right: 0;
      top: 105%;
      width: 100%;
      height: 1px;
      background-color: #fff;
    }
    .address_main {
      padding: 0 22px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    // padding: 1px 0px;

    .address_main::before {
      content: "";
      position: absolute;
      right: 0;
      top: 100%;
      width: 100%;
      height: 1px;
      background-color: #fff;
    }
    .address_main {
      padding: 0 22px 22px 22px;
    }
    .address {
      margin: 19px 0px 5px 0px;
    }
    .phone {
      margin-bottom: 5px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .address_main::before {
      content: "";
      position: absolute;
      right: 0;
      top: 100%;
      width: 100%;
      height: 1px;
      background-color: #fff;
    }
    .address_main {
      text-align: center;
      padding: 0 22px 22px 22px;
    }
    .address {
      padding: 0 100px;
      font-size: 18px;
      margin: 5px 0px 5px 0px;
    }
    .mail {
      font-size: 16px;
    }
    .phone {
      font-size: 16px;
      margin: 0;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .address_main::before {
      content: "";
      position: absolute;
      top: 0;
      right: -10px;
      width: 1px;
      height: 330px;
      background-color: #fff;
      display: block;
    }
    .first_heading {
      padding: 0 270px;
    }
    .address {
      font-size: 18px;
      margin: 19px 0px;
      padding: 0 6px 0 0;
    }
    .address_main {
      text-align: center;
      padding: 0;
    }

    .mail {
      font-size: 16px;
    }
    .phone {
      font-size: 16px;
      margin-bottom: 5px;
    }

    .address_main::before {
      width: 101%;
      height: 1px;
      top: 110%;
    }
  }
  @media only screen and (min-width: 990px) {
    .address {
      padding: 0px;
    }
    .address_main {
      text-align: left;
    }
    .first_heading {
      padding: 0;
    }
    .address_main::before {
      display: block;
      right: -10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .address_main::before {
      right: -10px;
      width: 1px;
      height: 330px;
      background-color: #fff;
      top: -15px;
    }
  }
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .first_heading {
      padding: 0;
    }
    .address_main::before {
      display: block;
    }
    .mail {
      font-size: 16px;
    }
    .phone {
      font-size: 20px;
    }
    .address_main::before {
      right: -10px;
      width: 1px;
      height: 330px;
      background-color: #fff;
      top: -15px;
    }
  }
  @media only screen and (min-width: 1500px) {
    .mail {
      font-size: 18px;
    }
    .address_main::before {
      right: 0;
      width: 1px;
      height: 300px;
      background-color: #fff;
      top: -15px;
    }
  }
`;
export const LastContain = styled("div")`
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 120px auto;
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
export const Countries = styled("div")`
          .container {
            width: 100%;
            max-width: 1300px;
            margin: 0px auto;
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
        
          .contries_wrapper .main_link .link_title {
            padding: 5px 15px;
            color: #000;
            font-family: IBM Plex Sans;
            font-size: 20px;
            font-weight: 400;
          }
          .contries_wrapper .main_link a {
            text-decoration: underline;
          }
          .main_link:nth-child(4) svg {
            display: none;
          }
          .main_link:nth-child(7) svg {
            display: none;
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
            .main_link > svg {
              display: none;
            }
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
            .contries_wrapper .main_link .link_title {
              font-size: 20px;
              padding: 5px 60px 5px 0px;
            }
          }
         
        
          /* Small devices (portrait tablets and large phones, 600px and up) */
          @media only screen and (min-width: 600px) {
            .countries {
              margin: 30px 0px 0px 0px;
            }
            .main_link:nth-child(2) svg {
              display: none;
            }
            .main_link:nth-child(5) svg {
              display: none;
            }
            .main_link:nth-child(6) svg {
              display: block;
            }
            .contries_wrapper .main_link .link_title {
              font-size: 20px;
              padding: 5px 10px 5px 10px;
            }
          }
          @media only screen and (min-width: 620px) {
            .contries_wrapper .main_link .link_title {
              padding: 5px 14px 5px 10px;
          }
          }
          @media only screen and (min-width: 621px) {
            .main_link:nth-child(5) svg {
              display: block;
            }
            .main_link:nth-child(6) svg {
              display: none;
            }
          }
          @media only screen and (min-width: 627px) {
            .contries_wrapper .main_link .link_title {
              font-size: 20px;
              padding: 5px 10px 5px 10px;
            }
          }
          @media only screen and (min-width: 631px) {
            .contries_wrapper .main_link .link_title {
              font-size: 20px;
              padding: 5px 20px 5px 10px;
            }
          }
          /* Medium devices (landscape tablets, 768px and up) */
          @media only screen and (min-width: 768px) {
            .contries_wrapper .main_link .link_title {
              padding: 5px 10px 5px 10px;
            }
            .contries_wrapper p {
              font-size: 17px;
            }
            
          } 
          @media only screen and (min-width: 829px) {
            .contries_wrapper .main_link .link_title {
              padding: 5px 15px 5px 10px;
            }
          }
          @media only screen and (min-width: 832px) {
            .contries_wrapper .main_link .link_title {
              padding: 5px 15px 5px 10px;
            }
          }
          @media only screen and (min-width: 834px) {
            .main_link:nth-child(2) svg {
              display: block;
            }
          }
          @media only screen and (min-width: 836px) {
            .main_link:nth-child(2) svg {
              display: none;
            }
          }
          @media only screen and (min-width: 844px) {
            .main_link:nth-child(3) svg {
              display: none;
            }
            .main_link:nth-child(4) svg {
              display: block;
            }
            .main_link:nth-child(5) svg {
              display: none;
            }
            .main_link:nth-child(6) svg {
              display: block;
            }
          }
        
          @media only screen and (min-width: 859px) {
            .main_link:nth-child(2) svg {
              display: block;
            }
            .main_link:nth-child(3) svg {
              display: none;
            }
            .main_link:nth-child(4) svg {
              display: block;
            }
            .main_link:nth-child(5) svg {
              display: none;
            }
            .main_link:nth-child(6) svg {
              display: block;
            }
          }
          @media only screen and (min-width: 864px) {
          .contries_wrapper .main_link .link_title {
              padding: 5px 15px;
          }
         
          @media only screen and (min-width: 922px) {
            .main_link:nth-child(2) svg {
              display: block;
            }
            .main_link:nth-child(3) svg {
              display: none;
            }
            .main_link:nth-child(4) svg {
              display: block;
            }
            .main_link:nth-child(6) svg {
              display: block;
            }
            .main_link:nth-child(5) svg {
              display: none;
            }
          }
          /* Large devices (laptops/desktops, 992px and up) */
          @media only screen and (min-width: 992px) {
            .contries_wrapper p {
              font-size: 17px;
            }
            .main_link:nth-child(2) svg {
              display: block;
            }
            .main_link:nth-child(3) svg {
              display: none;
            }
            .main_link:nth-child(4) svg {
              display: block;
            }
            .main_link:nth-child(5) svg {
              display: none;
            }
            .main_link:nth-child(6) svg {
              display: none;
            }
          }
        
          /* Extra large devices (large laptops and desktops, 1200px and up) */
          @media only screen and (min-width: 1200px) {
            .main_link:nth-child(5) svg {
              display: block;
            }
          }
          @media only screen and (min-width: 1442px) {
            .main_link:nth-child(3) svg {
              display: block;
            }
            .main_link:nth-child(4) svg {
              display: none;
            }
            .main_link:nth-child(6) svg {
              display: block;
            }
            .main_link:nth-child(5) svg {
              display: block;
            }
          }
        `;
