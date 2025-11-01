"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  ContactInfo,
  ContainerWrapper,
  Form,
  Location,
  Question,
} from "./styled";
import UpdownArrow from "@/asset/images/UpdownArrow.png";
import {
  BookpopupOffice,
  Bookpopupvirtual,
  ClosePopup,
  // DubaiImg,
  // EuropeImg,
  HongkongImg,
  MumbaiImg,
  NewYorkImg,
  SuratImg,
  // mobileDubaiImg,
  // mobileEuropeImg,
  mobileHongkongImg,
  mobileMumbaiImg,
  mobileNewYorkImg,
  mobileSuratImg,
} from "@/constants/images";

import { useMemo } from "react";
import Link from "next/link";
import { POST } from "@/services/methods";
import FullPageLoader from "@/components/common/fullpageloader";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import ContectField from "@/components/ContectField";

const faqs = [
  {
    id: 1,
    question: "What exactly are lab grown diamonds?",
    answer:
      "Lab grown diamonds, also known as cultured diamonds are crafted using advanced technology in a controlled laboratory environment. These diamonds have the same physical, chemical, and optical properties as natural diamonds, but are made in a shorter period of time and at a lower cost.",
  },
  {
    id: 2,
    question: "What are CVD diamonds and how are they created in a lab?",
    answer:
      "Chemical vapor deposition is one of the processes used to create lab grown diamonds. CVD diamonds are created using a process where a mixture of gases is heated to high temperatures, causing carbon atoms to crystallize and form diamond layers. This controlled process allows for precise control over the diamond's growth, resulting in high-quality diamonds with consistent characteristics.",
  },
  {
    id: 3,
    question: "What sets lab grown diamonds apart from mined diamonds?",
    answer:
      "Lab grown diamonds are created in controlled laboratory environments using advanced technology, while natural diamonds are formed naturally in the earth's crust over millions of years. Lab grown diamonds are typically more affordable, sustainable, and ethical, as they do not require any mining and have a lower environmental impact. However, both lab grown and natural diamonds share the same physical, chemical, and optical properties, and are equally hard and durable.",
  },
  {
    id: 4,
    question: "How can one determine if a diamond is a CVD diamond?",
    answer:
      'Identifying CVD diamonds can be done by examining their unique strain pattern, strong red fluorescence, and absence of the "Cape Line" at 415 nm on their absorption spectrum. Instead, they exhibit a noticeable line at 737 nm, which can be detected through specialized gemological testing techniques.',
  },
  {
    id: 5,
    question:
      "Can CVD diamonds pass standard diamond testers used for natural diamonds?",
    answer:
      "Unlike diamond simulants like CZ or Moissanite, lab created diamonds, including CVD diamonds, will typically test positive on standard diamond testers due to their similar properties to natural diamonds.",
  },
  {
    id: 6,
    question:
      "What is the typical duration for creating a diamond in a laboratory?",
    answer:
      "The time required to create a diamond in a laboratory depends on the color and size, typically ranging from 60-120 days. Using the CVD process, carbon atoms attach to the seed diamond layer gradually, resulting in a genuine diamond. However, the growth rate is slow, usually around 0.1-10 microns per hour for larger surfaces. As an estimate, it takes approximately a month to grow a 1-carat CVD diamond.",
  },
  {
    id: 7,
    question: "What makes CVD diamonds distinct or special?",
    answer:
      "CVD diamonds are flawless, conflict-free, and of high quality due to their controlled lab production. They are also a more cost-effective option, offering savings compared to natural diamonds.",
  },
  {
    id: 8,
    question: "Are lab grown diamonds as durable as natural diamonds?",
    answer:
      "Lab grown diamonds have comparable strength and hardness to natural diamonds, with both scoring a perfect 10 on the Mohs scale.",
  },
  {
    id: 9,
    question: "How long can lab grown diamonds be expected to last?",
    answer:
      "Lab grown diamonds are on par with natural diamonds in terms of durability, chemical composition, optical properties, thermal stability, and visual appearance. They are virtually indistinguishable and are expected to maintain their shine and brilliance indefinitely, making them a long-lasting choice.",
  },
  {
    id: 10,
    question: "Can lab grown diamonds be insured like natural diamonds?",
    answer:
      "Certainly! Lab grown diamonds can be insured, just like natural diamonds. In fact, opting for a lab grown diamond can not only save you money on the diamond itself but also on the annual insurance premium, as the lower overall cost of the lab grown diamond can result in lower insurance costs.",
  },
  // {
  //   id: 11,
  //   question: "Does lab grown diamonds have resale value?",
  //   answer:
  //     "Lab grown diamonds offer a lifetime exchange policy and a buyback option at 80% of the prevailing rate, providing flexibility for future transactions.",
  // },
  {
    id: 12,
    question:
      "Do BLGD lab grown diamonds come with unique inscriptions for easy identification?",
    answer:
      "Certainly! Each BLGD lab grown diamond is laser inscribed with a unique ID, which is also documented in the accompanying certificate for easy identification and verification with the assistance of a jeweler.",
  },
  {
    id: 13,
    question:
      "Are there diverse options for shapes and sizes in BLGD lab grown diamonds?",
    answer:
      "Certainly yes! BLGD offers a wide selection of lab grown diamonds in various patented and traditional shapes, including round, cushion, princess, ovals, pear, marquise, emerald, and more.",
  },
  {
    id: 14,
    question: "Are BLGD created lab grown diamonds available worldwide?",
    answer:
      "BLGD lab grown diamonds are available worldwide, with distribution links across continents including North America, Europe, Asia, Australia, and Africa. This allows BLGD to cater to a diverse global audience, creating jewelry and inciting demand for lab grown diamonds in various regions.",
  },
];

const Contact = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState();
  const [selectCity, setSelectCity] = useState("surat");

  const [contactData, setContactData] = useState({
    weCanHelp: "",
    name: "",
    phoneNo: "",
    email: "",
    message: "",
    isPrivacyPolicy: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const handelClickCity = (name) => {
    setSelectCity(name);
  };
  const currentMap = useMemo(
    () => ({
      surat: isMobile ? mobileSuratImg : SuratImg,
      mumbai: isMobile ? mobileMumbaiImg : MumbaiImg,
      hongkong: isMobile ? mobileHongkongImg : HongkongImg,
      newyork: isMobile ? mobileNewYorkImg : NewYorkImg,
      // europe: isMobile ? mobileEuropeImg : EuropeImg,
      // dubai: isMobile ? mobileDubaiImg : DubaiImg,
    }),
    [isTablet]
  );
  const [optionsVisible, setOptionsVisible] = useState(false);

  const options = [
    "Contact our specialist",
    "Inquiry",
    "Get Support",
    "Meet Us",
  ];

  const handleOptionClick = (option) => {
    setContactData((pre) => ({ ...pre, weCanHelp: option }));
    setOptionsVisible(false);
  };

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  // const branches = [
  //   {
  //     img: isTablet ? contactMumbaiMobile : contactMumbai,
  //     city: "mumbai",
  //     address:
  //       "FC-4120, F-tower, Bharat Diamond Bourse, Bandra kurla complex, Bandra (E), 400051",
  //     phone: ["+91 9726432003"],
  //     email: "mumbai@blgdlab.com",
  //   },
  //   {
  //     img: isTablet ? contactNewyorkMobile : contactNewyork,
  //     city: "New York",
  //     address:
  //       "50 West 47 Street, 17th Floor Suite#1711, New York, 10036, USA.",
  //     phone: ["+1 212 278 0905", "+1 212 278 0782"],
  //     email: "usa@blgdlab.com",
  //   },
  //   {
  //     img: isTablet ? contactDubaiMobile : contactDubai,
  //     city: "dubai",
  //     address:
  //       "38-F Almas Tower, 38th Floor, Jumeirah Lakes Tower, Jlt Dubai, UAE",
  //     phone: ["+97 145147853"],
  //     email: "dubai@blgdlab.com",
  //   },
  //   {
  //     img: isTablet ? contactEuropeMobile : contactEurope,
  //     city: "europe",
  //     address: "Schupstraat 18-20 bus 1 2018 antwerpen belgium",
  //     phone: ["+32 3685 2131"],
  //     email: "europe@blgdlab.com",
  //   },
  //   {
  //     img: isTablet ? contactHongkongMobile : contactHongkong,
  //     city: "hong kong",
  //     address:
  //       "1006, Hung Hom commercial center tower B, 37 Ma tau wai road, hung hom, Kowloon, Hong Kong",
  //     phone: ["+852 27231243"],
  //     email: "hongkong@blgdlab.com",
  //   },
  // ];

  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
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
  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!isChecked) {
      setIsError(true);
      return;
    }
    setIsError(false);
    handleClick();
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
  const AppointmentModal = ({ onClose }) => {
    // useEffect(() => {
    //   const script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.src = "https://assets.calendly.com/assets/external/widget.js";
    //   script.async = true;
    //   document.head.appendChild(script);
    //   document.body.style.overflow = "hidden";
    //   return () => {
    //     document.head.removeChild(script);
    //     document.body.style.overflow = "auto";
    //   };
    // }, []);
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
  return (
    <>
      <ContainerWrapper>
        <FullPageLoader open={isLoading} />
        <div className="container">
          <Form>
            <div className="header">
              <h1 className="contact-us">Contact us</h1>
              {/* <div className="appointment" onClick={openCalendlyPopup}>
                Book Appointment
              </div> */}
              <div className="flex flex-col items-center">
                <button onClick={openModal} className="appointment">
                  Book Appointment For JCK
                </button>
                <p className="mt-1">MAY 31 - JUNE 3, 2024</p>
              </div>
              {isModalOpen && <AppointmentModal onClose={closeModal} />}
            </div>
            <div className="line"></div>

            <div className="content">
              <form
                className="contact-container"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="mt-10">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => inputRef.current.click()}
                  >
                    <div className="form-label">how we can help ? *</div>
                  </div>

                  <div
                    className="custom-select-box mt-5"
                    onClick={() => inputRef.current.click()}
                  >
                    <input
                      type="text"
                      value={contactData.weCanHelp}
                      onChange={(e) => {
                        e.preventDefault();
                      }}
                      placeholder=""
                      ref={inputRef}
                      onClick={toggleOptions}
                      required
                    />
                    <ul
                      className={`options-list ${
                        optionsVisible ? "visible" : ""
                      }`}
                    >
                      {options.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="form-label">Full Name*</div>
                  <input
                    type="text"
                    className="form-control"
                    value={contactData.name}
                    onChange={(e) =>
                      setContactData((pre) => ({
                        ...pre,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="my-10 contact-email">
                  <div>
                    <div className="form-label">Contact No*</div>

                    {/* <PhoneInput
                      type="number"
                      className="form-control"
                      country={"in"}
                      enableSearch
                      disableSearchIcon
                      countryCodeEditable={false}
                      value={contactData?.phoneNo?.value}
                      prefix="+"
                      onChange={(e, code) => {
                        setContactData((pre) => ({
                          ...pre,
                          phoneNo: { value: e, code },
                        }));
                      }}
                      required
                    /> */}
                    <ContectField contactData={contactData} setContactData={setContactData}/>
                  </div>
                  <div>
                    <div className="form-label">Email*</div>
                    <input
                      type="email"
                      className="form-control"
                      value={contactData.email}
                      onChange={(e) =>
                        setContactData((pre) => ({
                          ...pre,
                          email: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="form-label">message*</div>
                  <textarea
                    className="message-control"
                    value={contactData.message}
                    onChange={(e) =>
                      setContactData((pre) => ({
                        ...pre,
                        message: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="footer">
                  <div className="flex items-center confirmation-text">
                    <label className="cheklable">
                      <input
                        type="checkbox"
                        className="custom-checkbox mr-2"
                        checked={contactData.isPrivacyPolicy}
                        onChange={(e) => {
                          setContactData((pre) => ({
                            ...pre,
                            isPrivacyPolicy: e.target.checked,
                          }));
                          setIsChecked(e.target.checked);
                          setIsError(false);
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
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </label>

                    <div>
                      By submitting, you confirm you have read and accept our
                      <Link
                        href="/privacy-statement"
                        className="underline ms-1 font-bold"
                      >
                        Privacy policy.
                      </Link>
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
                      Kindly Review Our Policy and Mark the Checkbox before
                      Submitting the Form.
                    </div>
                  )}
                  {/* <a href="./thankyou-contact" target="_blank"> */}
                  <button
                    className="submit"
                    type="submit"
                    // onClick={handleSubmit}
                  >
                    Submit
                  </button>
                  {/* </a> */}
                </div>
              </form>

              <div className="contact-details">
                <div className="send-message">Or send us a message</div>
                <div>
                  <div className="title">Call us :</div>
                  <div className="value">
                    <a
                      href="tel:+ 91 85003 85003"
                      target="_blank"
                      className="link"
                    >
                      +91 85003 85003
                    </a>
                  </div>
                </div>
                <div>
                  <div className="title">Email us at :</div>
                  <div className="value">
                    <a
                      href="mailto:info@blgdlab.com"
                      target="_blank"
                      className="link"
                    >
                      INFO@BLGDLAB.COM
                    </a>
                  </div>
                </div>
                <div>
                  <div className="title">head office :</div>
                  <div className="value">
                    Akshar Building, 4th floor, BLGD corporation, opp. Mehta
                    Petrol pump, Katargam, Surat, Gujarat 395004
                  </div>
                </div>
                {/* <div>
                  <div className="title">Media inquiries :</div>
                  <div className="value">
                    CONTACT US : <span className="link">INFO@BLGDLAB.COM</span>
                  </div>
                </div> */}
              </div>
            </div>
          </Form>
        </div>
      </ContainerWrapper>

      <ContainerWrapper>
        <div className="container">
          <Location>
            <div className="header">Locate us on the map</div>
            <Image
              src={currentMap[selectCity]}
              alt="worldMap"
              className="mobile-map"
              width={1000}
              height={1000}
            />
            <div className="cities">
              <div
                className={selectCity === "surat" ? "city isActive" : "city"}
                onClick={() => handelClickCity("surat")}
              >
                SURAT
              </div>
              <div
                className={selectCity === "mumbai" ? "city isActive" : "city"}
                onClick={() => handelClickCity("mumbai")}
              >
                MUMBAI
              </div>
              <div
                className={selectCity === "newyork" ? "city isActive" : "city"}
                onClick={() => handelClickCity("newyork")}
              >
                NEW YORK
              </div>
              {/* <div
                className={selectCity === "europe" ? "city isActive" : "city"}
                onClick={() => handelClickCity("europe")}
              >
                ANTWERP
              </div> */}
              <div
                className={selectCity === "hongkong" ? "city isActive" : "city"}
                onClick={() => handelClickCity("hongkong")}
              >
                HONG KONG
              </div>
              {/* <div
                className={selectCity === "dubai" ? "city isActive" : "city"}
                onClick={() => handelClickCity("dubai")}
              >
                DUBAI
              </div> */}
            </div>
            <Image
              className="desktop-map"
              src={currentMap[selectCity]}
              alt="worldMap"
              width={2000}
              height={1000}
            />
          </Location>
        </div>
      </ContainerWrapper>

      {/* <ContactInfo>
        {!isTablet && (
          <div className="content">
            {branches.map((info) => (
              <div className="branch" key={info.city}>
                <Image src={info.img} className="contactImg" alt="infoImage" />
                <Image
                  src={contactFront}
                  className="frontImg"
                  alt="infoFrontImage"
                />
                <div className="info">
                  <div className="city">{info.city}</div>
                  <div className="address">{info.address}</div>
                  <div>
                    {info.phone.map((phoneNo) => (
                      <div className="phone" key={phoneNo}>
                        {phoneNo}
                      </div>
                    ))}
                  </div>
                  <div className="email">{info.email}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isTablet && (
          <>
            <div className="content">
              {branches.slice(0, 4).map((info) => (
                <div className="branch" key={info.city}>
                  <Image
                    src={info.img}
                    className="contactImg"
                    alt="contactImg"
                  />
                  <Image
                    src={contactFront}
                    className="frontImg"
                    alt="frontImg"
                  />
                  <div className="info">
                    <div className="city">{info.city}</div>
                    <div className="address">{info.address}</div>
                    <div>
                      {info.phone.map((phoneNo) => (
                        <div className="phone" key={phoneNo}>
                          {phoneNo}
                        </div>
                      ))}
                    </div>
                    <div className="email">{info.email}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="branch isMobile">
              <Image
                src={contactHongkongMobile}
                className="contactImg"
                alt="contactImg"
              />
              <Image src={contactFront} className="frontImg" alt="frontImg" />
              <div className="info">
                <div className="city">hong kong</div>
                <div className="address">
                  1006, Hung Hom commercial center tower B, 37 Ma tau wai road,
                  hung hom, Kowloon, Hong Kong
                </div>
                <div>
                  <div className="phone">+852 27231243</div>
                </div>
                <div className="email">hongkong@blgdlab.com</div>
              </div>
            </div>
          </>
        )}
      </ContactInfo> */}

      <ContainerWrapper>
        <div className="container">
          <Question>
            <div className="header">Frequently Asked Questions</div>
            <div className="description">
              Welcome to our FAQ section! Here, we have compiled answers to
              commonly asked questions about our lab grown diamonds. From their
              creation process to their quality, we are here to provide you with
              the information you may need while making an informed decision.
            </div>

            <div>
              {faqs.map((faq) => (
                <Box
                  key={faq.id}
                  sx={{
                    margin: `${isMobile ? "0px" : "0px 0"}`,
                    padding: `${isMobile ? "0px" : "20px 0"}`,
                    minWidth: 300,
                    color: open === faq.id ? "white" : "black",
                    backgroundColor: open === faq.id ? "#024638" : "white",
                  }}
                  onClick={() => {
                    setOpen(open === faq.id ? "" : faq.id);
                  }}
                >
                  <CardHeader
                    title={faq.question}
                    action={
                      <IconButton
                        aria-label="expand"
                        size="small"
                        sx={{
                          color: open === faq.id ? "white" : "black",
                        }}
                      >
                        {open === faq.id ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    }
                  ></CardHeader>
                  <div
                    style={{
                      color: "white",
                      backgroundColor: open === faq.id ? "#024638" : "white",
                    }}
                  >
                    <Collapse in={open === faq.id} timeout="auto" unmountOnExit>
                      <CardContent className="answer">{faq.answer}</CardContent>
                    </Collapse>
                  </div>
                </Box>
              ))}
            </div>
          </Question>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Contact;