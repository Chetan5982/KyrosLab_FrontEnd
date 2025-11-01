import { blackarrow, downarrow } from "@/constants/images";
import { styled } from "@mui/system";

export const ContainerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  position: relative;
  top: 10%;

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
`;

export const Form = styled("div")`
  margin-top: 30px;
  .react-tel-input .selected-flag .arrow:not(.up) {
    border-top: 4px solid #555 !important;
  }
  .react-tel-input .selected-flag .arrow.up {
    border-bottom: 4px solid #555 !important;
  }
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
    text-transform:capitalize;
  }
  .maintitle .description {
    color: #b5b5c3;
    font-size: 14px;
    font-family: IBM Plex Sans;
    font-weight: 400;
    padding:0px 0px 20px 0px;
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
    z-index:1;
  }

  .modal {
    background: white;
    padding: 20px 20px 80px 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    // z-index: 9;
    height:70%;
    margin-top:5%;
    overflow:auto;
  }
  

  .form-label, .form-control{
    position: relative;
  }

  .custom-select-box {
    padding: 5px;
    font-size: 16px;
    line-height: 1;
    border: 0;
    height: 63px;
    background: url(${blackarrow}) no-repeat right transparent;
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
    // z-index: -1;
  }

  input {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    color: #000;
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
    background-color: #fafafa;
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
    // border: 1px solid #2ebb79;
    z-index:1;
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
    background-color: #efefef;
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
    background: url(${blackarrow}) no-repeat right #fff;
    -webkit-appearance: none;
    background-position-y: -1px;
    position: relative;
    width: 100px;
    top: -30px;
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
    font-size: 64px;
    line-height: normal;
    text-transform: capitalize;
    color: #000000;
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

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  }

  .form-label {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    text-transform: capitalize;
    color: #000000;
    z-index: -1;
  }

  .form-control {
    font-size: 16px;
    font-weight: 400;
    line-height: 34px;
    border-bottom: 0.6px solid #bdbdbd;
    width: 100%;
    outline: none;
    
  }


  .react-tel-input .form-control{
    border: none !important;
    height: 55px !important;
  }
  .react-tel-input .flag-dropdown{
    border: none !important;
    background-color: #fff !important;
  }
  .react-tel-input .country-list .search-box{
    margin:unset !important;
  }
  .react-tel-input .country-list .search{
    padding:10px 10px 6px 10px !important;
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
  }

  .contact-email {
    display: flex;
    justify-content: space-between;
    gap: 45px;

   > div {
      width: 100%;
    }
  }

  input.checkbox {
    width: 24px;
    height: 24px;
    accent-color: #024638;
  }

  .custom-checkbox {
    display: none;
  }

  .custom-checkbox-label {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #bcbcbc;
    display: inline-block;
    position: relative;
    z-index: -1;
  }

  .custom-checkmark {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #024638;
  }

  .custom-checkbox:checked + .custom-checkbox-label .custom-checkmark {
    display: block;
  }
  .cheklable {
    width: auto;
    height: 24px;
  }

  .confirmation-text {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
    text-transform: capitalize;
    color: #000000;
    margin: 25px 0 0 0;
    align-item: center;
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
    color: #ffffff;
    background-color: #024638;
    width: 155px;
    height: 54px;
    cursor: pointer;
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
      font-size: 55px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 50px;

    .contact-us {
      font-size: 45px;
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

    .content {
      gap: 50px;
    }

    .message-control {
      margin-top: 7px;
    }

    .contact-email {
      gap: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      margin-bottom: 10px;
    }

    .contact-us {
      font-size: 26px;
      font-weight: 500;
    }

    // .line {
    //   display: none;
    // }

    .content {
      grid-template-columns: 1fr;
      gap: 100px;
    }

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
    .value {
      margin-bottom: 20px;
    }

    .contact-container {
      width: 380px;
    }
    .content {
      gap: 40px;
    }

     .contact-email {
        flex-wrap:wrap;
        gap:0px;

        >div{
        margin-bottom : 2.5rem;
        }
      }
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
  @media only screen and (max-width: 600px) {
    .modal-overlay{
      // position:absolute;
      // background:none;
      // height:unset;
    }
    .maintitle .titlebook{
      font-size:18px;
    }
    .virtual img{
      width:150px;
      height:150px;
    }
    .offline img{
      width:150px;
      height:150px;
    }
    .titleClose h2 {
      font-size: 24px;
    }
    .maintitle .description {
      font-size: 12px;
    }  
    .buttons button svg{
      width:35px;
      height:35px;
    }
    .mainmodel{
      display:block;
    }
    .virtual svg{
      width:150px;
      height:150px;
    }
    .offline svg{
      width:150px;
      height:150px;
    }
    .modal{
      max-width: 400px;
      width: 100%;
      height:80%;
      padding:10px 10px 30px 10px !important;
      margin-top:15%;
      overflow:auto;
    }
    .virtual{
      margin-bottom: 50px;
    }
    .virtual::after{
      display:none;
    }
  }

  @media only screen and (min-width: 600px) {
    
    .mainmodel{
      display:flex;
    }
    .virtual::after{
      display:block;
    }

    .maintitle .titlebook{
      font-size:24px;
    }
    .titleClose h2 {
      font-size: 30px;
    }
    .maintitle .description {
      font-size: 16px;
    }  
    .buttons button svg{
      width:40px;
      height:40px;
    }
  }
  
  @media only screen and (min-width: 768px) {...}
  
  @media only screen and (min-width: 992px) {...}
  
  @media only screen and (min-width: 1200px) {...}
`;

export const Location = styled("div")`
  margin: 200px 0 0;

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    text-transform: capitalize;
    color: #000000;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .cities {
    margin: 70px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: normal;
    text-transform: uppercase;
    color: #024638;

    .isActive {
      background-color: #024638;
      color: white;
    }

    .city {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 10px 20px;
      border: 1px solid #e3e3e3;
      cursor: pointer;

      :hover {
        background-color: #024638;
        color: white;
      }
    }
  }

  .desktop-map {
    display: block;
  }

  .mobile-map {
    display: none;
  }

  @media screen and (max-width: 1440px) {
    margin: 150px 0 0;

    .header {
      font-size: 55px;
    }

    .cities {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 70px 0 0;

    .header {
      font-size: 45px;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 480px) {
    .header {
      font-size: 32px;
      font-weight: 500;
    }

    .cities {
      flex-direction: column;
      margin: 40px 0;
    }

    .desktop-map {
      display: none;
    }

    .mobile-map {
      display: block;
      margin-top: 40px;
    }
  }
`;

export const ContactInfo = styled("div")`
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .branch {
    position: relative;
  }

  .contactImg {
    width: 100%;
  }

  .frontImg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .info {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .city {
    color: #fff;
    text-align: center;
    font-size: 40px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 500;
    line-height: 140.625%;
    text-transform: uppercase;
  }

  .address {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
    text-transform: capitalize;
    margin: 20px 0;
  }

  .phone {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
    cursor: pointer;
  }

  .email {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 140.625%;
    text-decoration-line: underline;
    cursor: pointer;
    margin: 10px 0;
  }

  @media screen and (max-width: 1440px) {
    .city {
      font-size: 32px;
    }

    .address {
      font-size: 16px;
    }

    .phone {
      font-size: 16px;
    }

    .email {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    .content {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 0 20px;
    }

    .isMobile {
      margin: 20px;
    }

    .city {
      font-size: 22px;
    }

    .address {
      font-size: 14px;
      margin: 15px 0;
    }

    .phone {
      font-size: 14px;
    }

    .email {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 376px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
`;

export const Question = styled("div")`
  margin: 100px 0px 60px;

  .header {
    font-family: "Prumo Deck";
    font-size: 64px;
    text-transform: uppercase;
    color: #000000;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 50px;
  }

  .description {
    margin: 30px 0;
    font-family: "IBM Plex Sans";
    font-size: 20px;
    line-height: 165.1%;
    // text-align: justify;
    color: #000000;
    font-style: normal;
    font-weight: 400;
    padding: 0px 50px;
  }

  .MuiTypography-root {
    font-size: 30px;
    font-family: "IBM Plex Sans";
    line-height: 140.6%;
    font-style: normal;
    font-weight: 400;
    padding: 10px 30px;
  }

  .answer {
    font-family: "IBM Plex Sans";
    color: #ffffff;
    font-size: 20px;
    line-height: 140.6%;
    font-style: normal;
    font-weight: 400;
    padding: 50px;
  }

  .MuiSvgIcon-root {
    width: 50px;
    height: 50px;
  }

  .MuiCardContent-root {
    padding-top: 0;
  }

  @media screen and (max-width: 1440px) {
    .header {
      font-size: 55px;
    }

    .MuiTypography-root {
      font-size: 26px;
    }

    .answer {
      font-size: 18px;
    }

    .MuiSvgIcon-root {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 70px 0 0;

    .header {
      font-weight: 500;
      font-size: 45px;
      line-height: 118.53%;
    }

    .description {
      font-size: 18px;
    }

    .MuiTypography-root {
      font-size: 22px;
    }

    .answer {
      font-size: 16px;
      line-height: 149.6%;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      font-size: 35px;
    }

    .description {
      font-size: 16px;
      line-height: 25px;
      margin: 15px 0;
    }
  }

  @media screen and (max-width: 480px) {
    .header {
      font-size: 28px;
      line-height: 118.531%;
      font-weight: 500;
      text-transform: capitalize;
      padding: 0px 13px;
    }

    .MuiTypography-root {
      font-size: 16px;
      font-weight: 500;
      line-height: 140.6%;
      padding: 0px;
    }

    .answer {
      font-size: 16px;
      line-height: 149.6%;
      // text-align: justify;
      padding: 5px 16px 16px 16px;
    }
    .description {
      padding: 0px 13px;
    }
  }
`;
