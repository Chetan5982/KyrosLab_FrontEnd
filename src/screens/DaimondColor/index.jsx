import React from "react";
import {
  DaimondColorSection,
  DaimondColorTable,
  DaimondFeature,
  MainSection,
} from "./styled";
import {
  DaimndCloseToNotisable,
  DaimndColorBanner,
  DaimndColorBannerMobile,
  DaimndColorless,
  DaimndFullyNoticeableColor,
  DaimndNearColorless,
  DaimndNoticeableColor,
} from "@/constants/images";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

function DaimondColor() {
  const daimondFeatures = [
    {
      featureData: <h2>Understanding Lab Grown Diamond Color In Detail</h2>,
      featureDes: (
        <div className="space-y-5">
          <p>
            Diamond color is a key aspect of a diamond's appearance and value.
            It refers to the presence or absence of color within the diamond,
            with the most valuable diamonds being completely colorless. Grading
            of diamond color is based on a scale from D to Z, with D
            representing colorless diamonds and Z indicating diamonds with
            noticeable color. The color scale encompasses a range of subtle
            variations, from icy whites to warm yellows and even fancy colors
            like pink, blue, and green.
          </p>
          <p>
            Diamonds come in a spectrum of colors, each with its unique
            characteristics and appeal. Colorless diamonds (D-F) are prized for
            their purity and brilliance, appearing transparent and allowing
            maximum light to pass through. Near-colorless diamonds (G-J) exhibit
            minimal traces of color and offer excellent value for those seeking
            a balance between quality and affordability. Moving down the lab
            grown diamond color scale, diamonds in the faint yellow to light
            yellow range (K-M) may display a subtle tint of color, while
            diamonds in the N-Z range exhibit more noticeable color.
          </p>
          <p>
            Beyond the traditional color scale, diamonds can also occur in fancy
            colors, including shades of pink, blue, yellow, green, and more.
            These fancy colored diamonds are exceptionally rare and highly
            sought after for their unique beauty and rarity.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>Color Grading Scale</h3>,
      featureDes: (
        <p>
          The{" "}
          <Link
            href="/lab-grown-diamonds-blog/diamond-color-scale-guide-choose-your-perfect-sparkle"
            className="text-[#024638] underline underline-offset-1 font-bold"
          >
            diamond color grading scale
          </Link>{" "}
          used by gemological laboratories such as the IGI plays a crucial role
          in assessing the quality and value of diamonds. The scale ranges from
          D to Z, with D representing the highest level of colorlessness and Z
          indicating a diamond with noticeable color. Each letter grade
          corresponds to a specific range of color, with expert gemologists
          carefully evaluating the diamond under controlled lighting conditions
          to determine its precise color grade.
        </p>
      ),
    },
    {
      featureData: <h3>Which Diamond Color is Best?</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            The choice of the best diamond color depends largely on personal
            preference, budget, and the desired look. Colorless diamonds (D-F)
            are favored for their pure and timeless appeal, making them an
            excellent choice for classic and elegant jewelry pieces.
          </p>
          <p>
            Near-colorless diamonds (G-J) offer exceptional value while still
            appearing white to the naked eye, making them a popular choice for
            those seeking high-quality diamonds at a more affordable price
            point.
          </p>
          <p>
            For fancy colored diamonds, the "best" color is subjective and
            depends on individual tastes and preferences. Some may prefer the
            intense hues of fancy pink or blue diamonds, while others may
            gravitate towards the subtle beauty of fancy yellow or champagne
            diamonds. Ultimately, the best diamond color is the one that
            resonates with the wearer and complements their unique style and
            personality.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>Diamond Color Grading Process</h3>,
      featureDes: (
        <>
          <p>
            The diamond color grading process is a meticulous and standardized
            procedure conducted by trained gemologists using specialized
            equipment. During the grading process, the diamond is assessed for
            its hue, tone, and saturation under controlled lighting conditions.
            The gemologist compares the diamond to a set of master stones
            representing each color grade on the scale, ensuring accuracy and
            consistency in grading.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>Do Diamonds Have Color?</h3>,
      featureDes: (
        <>
          <p>
            Yes, all diamonds have some degree of color, although it may not
            always be visible to the naked eye. The presence or absence of color
            in a diamond is influenced by various factors, including the
            presence of chemical impurities and structural defects within the
            diamond crystal. In rare cases, diamonds may exhibit intense and
            vivid colors, known as fancy colored diamonds, which are highly
            prized for their rarity and beauty.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>How To Choose the Best Diamond Color?</h3>,
      featureDes: (
        <>
          <p>
            When selecting the best diamond color, it's essential to consider
            factors such as personal style, skin tone,{" "}
            <Link
              href="/4-cs-lab-grown-diamonds"
              className="text-[#024638] underline underline-offset-1 font-bold"
            >
              4cs of diamonds
            </Link>
            , and the intended setting for the jewelry piece. Those with a
            preference for classic and timeless designs may opt for colorless or
            near-colorless diamonds, while those seeking a pop of color may
            gravitate towards fancy colored diamonds. Consulting with a
            reputable jeweler can also provide valuable guidance and assistance
            in selecting the perfect diamond color that suits your preferences
            and budget.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>Which Diamond Color is Best?</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            The choice of the best diamond color depends largely on personal
            preference, budget, and the desired look. Colorless diamonds (D-F)
            are favored for their pure and timeless appeal, making them an
            excellent choice for classic and elegant jewelry pieces.
          </p>
          <p>
            Near-colorless diamonds (G-J) offer exceptional value while still
            appearing white to the naked eye, making them a popular choice for
            those seeking high-quality diamonds at a more affordable price
            point.
          </p>
          <p>
            For fancy colored diamonds, the "best" color is subjective and
            depends on individual tastes and preferences. Some may prefer the
            intense hues of fancy pink or blue diamonds, while others may
            gravitate towards the subtle beauty of fancy yellow or champagne
            diamonds. Ultimately, the best diamond color is the one that
            resonates with the wearer and complements their unique style and
            personality.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>Diamond Color Grading Process</h3>,
      featureDes: (
        <>
          <p>
            The diamond color grading process is a meticulous and standardized
            procedure conducted by trained gemologists using specialized
            equipment. During the grading process, the diamond is assessed for
            its hue, tone, and saturation under controlled lighting conditions.
            The gemologist compares the diamond to a set of master stones
            representing each color grade on the scale, ensuring accuracy and
            consistency in grading.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>Do Diamonds Have Color?</h3>,
      featureDes: (
        <>
          <p>
            Yes, all diamonds have some degree of color, although it may not
            always be visible to the naked eye. The presence or absence of color
            in a diamond is influenced by various factors, including the
            presence of chemical impurities and structural defects within the
            diamond crystal. In rare cases, diamonds may exhibit intense and
            vivid colors, known as fancy colored diamonds, which are highly
            prized for their rarity and beauty.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>How To Choose the Best Diamond Color?</h3>,
      featureDes: (
        <>
          <p>
            When selecting the best diamond color, it's essential to consider
            factors such as personal style, skin tone, 4cs of diamonds, and the
            intended setting for the jewelry piece. Those with a preference for
            classic and timeless designs may opt for colorless or near-colorless
            diamonds, while those seeking a pop of color may gravitate towards
            fancy colored diamonds. Consulting with a reputable jeweler can also
            provide valuable guidance and assistance in selecting the perfect
            diamond color that suits your preferences and budget.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>Why Does the IGI Diamond Color Scale Start at 'D'?</h3>,
      featureDes: (
        <>
          <p>
            The IGI (International Gemological Institute) diamond color chart,
            begins at 'D' to denote completely colorless diamonds. Starting the
            scale at 'D' emphasizes the highest level of purity and quality,
            setting a standard for excellence in diamond color grading. By using
            a standardized and universally recognized scale, consumers can make
            informed decisions when purchasing diamonds and ensure consistency
            and accuracy in grading.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>Diamond Color Advice: Settings & Shapes</h3>,
      featureDes: (
        <>
          <p>
            The choice of diamond color should complement the setting and shape
            of the jewelry piece to create a harmonious and visually appealing
            design. For example, colorless diamonds (D-F) pair beautifully with
            white gold or platinum settings, enhancing their brilliance and
            purity. Near-colorless diamonds (G-J) are versatile and can
            complement a wide range of settings and styles, from classic
            solitaire engagement rings to intricate halo designs. When selecting
            the diamond shape, consider how the color will interact with the
            facets and proportions of the cut. Certain shapes, such as round
            brilliant and princess, may showcase color more prominently, while
            others, such as emerald and asscher cuts, may minimize color
            visibility.
          </p>
        </>
      ),
    },
    {
      featureData: <h4>Exploring Diamond Color Dynamics</h4>,
      featureDes: (
        <div className="space-y-5">
          <p>
            Diamond color dynamics encompass the interplay between a diamond's
            color, cut, and clarity, which collectively contribute to its
            overall beauty and value. The lab grown diamond color can affect its
            appearance and perceived quality, with colorless diamonds appearing
            brighter and more brilliant compared to those with noticeable color.
            When choosing a diamond, it's essential to consider how its color
            interacts with other factors such as cut and clarity to achieve the
            desired aesthetic. For example, a well-cut diamond with excellent
            clarity may offset the presence of color, resulting in a stunning
            and visually appealing gemstone. By understanding the dynamics of
            diamond color, consumers can make informed decisions and select
            diamonds that meet their specific preferences and requirements.
          </p>
          <p>
            Understanding{" "}
            <Link
              href="/lab-grown-diamonds"
              className="text-[#024638] underline underline-offset-1 font-bold"
            >
              lab grown diamonds
            </Link>{" "}
            and their color involves appreciating the subtle nuances and
            variations that contribute to a diamond's beauty and value. Whether
            opting for colorless, near-colorless, or fancy colored diamonds,
            each hue offers its unique charm and allure. By considering factors
            such as personal preference, budget, and desired aesthetic,
            consumers can select the perfect diamond color that reflects their
            individual style and personality. With the guidance of reputable
            jewelers and an understanding of diamond color dynamics, finding the
            ideal lab grown diamond color becomes an exciting and rewarding
            experience.
          </p>
        </div>
      ),
    },
  ];
  const isMobile = useMediaQuery("(max-width:425px)");
  return (
    <>
      <MainSection>
        <div className="main-img">
          {isMobile ? (
            <img src={DaimndColorBannerMobile} alt="Diamonds Color"/>
          ) : (
            <img src={DaimndColorBanner} alt="Diamonds Color"/>
          )}
        </div>

        <p className="mainBannerHeading">
          A Guide To <span className="highlight">Diamonds Color</span>
        </p>
      </MainSection>
      <DaimondColorSection>
        {isMobile ? (
          <div className="container">
            <p className="FourC-Heading">Diamond Color Types</p>
            <div className="grid grid-cols-2 md:grid-cols-5 abc">
              <div className="daimond-main dashed-img">
                <img src={DaimndColorless} className="daimond-color-img" alt="Colorless"/>
                <p className="daimond-heading">Colorless</p>
              </div>
              <div className="daimond-main dashed-img">
                <img src={DaimndNearColorless} className="daimond-color-img" alt="NearColorless"/>
                <p className="daimond-heading">Near Colorless</p>
              </div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 align-sec">
              <div className="daimond-main">
                <img
                  src={DaimndCloseToNotisable}
                  className="daimond-color-img diffrant-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading"></p>
              </div>
              <div className="daimond-main">
                <img
                  src={DaimndNoticeableColor}
                  className="daimond-color-img diffrant-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading">Noticeable Color</p>
              </div>
              <div className="daimond-main">
                <img
                  src={DaimndFullyNoticeableColor}
                  className="daimond-color-img diffrant-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading"></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <p className="FourC-Heading">Diamond Color Types</p>
            <div className="grid grid-cols-5 max-[320px]:grid-cols-1 md:grid-cols-5 abc vartical-section">
              <div className="daimond-main">
                <img src={DaimndColorless} className="daimond-color-img" alt="Colorless"/>
                <p className="daimond-heading">Colorless</p>
              </div>
              <div className="daimond-main">
                <img src={DaimndNearColorless} className="daimond-color-img" alt="NearColorless"/>
                <p className="daimond-heading">Near Colorless</p>
              </div>
              <div className="daimond-main">
                <img
                  src={DaimndCloseToNotisable}
                  className="daimond-color-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading"></p>
              </div>
              <div className="daimond-main">
                <img
                  src={DaimndNoticeableColor}
                  className="daimond-color-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading">Noticeable Color</p>
              </div>
              <div className="daimond-main">
                <img
                  src={DaimndFullyNoticeableColor}
                  className="daimond-color-img"
                  alt="Noticeable Color"
                />
                <p className="daimond-heading"></p>
              </div>
            </div>
          </div>
        )}
      </DaimondColorSection>

      <DaimondColorTable>
        <div className="container">
          <div className="main-table">
            <div className="flex justify-between table_row">
              <p>Diamond Color Grades</p>
              <p>Color Visibility</p>
            </div>
            <div className="flex justify-between table_row">
              <p>D</p>
              <p>Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>E</p>
              <p>Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>F</p>
              <p>Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>G</p>
              <p>Near Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>H</p>
              <p>Near Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>I</p>
              <p>Near Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>J</p>
              <p>Near Colorless</p>
            </div>
            <div className="flex justify-between table_row">
              <p>K</p>
              <p>Faint Yellow</p>
            </div>
            <div className="flex justify-between table_row">
              <p>L</p>
              <p>Faint Yellow</p>
            </div>
          </div>
        </div>
      </DaimondColorTable>

      <DaimondFeature>
        <div className="container">
          {daimondFeatures.map((item, index) => (
            <div key={index} className="mainfeature">
              <div className="featureTitle">{item.featureData}</div>
              <div className="featureDes">{item.featureDes}</div>
            </div>
          ))}
        </div>
      </DaimondFeature>
    </>
  );
}

export default DaimondColor;
