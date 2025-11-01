import { blackarrow } from "@/constants/images";
import { styled } from "@mui/system";

export const ContainerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  .react-tel-input .selected-flag .arrow:not(.up){
    border-top: 4px solid #555 !important;
  }
  .react-tel-input .selected-flag .arrow.up{
    border-bottom: 4px solid #555 !important;
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
`;
export const CustomDatePickerWrapper = styled("div")`
  position: relative;
  display: inline-block;
`;

export const CustomInput = styled("input")`
  width: 200px; /* Adjust the width as needed */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: ${(props) => (props.isCalendarOpen ? "#f0f0f0" : "white")};
  cursor: pointer;
`;

export const CalendarIconWrapper = styled("div")`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const Form = styled("div")`
  margin-top: 150px;
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
  }
  li {
    padding: 10px;
    cursor: pointer;
  }
  .error-message {
    // margin: 10px 0 10px 0px;
    color: #f64e60;
    display: flex;
    align-items: center;
    gap: 5px;
    width: fit-content;
  }
  li:hover {
    background-color: #efefef;
    color: #024638;
    font-weight: 600;
    font-size: 16px;
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

  .options-list.visible {
    max-height: 170px;
    display: block;
  }

  .book-appointment {
    color: #000;
    font-size: 64px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  .line {
    border-bottom: 1px solid #bdbdbd;
    margin: 30px 0 60px;
  }

  .form-label {
    color: #000;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  .form-control {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    border-bottom: 1px solid #bdbdbd;
    width: 100%;
    outline: none;
    height: 50px;
  }

  .message-control {
    border: 1px solid #bdbdbd;
    padding: 5px 10px;
    width: 100%;
    height: 140px;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    outline: none;
    margin-top: 25px;
  }

  // .email {
  //   display: flex;
  //   justify-content: space-between;
  //   gap: 70px;

  //   div {
  //     width: 100%;
  //   }
  // }

  // .name {
  //   display: flex;
  //   justify-content: space-between;
  //   gap: 70px;

  //   div {
  //     width: 100%;
  //   }
  // }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input.checkbox {
    width: 30px;
    height: 30px;
    accent-color: #024638;
  }

  .confirmation-text {
    color: #000;
    font-size: 16px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a4c89a;
    width: 238px;
    height: 54px;
    color: #000;
    font-size: 16px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 135.938%;
    text-transform: capitalize;
  }

  //  input[type="date"]::-webkit-calendar-picker-indicator {
  //     opacity: 1;
  //     display: block;
  //     background-image: url("date.png");
  //     background-repeat: no-repeat;
  //     background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png)
  //       no-repeat;
  //     width: 50px;
  //     height: 50px;
  //     background: #024638;
  //   }
  .cheklable {
    width: auto;
    height: 24px;
  }
  .custom-checkbox {
    display: none;
  }
  .custom-checkbox:checked + .custom-checkbox-label .custom-checkmark {
    display: block;
  }
  .custom-checkbox-label {
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #bcbcbc;
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
    background-color: #024638;
  }
  @media screen and (max-width: 1024px) {
    // margin: 50px 0;

    .book-appointment {
      font-size: 45px;
      line-height: 118.53%;
    }

    .line {
      margin: 30px 0 0;
    }

    .message-control {
      margin-top: 7px;
    }

    .submit {
      font-size: 13px;
      line-height: 17px;
      width: 170px;
      height: 40px;
    }

    // .email,
    // .name {
    //   gap: 30px;
    // }
  }

  @media screen and (max-width: 768px) {
    .book-appointment {
      font-size: 32px;
    }

    input.checkbox {
      width: 20px;
      height: 20px;
    }

    .confirmation-text {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 100px;
    .form-label {
      font-size: 16px;
    }

    .confirmation-text {
      width: 100%;
    }

    .form-footer {
      flex-direction: column;
      align-items: center;
    }

    .submit {
      margin-top: 20px;
      width: 300px;
      height: 54px;
    }
  }
`;
