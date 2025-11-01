import React from "react";
import {
  CutSection,
  DaimondFeature,
  DaimondTypes,
  MainSection,
} from "./styled";
import {
  DaimndCutBanner,
  DaimondAsscher,
  DaimondCushion,
  DaimondCutHero,
  DaimondCutImg,
  DaimondEmerald,
  DaimondHeart,
  DaimondMarquise,
  DaimondOval,
  DaimondPear,
  DaimondPrincess,
  DaimondRadiant,
  DaimondRound,
} from "@/constants/images";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

function DaimondCut() {
  const isTablet = useMediaQuery("(max-width:600px)");
  const daimondFeatures = [
    {
      featureData: <h2>Understanding Lab Grown Diamond Cuts In Detail</h2>,
      featureDes: (
        <div className="space-y-5">
          <p>
            In the world of types of{" "}
            <Link
              href="/lab-grown-diamonds-blog/lab-grown-diamonds-cut-vs-clarity-what-matters-most"
              className="text-[#024638] underline underline-offset-1 font-bold"
            >
              diamond cuts
            </Link>
            , there exists a rich diversity catering to varied tastes and
            preferences. The quintessential round cut remains a timeless
            favorite, renowned for its unparalleled brilliance and symmetry. For
            those seeking a contemporary edge, the princess cut with its sharp
            angles and modern allure offers a striking alternative. Meanwhile,
            the emerald cut exudes vintage sophistication with its long facets
            and elegant lines. Other popular choices include the romantic heart
            cut, the regal marquise cut, and the graceful pear cut, each
            boasting its unique charm and appeal.
          </p>
          <p>
            To assess the quality of lab cut diamonds, a meticulous grading
            scale is employed. The 4Cs of diamonds – cut, color, clarity, and
            carat weight – serve as the cornerstone of this evaluation. In
            particular, the cut grade scrutinizes factors such as symmetry,
            proportion, and polish to ascertain the overall brilliance and fire
            of the diamond. Diamonds that score high on the grading scale are
            prized for their exceptional craftsmanship and aesthetic allure.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>Diamond Cut Styles</h3>,
      featureDes: (
        <>
          <p>
            Diamond cut styles encompass a spectrum ranging from traditional to
            avant-garde, offering something for every discerning taste. The
            brilliant cut, characterized by its numerous facets and unparalleled
            sparkle, epitomizes timeless elegance. In contrast, the step cut
            radiates an understated sophistication with its clean lines and
            minimalist appeal. Meanwhile, the mixed cut combines elements of
            both, striking a harmonious balance between brilliance and subtlety.
            With such a diverse array of styles to choose from, individuals are
            empowered to express their unique personality and style through
            their diamond selection.
          </p>
        </>
      ),
    },
    {
      featureData: (
        <h3>Why Are Diamonds Cut & How Diamond Cut Quality is Determined?</h3>
      ),
      featureDes: (
        <div className="space-y-5">
          <p>
            Diamonds undergo the intricate process of cutting to unleash their
            full potential and appeal. A well-cut diamond possesses the ability
            to capture and reflect light with unparalleled brilliance,
            captivating onlookers with its mesmerizing sparkle. By carefully
            shaping and polishing the rough diamond, craftsmen enhance its
            natural beauty, resulting in a dazzling gemstone that is truly a
            sight to behold.
          </p>
          <p>
            The quality of a lab cut diamonds are meticulously assessed based on
            several key criteria. Proportion, symmetry, and polish are among the
            primary factors scrutinized to determine the overall cut grade of
            the diamond. Diamonds that exhibit optimal proportions, precise
            symmetry, and exceptional polish are bestowed with higher cut
            grades, signifying superior craftsmanship and visual appeal.
          </p>
        </div>
      ),
    },
    {
      featureData: <h3>How Are Diamonds Cut?</h3>,
      featureDes: (
        <p>
          The process of cutting diamonds is a precise and intricate art form
          that requires skilled craftsmanship and state-of-the-art technology.
          Initially, rough diamonds are carefully assessed to determine the
          optimal cut and shape that will maximize their beauty and value. Using
          specialized tools and techniques, master craftsmen meticulously shape
          and polish the rough diamond, gradually showing its inherent
          brilliance and fire. The result is a breathtaking gemstone that
          embodies the epitome of elegance and sophistication.
        </p>
      ),
    },
    {
      featureData: <h3>Diamond Cut vs Diamond Shape</h3>,
      featureDes: (
        <p>
          It's essential to distinguish between diamond cut and diamond shape,
          as they serve distinct purposes in the domain of gemology. While
          diamond cut refers to the craftsmanship involved in shaping a rough
          diamond into a polished gemstone, diamond shape pertains to the
          physical outline of the diamond when viewed from above. This
          differentiation is crucial in understanding the unique characteristics
          and aesthetic qualities of each diamond specimen.
        </p>
      ),
    },
    {
      featureData: <h3>How To Choose Best Diamond Cuts For You</h3>,
      featureDes: (
        <p>
          Selecting the perfect diamond cut involves a thoughtful consideration
          of personal preferences, lifestyle, and aesthetic sensibilities.
          Whether drawn to the classic charm of the round cut or the
          contemporary chic of the princess cut, individuals are encouraged to
          explore a diverse range of options before making their final decision.
          Consulting with a trusted source can also provide valuable insights
          and guidance in selecting the ideal diamond cut that complements one's
          unique style and personality.
        </p>
      ),
    },
    {
      featureData: <h3>What is The Most Expensive Diamond Cut?</h3>,
      featureDes: (
        <p>
          The cost of a{" "}
          <Link
            href="/lab-grown-diamonds"
            className="text-[#024638] underline underline-offset-1 font-bold"
          >
            lab grown diamond
          </Link>{" "}
          cut can vary significantly depending on factors such as rarity,
          demand, and craftsmanship. While there is no definitive answer to
          which diamond cut is the most expensive, certain different diamond
          cuts such as the emerald cut and asscher cut are renowned for their
          exquisite beauty and timeless appeal, often commanding premium prices
          in the market.
        </p>
      ),
    },
    {
      featureData: <h4>Which Diamond Cut Holds its Value</h4>,
      featureDes: (
        <p>
          Diamonds that boast exceptional cut quality tend to hold their value
          well over time. Classic lab grown diamond cuts such as the round
          brilliant and princess cut are perennial favorites cherished for their
          enduring beauty and investment potential. By investing in diamonds
          with superior grading diamond cut, individuals can ensure that their
          precious gemstones retain their value and appeal for generations to
          come.
        </p>
      ),
    },
  ];
  return (
    <>
      <MainSection>
        <div className="main-img">
          {isTablet ? (
            <img src={DaimondCutHero} alt="Diamonds Cut"/>
          ) : (
            <img src={DaimndCutBanner} width="100%" alt="Diamonds Cut"/>
          )}
        </div>
        <p className="mainBannerHeading">
          A Guide To <span className="highlight">Diamonds Cut</span>
        </p>
      </MainSection>

      <CutSection>
        <div className="container">
          <div className="grid grid-cols-2 min-[320px]:grid-cols-1 min-[768px]:grid-cols-2 items-center">
            <div>
              <img src={DaimondCutImg} alt="The Cut Of A Diamond"/>
            </div>
            <div className="cut-content">
              <h1 className="daimondCutHeading">The Cut Of A Diamond</h1>
              <p className="daimondCutpare">
                Diamond cut refers to the arrangement of a diamond's facets and
                the quality of its proportions. It's a critical factor in
                determining a diamond's brilliance, fire, and overall visual
                appeal.
              </p>
            </div>
          </div>
        </div>
      </CutSection>
      <DaimondTypes>
        <div className="container">
          <p className="daimondTypeHeading">Diamond Cut Types</p>
          <div className="row grid grid-cols-2 min-[320px]:grid-cols-1 min-[768px]:grid-cols-2">
            <div className="grid grid-cols-5">
              <div className="round daimond_shap">
                <img src={DaimondRound} alt="DaimondRound"/>
                <p>Round</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondOval} alt="DaimondOval"/>
                <p>Oval</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondCushion} alt="DaimondCushion"/>
                <p>Cushion</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondPear} alt="DaimondPear"/>
                <p>Pear</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondPrincess} alt="DaimondPrincess"/>
                <p>Princess</p>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="oval daimond_shap">
                <img src={DaimondEmerald} alt="DaimondEmerald"/>
                <p>Emerald</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondMarquise} alt="DaimondMarquise"/>
                <p>Marquise</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondAsscher} alt="DaimondAsscher"/>
                <p>Asscher</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondRadiant} alt="DaimondRadiant"/>
                <p>Radiant</p>
              </div>
              <div className="oval daimond_shap">
                <img src={DaimondHeart} alt="DaimondHeart"/>
                <p>Heart</p>
              </div>
            </div>
          </div>
        </div>
      </DaimondTypes>
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

export default DaimondCut;
