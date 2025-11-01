import Head from "next/head";
import {
  DaimondShapeHeroSection,
  LastSection,
  SeoSection,
  ShapesSection,
} from "./styled";
import Script from "next/script";
import { useMediaQuery } from "@mui/material";
import {
  AsscherShape,
  CushionShape,
  EmeraldShape,
  HeartShape,
  MarquiseShape,
  OvalShape,
  PearShape,
  PrincessShape,
  RadiantShape,
  daimondRound,
  daimondShapeHero,
  daimondShapeMobile,
  daimondShapeRound,
  daimondShapeRoundG,
  daimondTry,
} from "@/constants/images";
import Link from "next/link";

function DiamondShapes() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <DaimondShapeHeroSection>
        <div className="main-img">
          {isMobile ? (
            <img src={daimondShapeMobile} alt="Shapes Of A Diamond"/>
          ) : (
            <img src={daimondShapeHero} alt="Shapes Of A Diamond"/>
          )}
          <h1 className="mainBannerHeading">
            The Ultimate Guide To{" "}
            <span className="highlight">Shapes Of A Diamond</span>
          </h1>
        </div>
      </DaimondShapeHeroSection>

      <ShapesSection>
        <div className="shapes_title">
          <h2 className="innerTitle">Types Of Lab Grown Diamond Shapes</h2>
          <div className="container">
            <div className="mainRound">
              <div className="shapImg">
                <img src={daimondRound} alt="Round Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Round Shape</h4>
                  <p className="description">
                    The round diamond is a staple in the jewelry industry,
                    beloved for its timeless appeal and exceptional brilliance.
                    Renowned for its symmetrical shape and exceptional sparkle,
                    it's the go-to choice for clients seeking a classic and
                    aesthetic look that never goes out of style.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={OvalShape} alt="Oval Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Oval Shape</h4>
                  <p className="description">
                    Offering a modern twist on traditional elegance, the oval
                    diamond is a versatile option that appeals to a wide range
                    of tastes. Its elongated silhouette and impressive
                    brilliance make it a popular choice for people looking to
                    make a statement with a touch of contemporary flair.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={RadiantShape} alt="Radiant Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Radiant Shape</h4>
                  <p className="description">
                    With its faceted pavilion and trimmed corners, the radiant
                    diamond combines the beauty of the round cut with the
                    sophistication of the emerald cut. This design is a popular
                    option for people looking for a dazzling yet modern look
                    because it gives outstanding glitter and fire.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={EmeraldShape} alt="Emerald Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Emerald Shape</h4>
                  <p className="description">
                    The emerald diamond is like a rectangle with clean lines and
                    step-like cuts. It's all about clarity and elegance rather
                    than lots of sparkle. People who like a sleek, sophisticated
                    look often go for emerald-shaped diamonds.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={PearShape} alt="Pear Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Pear Shape</h4>
                  <p className="description">
                    The pear-shaped diamond resembles a teardrop, featuring a
                    rounded end and a pointed tip. It combines the elegance of a
                    round diamond with the elongated silhouette of a marquise,
                    offering versatility in wearing direction and a romantic,
                    eye-catching appeal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={CushionShape} alt="Cushion Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Cushion Shape</h4>
                  <p className="description">
                    The cushion diamond, also known as a pillow-cut diamond, is
                    characterized by its rounded corners and larger facets. They
                    offer a vintage charm and softness, reminiscent of old-world
                    glamour making them a popular choice for vintage-inspired
                    jewelry designs.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={PrincessShape} alt="Princess Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Princess Shape</h4>
                  <p className="description">
                    The princess diamond is a square-shaped gem with pointed
                    corners, known for its modern and geometric appearance. It
                    has exceptional brilliance and a contemporary flair, making
                    it a favorite among those seeking a bold and eye-catching
                    statement piece.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={AsscherShape} alt="Asscher Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Asscher Shape</h4>
                  <p className="description">
                    The asscher diamond features a unique step-cut design with
                    trimmed corners, reminiscent of the Art Deco era. It offers
                    a distinctive blend of vintage glamour and architectural
                    elegance, showcasing clarity and sophistication in its
                    faceted pattern.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={MarquiseShape} alt="Marquise Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Marquise Shape</h4>
                  <p className="description">
                    The marquise diamond is like an elongated oval with pointed
                    ends. It creates the illusion of larger size and slender
                    fingers, offering a regal and romantic look. Marquise-shaped
                    diamonds are perfect for those who want a graceful and
                    timeless style.
                  </p>
                </div>
              </div>
            </div>

            <div className="mainRound">
              <div className="shapImg">
                <img src={HeartShape} alt="Heart Shape"/>
              </div>
              <div className="shapeG">
                <div className="contentShape">
                  <h4 className="title">Heart Shape</h4>
                  <p className="description">
                    The heart-shaped diamond is a symbol of love and romance,
                    featuring a distinctive silhouette with a pointed tip and
                    rounded curves. It holds sentimental value and is often
                    chosen for engagement rings and special occasions as a
                    meaningful expression of affection and devotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ShapesSection>

      <SeoSection>
        <div className="container">
          <div className="mainseo space-y-3">
            <h3 className="seotitle">Understanding Lab Grown Diamond Shapes</h3>
            <p className="seodes">
              Diamond Shape refers to the physical form or outline of a diamond
              when viewed from above. There are various types of diamond shapes{" "}
              available in the market, each with its unique characteristics and
              appeal. These shapes include round, oval, radiant, emerald, pear,
              cushion, princess, asscher, marquise, and heart-shaped diamonds.
            </p>
            <p className="seodes">
              When it comes to determining the best lab grown diamond shapes, it
              often boils down to personal preference and style. However, the
              round shape is widely considered the most classic and versatile
              choice due to its optimal brilliance and timeless appeal. Among
              the most popular diamond shapes, the round shape consistently
              ranks at the top due to its classic appeal and excellent light
              performance. However, other shapes like princess and oval are also
              highly sought after for their contemporary beauty and versatility.
            </p>
            <h3 className="seotitle">
              Factors Influencing Choice Of Lab Grown Diamond Shapes
            </h3>
            <p className="seodes">
              4Cs of diamonds, including Cut, Color, Clarity, and Carat Weight,
              play a crucial role in determining the ideal diamond shape for an
              individual. When choosing the right diamond shape, factors such as
              personal style, finger shape, and the setting in which the diamond
              will be placed should be considered. It's also crucial to take
              into account the{" "}
              <Link
                href="/4-cs-lab-grown-diamonds"
                className="text-[#024638] underline decoration-1 font-bold"
              >
                {" "}
                4Cs of Diamonds
              </Link>{" "}
              to ensure you select a diamond that aligns with your preferences
              and budget.
            </p>
            <p className="seodes">
              Moreover it’s important to distinguish between diamond shape and
              diamond cut. While diamond shape refers to the outline of the
              stone, diamond cut refers to the quality of the diamond's facets,
              proportions, and overall craftsmanship, which directly impact its
              brilliance and sparkle.
            </p>
            <h3 className="seotitle">
              Ideal Clarity, Sparkle & Size for Lab Grown Diamond Shapes
            </h3>
            <p className="seodes">
              In terms of clarity, the ideal clarity for diamond shapes can vary
              depending on the specific shape and cut. Generally, diamonds with
              higher clarity grades, such as IF (Internally Flawless) or VVS
              (Very Very Slightly Included), are preferred as they exhibit fewer
              visible imperfections, enhancing their overall beauty and value.
            </p>
            <p className="seodes">
              While round diamonds are known for their brilliance, certain{" "}
              different shapes of diamonds, such as pear and marquise, can
              appear larger than their actual carat weight due to their
              elongated shapes, making them popular choices for those seeking a
              larger-looking diamond without breaking the bank. Round diamonds
              tend to sparkle the most due to their symmetrical shape and ideal
              proportions, which maximize light reflection and refraction.
              Additionally,{" "}
              <Link
                href="/cvd-diamond-manufacturers"
                className="text-[#024638] underline decoration-1 font-bold"
              >
                CVD diamonds
              </Link>{" "}
              with excellent cut grades across various shapes also exhibit
              exceptional sparkle and brilliance.
            </p>
          </div>
        </div>
      </SeoSection>

      <LastSection>
        <div className="mainSection">
          <div className="container">
            <p className="Heading">
              Your Search for Perfect Lab Grown Diamond Ends Here,
            </p>
            <p className="lastDes">
              Diamonds that are Sustainable, Conflict-free and Green by Bhanderi
            </p>
            <Link href="/lab-grown-diamonds">
            <button className="lastBtn font-bold">Browse Our Lab Grown Diamonds</button>
            </Link>
          </div>
        </div>
      </LastSection>
    </>
  );
}

export default DiamondShapes;
