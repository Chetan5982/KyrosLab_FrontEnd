import React, { useState } from "react";
import {
  ContainerWrapper,
  DiamondCaratWeight,
  DiamondClarity,
  DiamondColor,
  DiamondCut,
  Faqsection,
  LastContain,
  MainSection,
  Question,
} from "./styled";
import {
  Box,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";
import {
  FourDiamondCaratWeight,
  FourDiamondCaratWeightMobile,
  FourDiamondClarity,
  FourDiamondClarityMobile,
  FourDiamondColor,
  FourDiamondColorMobile,
  FourDiamondCut,
  FourDiamondCutMobile,
  FourCsm,
  the4csofdiamondsMobile,
} from "@/constants/images";

const faqs = [
  {
    id: 1,
    question: "What is the significance of the 4Cs of diamonds?",
    answer:
      "The 4Cs – Cut, Clarity, Color, and Carat weight – are crucial factors used to evaluate and describe the quality and value of a diamond. They help consumers understand a diamond's unique characteristics and make informed purchasing decisions.",
  },
  {
    id: 2,
    question: "How do the 4Cs influence the price of a diamond?",
    answer:
      "The 4Cs directly impact a diamond's value. Generally, diamonds with higher grades in Cut, Clarity, Color, and Carat weight command higher prices due to their rarity and superior quality.",
  },
  {
    id: 3,
    question:
      "Can a diamond with lower grades in one C compensate with higher grades in another?",
    answer:
      "Yes, diamonds with lower grades in one of the 4Cs can compensate with higher grades in another. For example, a diamond with a slightly lower color grade may appear more brilliant if it has an excellent cut.",
  },
  {
    id: 4,
    question: "What are some common misconceptions about the 4Cs?",
    answer:
      "A frequent misperception is that a diamond's carat weight is the most important factor in determining its value. In reality, all 4Cs play crucial roles, and the overall beauty and worth of a diamond depend on a balanced consideration of these factors.",
  },
  {
    id: 5,
    question: "How can I use the 4Cs to choose the right diamond for me?",
    answer:
      "Consider your preferences and priorities. If you prioritize brilliance, focus on Cut; for a clear and transparent diamond, look for higher Clarity grades; for a colorless appearance, opt for higher Color grades; and for a larger diamond, prioritize Carat weight. Balancing these factors ensures you find the diamond that best suits your desires and budget.",
  },
];
function FourCs() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState();
  return (
    <>
      <MainSection>
        <div className="main-img">
          {isTablet ? (
            <img src={the4csofdiamondsMobile} alt="The 4C’s OF Diamonds"/>
          ) : (
            <img
              src={FourCsm}
              width="100%"
              alt="The 4C’s OF Diamonds"
            />
          )}
        </div>
        <p className="mainBannerHeading">
          The 4C’s OF <span className="highlight">Diamonds</span>
        </p>
      </MainSection>

      <DiamondCut>
        <div className="main-section-title">
          <div className="section-title">
            <span>Diamond Cut</span>
          </div>
        </div>
        <div className="container-fluid">
          {isMobile ? (
            <img src={FourDiamondCutMobile} alt="DiamondCut"/>
          ) : (
            <img src={FourDiamondCut} width="100%" alt="DiamondCut"/>
          )}
          {/* <img src={FourDiamondCut} /> */}
        </div>
        <div className="container">
          <div className="section-description">
            <p>
              The cut of a diamond refers to the precision with which it has
              been shaped and faceted by skilled artisans. It directly
              influences the diamond's brilliance, fire, and overall visual
              shine, as it determines how effectively light is reflected and
              dispersed within the stone.
            </p>
            <Link
              className="section-btn"
              href="/lab-grown-diamonds-cut"
            >
              Read More
            </Link>
          </div>
        </div>
      </DiamondCut>

      <DiamondColor>
        <div className="main-section-title">
          <div className="section-title">
            <span>Diamond Color</span>
          </div>
        </div>
        <div className="container-fluid">
          {isMobile ? (
            <img src={FourDiamondColorMobile} alt="DiamondColor"/>
          ) : (
            <img src={FourDiamondColor} alt="DiamondColor"/>
          )}
          {/* <img src={FourDiamondColor} /> */}
        </div>
        <div className="container">
          <div className="section-description">
            <p>
              Color grading assesses how much color is present in a diamond,
              with the most valuable ones being either colorless or showing only
              slight hints of yellow or brown. This evaluation is crucial as it
              directly impacts the diamond's rarity by affecting how much it
              sparkles and its overall visual appeal.
            </p>
            <Link
              href="/lab-grown-diamonds-color"
              className="section-btn"
            >
              Read More
            </Link>
          </div>
        </div>
      </DiamondColor>

      <DiamondClarity>
        <div className="main-section-title">
          <div className="section-title">
            <span>Diamond Clarity</span>
          </div>
        </div>
        <div className="container-fluid">
          {isMobile ? (
            <img src={FourDiamondClarityMobile} alt="DiamondClarity"/>
          ) : (
            <img src={FourDiamondClarity} alt="DiamondClarity"/>
          )}
          {/* <img src={FourDiamondClarity} /> */}
        </div>
        <div className="container">
          <div className="section-description">
            <p>
              Clarity in a diamond refers to how clear it is from any internal
              flaws (called inclusions) or external imperfections (known as
              blemishes). Higher clarity means better light transmission and
              reflection, making the diamond more visually appealing.
            </p>
            <Link
              className="section-btn"
              href="/lab-grown-diamonds-clarity"
            >
              Read More
            </Link>
          </div>
        </div>
      </DiamondClarity>

      <DiamondCaratWeight>
        <div className="main-section-title">
          <div className="section-title">
            <span>Diamond Carat Weight</span>
          </div>
        </div>
        <div className="container-fluid">
          {isTablet ? (
            <img src={FourDiamondCaratWeightMobile} alt="DiamondCarat"/>
          ) : (
            <img src={FourDiamondCaratWeight} alt="DiamondCarat"/>
          )}
          {/* <img src={FourDiamondCaratWeight} /> */}
        </div>
        <div className="container">
          <div className="section-description">
            <p>
              It is simply the measure of how much a diamond weighs, with one
              carat equaling 200 milligrams. This metric is a primary
              consideration when assessing a diamond's physical size and is
              often a significant factor in determining its value.
            </p>
            <Link
              href="/lab-grown-diamonds-carat"
              className="section-btn"
            >
              Read More
            </Link>
          </div>
        </div>
      </DiamondCaratWeight>

      <LastContain>
        <div className="container">
          <div className="section_bg">
            <h2 className="mb-[30px] section_bg_title">
              Why The 4Cs Of Diamonds Matter In The Diamond Industry?
            </h2>
            <div className="inner_contain space-y-3">
              <p>
                In the competitive landscape of lab grown diamonds, the
                necessity for a standardized grading system like the 4Cs – Cut,
                Clarity, Color, and Carat weight – cannot be overstated. As a
                leading{" "}
                <Link
                  href="/"
                  target="_blank"
                  className="font-bold text-[#024638]"
                >
                  {" "}
                  lab grown diamond manufacturer
                </Link>
                , Bhanderi Lab Grown Diamonds recognizes the importance of these
                factors in ensuring quality, consistency, and customer
                satisfaction.
              </p>
              <p>
                The 4Cs serve as a universal language within the lab grown
                diamond industry, providing a structured framework for
                evaluating and communicating the unique characteristics of each
                diamond. This standardized approach not only facilitates
                transparency and trust but also enables manufacturers like us to
                differentiate our products based on their merits.
              </p>
              <p>
                Cut, Clarity, Color, and Carat weight are not merely descriptors
                but essential parameters that influence the overall beauty,
                value, and marketability of lab grown diamonds. Bhanderi
                underlines its commitment to providing industry-leading diamonds
                by upholding stringent quality standards and highlighting the
                importance of the 4Cs in our manufacturing process.{" "}
              </p>
              <p>
                In a rapidly evolving market where discerning customers seek
                authenticity and excellence, the 4Cs serve as our guiding
                principles, guiding us in our pursuit of perfection and setting
                the benchmark for quality in the lab-grown diamond industry.
                Trust Bhanderi Lab Grown Diamonds, your trusted partner for
                exceptional{" "}
                <Link
                  href="/lab-grown-diamonds"
                  target="_blank"
                  className="font-bold text-[#024638]"
                >
                  lab grown diamonds India{" "}
                </Link>{" "}
                created to perfection.
              </p>
            </div>
          </div>
        </div>
      </LastContain>

      <Faqsection>
        <div className="container">
          <div className="firsttitle">
            <h3 className="innerfirsttitle">Frequently Asked Questions</h3>
            {/* <p className="innerfirstdes">
              Explore answers to frequently asked questions about lab grown
              diamonds, covering their creation process and quality. We are here
              to offer the information you need for an informed decision.
            </p> */}
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
        </div>
      </Faqsection>
    </>
  );
}

export default FourCs;
