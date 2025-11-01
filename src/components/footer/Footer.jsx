"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { usePathname } from "next/navigation";

import dynamic from 'next/dynamic';


const TimeClientOnly = dynamic(() => import('../Clocks/timeClientOnly'), { ssr: false });


import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
} from "@mui/material";

import {
  FooterRingWrapper,
  FooterRingContentWrapper,
  FooterRingText,
  FooterRingInputWrapper,
  FooterRingButton,
  FooterRingInput,
  FooterRingButtonIcon,
  FooterRingImageWrapper,
  FooterMenuTitle,
  FooterWrapper,
  FooterMenuItem,
  MobileFooterTitle,
  MobileFooterItem,
  MobileFooterItemContainer,
  WebFooterContainer,
  WebFooterWrapper,
  CopyrightWrapper,
  CopyrightContent,
  FooterContactItem,
  MobileFooterWrapper,
  FooterContactNew,
} from "./styled";
import {
  Email,
  Facebook,
  FlagAntwerp,
  FlagDubai,
  FlagHong_Kong,
  FlagIndia,
  FlagNew_York,
  FooterBhanderiWhite,
  FooterRing,
  Instagram,
  Linkedin,
  Phone,
  Twitter,
  Youtube,
  appStore,
  playStore,
  vector,
} from "@/constants/images";
import Link from "next/link";
import {
  CookieUrl,
  FourCs,
  SitemapUrl,
  TermsUrl,
  aboutUrl,
  blogNewsUrl,
  contactUrl,
  jewelersUrl,
  locationAntwerpUrl,
  locationDubaiUrl,
  locationHongKongUrl,
  locationMumbaiUrl,
  locationSuratUrl,
  locationUSAUrl,
  privacyUrl,
  productUrl,
  revolutionaryUrl,
  tradersUrl,
} from "@/constants/constants";
import { POST } from "@/services/methods";
import { Clock } from "../Clocks";
// import FooterRing from "@/asset/images/footerRing.png";
// import vector from "@/asset/images/vector.png";
// import Facebook from "@/asset/icons/facebook.svg";
// import Instagram from "@/asset/icons/instagram.svg";
// import Linkedin from "@/asset/icons/linkedin.svg";
// import Twitter from "@/asset/icons/twitter.svg";
// import Youtube from "@/asset/icons/youtube.svg";
// import BhanderiWhite from "@/asset/icons/BhanderiWhiteLogo.svg";
// import Email from "@/asset/icons/email.svg";
// import Location from "@/asset/icons/location.svg";
// import Phone from "@/asset/icons/phone.svg";
const Footer = () => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 768px)");
  const [expanded, setExpanded] = React.useState(false);
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const pathname = usePathname();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const paths = [
    // "/lab-grown-diamond-traders",
    // "/lab-grown-diamond-jewelers",
    "/directors",
    "/lab-grown-diamond-shapes",
    // "../../screens/Home",
  ];

  const handleClick = async () => {
    if (email) {
      try {
        await POST("/contact/sendMail", {
          isSubscribe: true,
          email,
        });
        setSuccessMessage(
          "We appreciate your subscription. Thank you for joining us!"
        );
      } catch (error) {
      } finally {
        setEmail("");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    }
  };

  return (
    <>
      <FooterWrapper
        style={{ marginTop: paths.includes(pathname) ? "0px" : "100px" }}
      >
        {pathname === "/" && (
          <FooterRingWrapper>
            <FooterRingImageWrapper>
              <Image
                src={FooterRing}
                alt="footer ring"
                width={1000}
                height={1000}
              />
            </FooterRingImageWrapper>
            <FooterRingContentWrapper>
              <FooterRingText>
                We send really <span>good emails.</span>
              </FooterRingText>
              <FooterRingInputWrapper style={{ marginBottom: "10px" }}>
                <div className="flex gap-3">
                  <FooterRingInput
                    type="text"
                    placeholder="Enter Your Email Id to Subscribe"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FooterRingButton onClick={handleClick}>
                    <FooterRingButtonIcon
                      src={vector}
                      alt="vector"
                      width={17}
                      height={20}
                    />
                  </FooterRingButton>
                </div>
                {successMessage && (
                  <p style={{ color: "green" }} className="mt-2">
                    {successMessage}
                  </p>
                )}
              </FooterRingInputWrapper>
            </FooterRingContentWrapper>
          </FooterRingWrapper>
        )}

        {matches ? (
          <>
            <div className="divider grid grid-cols-1 justify-between gap-y-[30px] gap-x-[20px] p-[20px]">
              <RenderTimeZone
                timeZone="Asia/kolkata"
                city="Surat"
                address="4th Floor, BLGD Corporation, Akshar Building, Opp. Mehta
                Petrol Pump, Katargam, Surat, Gujarat 395004"
                number="+91 85003 85003"
                img={FlagIndia}
                
              />
              <RenderTimeZone
                timeZone="Asia/kolkata"
                city="Mumbai"
                address="FD-4120 To DW-3100, F-  Tower, Bharat Diamond Bourse, Bandra Kurla Complex, 
                Bandra (E), 400051"
                number="+91 97264 32003"
                img={FlagIndia}
              />
              <RenderTimeZone
                timeZone="America/New_York"
                city="New York"
                address="551 5th Avenue, 7th Floor New York, NY 10176, 
                USA."
                number="+1 212 278 0905 / +1 212 278 0782"
                img={FlagNew_York}
              />
              {/* <RenderTimeZone
                timeZone="Europe/Brussels"
                city="Antwerp"
                address={<>Schupstraat 18-20 Bus 1 2018<br/> Antwerpen Belgium</>}
                number="+32 3 685 21 31"
                img={FlagAntwerp}
              /> */}
              <RenderTimeZone
                timeZone="Asia/Hong_Kong"
                city="Hong Kong"
                address="1006, Hung Hom Commercial Center Tower B, 37 Ma Tau Wai Road, Hung Hom, Kowloon, Hong Kong 00000"
                number="+852 2723 1243"
                img={FlagHong_Kong}
              />
              {/* <RenderTimeZone
                timeZone="Asia/Dubai"
                city="Dubai"
                address="38-F Almas Tower, 38th Floor, Jumeirah Lakes Tower, Jlt Dubai, UAE 50001"
                number="+971 45 147 853"
                img={FlagDubai}
              /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                paddingBottom: "50px",
              }}
            >
              <div className="main_mo_Logo">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/")}
                >
                  <Image
                    className="logo"
                    alt="bhanderi lab grown diamonds"
                    title="bhanderi lab grown diamonds"
                    src={FooterBhanderiWhite}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="pare mt-5 tel">
                  Bhanderi leading lab grown diamond manufacturer & exporter
                  with global presence.
                </div>
                <div className="download_app_mo mt-5">
                  <Link
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.Blgd.BlgdSeller&hl=en&gl=US"
                  >
                    <img
                      src={playStore}
                      alt=""
                      width={100}
                      height={100}
                      className="img_play"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://apps.apple.com/in/app/bhanderi-lab-grown-diamond/id6447518120"
                  >
                    <img
                      src={appStore}
                      alt=""
                      width={100}
                      height={100}
                      className="img_play"
                    />
                  </Link>
                </div>
              </div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={{ background: "#1e1e1e", margin: "0px" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel1" ? (
                      <RemoveIcon style={{ color: "white" }} />
                    ) : (
                      <AddIcon style={{ color: "white" }} />
                    )
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{
                    padding: "0px",
                    margin: "0px 16px",
                    borderBottom: "1px solid #292929",
                  }}
                >
                  <MobileFooterTitle>QUICK LINKS</MobileFooterTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <MobileFooterItemContainer>
                    <MobileFooterItem>
                      <Link href={revolutionaryUrl}>
                        {" "}
                        Lab Diamonds Revolutionary
                      </Link>
                    </MobileFooterItem>
                    {/* <MobileFooterItem>
                    <Link href={tradersUrl}> Diamonds Traders</Link>
                  </MobileFooterItem>
                  <MobileFooterItem>
                    <Link href={jewelersUrl}> Diamonds Jewelers</Link>
                  </MobileFooterItem> */}
                    <MobileFooterItem>
                      <Link href={aboutUrl}> About Bhanderi</Link>
                    </MobileFooterItem>
                    <MobileFooterItem>
                      <Link href={FourCs}> 4Cs Of Diamond Chart</Link>
                    </MobileFooterItem>
                    <MobileFooterItem>
                      <Link href={blogNewsUrl}> Blogs</Link>
                    </MobileFooterItem>
                    <MobileFooterItem>
                      <Link href={SitemapUrl}> Sitemap</Link>
                    </MobileFooterItem>
                  </MobileFooterItemContainer>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                style={{ background: "#1e1e1e", margin: "0px" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel2" ? (
                      <RemoveIcon style={{ color: "white" }} />
                    ) : (
                      <AddIcon style={{ color: "white" }} />
                    )
                  }
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                  style={{
                    padding: "0px",
                    margin: "0px 16px",
                    borderBottom: "1px solid #292929",
                  }}
                >
                  <MobileFooterTitle>Location</MobileFooterTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <MobileFooterItemContainer>
                    <MobileFooterItem>
                      <Link href={locationSuratUrl}>Surat</Link>
                    </MobileFooterItem>
                    <FooterMenuItem>
                      <Link href={locationMumbaiUrl}>Mumbai</Link>
                    </FooterMenuItem>
                    <MobileFooterItem>
                      <Link href={locationUSAUrl}>New York</Link>
                    </MobileFooterItem>
                    {/* <MobileFooterItem>
                      <Link href={locationAntwerpUrl}>Antwerp</Link>
                    </MobileFooterItem> */}
                    <MobileFooterItem>
                      <Link href={locationHongKongUrl}>hong kong</Link>
                    </MobileFooterItem>
                    {/* <MobileFooterItem>
                      <Link href={locationDubaiUrl}>Dubai</Link>
                    </MobileFooterItem> */}
                  </MobileFooterItemContainer>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                style={{ background: "#1e1e1e", margin: "0px" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel3" ? (
                      <RemoveIcon style={{ color: "white" }} />
                    ) : (
                      <AddIcon style={{ color: "white" }} />
                    )
                  }
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                  style={{
                    padding: "0px",
                    margin: "0px 16px",
                    borderBottom: "1px solid #292929",
                  }}
                >
                  <MobileFooterTitle>Legal</MobileFooterTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <MobileFooterItemContainer>
                      <MobileFooterItem>
                        <Link href={privacyUrl}>privacy statement </Link>
                      </MobileFooterItem>
                      <MobileFooterItem>
                        <Link href={TermsUrl}>Terms of use</Link>
                      </MobileFooterItem>
                      <MobileFooterItem>
                        <Link href={contactUrl}> Contact Us</Link>
                      </MobileFooterItem>
                      <MobileFooterItem>
                        <Link href={privacyUrl}>Grievance</Link>
                      </MobileFooterItem>
                    </MobileFooterItemContainer>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                style={{ background: "#1e1e1e", margin: "0px" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel4" ? (
                      <RemoveIcon style={{ color: "white" }} />
                    ) : (
                      <AddIcon style={{ color: "white" }} />
                    )
                  }
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                  style={{
                    padding: "0px",
                    margin: "0px 16px",
                    borderBottom: "1px solid #292929",
                  }}
                >
                  <MobileFooterTitle>global head office</MobileFooterTitle>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div
                    // style={{
                    //   display: "flex",
                    //   flexDirection: "row",
                    //   gap: "8px",
                    // }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "8px",
                          margin: "20px 0px 10px 0px",
                        }}
                      >
                        <svg
                          width="80"
                          height="30"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="vuesax/linear/location">
                            <g id="location">
                              <path
                                id="Vector"
                                d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                                stroke="#A4C89A"
                                strokeWidth="1.5"
                              />
                              <path
                                id="Vector_2"
                                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                                stroke="#A4C89A"
                                strokeWidth="1.5"
                              />
                            </g>
                          </g>
                        </svg>

                        <FooterContactNew>
                          <p className="pare">
                            Akshar Building, 4th floor, BLGD corporation, opp.
                            Mehta Petrol pump, Katargam-395004, Surat, Gujarat,
                            India
                          </p>
                        </FooterContactNew>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "25px",
                          margin: "20px 0px 10px 25px",
                        }}
                      >
                        <Image
                          alt="footer icon"
                          src={Phone}
                          width={24}
                          height={24}
                        />
                        <FooterContactItem>
                          <a
                            href="tel:+ 91 85003 85003"
                            target="_blank"
                            className="tel"
                          >
                            + 91 85003 85003
                          </a>
                        </FooterContactItem>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "25px",
                        margin: "20px 0px 10px 25px",
                      }}
                    >
                      <Image
                        alt="footer icon"
                        src={Email}
                        width={24}
                        height={24}
                      />
                      <FooterContactItem>
                        <a
                          href="melto:info@blgdlab.com"
                          target="_blank"
                          className="tel"
                        >
                          info@blgdlab.com
                        </a>
                      </FooterContactItem>
                    </div>
                  </div>
                  <MobileFooterWrapper>
                    <a
                      href="https://www.facebook.com/bhanderi.lab.grown.diamonds"
                      target="_blank"
                    >
                      {/* <Image
                      alt="footer icon"
                      src={Facebook}
                      width={25}
                      height={25}
                    /> */}
                      <div className="icon-container">
                        <svg
                          className="icon icon-a"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14.75 22.75H10.25V15.5H9.29999C8.71999 15.5 8.25 15.03 8.25 14.45V12.55C8.25 11.97 8.71999 11.5 9.29999 11.5H10.25V9C10.25 6.93 11.93 5.25 14 5.25H16.7C17.28 5.25 17.75 5.71999 17.75 6.29999V8.70001C17.75 9.28001 17.28 9.75 16.7 9.75H14.75V11.5H16.63C16.95 11.5 17.24 11.64 17.44 11.88C17.64 12.12 17.72 12.44 17.66 12.75L17.28 14.65C17.18 15.14 16.75 15.49 16.25 15.49H14.75V22.75ZM11.75 21.25H13.25V14H15.89L16.09 13H13.26V9.29999C13.26 8.71999 13.73 8.25 14.31 8.25H16.26V6.75H14C12.76 6.75 11.75 7.76 11.75 9V13H9.75V14H11.75V21.25Z"
                            fill="#A4C89A"
                          />
                          <path
                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                            fill="#A4C89A"
                          />
                        </svg>

                        <svg
                          className="icon icon-b"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <g id="vuesax/bold/facebook">
                            <g id="facebook">
                              <path
                                id="Vector"
                                d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
                                fill="#A4C89A"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/bhanderi.lab.grown.diamonds/"
                      target="_blank"
                    >
                      {/* <Image
                      alt="footer icon"
                      src={Instagram}
                      width={25}
                      height={25}
                    /> */}
                      <div className="icon-container">
                        <svg
                          className="icon icon-a"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                            fill="#A4C89A"
                          />
                          <path
                            d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                            fill="#A4C89A"
                          />
                          <path
                            d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"
                            fill="#A4C89A"
                          />
                        </svg>

                        <svg
                          className="icon icon-b"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                            fill="#A4C89A"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC6GDv7Bqx77BZUCUCfctn9g/featured"
                      target="_blank"
                    >
                      {/* <Image
                      alt="footer icon"
                      src={Youtube}
                      width={25}
                      height={25}
                    /> */}
                      <div className="icon-container">
                        <svg
                          className="icon icon-a"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M17 20.75H7C3.56 20.75 1.25 18.44 1.25 15V9C1.25 5.56 3.56 3.25 7 3.25H17C20.44 3.25 22.75 5.56 22.75 9V15C22.75 18.44 20.44 20.75 17 20.75ZM7 4.75C4.42 4.75 2.75 6.42 2.75 9V15C2.75 17.58 4.42 19.25 7 19.25H17C19.58 19.25 21.25 17.58 21.25 15V9C21.25 6.42 19.58 4.75 17 4.75H7Z"
                            fill="#A4C89A"
                          />
                          <path
                            d="M10.5897 15.53C10.2997 15.53 10.0197 15.46 9.76965 15.32C9.18965 14.99 8.84961 14.32 8.84961 13.49V10.53C8.84961 9.69997 9.17965 9.02999 9.76965 8.69999C10.3497 8.36999 11.0996 8.42996 11.8096 8.85996L14.2797 10.34C14.9597 10.75 15.3496 11.36 15.3496 12.01C15.3496 12.66 14.9597 13.27 14.2797 13.68L11.8096 15.16C11.3996 15.4 10.9797 15.53 10.5897 15.53ZM10.5897 9.96998C10.5497 9.96998 10.5196 9.97997 10.4996 9.98997C10.4296 10.03 10.3496 10.21 10.3496 10.52V13.48C10.3496 13.78 10.4296 13.96 10.4996 14.01C10.5796 14.05 10.7697 14.03 11.0297 13.87L13.4996 12.39C13.7496 12.24 13.8397 12.09 13.8397 12C13.8397 11.91 13.7496 11.77 13.4996 11.61L11.0297 10.13C10.8497 10.02 10.6897 9.96998 10.5897 9.96998Z"
                            fill="#A4C89A"
                          />
                        </svg>

                        <svg
                          className="icon icon-b"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z"
                            fill="#A4C89A"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/bhanderi-lab-grown-diamond"
                      target="_blank"
                    >
                      {/* <Image
                      alt="footer icon"
                      src={Linkedin}
                      width={25}
                      height={25}
                    /> */}
                      <div className="icon-container">
                        <svg
                          className="icon icon-a"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                            stroke="#A4C89A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 9H2V21H6V9Z"
                            stroke="#A4C89A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                            stroke="#A4C89A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          className="icon icon-b"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                            fill="#A4C89A"
                          />
                          <path d="M6 9H2V21H6V9Z" fill="#A4C89A" />
                          <path
                            d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                            fill="#A4C89A"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/bhanderi_lab?s=25"
                      className="twitter-icon"
                      target="_blank"
                    >
                      {/* <Image
                      alt="footer icon"
                      src={Twitter}
                      width={25}
                      height={25}
                    /> */}
                      <div className="icon-container">
                        <svg
                          className="icon icon-a"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M0.0432931 0L6.99284 9.92792L0 18H1.57426L7.69709 10.9331L12.6437 18H18L10.6598 7.51363L17.1691 0H15.5948L9.95659 6.50843L5.40064 0H0.0443371H0.0432931ZM2.35769 1.23873H4.81781L15.6835 16.7613H13.2234L2.35769 1.23873Z"
                            fill="#A4C89A"
                          />
                        </svg>

                        <svg
                          className="icon icon-b"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M0.0432931 0L6.99284 9.92792L0 18H1.57426L7.69709 10.9331L12.6437 18H18L10.6598 7.51363L17.1691 0H15.5948L9.95659 6.50843L5.40064 0H0.0443371H0.0432931ZM2.35769 1.23873L2 1.5L13 16.7613H13.2234L2.35769 1.23873Z"
                            fill="#A4C89A"
                          />
                        </svg>
                      </div>
                    </a>
                  </MobileFooterWrapper>
                </AccordionDetails>
              </Accordion>
            </div>
          </>
        ) : (
          <>
            <WebFooterContainer>
              <div className="divider grid grid-cols-2 justify-between gap-y-[30px] gap-x-[20px] p-[20px] ">
                <RenderTimeZone
                  timeZone="Asia/kolkata"
                  city="Surat"
                  address="4th Floor, BLGD Corporation, Akshar Building, Opp. Mehta
                Petrol Pump, Katargam, Surat, Gujarat 395004"
                  number="+91 85003 85003"
                  img={FlagIndia}
                />
                <RenderTimeZone
                  timeZone="Asia/kolkata"
                  city="Mumbai"
                  address="FD-4120 To DW-3100, F-  Tower, Bharat Diamond Bourse, Bandra Kurla Complex, 
                  Bandra (E), 400051"
                  number="+91 97264 32003"
                  img={FlagIndia}
                />
                <RenderTimeZone
                  timeZone="America/New_York"
                  city="New York"
                  address="551 5th Avenue, 7th Floor New York, NY 10176, 
                  USA."
                  number="+1 212 278 0905 / +1 212 278 0782"
                  img={FlagNew_York}
                />
                {/* <RenderTimeZone
                timeZone="Europe/Brussels"
                city="Antwerp"
                address={<>Schupstraat 18-20 Bus 1 2018<br/> Antwerpen Belgium</>}
                number="+32 3 685 21 31"
                img={FlagAntwerp}
              /> */}
                <RenderTimeZone
                  timeZone="Asia/Hong_Kong"
                  city="Hong Kong"
                  address="1006, Hung Hom Commercial Center Tower B, 37 Ma Tau Wai Road, Hung Hom, Kowloon, Hong Kong 00000"
                  number="+852 2723 1243"
                  img={FlagHong_Kong}
                />
                {/* <RenderTimeZone
                timeZone="Asia/Dubai"
                city="Dubai"
                address="38-F Almas Tower, 38th Floor, Jumeirah Lakes Tower, Jlt Dubai, UAE 50001"
                number="+971 45 147 853"
                img={FlagDubai}
              /> */}
              </div>
              <WebFooterWrapper style={{ paddingTop: "50px" }}>
                <div className="footer_logo">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/")}
                  >
                    <Image
                      className="logo"
                      alt="bhanderi lab grown diamonds"
                      title="bhanderi lab grown diamonds"
                      src={FooterBhanderiWhite}
                      width={200}
                      height={200}
                    />

                    {/* <FooterContactItem>ethical crafted diamond</FooterContactItem>
                  <div style={{ color: "white", display: "flex", gap: "10px" }}>
                    <a href="https://www.facebook.com/bhanderi.lab.grown.diamonds">
                      <Image alt="footer icon" src={Facebook} />
                    </a>
                    <a href="https://www.instagram.com/bhanderi.lab.grown.diamonds/">
                      <Image alt="footer icon" src={Instagram} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC6GDv7Bqx77BZUCUCfctn9g/featured">
                      <Image alt="footer icon" src={Youtube} />
                    </a>
                    <a href="https://www.linkedin.com/company/bhanderi-lab-grown-diamond">
                      <Image alt="footer icon" src={Linkedin} />
                    </a>
                    <a href="https://twitter.com/bhanderi_lab?s=25">
                      <Image alt="footer icon" src={Twitter} />
                    </a>
                  </div> */}
                  </div>
                  <div className="pare mt-5 tel">
                    Bhanderi leading lab grown diamond manufacturer & exporter
                    with global presence.
                  </div>
                  <div className="download_app mt-5 flex justify-between">
                    <Link
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.Blgd.BlgdSeller&hl=en&gl=US"
                    >
                      <img
                        src={playStore}
                        alt=""
                        width={100}
                        height={100}
                        className="img_play"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="https://apps.apple.com/in/app/bhanderi-lab-grown-diamond/id6447518120"
                    >
                      <img
                        src={appStore}
                        alt=""
                        width={100}
                        height={100}
                        className="img_play"
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <FooterMenuTitle>QUICK LINKS</FooterMenuTitle>
                  <ul>
                    <FooterMenuItem>
                      <Link href={revolutionaryUrl}>
                        Lab Diamonds Revolutionary
                      </Link>
                    </FooterMenuItem>
                    {/* <FooterMenuItem>
                    <Link href={tradersUrl}>Diamonds Traders</Link>
                  </FooterMenuItem>
                  <FooterMenuItem>
                    <Link href={jewelersUrl}>Diamonds Jewelers</Link>
                  </FooterMenuItem> */}
                    <FooterMenuItem>
                      <Link href={aboutUrl}>About Bhanderi</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={FourCs}>4Cs Of Diamond Chart</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={blogNewsUrl}>Blogs</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={SitemapUrl}>Sitemap</Link>
                    </FooterMenuItem>
                  </ul>
                </div>
                <div className="custom-width">
                  <FooterMenuTitle>LEGAL</FooterMenuTitle>
                  <ul>
                    <FooterMenuItem>
                      <Link href={privacyUrl}>privacy statement </Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={TermsUrl}>Terms of use</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={contactUrl}>Contact Us</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={privacyUrl}>Grievance</Link>
                    </FooterMenuItem>
                  </ul>
                </div>
                <div>
                  <FooterMenuTitle>LOCATION</FooterMenuTitle>
                  <ul>
                    <FooterMenuItem>
                      <Link href={locationSuratUrl}>Surat</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={locationMumbaiUrl}>Mumbai</Link>
                    </FooterMenuItem>
                    <FooterMenuItem>
                      <Link href={locationUSAUrl}>new york</Link>
                    </FooterMenuItem>
                    {/* <FooterMenuItem>
                      <Link href={locationAntwerpUrl}>Antwerp</Link>
                    </FooterMenuItem> */}
                    <FooterMenuItem>
                      <Link href={locationHongKongUrl}>hong kong</Link>
                    </FooterMenuItem>
                    {/* <FooterMenuItem>
                      <Link href={locationDubaiUrl}>Dubai</Link>
                    </FooterMenuItem> */}
                  </ul>
                </div>

                <div className="global_add">
                  <FooterMenuTitle>global head office</FooterMenuTitle>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                      }}
                    >
                      <svg
                        width="80"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="vuesax/linear/location">
                          <g id="location">
                            <path
                              id="Vector"
                              d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                              stroke="#A4C89A"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Vector_2"
                              d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                              stroke="#A4C89A"
                              strokeWidth="1.5"
                            />
                          </g>
                        </g>
                      </svg>

                      <FooterContactNew>
                        <p className="pare tel">
                          Akshar Building, 4th floor, BLGD corporation, opp.
                          Mehta Petrol pump, Katargam-395004, Surat, Gujarat,
                          India
                        </p>
                      </FooterContactNew>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                      }}
                    >
                      <Image
                        alt="footer icon"
                        src={Phone}
                        width={24}
                        height={24}
                      />
                      <FooterContactItem>
                        <a
                          href="tel:+ 91 85003 85003"
                          target="_blank"
                          className="tel"
                        >
                          + 91 85003 85003
                        </a>
                      </FooterContactItem>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                      }}
                    >
                      <Image
                        alt="footer icon"
                        src={Email}
                        width={24}
                        height={24}
                      />
                      <FooterContactItem>
                        {" "}
                        <a
                          href="mailto:info@blgdlab.com"
                          target="_blank"
                          className="tel"
                        >
                          info@blgdlab.com
                        </a>
                      </FooterContactItem>
                    </div>
                    <div
                      style={{ color: "white", display: "flex", gap: "15px" }}
                    >
                      <a
                        href="https://www.facebook.com/bhanderi.lab.grown.diamonds"
                        target="_blank"
                      >
                        {/* <Image
                        alt="footer icon"
                        src={Facebook}
                        width={25}
                        height={25}
                      /> */}

                        <div className="icon-container">
                          <svg
                            className="icon icon-a"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M14.75 22.75H10.25V15.5H9.29999C8.71999 15.5 8.25 15.03 8.25 14.45V12.55C8.25 11.97 8.71999 11.5 9.29999 11.5H10.25V9C10.25 6.93 11.93 5.25 14 5.25H16.7C17.28 5.25 17.75 5.71999 17.75 6.29999V8.70001C17.75 9.28001 17.28 9.75 16.7 9.75H14.75V11.5H16.63C16.95 11.5 17.24 11.64 17.44 11.88C17.64 12.12 17.72 12.44 17.66 12.75L17.28 14.65C17.18 15.14 16.75 15.49 16.25 15.49H14.75V22.75ZM11.75 21.25H13.25V14H15.89L16.09 13H13.26V9.29999C13.26 8.71999 13.73 8.25 14.31 8.25H16.26V6.75H14C12.76 6.75 11.75 7.76 11.75 9V13H9.75V14H11.75V21.25Z"
                              fill="#A4C89A"
                            />
                            <path
                              d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                              fill="#A4C89A"
                            />
                          </svg>

                          <svg
                            className="icon icon-b"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <g id="vuesax/bold/facebook">
                              <g id="facebook">
                                <path
                                  id="Vector"
                                  d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
                                  fill="#A4C89A"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/bhanderi.lab.grown.diamonds/"
                        target="_blank"
                      >
                        {/* <Image
                        alt="footer icon"
                        src={Instagram}
                        width={25}
                        height={25}
                      /> */}

                        <div className="icon-container">
                          <svg
                            className="icon icon-a"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                              fill="#A4C89A"
                            />
                            <path
                              d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                              fill="#A4C89A"
                            />
                            <path
                              d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"
                              fill="#A4C89A"
                            />
                          </svg>

                          <svg
                            className="icon icon-b"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                              fill="#A4C89A"
                            />
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC6GDv7Bqx77BZUCUCfctn9g/featured"
                        target="_blank"
                      >
                        {/* <Image
                        alt="footer icon"
                        src={Youtube}
                        width={25}
                        height={25}
                      /> */}

                        <div className="icon-container">
                          <svg
                            className="icon icon-a"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17 20.75H7C3.56 20.75 1.25 18.44 1.25 15V9C1.25 5.56 3.56 3.25 7 3.25H17C20.44 3.25 22.75 5.56 22.75 9V15C22.75 18.44 20.44 20.75 17 20.75ZM7 4.75C4.42 4.75 2.75 6.42 2.75 9V15C2.75 17.58 4.42 19.25 7 19.25H17C19.58 19.25 21.25 17.58 21.25 15V9C21.25 6.42 19.58 4.75 17 4.75H7Z"
                              fill="#A4C89A"
                            />
                            <path
                              d="M10.5897 15.53C10.2997 15.53 10.0197 15.46 9.76965 15.32C9.18965 14.99 8.84961 14.32 8.84961 13.49V10.53C8.84961 9.69997 9.17965 9.02999 9.76965 8.69999C10.3497 8.36999 11.0996 8.42996 11.8096 8.85996L14.2797 10.34C14.9597 10.75 15.3496 11.36 15.3496 12.01C15.3496 12.66 14.9597 13.27 14.2797 13.68L11.8096 15.16C11.3996 15.4 10.9797 15.53 10.5897 15.53ZM10.5897 9.96998C10.5497 9.96998 10.5196 9.97997 10.4996 9.98997C10.4296 10.03 10.3496 10.21 10.3496 10.52V13.48C10.3496 13.78 10.4296 13.96 10.4996 14.01C10.5796 14.05 10.7697 14.03 11.0297 13.87L13.4996 12.39C13.7496 12.24 13.8397 12.09 13.8397 12C13.8397 11.91 13.7496 11.77 13.4996 11.61L11.0297 10.13C10.8497 10.02 10.6897 9.96998 10.5897 9.96998Z"
                              fill="#A4C89A"
                            />
                          </svg>

                          <svg
                            className="icon icon-b"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z"
                              fill="#A4C89A"
                            />
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/bhanderi-lab-grown-diamond"
                        target="_blank"
                      >
                        {/* <Image
                        alt="footer icon"
                        src={Linkedin}
                        width={25}
                        height={25}
                      /> */}
                        <div className="icon-container">
                          <svg
                            className="icon icon-a"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                              stroke="#A4C89A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6 9H2V21H6V9Z"
                              stroke="#A4C89A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                              stroke="#A4C89A"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <svg
                            className="icon icon-b"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                              fill="#A4C89A"
                            />
                            <path d="M6 9H2V21H6V9Z" fill="#A4C89A" />
                            <path
                              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                              fill="#A4C89A"
                            />
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/bhanderi_lab?s=25"
                        className="twitter-icon"
                        target="_blank"
                      >
                        {/* <Image
                        alt="footer icon"
                        src={Twitter}
                        width={25}
                        height={25}
                      /> */}
                        <div className="icon-container">
                          <svg
                            className="icon icon-a"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M0.0432931 0L6.99284 9.92792L0 18H1.57426L7.69709 10.9331L12.6437 18H18L10.6598 7.51363L17.1691 0H15.5948L9.95659 6.50843L5.40064 0H0.0443371H0.0432931ZM2.35769 1.23873H4.81781L15.6835 16.7613H13.2234L2.35769 1.23873Z"
                              fill="#A4C89A"
                            />
                          </svg>

                          <svg
                            className="icon icon-b"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M0.0432931 0L6.99284 9.92792L0 18H1.57426L7.69709 10.9331L12.6437 18H18L10.6598 7.51363L17.1691 0H15.5948L9.95659 6.50843L5.40064 0H0.0443371H0.0432931ZM2.35769 1.23873L2 1.5L13 16.7613H13.2234L2.35769 1.23873Z"
                              fill="#A4C89A"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                    {/* <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: "20px",
                    }}
                  >
                    <Image
                      alt="footer icon"
                      src={Location}
                      style={{ paddingTop: "5px" }}
                    />
                    <FooterContactItem className="address">
                      Akshar Building, 4th floor, BLGD corporation, opp. Mehta
                      Petrol pump, Katargam, Surat, Gujarat 395004
                    </FooterContactItem>
                  </div> */}
                  </div>
                </div>
              </WebFooterWrapper>
            </WebFooterContainer>
          </>
        )}
        <CopyrightWrapper>
          <CopyrightContent>
            Copyright © {new Date().getFullYear()} BHANDERI LAB GROWN DIAMONDS.
            All Rights Reserved
          </CopyrightContent>
        </CopyrightWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
const RenderTimeZone = ({ timeZone, city, address, number, img }) => {
  const fullTime = useGetTime(timeZone);
  return (
    <div className="flex flex-col">
      <div className="flex gap-[10px]">
        {/* <Clock timeZone={timeZone} /> */}
        <img
          src={img}
          alt=""
          width={60}
          height={20}
          style={{ objectFit: "contain" }}
        />
        <div className="timePlace text-white">
          <p>{city}</p>
          <TimeClientOnly></TimeClientOnly>
          {/* <p>{`${String(fullTime.hour).padStart(2, '0')}:${String(fullTime.minute).padStart(2, '0')}:${String(fullTime.second).padStart(2, '0')}`}</p> */}
        </div>
      </div>
      <div className="h-full flex flex-col gap-[20px]">
        <p className="w-full text-white pt-2 font-extralight">{address}</p>
        <p className="text-white mt-auto font-extralight">{number}</p>
      </div>
    </div>
  );
};

const useGetTime = (timeZone) => {
  let time = new Date()?.toLocaleString("en-US", {
    timeZone: timeZone,
  });
  let [, fullTime] = time.split(",");
  let [hour, minute, second] = fullTime.split(":");
  const [currentTime, setCurrentTime] = useState({
    hour: hour.length < 10 ? `0${hour}` : hour,
    minute,
    second,
  });

  useEffect(() => {
    const timrInterval = setInterval(() => {
      let time = new Date()?.toLocaleString("en-US", {
        timeZone: timeZone,
      });
      let [, fullTime] = time.split(",");
      let [hour, minute, second] = fullTime.split(":");
      setCurrentTime({
        hour: +hour < 10 ? `0${hour.trim()}` : hour,
        minute,
        second,
      });
    }, 1000);
    return () => {
      clearInterval(timrInterval);
    };
  }, []);

  return {
    ...currentTime,
  };
};
