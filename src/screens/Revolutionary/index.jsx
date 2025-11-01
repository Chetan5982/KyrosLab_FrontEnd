"use client";
import React from "react";
import Image from "next/image";
import {
  OurProcess,
  RevolutionaryArchetype,
  NoHarms,
  Infrastructure,
  Section1,
  Section2,
  Certifications,
  BannerSection,
  BannerWrapper,
  IOSRevolutionaryArchetype,
  IOSNoHarms,
  Benefits,
  RevolutionaryTitle,
  WebBannerSection,
} from "./styled";
// import infrastructure from "../../asset/images/infrastructure.png";
// import diamondFormation from "../../asset/images/diamond-formation.png";
// import diamondSelection from "../../asset/images/diamond-selection.png";
// import growthCycle from "../../asset/images/growth-cycle.png";
// import polishing from "../../asset/images/polishing.png";
// import diamondAlchemy from "../../asset/images/diamond-alchemy.png";
// import line1 from "../../asset/images/line1.png";
// import line2 from "../../asset/images/line2.png";
// import certificationsLogo from "../../asset/images/certifications-logo.png";
// import benefitsOfLab from "../../asset/images/benefits-of-lab1.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { isIOS } from "react-device-detect";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutInfrastructure, Benefitsoflab } from "@/constants/images";
gsap.registerPlugin(ScrollTrigger);

function BoxAnimation() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className="main1"
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: "8.7%",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          zIndex: -2,
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            borderRight: "2px solid #efefef",
            zIndex: "-3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <RevolutionaryTitle>
            <div>a revolutionary</div>
            <div>archetype</div>
          </RevolutionaryTitle> */}
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            zIndex: "-3",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "41.4%",
              borderBottom: "2px solid #efefef",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "100%",
                borderRight: "2px solid #efefef",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "25%",
                  borderBottom: "2px solid #efefef",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "50.5%",
                    height: "100%",
                  }}
                ></div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    borderLeft: "2px solid #efefef",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "100%",
                      height: "50%",
                      borderTop: "2px solid #efefef",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "50%",
                          borderBottom: "2px solid #efefef",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            height: "100%",
                            borderRight: "2px solid #efefef",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        height: "100%",
                        borderLeft: "2px solid #efefef",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <RevolutionaryArchetype isImage={true} className="bannerImage">
        {/* <div className="container">
       <div className="header">
         <div className="responsibly">a revolutionary</div>
         <div>archetype</div>
       </div>
      </div> */}
      </RevolutionaryArchetype>
    </div>
  );
}

const Revolutionary = () => {
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);

  useEffect(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".root",
        start: "top 8%",
        end: "bottom bottom",
        scrub: 5,
        // markers:true
      },
    });
    timeLine.to(".bannerImage", {
      opacity: 1,
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "90%",
      ease: "none",
      left: "10%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "70%",
      ease: "none",
      left: "30%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "50%",
      ease: "none",
      left: "50%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "90%",
      ease: "none",
      top: "10%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "70%",
      ease: "none",
      top: "30%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "50%",
      ease: "none",
      top: "50%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "45%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "35%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "45%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "35%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "25%",
      ease: "none",
    });

    timeLine.to(".bannerImage", {
      width: "26.25%",
      left: "58.75%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "17.5%",
      left: "67.5%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "18.75%",
      top: "56.25%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "12.5%",
      top: "62.5%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "13.125%",
    });
    timeLine.to(".bannerImage", {
      width: "8.75%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "9.375%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      height: "6.25%",
      ease: "none",
    });
    timeLine.to(".bannerImage", {
      width: "6.5625%",
      left: "69.6875%",
      ease: "none",
    });
    timeLine.to(
      ".bannerImage",
      {
        width: "4.375%",
        left: "71.875%",
        ease: "none",
      },
      "a"
    );
    timeLine.to(
      ".main1",
      {
        visibility: "hidden",
        ease: "none",
      },
      "a"
    );
  }, []);

  return (
    <>
      {isIphone ? (
        <>
          <BoxAnimation />
          {/* <BannerSection>
            <BannerWrapper>
              <IOSRevolutionaryArchetype>
                <div className="container">
                  <div className="header">
                    <div className="responsibly">a revolutionary </div>
                    <div className="highlight">archetype</div>
                  </div>
                </div>
              </IOSRevolutionaryArchetype>
            </BannerWrapper>
          </BannerSection> */}
          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="no-water-wasted">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>No- Water</div>
                        <div>Wasted</div>
                      </div>
                      <div className="mobile">No- Water Wasted</div>
                    </div>
                    <div className="description">
                      Our advanced technology ensures that every drop of water
                      used in our manufacturing process is recycled, minimizing
                      waste and preserving precious resources. We take great
                      pride in our environmentally conscious approach to
                      creating beautiful diamonds.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-polluting-energy">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>Non- polluting</div>
                        <div>energy</div>
                      </div>
                      <div className="mobile">Non- polluting energy</div>
                    </div>
                    <div className="description">
                      We are proud to use renewable energy resources to power
                      our manufacturing process, resulting in gems that use only
                      50% of the energy of mined diamonds.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="no-earth-uprooted">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>No earth</div>
                        <div>uprooted</div>
                      </div>
                      <div className="mobile">No earth uprooted</div>
                    </div>
                    <div className="description">
                      We are committed to responsible energy-efficient diamond
                      production that doesn't involve any uprooting, land
                      disturbance, or excavation that can cause irreversible
                      damage to the earth's surface.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-toxic-air">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>non- toxic</div>
                        <div>air</div>
                      </div>
                      <div className="mobile">non- toxic air</div>
                    </div>
                    <div className="description">
                      Our commitment to sustainability extends to the air we
                      breathe, which is why we use only clean energy sources in
                      our production process resulting in cleaner air for a
                      healthier planet.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-conflict">
                  <div className="container">
                    <div className="title">
                      <div className="web">Non- conflict</div>
                      <div className="mobile">Non- conflict</div>
                    </div>
                    <div className="description">
                      We are proud to offer 100% conflict-free diamonds that are
                      ethically grown in our state-of-the-art facilities and we
                      make responsible choices that prioritize the well-being of
                      life on our planet.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-destructive-production">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>non- destructive</div>
                        <div>Production</div>
                      </div>
                      <div className="mobile">
                        <div>non- destructive</div>
                        <div>Production</div>
                      </div>
                    </div>
                    <div className="description">
                      We are dedicated to preventing the use of child labor,
                      hazardous working conditions, or environmental degradation
                      in the production of our diamonds. You can be assured that
                      your purchase promotes moral principles and contributes to
                      a better future.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </BannerSection>
        </>
      ) : (
        <>
          <BoxAnimation />
        </>
      )}
      {!isIphone && (
        <>
          <WebBannerSection maxHeight="500px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="no-water-wasted">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>No- Water</div>
                        <div>Wasted</div>
                      </div>
                      <div className="mobile">No- Water Wasted</div>
                    </div>
                    <div className="description">
                      Our advanced technology ensures that every drop of water
                      used in our manufacturing process is recycled, minimizing
                      waste and preserving precious resources. We take great
                      pride in our environmentally conscious approach to
                      creating beautiful diamonds.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>

          <WebBannerSection maxHeight="600px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-polluting-energy">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>Non- polluting</div>
                        <div>energy</div>
                      </div>
                      <div className="mobile">Non- polluting energy</div>
                    </div>
                    <div className="description">
                      We are proud to use renewable energy resources to power
                      our manufacturing process, resulting in gems that use only
                      50% of the energy of mined diamonds.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>

          <WebBannerSection maxHeight="700px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="no-earth-uprooted">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>No earth</div>
                        <div>uprooted</div>
                      </div>
                      <div className="mobile">No earth uprooted</div>
                    </div>
                    <div className="description">
                      We are committed to responsible energy-efficient diamond
                      production that doesn't involve any uprooting, land
                      disturbance, or excavation that can cause irreversible
                      damage to the earth's surface.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>

          <WebBannerSection maxHeight="800px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-toxic-air">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>non- toxic</div>
                        <div>air</div>
                      </div>
                      <div className="mobile">non- toxic air</div>
                    </div>
                    <div className="description">
                      Our commitment to sustainability extends to the air we
                      breathe, which is why we use only clean energy sources in
                      our production process resulting in cleaner air for a
                      healthier planet.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>

          <WebBannerSection maxHeight="900px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-conflict">
                  <div className="container">
                    <div className="title">
                      <div className="web">Non- conflict</div>
                      <div className="mobile">Non- conflict</div>
                    </div>
                    <div className="description">
                      We are proud to offer 100% conflict-free diamonds that are
                      ethically grown in our state-of-the-art facilities and we
                      make responsible choices that prioritize the well-being of
                      life on our planet.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>

          <WebBannerSection maxHeight="1000px">
            <BannerWrapper>
              <IOSNoHarms>
                <div className="non-destructive-production">
                  <div className="container">
                    <div className="title">
                      <div className="web">
                        <div>non- destructive</div>
                        <div>Production</div>
                      </div>
                      <div className="mobile">
                        <div>non- destructive</div>
                        <div>Production</div>
                      </div>
                    </div>
                    <div className="description">
                      We are dedicated to preventing the use of child labor,
                      hazardous working conditions, or environmental degradation
                      in the production of our diamonds. You can be assured that
                      your purchase promotes moral principles and contributes to
                      a better future.
                    </div>
                  </div>
                </div>
              </IOSNoHarms>
            </BannerWrapper>
          </WebBannerSection>
        </>

        // <NoHarms>
        //   <div className="no-water-wasted">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">
        //           <div>No- Water</div>
        //           <div>Wasted</div>
        //         </div>
        //         <div className="mobile">No- Water Wasted</div>
        //       </div>
        //       <div className="description">
        //         Our advanced technology ensures that every drop of water used in
        //         our manufacturing process is recycled, minimizing waste and
        //         preserving precious resources. We take great pride in our
        //         environmentally conscious approach to creating beautiful
        //         diamonds.
        //       </div>
        //     </div>
        //   </div>

        //   <div className="non-polluting-energy">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">
        //           <div>Non- polluting</div>
        //           <div>energy</div>
        //         </div>
        //         <div className="mobile">Non- polluting energy</div>
        //       </div>
        //       <div className="description">
        //         We are proud to use renewable energy resources to power our
        //         manufacturing process, resulting in gems that use only 50% of
        //         the energy of mined diamonds.
        //       </div>
        //     </div>
        //   </div>

        //   <div className="no-earth-uprooted">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">
        //           <div>No- earth</div>
        //           <div>uprooted</div>
        //         </div>
        //         <div className="mobile">No- earth uprooted</div>
        //       </div>
        //       <div className="description">
        //         We are committed to responsible energy-efficient diamond
        //         production that doesn't involve any uprooting, land disturbance,
        //         or excavation that can cause irreversible damage to the earth's
        //         surface.
        //       </div>
        //     </div>
        //   </div>

        //   <div className="non-toxic-air">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">non- toxic air</div>
        //         <div className="mobile">non- toxic air</div>
        //       </div>
        //       <div className="description">
        //         Our commitment to sustainability extends to the air we breathe,
        //         which is why we use only clean energy sources in our production
        //         process resulting in cleaner air for a healthier planet.
        //       </div>
        //     </div>
        //   </div>

        //   <div className="non-conflict">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">Non- conflict</div>
        //         <div className="mobile">Non- conflict</div>
        //       </div>
        //       <div className="description">
        //         We are proud to offer 100% conflict-free diamonds that are
        //         ethically grown in our state-of-the-art facilities and we make
        //         responsible choices that prioritize the well-being of life on
        //         our planet.
        //       </div>
        //     </div>
        //   </div>

        //   <div className="non-destructive-production">
        //     <div className="container">
        //       <div className="title">
        //         <div className="web">
        //           <div>non- destructive</div>
        //           <div>Production</div>
        //         </div>
        //         <div className="mobile">
        //           <div>non- destructive</div>
        //           <div>Production</div>
        //         </div>
        //       </div>
        //       <div className="description">
        //         We are dedicated to preventing the use of child labor, hazardous
        //         working conditions, or environmental degradation in the
        //         production of our diamonds. You can be assured that your
        //         purchase promotes moral principles and contributes to a better
        //         future.
        //       </div>
        //     </div>
        //   </div>
        // </NoHarms>
      )}
      <Infrastructure>
        <div className="left">
          <Image
            src={AboutInfrastructure}
            width={1000}
            height={1000}
            alt="polished"
          />
        </div>
        <div className="right">
          <div>
            <div className="header">Infrastructure</div>
            <div className="title">
              The smart infrastructure where technology meets ethical luxury.
            </div>
            <div className="description">
              Diamonds for the modern era, grown in a lab with love for the
              planet and people.
            </div>
            <div className="description">
              Bhanderi produces top-notch lab-grown diamonds with cutting-edge
              infrastructure. For optimal effectiveness and precision, our
              state-of-the-art facilities employ the best technology and
              machinery.
            </div>
            <div className="description">
              We uphold strict quality and consistency requirements throughout
              the whole manufacturing cycle, from seed to final grading. Our
              elaborate and thought-through infrastructure is a testament to
              innovation and perfection.
            </div>
          </div>
        </div>
      </Infrastructure>

      <Benefits>
        <div className="left">
          <div>
            <div className="header">
              <h1>
                <div className="web">Unmatched Benefits</div>
                <div className="web">Of Lab Grown</div>
                <div className="web">Diamonds</div>
              </h1>
              <div className="mobile">
                Unmatched Benefits Of Lab Grown Diamonds
              </div>
            </div>
            <div className="title">
              Uncover Reasons to choose Lab Grown Diamonds:
            </div>
            <div className="points">
              <div>
                <ul>
                  <li>Manufacturing Time</li>
                  <li>Economical Price</li>
                  <li>Exceptional value proposition</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Traceable origin</li>
                  <li>Socially responsible</li>
                  <li>Smaller environmental impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Image
            src={Benefitsoflab}
            width={1000}
            height={1000}
            alt="benefitsOfLab"
          />
        </div>
      </Benefits>

      {/* <OurProcess>
        <div className="our-process">our Process</div>

        <Section1>
          <div className="left">
            <div>
              <div className="header">Step 1</div>
              <div className="title">Diamond Selection</div>
              <div className="description">
                One of our top priorities is to meticulously handpick flawless
                diamond seeds. Our experts pay utmost attention to selecting
                only the finest quality seeds and then carefully placing them on
                a metal disk, ensuring their optimal placement for the growth
                process.
              </div>
            </div>
          </div>
          <div className="right">
            <Image src={diamondSelection} alt="diamondSelection" />
          </div>
        </Section1>

        <Image src={line1} alt="line1" className="line1" />

        <Section2>
          <div className="left">
            <Image src={growthCycle} alt="growthCycle" />
          </div>
          <div className="right">
            <div>
              <div className="header">Step 2</div>
              <div className="title">Growth Cycle</div>
              <div className="description">
                The selected diamond seeds are placed in a growth chamber filled
                with carbon gas and heated to 900-1200°C, just like how natural
                diamonds are formed deep within the earth resulting in the
                growth of high-quality diamonds.
              </div>
            </div>
          </div>
        </Section2>

        <Image src={line2} alt="line2" className="line2" />

        <Section1>
          <div className="left">
            <div>
              <div className="header">Step 3</div>
              <div className="title">Diamond Formation</div>
              <div className="description">
                Over a period of 10 to 12 weeks, the seeds are exposed to a
                specific environment comprising of gases, pressure, and
                temperature, leading to the breakdown of carbon atoms and
                gradual accumulation of carbon in the seeds. This process
                simulates the natural formation of diamonds.
              </div>
            </div>
          </div>
          <div className="right">
            <Image src={diamondFormation} alt="diamondFormation" />
          </div>
        </Section1>

        <Image src={line1} alt="line1" className="line1" />

        <Section2>
          <div className="left">
            <Image src={polishing} alt="polishing" />
          </div>
          <div className="right">
            <div>
              <div className="header">Step 4</div>
              <div className="title">Polishing</div>
              <div className="description">
                Similar to mined diamonds, lab diamonds undergo a precise
                cutting and polishing process to bring out their inherent beauty
                and sparkle, using advanced technology and skilled
                craftsmanship.
              </div>
            </div>
          </div>
        </Section2>

        <Image src={line2} alt="line2" className="line2" />

        <Section1>
          <div className="left">
            <div>
              <div className="header">Step 5</div>
              <div className="title">Diamond Alchemy</div>
              <div className="description">
                Having completed the growth and polishing process, our lab
                diamonds are developed from mere "seeds" into priceless
                gemstones that rival the beauty of diamonds mined from the
                earth.
              </div>
            </div>
          </div>
          <div className="right">
            <Image src={diamondAlchemy} alt="diamondAlchemy" />
          </div>
        </Section1>
      </OurProcess> */}

      {/* <Certifications>
        <div className="container">
          <div className="left">
            <div className="header">Certifications</div>
            <Image
              src={certificationsLogo}
              alt="certificationsLogo"
              className="certificationsLogo-mobile"
            />
            <div className="description">
              At Bhanderi, no stone is left unchecked in terms of quality
              assurance. The certification ensures diamond's purity, origin, and
              market value. Our commitment to quality and sustainability is
              demonstrated by the rigorous examination and certification
              process.
            </div>
            <div className="description">
              We take pride in offering lab grown diamonds that are certified by
              renowned organizations from across the globe, assuring our
              customers that they are receiving only the best-certified diamonds
              only.
            </div>
            <div className="footer">Certificates - GIA, IGI, GCAL or HRD </div>
          </div>
          <div className="right">
            <Image src={certificationsLogo} alt="certificationsLogo" />
          </div>
        </div>
      </Certifications> */}
    </>
  );
};

export default Revolutionary;
