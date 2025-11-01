"use client";
import React, { useEffect, useState } from "react";
import { ContainerWrapper, Form } from "./styled";
import Link from "next/link";
import FullPageLoader from "@/components/common/fullpageloader";
import { POST } from "@/services/methods";
import ContectField from "@/components/ContectField";

const BookAppointment = () => {
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [officeOptions, setOfficeOptions] = useState([]);

  // const countries = ["India", "New York", "Antwerp", "Hong Kong", "Dubai"];

  // const toggleOfficeSelect = (event) => {
  //   const selectedCountry = event.target.value;
  //   setSelectedCountry(selectedCountry);

  //   // Customize office options based on the selected country
  //   if (selectedCountry === "India") {
  //     setOfficeOptions(["Surat", "Mumbai"]);
  //   } else if (selectedCountry === "New York") {
  //     setOfficeOptions(["New York"]);
  //   } else if (selectedCountry === "Antwerp") {
  //     setOfficeOptions(["Antwerp"]);
  //   } else if (selectedCountry === "Hong Kong") {
  //     setOfficeOptions(["Hong Kong"]);
  //   } else if (selectedCountry === "Dubai") {
  //     setOfficeOptions(["Dubai"]);
  //   }
  // };
  const officesByCountry = {
    India: ["Surat", "Mumbai"],
    "New York": ["New York"],
    Antwerp: ["Antwerp"],
    "Hong Kong": ["Hong Kong"],
    Dubai: ["Dubai"],
  };
  const options = ["India", "New York", "Antwerp", "Hong Kong", "Dubai"];
  // const [ContactData, setContactData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [optionsVisibleCountry, setOptionsVisibleCountry] = useState(false);
  const [optionsVisibleOffice, setOptionsVisibleOffice] = useState(false);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [minDate, setMinDate] = useState(getCurrentDate());

  const handleOptionClick = (option) => {
    setContactData({ ...contactData, country: option });
    setSelectedCountry(option);
    setSelectedOffice(""); // Reset selected office when country changes
    setOptionsVisibleCountry(false);
    setOptionsVisibleOffice(false);
  };
  const handleOfficeClick = (office) => {
    setContactData({ ...contactData, office });
    setSelectedOffice(office);
    setOptionsVisibleCountry(false);
    setOptionsVisibleOffice(false);
  };
  const toggleOptionsCountry = () => {
    setOptionsVisibleCountry(!optionsVisibleCountry);
    setOptionsVisibleOffice(false);
  };
  const toggleOptionsOffice = () => {
    setOptionsVisibleOffice(!optionsVisibleOffice);
    setOptionsVisibleCountry(false);
  };
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
    isPrivacyPolicy: false,
    country: "",
    office: "",
    date: "",
    time: "",
  });
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
        howWeCan: contactData?.weCanHelp | "inquiry",
        country: contactData.country,
        office: contactData.office,
        date: contactData.date,
        time: contactData.time,
      });
      setIsLoading(false);
      // router.push("/thankyou-contact");
    } catch (error) {
      setIsLoading(false);
    }
    setContactData({
      name: "",
      phoneNo: "",
      email: "",
      message: "",
      isPrivacyPolicy: false,
      country: "",
      office: "",
      date: "",
      time: "",
    });
  };
  const handleSubmit = (e) => {
    // console.log("call");
    e.preventDefault();
    if (!isChecked) {
      setIsError(true);
      return;
    }
    // console.log("call");
    setIsError(false);
    handleClick();
  };

  return (
    <>
      <FullPageLoader open={isLoading} />
      <ContainerWrapper>
        <div className="container">
          <div className="row">
            <Form>
              <form onSubmit={handleSubmit}>
                <h1 className="book-appointment">Book Appointment </h1>

                <div className="line"></div>
                <div className="name grid grid-cols-2 md:grid-cols-2 min-[320px]:grid-cols-1 md:gap-16">
                  <div className="my-5 md:my-5">
                    <div className="form-label">Country*</div>

                    <div
                      className="custom-select-box mt-5"
                      onClick={toggleOptionsCountry}
                    >
                      <input
                        type="text"
                        value={contactData.country}
                        // value={selectedCountry || "Select Country"}
                        placeholder="Select Country"
                        // onClick={toggleOptionsCountry}
                        // onChange={(e) =>

                        //   {
                        //     console.log(e.target.value);
                        //     setContactData((pre) => ({
                        //       ...pre,
                        //       country: e.target.value,
                        //     }))
                        //   }
                        // }
                        required
                      />
                      <ul
                        className={`options-list ${optionsVisibleCountry ? "visible" : ""
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

                  <div className="my-3  md:my-5">
                    <div className="form-label">Office*</div>
                    <div
                      className="custom-select-box mt-5"
                      onClick={toggleOptionsOffice}
                    >
                      <input
                        type="text"
                        placeholder="Select Office"
                        value={contactData.office}
                        // value={selectedOffice || "Select Office"}
                        // onClick={toggleOptionsOffice}
                        onChange={(e) =>
                          setContactData((pre) => ({
                            ...pre,
                            office: e.target.value,
                          }))
                        }
                        required
                      />
                      <ul
                        className={`options-list ${optionsVisibleOffice ? "visible" : ""
                          }`}
                      >
                        {officesByCountry[selectedCountry]?.map(
                          (office, index) => (
                            <li
                              key={index}
                              onClick={() => handleOfficeClick(office)}
                            >
                              {office}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 min-[320px]:grid-cols-1 md:gap-16">
                  <div className="my-5">
                    <div className="form-label">Appoinment date*</div>
                    <input
                      type="date"
                      className="form-control"
                      min={minDate}
                      value={contactData.date}
                      // onChange={(e) => setMinDate(e.target.value)}
                      onChange={(e) =>
                        setContactData((pre) => ({
                          ...pre,
                          date: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="my-5">
                    <div className="form-label">Appoinment time*</div>
                    <input
                      type="time"
                      className="form-control"
                      value={contactData.time}
                      onChange={(e) =>
                        setContactData((pre) => ({
                          ...pre,
                          time: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="mt-5 mb-9">
                  <div className="form-label">name*</div>
                  <div className="name">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      value={contactData.name}
                      onChange={(e) =>
                        setContactData((pre) => ({
                          ...pre,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                    {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Last"
                  /> */}
                  </div>
                </div>
                <div className="mt-5 mb-9 email gap-16 grid grid-cols-2 md:grid-cols-2 min-[320px]:grid-cols-1 md:gap-16">
                  <div>
                    <div className="form-label">Email*</div>
                    <input
                      type="emailbook"
                      className="form-control"
                      placeholder="Email Address"
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
                  <div>
                    <div className="form-label">Contact number*</div>
                    {/* <input
                      type="numberbook"
                      className="form-control"
                      placeholder="Number"
                      value={contactData.phoneNo}
                      minLength={10}
                      onChange={(e) =>
                        setContactData((pre) => ({
                          ...pre,
                          phoneNo: e.target.value,
                        }))
                      }
                      required
                    /> */}
                    <ContectField inputProps={{type:'numberbook' , style:{width:'100%'}}} contactData={contactData} setContactData={setContactData} />
                  </div>
                </div>

                {/* <div className="my-10">
                <div className="form-label">Adresss*</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
                <div className="name">
                  <select name="City" className="lg:mt-10 mt-5 form-control">
                    <option value="">City</option>
                    <option value="Surat">Surat</option>
                    <option value="Rajkot">Rajkot</option>
                  </select>
                  <select name="Region" className="lg:mt-10 mt-5 form-control">
                    <option value="">Region</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                  </select>
                </div>
                <div className="name">
                  <input
                    type="text"
                    className="lg:mt-10 mt-5 form-control"
                    placeholder="Zip code"
                  />
                  <select name="country" className="lg:mt-10 mt-5 form-control">
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                  </select>
                </div>
              </div> */}

                <div>
                  <div className="form-label">Comments*</div>
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

                <div className="mt-5 form-footer">
                  <div className="flex items-center">
                    {/* <input type="checkbox" className="mr-4 checkbox" /> */}
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
                    <div className="confirmation-text">
                      By submitting, you confirm you have read and accept our
                      <Link
                        href="/privacy-statement"
                        className="underline ms-1 font-bold"
                      >
                        Privacy policy.
                      </Link>
                    </div>
                  </div>

                  <button className="submit">book appointment</button>
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
              </form>
            </Form>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default BookAppointment;
