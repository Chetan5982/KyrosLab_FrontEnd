"use client";
import React, { useEffect, useRef } from "react";
import {
  Address,
  ContactUs,
  ContainerWrapper,
  Countries,
  Form,
  LastContain,
  MainSection,
  MapSection,
  Officeglobe,
  UspSection,
} from "./styled";
import {
  BookpopupOffice,
  Bookpopupvirtual,
  ClosePopup,
  SuratOffice,
  mail_line,
  officeglobe,
  phone_line,
} from "@/constants/images";
import Image from "next/image";
import UpdownArrow from "@/asset/images/UpdownArrow.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { POST } from "@/services/methods";
import FullPageLoader from "@/components/common/fullpageloader";
import suratData from "@/disct/surat";
import PhoneInput from "react-phone-input-2";
import ContectField from "@/components/ContectField";

export function LandingContactForm({ lang, ...props }) {
  const data = suratData[lang] || suratData["en-in"];
  const {
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    formRequire,
    formButton,
    formError,
  } = data;
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setIsError(true);
      return;
    }
    setIsError(false);
    props.handleClick();
  };
  
  return (
    <form className="contact-container" onSubmit={handleSubmit}>
      <div className="mt-10">
        <div
          onClick={() => props?.inputRef?.current?.click()}
          className="flex justify-between items-center arrow_relative"
        >
          <div className="form-label">{questionOne} *</div>
          {/* <Image
         src={UpdownArrow}
         alt="updownarrow"
         className="updownimage"
        /> */}
        </div>
        {/* <div class="custom-dropdown">
       <select
         class="mt-2 form-control select-control"
         id="custom-select"
       >
         <option value="option1">Contact our specialist</option>
         <option value="option2">Inquiry</option>
         <option value="option3">Get Support</option>
         <option value="option4">Meet Us</option>
       </select>
      </div> */}
        <div
          className="custom-select-box mt-5"
          onClick={() => props?.inputRef?.current?.click()}
        >
          <input
            type="text"
            value={props.contactData.weCanHelp}
            onChange={(e) => {
              e.preventDefault();
            }}
            placeholder=""
            ref={props.inputRef}
            onClick={props.toggleOptions}
            required
          />
          <ul
            className={`options-list ${props.optionsVisible ? "visible" : ""}`}
          >
            {props.options.map((option, index) => (
              <li key={index} onClick={() => props.handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <div className="form-label">{questionTwo}*</div>
        <input
          type="text"
          className="form-control"
          value={props.contactData.name}
          onChange={(e) =>
            props.setContactData((pre) => ({ ...pre, name: e.target.value }))
          }
          required
        />
      </div>

      <div className="my-10 contact-email">
        <div className="grow">
          <div className="form-label">{questionThree}*</div>
          {/* <input
            type="number"
            className="form-control"
            value={props.contactData.phoneNo}
            minLength={10}
            onChange={(e) =>
              props.setContactData((pre) => ({
                ...pre,
                phoneNo: e.target.value,
              }))
            }
            required
          /> */}
          <ContectField contactData={props.contactData} setContactData={props.setContactData} />
        </div>
        <div className="grow">
          <div className="form-label">{questionFour}*</div>
          <input
            type="email"
            className="form-control"
            value={props.contactData.email}
            onChange={(e) =>
              props.setContactData((pre) => ({ ...pre, email: e.target.value }))
            }
            required
          />
        </div>
      </div>

      <div>
        <div className="form-label">{questionFive}*</div>
        <textarea
          className="message-control"
          value={props.contactData.message}
          onChange={(e) =>
            props.setContactData((pre) => ({ ...pre, message: e.target.value }))
          }
        />
      </div>

      <div className="footer">
        <div className="flex items-center confirmation-text">
          {/* <div>
         <input type="checkbox" className="mr-2 checkbox" />
        </div> */}
          <label>
            <input
              type="checkbox"
              className="custom-checkbox mr-2"
              checked={props.contactData.isPrivacyPolicy}
              onChange={(e) => {
                props.setContactData((pre) => ({
                  ...pre,
                  isPrivacyPolicy: e.target.checked,
                }));
                setIsChecked(e.target.checked);
                setIsError(false); // Reset error when the checkbox is checked
              }}
            />
            <span className="custom-checkbox-label mr-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="custom-checkmark"
              >
                <path
                  d="M18 7L9.42857 17L6 13"
                  stroke="#024638"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </label>
          <div>
            {/* By submitting, you confirm you have read and accept our
            <a href="./privacy-statement" className="underline ms-1">
              Privacy policy.
            </a> */}
            {formRequire}
          </div>
        </div>
        {isError && (
          <div className="error-message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M6.49968 3.79183C6.35602 3.79183 6.21824 3.8489 6.11666 3.95048C6.01508 4.05206 5.95801 4.18984 5.95801 4.3335V6.50016C5.95801 6.64382 6.01508 6.7816 6.11666 6.88318C6.21824 6.98476 6.35602 7.04183 6.49968 7.04183C6.64334 7.04183 6.78111 6.98476 6.88269 6.88318C6.98428 6.7816 7.04134 6.64382 7.04134 6.50016V4.3335C7.04134 4.18984 6.98428 4.05206 6.88269 3.95048C6.78111 3.8489 6.64334 3.79183 6.49968 3.79183ZM6.99801 8.461C6.98615 8.42648 6.96976 8.39369 6.94926 8.3635L6.88426 8.28225C6.80809 8.20709 6.71136 8.15617 6.60628 8.13593C6.50121 8.11568 6.39249 8.12702 6.29384 8.1685C6.2282 8.19593 6.16774 8.2344 6.11509 8.28225C6.06489 8.33286 6.02517 8.39289 5.99822 8.45888C5.97126 8.52488 5.9576 8.59554 5.95801 8.66683C5.95887 8.73761 5.97359 8.80754 6.00134 8.87266C6.02567 8.93988 6.06448 9.00093 6.11503 9.05148C6.16558 9.10202 6.22663 9.14084 6.29384 9.16516C6.35868 9.19382 6.42879 9.20862 6.49968 9.20862C6.57057 9.20862 6.64067 9.19382 6.70551 9.16516C6.77273 9.14084 6.83378 9.10202 6.88432 9.05148C6.93487 9.00093 6.97368 8.93988 6.99801 8.87266C7.02577 8.80754 7.04049 8.73761 7.04134 8.66683C7.044 8.63077 7.044 8.59456 7.04134 8.5585C7.03202 8.52395 7.0174 8.49107 6.99801 8.461ZM6.49968 1.0835C5.42836 1.0835 4.3811 1.40118 3.49034 1.99637C2.59957 2.59156 1.9053 3.43753 1.49533 4.42729C1.08535 5.41706 0.978087 6.50617 1.18709 7.5569C1.39609 8.60763 1.91198 9.57279 2.66952 10.3303C3.42705 11.0879 4.39221 11.6037 5.44294 11.8128C6.49367 12.0218 7.58278 11.9145 8.57255 11.5045C9.56231 11.0945 10.4083 10.4003 11.0035 9.5095C11.5987 8.61874 11.9163 7.57148 11.9163 6.50016C11.9163 5.78884 11.7762 5.08447 11.504 4.42729C11.2318 3.77011 10.8328 3.17299 10.3298 2.67C9.82685 2.16702 9.22973 1.76803 8.57255 1.49582C7.91537 1.2236 7.211 1.0835 6.49968 1.0835ZM6.49968 10.8335C5.64262 10.8335 4.80482 10.5794 4.09221 10.1032C3.37959 9.62704 2.82418 8.95027 2.4962 8.15846C2.16822 7.36664 2.0824 6.49536 2.24961 5.65477C2.41681 4.81419 2.82952 4.04206 3.43555 3.43603C4.04158 2.83001 4.8137 2.4173 5.65429 2.25009C6.49487 2.08289 7.36616 2.16871 8.15797 2.49668C8.94979 2.82466 9.62656 3.38008 10.1027 4.09269C10.5789 4.8053 10.833 5.64311 10.833 6.50016C10.833 7.64943 10.3765 8.75164 9.56381 9.56429C8.75115 10.377 7.64895 10.8335 6.49968 10.8335Z"
                fill="#F64E60"
              />
            </svg>
            {formError}
          </div>
        )}
        <button className="submit" type="submit">
          {formButton}
        </button>
      </div>
    </form>
  );
}

function LocationSurat({ lang }) {
  const data = suratData[lang] || suratData["en-in"];
  const {
    bannerTitle,
    mapTitle,
    officeTitle,
    placeTitle,
    placeAddress,
    ceoTitle,
    ceoName,
    officeTimeTitle,
    officeTime,
    bookButton,
    contectTitle,
    qualityTitle,
    pointOneTitle,
    pointOneDiscription,
    pointTwoTitle,
    pointTwoDescription,
    pointThreeTitle,
    pointThreeDescription,
    pointFourTitle,
    pointFourDescription,
    pointFiveTitle,
    pointFiveDescription,
    countryOne,
    countryOneAddress,
    countryTwo,
    countryTwoAddress,
    countryThree,
    countryThreeAddress,
    countryFour,
    countryFourAddress,
    countryFive,
    countryFiveAddress,
    chioceTitle,
    chiocePereOne,
    chiocePereTwo,
    chiocePereThree,
    chiocePereFour,
    countryTitle,
    countryLinkOne,
    countryLinkTwo,
    countryLinkThree,
    countryLinkFour,
    countryLinkFive,
    countryLinkSix,
    countryLinkSeven,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
  } = data;
  const router = useRouter();
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [contactData, setContactData] = useState({
    weCanHelp: "",
    name: "",
    phoneNo: "",
    email: "",
    message: "",
    isPrivacyPolicy: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleOptionClick = (option) => {
    setContactData((pre) => ({ ...pre, weCanHelp: option }));
    setOptionsVisible(false);
  };

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  const handleClick = async () => {
    setIsLoading(true);
    const { code, value: e } = contactData.phoneNo;
    const dialcode = "+" + code.dialCode;
    const value = `${dialcode} ${String(e).slice(code.dialCode.length)}`;
    try {
      await POST("/contact/sendMail", {
        name: contactData.name,
        email: contactData.email,
        phoneNo: value,
        message: contactData.message,
        howWeCan: contactData.weCanHelp,
      });
      setIsLoading(false);
      router.push("/thankyou-contact");
    } catch (error) {
      setIsLoading(false);
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.head.appendChild(script);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const options = [
    `${optionOne}`,
    `${optionTwo}`,
    `${optionThree}`,
    `${optionFour}`,
  ];

  const AppointmentModal = ({ onClose }) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      document.head.appendChild(script);

      // Prevent scrolling on the body when the modal is open
      document.body.style.overflow = "hidden";

      return () => {
        document.head.removeChild(script);
        // Re-enable scrolling on the body when the modal is closed
        document.body.style.overflow = "auto";
      };
    }, []);

    const openCalendlyPopup = () => {
      if (window.Calendly) {
        window.Calendly.showPopupWidget(
          "https://calendly.com/bhanderi/book-appointment"
        );
        onClose();
      }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="titleClose">
            <h2>Book Appointment</h2>
            <div className="buttons">
              <button onClick={onClose}>
                <img src={ClosePopup} />
              </button>
            </div>
          </div>
          <div className="mainmodel flex text-center">
            <div className="virtual">
              <img src={Bookpopupvirtual} />
              <div className="maintitle">
                <p className="titlebook">Virtual Consultations</p>
                <p className="description">
                  Meet us online via Google Meet for a virtual chat about our
                  lab grown diamonds.
                </p>
              </div>
              <button onClick={openCalendlyPopup}>Book Appointment</button>
            </div>

            <div className="offline">
              <img src={BookpopupOffice} />
              <div className="maintitle">
                <p className="titlebook">In-Office Appointments</p>
                <p className="description">
                  Visit us in person for a one-on-one appointment and see our
                  lab grown diamonds up close.
                </p>
              </div>
              <button onClick={() => router.push("/book-appointment")}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // const handleHindi = () =>{
  //   router.push('/lab-grown-diamonds-manufacturer-surat/hi-in')
  // }
  // const handleEnglish = () =>{
  //   router.push('/lab-grown-diamonds-manufacturer-surat/en-in')
  // }
  return (
    <>
      <MainSection>
        <FullPageLoader open={isLoading} />
        <div className="container">
          <div className="flex position-text">
            <h1 className="mainBannerHeading">{bannerTitle}</h1>
          </div>
        </div>
      </MainSection>
      {/* <div>
        <a onClick={handleHindi} className="cursor-pointer">Surat Hindi</a> || 
         {' '}<a onClick={handleEnglish} className="cursor-pointer">Surat English</a>
      </div> */}
      <MapSection>
        <div className="container">
          <p className="map_title">{mapTitle}</p>
          <div className="mapimg"></div>
        </div>
      </MapSection>
      <Officeglobe>
        <div className="container">
          <h3 className="office_title">{officeTitle}</h3>
          <div className="grid grid-cols-2 items-center max-[768px]:grid-cols-1">
            <div>
              <img src={SuratOffice} alt="officeglobe" />
            </div>
            <div className="right_contain">
              <p className="newyork_title">{placeTitle}</p>
              <p className="office_address">{placeAddress}</p>
              <div className="flex justify-center phone_number items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M27.4625 22.9125C27.4625 23.3625 27.3625 23.825 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C23.5 27.3375 22.6875 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12 23.0625 10.6375 21.9 9.3375 20.6125C8.05 19.3125 6.8875 17.95 5.85 16.525C4.825 15.1 4 13.675 3.4 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C14.0875 17.1875 14.7375 17.8 15.4 18.3625C16.05 18.9125 16.5875 19.2875 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z"
                    stroke="#024638"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  />
                </svg>
                <p>
                  <a href="tel:+91 85003 85003">+91 85003 85003</a>
                </p>
              </div>
              <div className="flex justify-center mail_contain items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M21.25 25.625H8.75C5 25.625 2.5 23.75 2.5 19.375V10.625C2.5 6.25 5 4.375 8.75 4.375H21.25C25 4.375 27.5 6.25 27.5 10.625V19.375C27.5 23.75 25 25.625 21.25 25.625Z"
                    stroke="#024638"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.25 11.25L17.3375 14.375C16.05 15.4 13.9375 15.4 12.65 14.375L8.75 11.25"
                    stroke="#024638"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <a href="mailto:info@blgdlab.com">info@blgdlab.com</a>
              </div>
              <div className="flex justify-center manager items-center">
                <p className="manager_title me-2">{ceoTitle}</p>
                <p className="manager_name">{ceoName}</p>
              </div>
              <div className="store_time">
                <h5>{officeTimeTitle}</h5>
                <p>{officeTime}</p>
              </div>
              <div className="mainBook">
                <button
                  className="book_btn appointment"
                  // href={{
                  //   pathname: "/book-appointment",
                  // }}
                  onClick={openModal}
                >
                  {bookButton}
                </button>
                {isModalOpen && <AppointmentModal onClose={closeModal} />}
              </div>
            </div>
          </div>
        </div>
      </Officeglobe>

      <ContactUs>
        <ContainerWrapper>
          <div className="container">
            <Form>
              <div className="header">
                <h3 className="contact-us">{contectTitle}</h3>
              </div>
              {/* <div className="line"></div> */}

              <div className="content">
                <LandingContactForm
                  optionsVisible={optionsVisible}
                  contactData={contactData}
                  setContactData={setContactData}
                  options={options}
                  handleOptionClick={handleOptionClick}
                  toggleOptions={toggleOptions}
                  handleClick={handleClick}
                  inputRef={inputRef}
                  lang={lang}
                />
              </div>
            </Form>
          </div>
        </ContainerWrapper>
      </ContactUs>

      <UspSection>
        {/* <div className="hex"></div> */}
        <div className="uspheading">
          <h3>{qualityTitle}</h3>
        </div>
        <div className="container">
          <div className="flex justify-center md:block max-[768px]:flex-wrap min-[992px]:pr-5 lg:flex">
            <div className="grid grid-cols-3 gap-6 mx-4 main_Usp max-[768px]:grid-cols-3 max-[600px]:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
              <div className="Main_cart">
                <div className="inner_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 48 50"
                    className="svgs"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.7671 30.3579L38.4521 26.1345C38.6302 25.6122 38.7385 25.0812 38.7369 24.5746L38.6798 4.35766C38.6776 3.51176 38.3822 2.86762 37.8647 2.49955C37.7744 2.38314 37.8715 2.48187 35.2272 0.941152C34.6228 0.59164 33.847 0.654531 33.0408 1.11713L15.2808 11.3666C13.778 12.2302 12.5813 14.3609 12.5813 16.0391L12.6079 24.3334L2.22842 30.3653C1.29023 30.9105 0.920117 31.6412 0.920117 32.2589V32.2621L0.913086 35.7294C0.913086 36.4586 1.39717 37.1578 2.24248 37.6481L21.1731 48.5749C22.8024 49.5187 25.3422 49.5175 26.9561 48.5746L45.7733 37.6403C46.6108 37.1523 47.0777 36.4802 47.0871 35.7435V32.2861C47.0608 32.2056 47.2038 31.1877 45.7671 30.3579ZM15.2081 38.2361L13.978 37.5217C13.6348 37.3196 13.4463 36.8707 13.4463 36.2573V36.2561L13.3954 20.0498L15.1127 21.042C15.1128 21.1232 15.1468 37.8596 15.2081 38.2361ZM18.2086 13.523C24.4159 9.94418 35.8436 3.32309 36.1933 3.16283C36.5605 3.00053 36.9982 2.89564 37.3441 3.09496C37.6874 3.29242 37.8774 3.74164 37.879 4.3598L37.8876 7.42943L31.9478 10.8588L15.9172 20.1139C15.9073 16.7517 15.9048 17.6459 15.9268 17.298C16.0307 15.815 17.0656 14.1827 18.2086 13.523ZM15.9689 37.7215C15.9024 15.2162 15.9241 22.5436 15.9197 21.0376L37.8899 8.35297L37.936 24.5769C37.9399 26.0126 36.8874 27.8355 35.6369 28.5573L17.8817 38.8085C16.7217 39.4786 15.9689 38.9295 15.9689 37.7215ZM15.6804 12.0606L33.4404 1.81098C33.9792 1.50053 34.4852 1.43676 34.827 1.63422V1.63461L36.0555 2.34428C35.5703 2.52475 36.5233 2.04184 17.8013 12.8254C16.4419 13.6182 15.2087 15.523 15.1247 17.3041C15.094 17.8796 15.1167 20.1993 15.1163 20.1191L13.3924 19.1231L13.3822 16.0378C13.3821 14.6658 14.4021 12.7951 15.6804 12.0606ZM2.63037 31.0574L12.6108 25.2574L12.6454 36.2584C12.6454 37.1663 12.9746 37.86 13.5736 38.2126L16.0964 39.6781C16.0987 39.6794 16.1013 39.6787 16.1036 39.68C16.7865 40.073 17.595 39.8988 18.282 39.5021L36.0373 29.2508C36.9018 28.7516 37.6492 27.8669 38.1397 26.8789L45.3666 31.0514C46.6181 31.7734 46.5639 32.7875 45.3775 33.4787L26.5611 44.4127C25.517 45.0195 23.816 45.2228 22.3364 44.7353C21.5969 44.4916 23.2824 45.3726 2.64687 33.4765C1.45176 32.7995 1.38486 31.7814 2.63037 31.0574ZM46.2863 35.7384C46.2809 36.1712 45.947 36.6123 45.3706 36.9482L26.5533 47.8829C25.188 48.6805 22.9538 48.6809 21.5743 47.8817L2.64365 36.9548C2.05244 36.6119 1.71387 36.1654 1.71387 35.7302L1.71777 33.8026C2.03721 34.075 21.2114 45.2163 22.1468 45.5122C23.8522 46.053 25.8023 45.7811 26.9631 45.1056C47.4256 33.2149 45.9469 34.1034 46.2863 33.8143V35.7384Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M18.6449 17.1815C19.2094 16.8555 19.6645 16.0667 19.6627 15.4186C19.6609 14.7706 19.2026 14.5088 18.6383 14.8348C18.0742 15.1604 17.6191 15.9493 17.6211 16.5974C17.6229 17.2454 18.081 17.5071 18.6449 17.1815ZM21.372 15.607C21.9366 15.281 22.3917 14.4921 22.3898 13.8441C22.3878 13.1961 21.9299 12.9343 21.3653 13.2603C20.8013 13.5859 20.3462 14.3749 20.348 15.0229C20.3499 15.671 20.808 15.9326 21.372 15.607ZM24.099 14.0326C24.6637 13.7066 25.1186 12.9177 25.1168 12.2697C25.115 11.6216 24.6567 11.3599 24.0924 11.6859C23.5283 12.0115 23.0732 12.8004 23.0752 13.4485C23.077 14.0964 23.535 14.3582 24.099 14.0326ZM19.2195 25.5313C19.3003 25.5983 26.8121 31.8207 26.7318 31.7651C26.9149 31.8918 27.1344 31.8539 27.2677 31.6846C27.3271 31.6102 34.6999 16.8774 34.7375 16.7971C34.8262 16.6193 34.7375 16.3652 34.5842 16.274L31.8448 14.6412C31.7056 14.5585 31.4383 14.5723 31.3154 14.6431L22.062 19.9857C22.0004 20.0212 21.9494 20.0724 21.9143 20.1342L19.1273 25.0249C19.033 25.1923 19.1057 25.4233 19.2195 25.5313ZM28.6392 20.3947L26.8777 29.7087L24.8356 22.5909L28.6392 20.3947ZM28.5065 19.5459L26.4129 20.7548L25.3832 21.3494L27.0348 18.2739L28.5065 19.5459ZM20.173 25.2828L24.1209 23.0034L26.2146 30.3023L20.173 25.2828ZM29.5538 19.8666L33.4235 17.6323L27.8841 28.6953L29.5538 19.8666ZM31.5798 15.4153L33.588 16.6126L29.241 19.1218L27.6065 17.7096L31.5798 15.4153ZM22.5564 20.625L25.8994 18.6946L24.0658 22.1101L20.5545 24.1374L22.5564 20.625Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <p className="cart_title">{pointOneTitle}</p>
                <p className="cart_description">{pointOneDiscription}</p>
              </div>
              <div className="Main_cart">
                <div className="inner_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 44 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgs"
                  >
                    <path
                      d="M25.2414 11.1016C25.1559 11.1016 25.0701 11.0811 24.9917 11.0395L22 9.45694L19.0082 11.0395C18.6236 11.2428 18.1585 10.9064 18.2317 10.4776L18.8038 7.12104L16.3807 4.74444C16.071 4.4407 16.2484 3.89722 16.6775 3.8344L20.0234 3.34519L21.5201 0.293266C21.712 -0.0980807 22.2877 -0.0980807 22.4795 0.293266L23.9763 3.34519L27.3222 3.8344C27.7513 3.89711 27.9287 4.4407 27.619 4.74444L25.1959 7.12104L25.768 10.4776C25.8211 10.7875 25.5582 11.1016 25.2414 11.1016ZM22 8.31827C22.0859 8.31827 22.1716 8.33889 22.2497 8.38034L24.5325 9.58792L24.0957 7.0251C24.0812 6.94009 24.0875 6.85283 24.1141 6.77078C24.1406 6.68873 24.1867 6.61434 24.2482 6.55395L26.1019 4.73589L23.5433 4.36186C23.4575 4.34932 23.376 4.31606 23.3059 4.26494C23.2358 4.21382 23.1792 4.14639 23.141 4.06848L22 1.74188L20.8588 4.06837C20.8206 4.14627 20.764 4.21369 20.6939 4.26481C20.6238 4.31593 20.5423 4.3492 20.4565 4.36175L17.8979 4.73579L19.7516 6.55384C19.8131 6.61423 19.8592 6.68862 19.8857 6.77067C19.9123 6.85272 19.9186 6.93998 19.9041 7.025L19.4673 9.58782L21.7501 8.38023C21.8271 8.33956 21.9129 8.31829 22 8.31827ZM41.2609 14.269C41.1754 14.269 41.0896 14.2485 41.0112 14.2069L38.0194 12.6244L35.0276 14.2069C34.643 14.4103 34.1779 14.0738 34.2511 13.645L34.8232 10.2885L32.4002 7.91186C32.0904 7.60812 32.2678 7.06463 32.697 7.00181L36.0428 6.5126L37.5396 3.46068C37.7315 3.06933 38.3071 3.06933 38.499 3.46068L39.9958 6.5126L43.3416 7.00181C43.7708 7.06453 43.9481 7.60812 43.6384 7.91186L41.2153 10.2885L41.7875 13.645C41.8404 13.9548 41.5776 14.269 41.2609 14.269ZM38.0194 11.4857C38.1053 11.4857 38.1911 11.5063 38.2692 11.5478L40.552 12.7553L40.1151 10.1925C40.1006 10.1075 40.1069 10.0202 40.1335 9.93819C40.1601 9.85615 40.2061 9.78175 40.2677 9.72136L42.1213 7.90331L39.5628 7.52927C39.4769 7.51674 39.3954 7.48347 39.3253 7.43235C39.2552 7.38124 39.1986 7.3138 39.1604 7.23589L38.0193 4.9094L36.8782 7.23589C36.84 7.31379 36.7834 7.38122 36.7133 7.43233C36.6432 7.48345 36.5617 7.51672 36.4758 7.52927L33.9173 7.90331L35.7709 9.72136C35.8325 9.78175 35.8785 9.85615 35.9051 9.93819C35.9316 10.0202 35.938 10.1075 35.9235 10.1925L35.4866 12.7553L37.7694 11.5478C37.8464 11.507 37.9322 11.4857 38.0194 11.4857ZM9.22207 14.269C9.1366 14.269 9.05081 14.2485 8.97239 14.2069L5.98062 12.6244L2.98884 14.2069C2.60423 14.4103 2.13916 14.0738 2.21235 13.645L2.78446 10.2885L0.361385 7.91186C0.0516624 7.60812 0.229013 7.06463 0.65818 7.00181L4.00401 6.5126L5.50081 3.46068C5.69269 3.06933 6.26833 3.06933 6.46021 3.46068L7.95701 6.5126L11.3028 7.00181C11.732 7.06453 11.9094 7.60812 11.5996 7.91186L9.17656 10.2885L9.74867 13.645C9.80166 13.9549 9.53884 14.269 9.22207 14.269ZM5.98051 11.4857C6.06641 11.4857 6.1522 11.5063 6.2303 11.5478L8.51309 12.7553L8.07624 10.1925C8.06174 10.1075 8.06805 10.0202 8.09462 9.93819C8.12119 9.85615 8.16723 9.78175 8.2288 9.72136L10.0824 7.90331L7.52389 7.52927C7.43803 7.51674 7.35652 7.48347 7.28642 7.43235C7.21631 7.38124 7.15972 7.3138 7.12153 7.23589L5.98051 4.90929L4.83948 7.23579C4.80128 7.31369 4.74469 7.38111 4.67458 7.43222C4.60448 7.48334 4.52298 7.51661 4.43713 7.52916L1.87859 7.9032L3.73222 9.72126C3.79379 9.78164 3.83983 9.85604 3.8664 9.93809C3.89297 10.0201 3.89927 10.1074 3.88478 10.1924L3.44792 12.7552L5.73072 11.5476C5.80768 11.5069 5.89344 11.4857 5.98051 11.4857ZM24.4574 49.9999H19.5425C19.414 49.9999 19.2898 49.9536 19.1926 49.8695C19.0955 49.7854 19.032 49.6691 19.0136 49.5419L18.5946 46.6344C17.934 46.4267 17.2937 46.159 16.6819 45.8345L14.3531 47.5884C14.2498 47.6661 14.1219 47.7037 13.993 47.6944C13.8642 47.685 13.743 47.6293 13.6521 47.5375L10.1766 44.0292C10.0868 43.9386 10.0324 43.8189 10.0232 43.6917C10.014 43.5645 10.0506 43.4382 10.1263 43.3357L11.868 40.979C11.5446 40.3585 11.2783 39.71 11.0722 39.0413L8.19579 38.6189C8.06891 38.6003 7.95297 38.5366 7.86913 38.4396C7.78529 38.3426 7.73916 38.2186 7.73916 38.0904V33.1288C7.73916 33.0006 7.78529 32.8767 7.86913 32.7796C7.95297 32.6826 8.06891 32.6189 8.19579 32.6003L11.0722 32.1779C11.3125 31.3982 11.6347 30.6462 12.0335 29.9345C12.0678 29.8733 12.1138 29.8194 12.1689 29.776C12.224 29.7326 12.2871 29.7004 12.3547 29.6814C12.4222 29.6624 12.4928 29.6568 12.5625 29.6651C12.6322 29.6734 12.6995 29.6953 12.7607 29.7296C12.822 29.7639 12.8758 29.8099 12.9192 29.865C12.9627 29.9201 12.9948 29.9832 13.0138 30.0508C13.0328 30.1183 13.0384 30.1889 13.0301 30.2586C13.0218 30.3283 12.9999 30.3956 12.9656 30.4568C12.5517 31.1956 12.2289 31.9818 12.0042 32.7983C11.9767 32.8983 11.9207 32.9881 11.843 33.0568C11.7653 33.1255 11.6693 33.1701 11.5667 33.1852L8.80775 33.5903V37.6288L11.5667 38.034C11.6693 38.049 11.7653 38.0936 11.843 38.1623C11.9207 38.231 11.9767 38.3208 12.0042 38.4208C12.2289 39.2373 12.5516 40.0235 12.9654 40.7623C13.0157 40.852 13.0391 40.9544 13.0326 41.057C13.0262 41.1597 12.9902 41.2583 12.9291 41.341L11.2579 43.6025L14.0829 46.4541L16.3151 44.7729C16.3985 44.7101 16.4985 44.6731 16.6027 44.6665C16.7069 44.6599 16.8108 44.6839 16.9015 44.7357C17.6313 45.1525 18.4095 45.4781 19.2187 45.7052C19.3183 45.7332 19.4077 45.7894 19.476 45.8673C19.5443 45.9451 19.5885 46.041 19.6033 46.1435L20.005 48.9314H23.9944L24.3961 46.1435C24.4109 46.041 24.4551 45.9451 24.5234 45.8673C24.5917 45.7895 24.6811 45.7332 24.7807 45.7052C25.5899 45.4782 26.3681 45.1525 27.0979 44.7357C27.1886 44.6839 27.2925 44.6598 27.3967 44.6664C27.5009 44.673 27.6009 44.71 27.6842 44.7729L29.9165 46.4541L32.7415 43.6025L31.0703 41.341C31.0091 41.2583 30.9732 41.1597 30.9667 41.057C30.9603 40.9544 30.9836 40.852 31.0339 40.7623C31.4477 40.0235 31.7705 39.2373 31.9951 38.4208C32.0227 38.3208 32.0787 38.231 32.1564 38.1623C32.2341 38.0936 32.33 38.049 32.4326 38.034L35.1916 37.6288V33.5903L32.4326 33.1852C32.3632 33.175 32.2965 33.1512 32.2363 33.1152C32.176 33.0792 32.1235 33.0318 32.0816 32.9755C32.0397 32.9192 32.0093 32.8552 31.9922 32.7871C31.9751 32.7191 31.9715 32.6484 31.9817 32.579C31.9918 32.5095 32.0155 32.4427 32.0515 32.3825C32.0875 32.3222 32.135 32.2696 32.1913 32.2277C32.2476 32.1858 32.3116 32.1555 32.3797 32.1383C32.4478 32.1212 32.5186 32.1177 32.588 32.128L35.8036 32.6001C35.9305 32.6187 36.0464 32.6824 36.1302 32.7794C36.2141 32.8764 36.2602 33.0004 36.2602 33.1286V38.0902C36.2602 38.2184 36.2141 38.3424 36.1302 38.4394C36.0464 38.5364 35.9305 38.6001 35.8036 38.6187L32.9272 39.0411C32.7212 39.7098 32.4548 40.3583 32.1314 40.9787L33.873 43.3355C33.9488 43.438 33.9854 43.5643 33.9762 43.6915C33.967 43.8187 33.9126 43.9384 33.8228 44.029L30.3473 47.5373C30.2563 47.6291 30.1352 47.6848 30.0063 47.6941C29.8775 47.7035 29.7496 47.6658 29.6463 47.5881L27.3175 45.8343C26.7057 46.1587 26.0654 46.4265 25.4048 46.6342L24.9857 49.5417C24.9677 49.6689 24.9043 49.7853 24.8072 49.8695C24.7101 49.9537 24.5859 50 24.4574 49.9999Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M22.0002 43.8892C17.4558 43.8892 13.7588 40.175 13.7588 35.6096C13.7588 34.1878 14.1243 32.785 14.8156 31.5527C14.85 31.4915 14.896 31.4377 14.9511 31.3943C15.0063 31.3509 15.0694 31.3188 15.1369 31.2998C15.2045 31.2808 15.2751 31.2753 15.3448 31.2837C15.4144 31.292 15.4818 31.3139 15.543 31.3483C15.6042 31.3826 15.658 31.4286 15.7014 31.4838C15.7448 31.5389 15.7769 31.602 15.7959 31.6696C15.8149 31.7371 15.8204 31.8077 15.8121 31.8774C15.8038 31.9471 15.7818 32.0144 15.7475 32.0756C15.1454 33.1485 14.8273 34.3705 14.8273 35.6096C14.8273 39.5858 18.0451 42.8207 22.0002 42.8207C25.9554 42.8207 29.1732 39.5858 29.1732 35.6096C29.1732 34.3705 28.8551 33.1484 28.253 32.0754C28.2187 32.0142 28.1968 31.9469 28.1885 31.8772C28.1802 31.8075 28.1857 31.7369 28.2047 31.6694C28.2237 31.6018 28.2558 31.5387 28.2992 31.4836C28.3426 31.4285 28.3964 31.3824 28.4576 31.3481C28.5187 31.3138 28.5861 31.2918 28.6558 31.2835C28.7254 31.2752 28.796 31.2807 28.8636 31.2997C28.9311 31.3187 28.9942 31.3508 29.0494 31.3942C29.1045 31.4376 29.1505 31.4915 29.1849 31.5526C29.8763 32.7849 30.2417 34.1878 30.2417 35.6096C30.2417 40.175 26.5447 43.8892 22.0002 43.8892Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M21.9996 39.8721C19.6628 39.8721 17.7617 37.9599 17.7617 35.6095C17.7617 35.4678 17.818 35.3319 17.9182 35.2317C18.0184 35.1315 18.1543 35.0752 18.296 35.0752C18.4377 35.0752 18.5736 35.1315 18.6738 35.2317C18.774 35.3319 18.8303 35.4678 18.8303 35.6095C18.8303 37.3707 20.2521 38.8036 21.9996 38.8036C23.7472 38.8036 25.169 37.3707 25.169 35.6095C25.169 35.4678 25.2253 35.3319 25.3255 35.2317C25.4257 35.1315 25.5616 35.0752 25.7033 35.0752C25.845 35.0752 25.9809 35.1315 26.0811 35.2317C26.1813 35.3319 26.2376 35.4678 26.2376 35.6095C26.2376 37.9598 24.3365 39.8721 21.9996 39.8721Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M34.3183 21.4561L29.8464 15.4595C29.7967 15.3928 29.732 15.3386 29.6577 15.3013C29.5833 15.264 29.5013 15.2446 29.4181 15.2446H14.5814C14.4982 15.2446 14.4162 15.2641 14.3419 15.3014C14.2675 15.3387 14.2029 15.3928 14.1531 15.4595L9.68122 21.4561C9.60908 21.5527 9.57179 21.671 9.57544 21.7916C9.57909 21.9121 9.62345 22.0279 9.70131 22.1201L21.5916 36.2009C21.8637 36.4537 22.1359 36.4537 22.408 36.2009L34.2983 22.1201C34.3761 22.0279 34.4204 21.9121 34.4241 21.7915C34.4277 21.671 34.3904 21.5527 34.3183 21.4561ZM24.0497 16.3131L26.6963 21.2412H17.3033L19.9499 16.3131H24.0497ZM14.8495 16.3131H18.7369L16.0904 21.2412H11.1744L14.8495 16.3131ZM11.26 22.3097H16.0472L20.2946 33.0088L11.26 22.3097ZM21.9998 34.4083L17.1968 22.3097H26.8027L21.9998 34.4083ZM23.705 33.0088L27.9524 22.3097H32.7397L23.705 33.0088ZM27.9092 21.2412L25.2627 16.3131H29.1501L32.8252 21.2412H27.9092Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M31.1858 30.9435C31.5693 30.9435 31.8803 30.6326 31.8803 30.249C31.8803 29.8654 31.5693 29.5544 31.1858 29.5544C30.8022 29.5544 30.4912 29.8654 30.4912 30.249C30.4912 30.6326 30.8022 30.9435 31.1858 30.9435Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
                <p className="cart_title">{pointTwoTitle}</p>
                <p className="cart_description">{pointTwoDescription}</p>
              </div>
              <div className="Main_cart">
                <div className="inner_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgs"
                  >
                    <path
                      d="M40.1047 0.726461C39.989 0.637253 39.8507 0.582178 39.7054 0.567461C39.5601 0.552744 39.4136 0.578974 39.2824 0.643183C39.1512 0.707393 39.0406 0.807022 38.9631 0.930807C38.8856 1.05459 38.8442 1.19759 38.8438 1.34365V3.6874H1.34375C1.13655 3.6874 0.937836 3.76971 0.791323 3.91622C0.64481 4.06273 0.5625 4.26145 0.5625 4.46865V9.15615C0.5625 9.36335 0.64481 9.56206 0.791323 9.70858C0.937836 9.85509 1.13655 9.9374 1.34375 9.9374H38.8438V12.2811C38.8436 12.4275 38.8846 12.5708 38.962 12.695C39.0394 12.8191 39.1501 12.9191 39.2815 12.9834C39.4129 13.0477 39.5598 13.0738 39.7053 13.0588C39.8508 13.0438 39.9892 12.9882 40.1047 12.8983L47.1359 7.42959C47.2296 7.35629 47.3054 7.26263 47.3575 7.15569C47.4096 7.04875 47.4367 6.93136 47.4367 6.8124C47.4367 6.69344 47.4096 6.57604 47.3575 6.46911C47.3054 6.36217 47.2296 6.26851 47.1359 6.19521L40.1047 0.726461ZM40.4062 10.6843V9.15615C40.4062 8.94895 40.3239 8.75023 40.1774 8.60372C40.0309 8.45721 39.8322 8.3749 39.625 8.3749H2.125V5.2499H39.625C39.8322 5.2499 40.0309 5.16759 40.1774 5.02108C40.3239 4.87456 40.4062 4.67585 40.4062 4.46865V2.94052L45.3836 6.8124L40.4062 10.6843ZM46.6562 23.2186H42.75V21.6561C42.75 20.7944 42.0492 20.0936 41.1875 20.0936H39.625C38.7633 20.0936 38.0625 20.7944 38.0625 21.6561V23.2186H27.125V21.6561C27.125 20.7944 26.4242 20.0936 25.5625 20.0936H24C23.1383 20.0936 22.4375 20.7944 22.4375 21.6561V23.2186H18.5312C18.324 23.2186 18.1253 23.301 17.9788 23.4475C17.8323 23.594 17.75 23.7927 17.75 23.9999V46.6561C17.75 46.8633 17.8323 47.0621 17.9788 47.2086C18.1253 47.3551 18.324 47.4374 18.5312 47.4374H46.6562C46.8634 47.4374 47.0622 47.3551 47.2087 47.2086C47.3552 47.0621 47.4375 46.8633 47.4375 46.6561V23.9999C47.4375 23.7927 47.3552 23.594 47.2087 23.4475C47.0622 23.301 46.8634 23.2186 46.6562 23.2186ZM39.625 21.6561H41.1875L41.1883 23.9999H39.625V21.6561ZM24 21.6561H25.5625L25.5633 23.9999H24V21.6561ZM22.6547 24.7811C22.9258 25.246 23.4242 25.5624 24 25.5624H25.5625C26.1383 25.5624 26.6367 25.246 26.9078 24.7811H38.2797C38.5508 25.246 39.0492 25.5624 39.625 25.5624H41.1875C41.7633 25.5624 42.2617 25.246 42.5328 24.7811H45.875V27.1249H19.3125V24.7811H22.6547ZM19.3125 45.8749V28.6874H45.875V45.8749H19.3125Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M26.3438 30.25H21.6562C21.449 30.25 21.2503 30.3323 21.1038 30.4788C20.9573 30.6253 20.875 30.824 20.875 31.0312V35.7188C20.875 35.926 20.9573 36.1247 21.1038 36.2712C21.2503 36.4177 21.449 36.5 21.6562 36.5H26.3438C26.551 36.5 26.7497 36.4177 26.8962 36.2712C27.0427 36.1247 27.125 35.926 27.125 35.7188V31.0312C27.125 30.824 27.0427 30.6253 26.8962 30.4788C26.7497 30.3323 26.551 30.25 26.3438 30.25ZM25.5625 34.9375H22.4375V31.8125H25.5625V34.9375ZM26.3438 38.0625H21.6562C21.449 38.0625 21.2503 38.1448 21.1038 38.2913C20.9573 38.4378 20.875 38.6365 20.875 38.8438V43.5312C20.875 43.7385 20.9573 43.9372 21.1038 44.0837C21.2503 44.2302 21.449 44.3125 21.6562 44.3125H26.3438C26.551 44.3125 26.7497 44.2302 26.8962 44.0837C27.0427 43.9372 27.125 43.7385 27.125 43.5312V38.8438C27.125 38.6365 27.0427 38.4378 26.8962 38.2913C26.7497 38.1448 26.551 38.0625 26.3438 38.0625ZM25.5625 42.75H22.4375V39.625H25.5625V42.75ZM34.9375 30.25H30.25C30.0428 30.25 29.8441 30.3323 29.6976 30.4788C29.5511 30.6253 29.4688 30.824 29.4688 31.0312V35.7188C29.4688 35.926 29.5511 36.1247 29.6976 36.2712C29.8441 36.4177 30.0428 36.5 30.25 36.5H34.9375C35.1447 36.5 35.3434 36.4177 35.4899 36.2712C35.6364 36.1247 35.7188 35.926 35.7188 35.7188V31.0312C35.7188 30.824 35.6364 30.6253 35.4899 30.4788C35.3434 30.3323 35.1447 30.25 34.9375 30.25ZM34.1562 34.9375H31.0312V31.8125H34.1562V34.9375ZM34.9375 38.0625H30.25C30.0428 38.0625 29.8441 38.1448 29.6976 38.2913C29.5511 38.4378 29.4688 38.6365 29.4688 38.8438V43.5312C29.4688 43.7385 29.5511 43.9372 29.6976 44.0837C29.8441 44.2302 30.0428 44.3125 30.25 44.3125H34.9375C35.1447 44.3125 35.3434 44.2302 35.4899 44.0837C35.6364 43.9372 35.7188 43.7385 35.7188 43.5312V38.8438C35.7188 38.6365 35.6364 38.4378 35.4899 38.2913C35.3434 38.1448 35.1447 38.0625 34.9375 38.0625ZM34.1562 42.75H31.0312V39.625H34.1562V42.75ZM43.5312 30.25H38.8438C38.6366 30.25 38.4378 30.3323 38.2913 30.4788C38.1448 30.6253 38.0625 30.824 38.0625 31.0312V35.7188C38.0625 35.926 38.1448 36.1247 38.2913 36.2712C38.4378 36.4177 38.6366 36.5 38.8438 36.5H43.5312C43.7384 36.5 43.9372 36.4177 44.0837 36.2712C44.2302 36.1247 44.3125 35.926 44.3125 35.7188V31.0312C44.3125 30.824 44.2302 30.6253 44.0837 30.4788C43.9372 30.3323 43.7384 30.25 43.5312 30.25ZM42.75 34.9375H39.625V31.8125H42.75V34.9375ZM43.5312 38.0625H38.8438C38.6366 38.0625 38.4378 38.1448 38.2913 38.2913C38.1448 38.4378 38.0625 38.6365 38.0625 38.8438V43.5312C38.0625 43.7385 38.1448 43.9372 38.2913 44.0837C38.4378 44.2302 38.6366 44.3125 38.8438 44.3125H43.5312C43.7384 44.3125 43.9372 44.2302 44.0837 44.0837C44.2302 43.9372 44.3125 43.7385 44.3125 43.5312V38.8438C44.3125 38.6365 44.2302 38.4378 44.0837 38.2913C43.9372 38.1448 43.7384 38.0625 43.5312 38.0625ZM42.75 42.75H39.625V39.625H42.75V42.75ZM21.0789 18.9219L22.4312 18.1398C21.3991 16.3613 19.9188 14.8844 18.1378 13.8564C16.3569 12.8285 14.3376 12.2854 12.2812 12.2812C5.81953 12.2813 0.5625 17.5383 0.5625 24C0.5625 30.4617 5.81953 35.7188 12.2812 35.7188C13.7234 35.7188 15.132 35.4594 16.4664 34.9492L15.9078 33.4898C14.75 33.9324 13.5207 34.1583 12.2812 34.1562C6.68125 34.1562 2.125 29.6 2.125 24C2.125 18.4 6.68125 13.8438 12.2812 13.8438C14.0636 13.8473 15.8139 14.3181 17.3575 15.2091C18.9012 16.1001 20.1843 17.3803 21.0789 18.9219Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M11.4996 23.5172L7.24414 25.6453L7.94336 27.043L12.6309 24.6992C12.8949 24.5664 13.0621 24.2961 13.0621 24V16.1875H11.4996V23.5172Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <p className="cart_title">{pointThreeTitle}</p>
                <p className="cart_description">{pointThreeDescription}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mx-4 gap-6 main_Usp2 max-[768px]:grid-cols-3 max-[600px]:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
              <div className="Main_cart">
                <div className="inner_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 44 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgs"
                  >
                    <path
                      d="M22 6.59375C18.7552 6.59375 15.5832 7.55596 12.8852 9.3587C10.1872 11.1614 8.08436 13.7237 6.84261 16.7216C5.60086 19.7194 5.27596 23.0182 5.909 26.2007C6.54204 29.3832 8.10458 32.3065 10.399 34.601C12.6935 36.8954 15.6168 38.458 18.7993 39.091C21.9818 39.724 25.2806 39.3991 28.2784 38.1574C31.2763 36.9156 33.8386 34.8128 35.6413 32.1148C37.444 29.4168 38.4063 26.2448 38.4063 23C38.4013 18.6503 36.6712 14.4802 33.5955 11.4045C30.5198 8.32882 26.3497 6.59871 22 6.59375ZM35.068 30.0312H29.7828C30.2685 27.9821 30.5335 25.8868 30.5734 23.7812H36.8039C36.6965 25.9676 36.1035 28.1027 35.068 30.0312ZM7.1961 23.7812H13.4266C13.4665 25.8868 13.7316 27.9821 14.2172 30.0312H8.93204C7.89648 28.1027 7.30347 25.9676 7.1961 23.7812ZM8.93204 15.9687H14.2172C13.7316 18.0179 13.4665 20.1132 13.4266 22.2187H7.1961C7.30347 20.0324 7.89648 17.8973 8.93204 15.9687ZM22.7813 14.4062V8.25937C24.7742 8.74922 26.5399 11.0844 27.6828 14.4062H22.7813ZM28.1617 15.9687C28.6817 18.013 28.9669 20.1099 29.0117 22.2187H22.7813V15.9687H28.1617ZM21.2188 8.25937V14.4062H16.3172C17.4602 11.0844 19.2258 8.74922 21.2188 8.25937ZM21.2188 15.9687V22.2187H14.9883C15.0332 20.1099 15.3183 18.013 15.8383 15.9687H21.2188ZM14.9883 23.7812H21.2188V30.0312H15.8383C15.3183 27.987 15.0332 25.8901 14.9883 23.7812ZM21.2188 31.5937V37.7406C19.2258 37.2508 17.4602 34.9156 16.3172 31.5937H21.2188ZM22.7813 37.7406V31.5937H27.6828C26.5399 34.9156 24.7742 37.2508 22.7813 37.7406ZM22.7813 30.0312V23.7812H29.0117C28.9669 25.8901 28.6817 27.987 28.1617 30.0312H22.7813ZM30.5734 22.2187C30.5335 20.1132 30.2685 18.0179 29.7828 15.9687H35.068C36.1035 17.8973 36.6965 20.0324 36.8039 22.2187H30.5734ZM34.0805 14.4062H29.3438C28.7527 12.3521 27.735 10.4458 26.357 8.81172C29.4752 9.77952 32.1889 11.7452 34.0805 14.4062ZM17.6399 8.81172C16.2631 10.4461 15.2464 12.3524 14.6563 14.4062H9.91954C11.8104 11.7458 14.5229 9.78013 17.6399 8.81172ZM9.91954 31.5937H14.6563C15.2473 33.6479 16.2651 35.5542 17.643 37.1883C14.5248 36.2205 11.8112 34.2548 9.91954 31.5937ZM26.3602 37.1883C27.737 35.5539 28.7536 33.6476 29.3438 31.5937H34.0774C32.1873 34.2537 29.476 36.2193 26.3602 37.1883Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M21.9998 0.34375C21.4941 0.345326 21.0026 0.510783 20.5989 0.81531C20.1952 1.11984 19.9011 1.54702 19.7607 2.03281C14.8131 2.56266 10.212 4.82454 6.77079 8.41867C3.32955 12.0128 1.26968 16.7078 0.95526 21.6738C0.640842 26.6398 2.09212 31.557 5.05258 35.5565C8.01305 39.5559 12.2921 42.3801 17.1334 43.5297C17.3343 43.5701 17.543 43.5324 17.7171 43.4245C17.8912 43.3165 18.0177 43.1463 18.0709 42.9484C18.1178 42.747 18.0828 42.5351 17.9737 42.3594C17.8646 42.1836 17.6902 42.0583 17.4889 42.0109C13.0121 40.949 9.05389 38.3406 6.31214 34.6457C3.57039 30.9508 2.22109 26.4066 2.50212 21.8141C2.78315 17.2217 4.67645 12.8759 7.84827 9.54282C11.0201 6.20978 15.2668 4.1035 19.8396 3.59531C20.0039 3.98617 20.271 4.32517 20.6126 4.5762C20.9543 4.82723 21.3576 4.9809 21.7797 5.02083C22.2018 5.06076 22.6268 4.98546 23.0094 4.80296C23.3921 4.62045 23.7181 4.33757 23.9527 3.98444C24.1872 3.63131 24.3217 3.22116 24.3416 2.79768C24.3615 2.3742 24.2662 1.95324 24.0658 1.57964C23.8654 1.20604 23.5674 0.893791 23.2036 0.676153C22.8398 0.458514 22.4238 0.343634 21.9998 0.34375ZM21.9998 3.46875C21.8453 3.46875 21.6942 3.42293 21.5658 3.33709C21.4373 3.25124 21.3372 3.12923 21.278 2.98647C21.2189 2.84372 21.2034 2.68663 21.2336 2.53509C21.2637 2.38354 21.3381 2.24433 21.4474 2.13507C21.5566 2.02581 21.6958 1.95141 21.8474 1.92126C21.9989 1.89112 22.156 1.90659 22.2988 1.96572C22.4415 2.02485 22.5635 2.12498 22.6494 2.25346C22.7352 2.38194 22.7811 2.53298 22.7811 2.6875C22.7811 2.8947 22.6987 3.09341 22.5522 3.23993C22.4057 3.38644 22.207 3.46875 21.9998 3.46875ZM43.0936 23C43.1099 18.247 41.5141 13.6289 38.5667 9.90004C35.6193 6.17119 31.4945 3.55201 26.8662 2.47031C26.6645 2.42286 26.4522 2.45749 26.276 2.56657C26.0998 2.67564 25.9742 2.85024 25.9268 3.05195C25.8793 3.25366 25.9139 3.46596 26.023 3.64214C26.1321 3.81832 26.3067 3.94396 26.5084 3.99141C30.9837 5.0545 34.9401 7.66298 37.6806 11.3572C40.4212 15.0515 41.7699 19.5945 41.4892 24.1857C41.2085 28.7769 39.3164 33.1218 36.1463 36.4547C32.9761 39.7876 28.7314 41.8947 24.16 42.4047C23.9493 41.8893 23.5632 41.4651 23.0698 41.2071C22.5765 40.949 22.0078 40.8738 21.4643 40.9948C20.9209 41.1157 20.4377 41.425 20.1004 41.8679C19.763 42.3108 19.5932 42.8588 19.621 43.4148C19.6488 43.9709 19.8725 44.4992 20.2523 44.9062C20.6321 45.3133 21.1437 45.5728 21.6965 45.639C22.2493 45.7051 22.8077 45.5735 23.2728 45.2676C23.738 44.9616 24.0799 44.501 24.2381 43.9672C29.4122 43.4096 34.1982 40.9613 37.6781 37.0917C41.1579 33.2222 43.0863 28.2041 43.0936 23ZM21.9998 44.0938C21.8453 44.0938 21.6942 44.0479 21.5658 43.9621C21.4373 43.8762 21.3372 43.7542 21.278 43.6115C21.2189 43.4687 21.2034 43.3116 21.2336 43.1601C21.2637 43.0085 21.3381 42.8693 21.4474 42.7601C21.5566 42.6508 21.6958 42.5764 21.8474 42.5463C21.9989 42.5161 22.156 42.5316 22.2988 42.5907C22.4415 42.6499 22.5635 42.75 22.6494 42.8785C22.7352 43.0069 22.7811 43.158 22.7811 43.3125C22.7811 43.5197 22.6987 43.7184 22.5522 43.8649C22.4057 44.0114 22.207 44.0938 21.9998 44.0938Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <p className="cart_title">{pointFourTitle}</p>
                <p className="cart_description">{pointFourDescription}</p>
              </div>
              <div className="Main_cart">
                <div className="inner_icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svgs"
                  >
                    <path
                      d="M40.5771 43.5484L38.7102 37.9468C38.3901 36.9868 37.8178 36.1304 37.0532 35.4674C36.2887 34.8045 35.3599 34.3592 34.3642 34.1782L28.9747 33.1976V32.7798C29.9126 32.2355 30.7288 31.5073 31.3788 30.6452H33.007C34.3409 30.6452 35.4263 29.5597 35.4263 28.2258V18.5484C35.4263 12.7677 30.7231 8.06452 24.9425 8.06452C19.1618 8.06452 14.4586 12.7677 14.4586 18.5484V24.1935C14.4586 25.7484 15.5642 27.0492 17.0304 27.3524C17.4828 29.6702 18.9312 31.6315 20.9102 32.7798V33.1976L15.5199 34.1782C14.5243 34.3592 13.5957 34.8045 12.8312 35.4675C12.0668 36.1305 11.4947 36.9868 11.1747 37.9468L10.8521 38.9153L8.10537 36.1685C7.79085 35.854 7.79085 35.3419 8.10537 35.0274L11.2909 31.8427L5.31182 25.8637L1.71182 29.4637C0.64569 30.5298 0.0585938 31.9476 0.0585938 33.4556C0.0585938 34.9637 0.64569 36.3806 1.71182 37.4468L12.611 48.346C13.6771 49.4121 15.0949 50 16.6029 50C18.111 50 19.5279 49.4121 20.5691 48.3702L24.4973 44.771L23.2723 43.5484H40.5771ZM33.8134 28.2258C33.8134 28.671 33.4513 29.0323 33.007 29.0323H32.3288C32.5652 28.4933 32.7415 27.93 32.8546 27.3524C33.1997 27.2806 33.5175 27.1435 33.8134 26.971V28.2258ZM33.007 25.5823V22.8048C33.4868 23.0847 33.8134 23.5992 33.8134 24.1935C33.8134 24.7879 33.4868 25.3024 33.007 25.5823ZM16.8779 25.5823C16.3981 25.3024 16.0715 24.7879 16.0715 24.1935C16.0715 23.5992 16.3981 23.0847 16.8779 22.8048V25.5823ZM16.8779 20.1613V21.0823C16.5951 21.1562 16.3238 21.2685 16.0715 21.4161V18.5484C16.0715 13.6573 20.0513 9.67742 24.9425 9.67742C29.8336 9.67742 33.8134 13.6573 33.8134 18.5484V21.4161C33.5613 21.2682 33.2899 21.1558 33.007 21.0823V20.1613H32.2005C29.8159 20.1613 27.5739 19.2323 25.8868 17.546L24.9425 16.6016L23.9981 17.546C22.311 19.2323 20.0691 20.1613 17.6844 20.1613H16.8779ZM18.4909 25.8065V21.7435C20.9126 21.5613 23.1707 20.5621 24.9425 18.8774C26.7142 20.5621 28.9723 21.5621 31.3941 21.7435V25.8065C31.3941 26.9823 31.0731 28.0823 30.5215 29.0323H24.9425V30.6452H29.1957C28.0586 31.646 26.5723 32.2581 24.9425 32.2581C21.3852 32.2581 18.4909 29.3637 18.4909 25.8065ZM27.3618 33.4992V33.5371L24.9425 35.9565L22.5231 33.5371V33.4992C23.2876 33.7395 24.0997 33.871 24.9425 33.871C25.7852 33.871 26.5973 33.7395 27.3618 33.4992ZM12.7038 38.4565C12.9324 37.7707 13.3411 37.1589 13.8872 36.6852C14.4332 36.2115 15.0966 35.8932 15.8078 35.7637L21.4449 34.7395L24.9425 38.2371L28.4392 34.7403L34.0755 35.7645C34.7868 35.8939 35.4502 36.2121 35.9963 36.6858C36.5424 37.1595 36.9511 37.7714 37.1796 38.4573L38.34 41.9355H21.6594L18.5183 38.7944L15.0279 41.9516C14.7239 42.2573 14.1925 42.2573 13.8876 41.9516L12.1263 40.1903L12.7038 38.4565ZM5.31101 28.1444L9.0094 31.8427L8.13359 32.7185L4.43521 29.0202L5.31101 28.1444ZM19.4521 47.2073C18.6909 47.9669 17.6779 48.3871 16.6013 48.3871C15.5247 48.3871 14.5118 47.9669 13.7497 47.2056L2.85053 36.3073C2.08924 35.546 1.66988 34.5331 1.66988 33.4565C1.66988 32.379 2.08924 31.3661 2.85053 30.6048L3.29408 30.1613L6.99246 33.8597L6.96343 33.8887C6.02069 34.8323 6.02069 36.3669 6.96343 37.3105L12.7465 43.0935C13.2038 43.55 13.811 43.8024 14.4578 43.8024C15.1046 43.8024 15.7118 43.5508 16.1392 43.1218L16.1997 43.0677L19.915 46.7831L19.4521 47.2073ZM21.1054 45.6911L17.3981 41.9839L18.4634 41.021L22.1642 44.7218L21.1054 45.6911ZM47.5231 0H36.2328C34.8989 0 33.8134 1.08548 33.8134 2.41935V8.87097C33.8134 10.2048 34.8989 11.2903 36.2328 11.2903H38.3868L37.5529 16.154L45.3352 11.2903H47.5231C48.857 11.2903 49.9425 10.2048 49.9425 8.87097V2.41935C49.9425 1.08548 48.857 0 47.5231 0ZM48.3296 8.87097C48.3296 9.31532 47.9675 9.67742 47.5231 9.67742H44.8723L39.7505 12.8782L40.2997 9.67742H36.2328C35.7884 9.67742 35.4263 9.31532 35.4263 8.87097V2.41935C35.4263 1.975 35.7884 1.6129 36.2328 1.6129H47.5231C47.9675 1.6129 48.3296 1.975 48.3296 2.41935V8.87097Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                    <path
                      d="M37.0391 3.22589H46.7165V4.83879H37.0391V3.22589ZM37.0391 6.45169H43.4907V8.06459H37.0391V6.45169ZM45.1036 6.45169H46.7165V8.06459H45.1036V6.45169ZM24.9423 2.41943C14.4052 2.41943 5.32859 9.70814 2.96891 19.8751L1.44068 17.3275L0.0576172 18.1573L2.89229 22.8807L7.61568 20.046L6.78584 18.663L4.60036 19.9743C6.88584 10.6735 15.2496 4.03234 24.9423 4.03234C27.0608 4.03234 29.1512 4.34685 31.1552 4.96782L31.6326 3.4275C29.4737 2.75814 27.2229 2.41943 24.9423 2.41943ZM49.5504 17.8565L44.827 15.0219L41.9931 19.746L43.3762 20.5759L44.7875 18.2235C45.5302 20.3969 45.91 22.6702 45.91 25.0001C45.91 29.796 44.2487 34.4848 41.2334 38.2017L42.4858 39.2178C45.7342 35.2146 47.5229 30.1646 47.5229 25.0001C47.5229 22.5331 47.1254 20.1243 46.3504 17.8178L48.7205 19.2396L49.5504 17.8565Z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth="0.2"
                    />
                  </svg>
                </div>
                <p className="cart_title">{pointFiveTitle}</p>
                <p className="cart_description">{pointFiveDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </UspSection>

      <Address>
        <div className="container">
          <div className="flex justify-center items-center min-[1024px]:px-[0px] min-[768px]:px-[22px]  max-[768px]:block md:block lg:flex">
            <div className="grid grid-cols-3 gap-6  max-[768px]:grid-cols-1 min-[1024px]:gap-6 md:grid-cols-1 lg:grid-cols-3">
              <div className="mumbai_address address_main">
                <div className="first_heading">
                  <p className="address_heading">{countryOne}</p>
                  <p className="address">{countryOneAddress}</p>
                </div>
                <div className="phonemail">
                  <p className="phone">
                    <a href="tel:+91 97264 32003" target="_blank">
                      +91 97264 32003
                    </a>
                  </p>
                  <p className="mail">
                    <a href="mailto:mumbai@blgdlab.com" target="_blank">
                      mumbai@blgdlab.com
                    </a>
                  </p>
                </div>
              </div>
              {/* <div className="address_main">
                <div className="first_heading">
                  <p className="address_heading">{countryTwo}</p>
                  <p className="address">{countryTwoAddress}</p>
                </div>
                <div className="phonemail">
                  <p className="phone">
                    <a href="tel:+971 45 147 853" target="_blank">
                      +971 45 147 853
                    </a>
                  </p>
                  <p className="mail">
                    <a href="mailto:dubai@blgdlab.com" target="_blank">
                      dubai@blgdlab.com
                    </a>
                  </p>
                </div>
              </div> */}
              <div className="address_main">
                <div className="first_heading">
                  <p className="address_heading">{countryThree}</p>
                  <p className="address">{countryThreeAddress}</p>
                </div>
                <div className="phonemail">
                  <p className="phone">
                    <a href="tel:+852 2723 1243" target="_blank">
                      +852 2723 1243
                    </a>
                  </p>
                  <p className="mail">
                    <a href="mailto:hongkong@blgdlab.com" target="_blank">
                      hongkong@blgdlab.com
                    </a>
                  </p>
                  </div>
                </div>
              {/* <div className="address_main before">
                <div className="first_heading">
                  <p className="address_heading">{countryFour}</p>
                  <p className="address">{countryFourAddress}</p>
                </div>
                <div className="phonemail">
                  <p className="phone">
                    <a href="tel:+32 3 685 21 31" target="_blank">
                      +32 3 685 21 31
                    </a>
                  </p>
                  <p className="mail">
                    <a href="mailto:europe@blgdlab.com" target="_blank">
                      europe@blgdlab.com
                    </a>
                  </p>
                </div>
              </div> */}
              <div className="address_main before">
                <div className="first_heading">
                  <p className="address_heading">{countryFive}</p>
                  <p className="address">{countryFiveAddress}</p>
                </div>
                <div className="phonemail">
                  <p className="phone">
                    <a href="tel:+1 212 278 0905" target="_blank">
                      +1 212 278 0905
                    </a>
                    <br />
                    <a href="tel:+1 212 278 0782" target="_blank">
                      +1 212 278 0782
                    </a>
                  </p>
                  <p className="mail">
                    <a href="mailto:usa@blgdlab.com" target="_blank">
                      usa@blgdlab.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="address_main before">
                <div className="first_heading">
                  <h5 className="address_heading">hong kong</h5>
                  <p className="address">
                    1006, Hung Hom commercial center tower B, 37 Ma tau wai
                    road, hung hom, Kowloon, Hong Kong
                  </p>
                </div>
                <div className="phonemail">
                  <p className="phone">+852 2723 1243</p>
                  <p className="mail">hongkong@blgdlab.com</p>
                </div>
              </div>
              <div className="address_main before">
                <div className="first_heading">
                  <h5 className="address_heading">antwerp</h5>
                  <p className="address">
                    Schupstraat 18-20 bus 1 2018 antwerpen belgium
                  </p>
                </div>
                <div className="phonemail">
                  <p className="phone">+32 3685 2131</p>
                  <p className="mail">europ@blgdlab.com</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Address>

      <LastContain>
        <div className="container">
          <div className="section_bg">
            <h2 className="mb-[30px] section_bg_title">{chioceTitle}</h2>
            <div className="inner_contain space-y-3">
              <p>{chiocePereOne}</p>
              <p>{chiocePereTwo}</p>
              <p>{chiocePereThree}</p>
              <p>{chiocePereFour}</p>
            </div>
          </div>
        </div>
      </LastContain>

      <Countries>
        <div className="container">
          <div className="countries">
            <h3 className="countries_title">{countryTitle}</h3>
            <div className="innercountries">
              <div className="contries_wrapper flex flex-wrap">
                <div className="flex items-center justify-start  main_link">
                  <a href="https://blgdlab.com/" className="link_title">
                    {/* {countryLinkOne} */}
                    Lab Grown Diamonds India
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-start  main_link">
                  <a
                    href="https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai"
                    className="link_title"
                  >
                    {/* {countryLinkTwo} */}
                    Lab Grown Diamonds Mumbai
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {/* <div className="flex items-center justify-start  main_link">
                  <a
                    href="https://blgdlab.com/lab-grown-diamonds-manufacturer-dubai"
                    className="link_title"
                  >
                    {countryLinkThree}
                    Lab Grown Diamonds Dubai
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div> */}
                {/* <div className="flex items-center justify-start  main_link">
                  <a
                    href="https://blgdlab.com/lab-grown-diamonds-manufacturer-antwerp"
                    className="link_title"
                  >
                    {countryLinkFour}
                    Lab Grown Diamonds Antwerp
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div> */}

                <div className="flex items-center justify-start  main_link">
                  <p className="link_title">
                    <a
                      href="https://blgdlab.com/lab-grown-diamonds-manufacturer-hong-kong"
                      target="_blank"
                    >
                      {/* {countryLinkFive} */}
                      Lab Grown Diamonds Hong Kong
                    </a>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-start  main_link">
                  <p className="link_title">
                    <a
                      href="https://blgdlab.com/lab-grown-diamonds-manufacturer-usa"
                      target="_blank"
                    >
                      {/* {countryLinkSix} */}
                      Lab Grown Diamonds USA
                    </a>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-start  main_link">
                  <p className="link_title">
                    {" "}
                    <a href="https://blgdlab.com/cvd-diamond-manufacturers">
                      {" "}
                      {/* {countryLinkSeven} */}
                      CVD Diamond Manufacturers India
                    </a>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="19"
                    viewBox="0 0 7 19"
                    fill="none"
                  >
                    <path
                      d="M0.18 18.02L5.4 0.2H6.84L1.62 18.02H0.18Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Countries>
    </>
  );
}

export default LocationSurat;
