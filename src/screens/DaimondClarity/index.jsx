import {
  DaimndClarityBanner,
  DaimndClarityBannerMobile,
  DaimndClarityFlawless,
  DaimndClarityIncludedone,
  DaimndClarityIncludedtwo,
  DaimndClarityInternallyFlawless,
  DaimndClaritySlightlyIncludedone,
  DaimndClaritySlightlyIncludedtwo,
  DaimndClarityVerySlightlyIncluded,
  DaimndClarityVeryVerySlightlyIncluded,
  DaimndColorBanner,
  DaimndColorBannerMobile,
} from "@/constants/images";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { ClearitySection, DaimondFeature, MainSection } from "./styled";
import Link from "next/link";

function DaimondClarity() {
  const daimondFeatures = [
    {
      featureData: <h2>What is Lab Grown Diamond Clarity?</h2>,
      featureDes: (
        <div className="space-y-5">
          <p>
            Diamond clarity refers to the presence or absence of internal and
            external imperfections, known as inclusions and blemishes,
            respectively. These imperfections are formed during the diamond's
            natural growth process or can be introduced during the cutting and
            polishing stages. Clarity is one of the key factors that determine a
            diamond's overall beauty and value.
          </p>
          <p>
            Diamond clarity is categorized into diamond color grade based on the
            visibility and significance of inclusions and blemishes. The clarity
            scale ranges from Flawless (FL) to Included (I), with various grades
            in between, including Internally Flawless (IF), Very Very Slightly
            Included (VVS), Very Slightly Included (VS), and Slightly Included
            (SI). Each clarity grade represents a different level of clarity and
            impacts the diamond's appearance and price.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>Why Is Lab Grown Diamond Clarity Important?</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            Lab grown diamond clarity holds significant importance in
            determining the overall quality and value of a diamond. The clarity
            grade of a diamond refers to the presence or absence of internal and
            external imperfections, known as inclusions and blemishes. These
            imperfections can vary in size, type, and visibility, and they
            directly impact the diamond's appearance, brilliance, and ultimately
            its perceived value.
          </p>
          <p>
            One of the primary reasons why lab grown diamond clarity is crucial
            is its direct correlation with a diamond's beauty and sparkle.
            Diamonds with higher clarity grades, such as Flawless (FL) or
            Internally Flawless (IF), are exceptionally rare and coveted for
            their pristine appearance. These diamonds are free from any visible
            inclusions or blemishes, resulting in maximum transparency and light
            performance. As a result, they exhibit unparalleled brilliance,
            fire, and scintillation, captivating the eye with their mesmerizing
            sparkle.
          </p>
          <p>
            Moreover, lab grown diamond clarity significantly influences the
            diamond's value. Diamonds with higher clarity grades command higher
            prices in the market due to their rarity and superior quality.
            Conversely, diamonds with lower clarity grades may have visible
            inclusions or blemishes that detract from their beauty and value.
            Therefore, selecting a diamond with the highest and best diamond
            clarity grade within one's budget ensures not only a visually
            stunning gemstone but also a valuable investment piece.
          </p>
          <p>
            Additionally, lab grown diamond clarity plays a crucial role in
            determining the transparency and light performance of the diamond.
            Inclusions and blemishes can obstruct the passage of light through
            the diamond, diminishing its brilliance and sparkle. Diamonds with
            higher clarity grades allow light to pass through unhindered,
            maximizing their brilliance and optical properties. As a result,
            these diamonds exhibit exceptional transparency and radiance,
            captivating onlookers with their luminous beauty.
          </p>
        </div>
      ),
    },
    {
      featureData: (
        <h3>What is Diamond Clarity Chart & Diamond Clarity Scale?</h3>
      ),
      featureDes: (
        <p>
          The diamond clarity chart visually illustrates clarity grades and
          their corresponding levels of inclusions and blemishes. It helps
          consumers understand the differences between each clarity grade and
          make informed decisions when purchasing diamonds. The diamond clarity
          scale, as established by the International Gemological Institute
          (IGI), ranges from Flawless (FL) to Included (I). Each clarity grade
          represents a specific level of clarity based on the presence and
          visibility of inclusions and blemishes. The diamond clarity scale
          provides a standardized way to assess and communicate the clarity of
          diamonds, ensuring transparency and consistency in the diamond
          industry.
        </p>
      ),
    },
    {
      featureData: <h3>What to Look for in Lab Grown Diamond Clarity?</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            When evaluating diamond clarity, look for diamonds that are
            eye-clean, meaning they are free from visible inclusions and
            blemishes when viewed without magnification. Focus on clarity grades
            that offer the best balance between purity and value, considering
            factors such as the diamond's size, shape, and setting.
            Additionally, consider the diamond's fluorescence, which can affect
            its appearance under certain lighting conditions.
          </p>
          <p>
            When selecting diamond clarity, consider factors such as personal
            preference, budget, and desired appearance. Those seeking the
            highest level of clarity may opt for Flawless or Internally Flawless
            diamonds, which are free from inclusions and blemishes visible to
            the naked eye. However, diamonds with slightly lower clarity grades,
            such as VS or SI, offer excellent value while still appearing
            eye-clean to most observers
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>How Clarity Grades Are Determined?</h3>,
      featureDes: (
        <p>
          Clarity grades are determined by trained gemologists who examine the
          diamond under controlled lighting conditions using specialized
          equipment. The gemologist assesses the size, nature, location, and
          visibility of inclusions and blemishes to assign an appropriate
          clarity grade. This grading process ensures accuracy and consistency
          in evaluating diamond clarity.
        </p>
      ),
    },
    {
      featureData: <h3>How Does A Diamond Shape Affect Clarity?</h3>,
      featureDes: (
        <p>
          Diamond shape can affect clarity in several ways. Certain{" "}
          <Link
            href="/lab-grown-diamond-shapes"
            className="text-[#024638] underline underline-offset-1 font-bold"
          >
            lab grown diamond shapes
          </Link>
          , such as round brilliant and princess cuts, may hide inclusions more
          effectively due to their faceting patterns and light performance. In
          contrast, elongated shapes like emerald and marquise cuts may reveal
          inclusions more prominently. When selecting a diamond shape, consider
          how it may impact the visibility of inclusions and blemishes.
        </p>
      ),
    },
    {
      featureData: <h3>Diamond Inclusion Types</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            Diamond inclusions represent natural imperfections within a diamond
            that can significantly influence its clarity and overall appearance.
            These inclusions manifest in various forms, each with distinct
            characteristics and effects on the gem's beauty. One prevalent type
            is crystals, which are essentially mineral deposits trapped within
            the diamond during its formation.
          </p>
          <p>
            These crystalline structures vary in size, shape, and color, from
            minuscule specks to more conspicuous formations. While some crystals
            may be imperceptible to the naked eye, larger ones can impact the
            diamond's clarity grade noticeably. Another common inclusion type is
            feathers, small fractures or cracks within the diamond that
            resembles delicate feathers. Feathers can occur naturally during the
            diamond's growth or result from external forces like cutting and
            polishing. They can range from surface-reaching fractures to
            internal ones, potentially affecting both the diamond's clarity and
            structural integrity.
          </p>
          <p>
            Clouds represent clusters of tiny crystals or pinpoint inclusions
            that create a hazy or cloudy appearance within the diamond. While
            individual cloud inclusions may not be discernible without
            magnification, their collective presence can impact the gem's
            transparency and brilliance. Lastly, needles are elongated
            inclusions resembling thin needles, commonly found within diamonds.
            These elongated structures can vary in length and orientation,
            sometimes intersecting or crisscrossing within the gem.
          </p>
          <p>
            Although needles are typically less visible to the naked eye, their
            presence can still influence the diamond's clarity and overall
            aesthetic appeal. Understanding the types of diamond inclusions is
            crucial for accurately evaluating a diamond's clarity grade as part
            of the{" "}
            <Link
              href="/4-cs-lab-grown-diamonds"
              className="text-[#024638] underline underline-offset-1 font-bold"
            >
              4Cs of diamonds
            </Link>
            . By considering factors such as the size, location, and visibility
            of inclusions, gemologists can provide valuable insights to
            consumers, aiding them in selecting diamonds that align with their
            quality standards and aesthetic preferences.
          </p>
          <p>
            Understanding lab grown diamond clarity involves recognizing the
            significance of inclusions and blemishes and their impact on a
            diamond's beauty and value. By considering factors such as clarity
            grade, diamond shape, and personal preferences, consumers can select
            the perfect diamond that reflects their individual style and budget.
            With the guidance of reputable jewelers and an understanding of
            diamond clarity dynamics, finding the ideal lab grown diamond
            clarity becomes an enriching and rewarding experience.
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
            <img src={DaimndClarityBannerMobile} alt="Diamonds Clarity"/>
          ) : (
            <img src={DaimndClarityBanner} alt="Diamonds Clarity"/>
          )}
        </div>

        <p className="mainBannerHeading">
          A Guide To <span className="highlight">Diamonds Clarity</span>
        </p>
      </MainSection>

      <ClearitySection>
        <div className="container">
          <p className="clearity-heading">Diamond Clarity Charts</p>
          <div className="grid grid-cols-1 main-diamonds sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="group seconfirst">
              <div className="flawless">
                <img src={DaimndClarityFlawless} alt="Flawless"/>
                <p>Flawless</p>
              </div>
              <div className="internally-flawless">
                <img src={DaimndClarityInternallyFlawless} alt="Internally Flawless"/>
                <p>Internally Flawless</p>
              </div>
            </div>
            <div className="group daimond-groupone">
              <div className="very-very-slightly-included">
                <img
                  src={DaimndClarityVeryVerySlightlyIncluded}
                  width="100px"
                  alt="Very Very Slightly Included"
                />
                <p>Very Very Slightly Included</p>
              </div>
              <div className="very-slightly-included">
                <img src={DaimndClarityVerySlightlyIncluded} alt="Very Slightly Included"/>
                <p>Very Slightly Included</p>
              </div>
            </div>
            <div className="main-groupOne">
              <div className="group daimond-grouptwo">
                <div className="slightly-includedone">
                  <img src={DaimndClaritySlightlyIncludedone} alt="Slightly Included"/>
                </div>
                <div className="slightly-includedtwo">
                  <img src={DaimndClaritySlightlyIncludedtwo} alt="Slightly Included"/>
                </div>
              </div>
              <p>Slightly Included</p>
            </div>

            <div className="maingroupTwo">
              <div className="group daimond-groupthree">
                <div className="includedone">
                  <img src={DaimndClarityIncludedone} alt="Included"/>
                </div>
                <div className="includedtwo">
                  <img src={DaimndClarityIncludedtwo} alt="Included"/>
                </div>
              </div>
              <p>Included</p>
            </div>
          </div>
        </div>
      </ClearitySection>

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

export default DaimondClarity;
