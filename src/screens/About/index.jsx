"use client";
import React, { useEffect, useState } from "react";
import { osName, isIOS } from "react-device-detect";
import {
  // Banner,
  Welcome,
  MissionAndVision,
  Impact,
  OurTeam,
  BannerSection,
  BannerWrapper,
  IOSBanner,
  WebBanner,
  // IOSImpact,
} from "./styled";
import Image from "next/image";
import {
  Aboutintent,
  Aboutpromise,
  Aboutpurity,
  Aboutquality1,
  OurteamGlassMan,
  OurteamMan,
  OurteamWoman,
  aboutbulding,
} from "@/constants/images";
// import { useMediaQuery } from "@mui/material";

const About = () => {
  const [isIphone, setIsIphone] = useState(false);
  // const IsTablat = useMediaQuery("max-width:1440px");

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);
  return (
    <>
      {isIphone ? (
        <BannerSection>
          <BannerWrapper>
            <IOSBanner>
              <div className="container">
                <h1 className="header" style={{ paddingTop: "70px" }}>
                  <div>better for earth,</div>
                  <div>better for you.</div>
                </h1>
              </div>
            </IOSBanner>
          </BannerWrapper>
        </BannerSection>
      ) : (
        // <WebBanner>
        //   <div className="container">
        //     <div className="header">
        //       <div>better for earth,</div>
        //       <div>better for you.</div>
        //     </div>
        //   </div>
        // </WebBanner>

        <BannerSection>
          <BannerWrapper>
            <WebBanner>
              <h1 className="container">
                <div className="header">
                  <div>better for earth,</div>
                  <div>better for you.</div>
                </div>
              </h1>
            </WebBanner>
          </BannerWrapper>
        </BannerSection>
      )}

      {/* <BannerSection>
        <BannerWrapper>
          <Banner className={isIphone ? "iosView" : "webView"}>
            <div className="container">
              <div className="header">
                <div>better for earth,</div>
                <div>better for you.</div>
              </div>
            </div>
          </Banner>
        </BannerWrapper>
      </BannerSection> */}

      <Welcome>
        <div className="left">
          <Image src={aboutbulding} width={1000} height={1000} alt="polished" />
        </div>
        <div className="right">
          <div>
            <div className="header">
              <div className="web">
                <div>Welcome to</div>
                <div>Bhanderi Lab</div>
                <div>Grown Diamonds,</div>
              </div>
              <div className="mobile">
                Welcome to Bhanderi Lab Grown Diamonds,
              </div>
            </div>
            <div className="description">
              Where beauty meets sustainability and ethics. Our story began with
              a passion for diamonds and a deep commitment to creating a better
              world.
            </div>
            <div className="description">
              We are a celebrated and renowned company that specializes in
              creating Type IIA lab grown diamonds using Chemical Vapor
              Deposition (CVD) technology.
            </div>
          </div>
        </div>
      </Welcome>

      <MissionAndVision>
        <div className="left">
          <div>
            <div className="header web">our</div>
            <div className="header web">mission</div>
            <div className="header mobile">our mission</div>
            <div className="title">
              We are dependable and create diamonds of high quality, in great
              quantity, with utmost commitment and optimal speed.
            </div>
            <div className="content">
              <div className="item">
                <Image
                  src={Aboutpurity}
                  alt="purity"
                  className="logo mb-6"
                  width={1000}
                  height={1000}
                />
                <div className="point">Purity</div>
                <div className="desc">
                  Ethical diamonds that are real and authentic
                </div>
              </div>
              <div className="item">
                <Image
                  src={Aboutquality1}
                  alt="quality"
                  className="logodaimond"
                  width={1000}
                  height={1000}
                />
                <div className="point">Quality</div>
                <div className="desc">
                  Rarest and highest quality Type IIA diamonds
                </div>
              </div>
              <div className="item">
                <Image
                  src={Aboutpromise}
                  alt="promise"
                  className="logo"
                  width={1000}
                  height={1000}
                />
                <div className="point">Promise</div>
                <div className="desc1">
                  You will be buying a diamond certified by GIA, IGI, GCAL or
                  HRD
                </div>
              </div>
              <div className="item">
                <Image
                  src={Aboutintent}
                  alt="intent"
                  className="logo"
                  width={1000}
                  height={1000}
                />
                <div className="point">intent</div>
                <div className="desc">
                  Creating diamonds by simulating nature
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <div className="top">
              <div className="header web">our</div>
              <div className="header web">vision</div>
              <div className="header mobile">our vision</div>
              <div className="title web-right-title">
                Crafting the Future of lab grown diamonds.
              </div>
            </div>
            <div className="description">
              Our vision is to transform the diamond industry by becoming the
              leading provider of lab created diamonds that meet the highest
              standards of quality, beauty, and ethical integrity to create a
              better future for our valuable customers and the planet too.
            </div>
          </div>
        </div>
      </MissionAndVision>

      {/* {isIphone ? (
        <BannerSection>
          <BannerWrapper>
            <IOSImpact>
              <div style={{ padding: "20px 20px 20px 0px" }}>
                <div className="container">
                  <div className="main">
                    <div className="header">impact</div>
                    <div
                      className="description"
                      style={{ padding: "0px 20px 0px 0px" }}
                    >
                      Bhanderi is making an impact in the diamond industry by
                      reducing the environmental effect and promoting ethical
                      production. Our diamonds offer consumers a more
                      cost-effective alternative to high-quality diamonds.
                      Additionally, we support research and development in the
                      field of diamond production to improve the quality and
                      efficiency of the process. Overall, we are building a more{" "}
                      <span className="highlight">
                        sustainable, ethical, and accessible diamond industry.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </IOSImpact>
          </BannerWrapper>
        </BannerSection>
      ) : ( */}
      <Impact>
        <div className="container">
          <div className="main">
            <div className="header">impact</div>
            <div className="description">
              Bhanderi is making an impact in the diamond industry by reducing
              the environmental effect and promoting ethical production. Our
              diamonds offer consumers a more cost-effective alternative to
              high-quality diamonds. Additionally, we support research and
              development in the field of diamond production to improve the
              quality and efficiency of the process. Overall, we are building a
              more
              <span className="highlight">
                Sustainable, ethical, and accessible diamond industry.
              </span>
              {/* <span className="highlight">
                sustainable, ethical, and accessible diamond industry.
              </span> */}
            </div>
          </div>
        </div>
      </Impact>
      {/* )} */}

      <OurTeam>
        <div className="img one">
          <Image
            src={OurteamMan}
            alt="manMobile"
            className="mobile-img"
            width={500}
            height={500}
          />
        </div>
        <div className="content">
          <div className="header">
            <div className="web">
              <div>Our</div>
              <div>Team</div>
            </div>
            <div className="mobile">our Team</div>
          </div>
          <div className="description">
            The Bhanderi team is comprised of highly skilled engineers and
            diamond experts who are committed to producing high-quality diamonds
            in a sustainable and socially responsible manner. Our culture values
            innovation, collaboration, and creativity, creating a work
            environment that fosters growth and learning.
          </div>
          <div className="description">
            We also recognize the importance of work-life balance, offering
            flexible work arrangements and employee wellness programs.
            Additionally, the company is committed to supporting the local
            community and promoting sustainability through various initiatives.
            With a focus on environmental consciousness, social responsibility,
            and employee well-being, we are creating the epitome of a work
            culture that prioritizes both people and the planet.Learn more about 
            our dedicated team and the leadership of Our <a href="https://blgdlab.com/directors" target="_blank" className="font-semibold">Directors.</a> 
          </div>
        </div>
        <div className="img two">
          <Image
            src={OurteamGlassMan}
            alt="glassMobile"
            className="mobile-img"
            width={500}
            height={500}
          />
        </div>
        <div className="img three">
          <Image
            src={OurteamWoman}
            alt="womanMobile"
            className="mobile-img"
            width={500}
            height={500}
          />
        </div>
      </OurTeam>
    </>
  );
};

export default About;
