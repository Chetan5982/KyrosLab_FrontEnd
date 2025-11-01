import {
  CaratWeightBannerDesktop,
  CaratWeightBannerMobile,
  DaimondSizeEight,
  DaimondSizeFive,
  DaimondSizeFour,
  DaimondSizeOne,
  DaimondSizeSeven,
  DaimondSizeSix,
  DaimondSizeThree,
  DaimondSizeTwo,
} from "@/constants/images";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { CaratWeightSection, DaimondFeature, MainSection } from "./styled";
import Link from "next/link";

function DiamondCaratWeight() {
  const daimondFeatures = [
    {
      featureData: <h2>Understanding Lab Grown Diamond Carat Weight</h2>,
      featureDes: (
        <>
          <div className="space-y-5">
            <p>
              Diamond carat is a fundamental measurement unit used to quantify
              the weight of a diamond. 1 carat diamond is equivalent to 200
              milligrams or 0.2 grams, providing a standardized measure for
              comparing diamond weights across the industry. Carat weight is a
              crucial factor in determining a diamond's size, rarity, and value.
            </p>

            <p>
              The relationship between{" "}
              <Link
                href="/lab-grown-diamonds-blog/the-complete-guide-to-a-lab-grown-diamond-carat"
                className="text-[#024638] underline underline-offset-1 font-bold"
              >
                diamond carat size
              </Link>{" "}
              and rarity is significant. Generally, larger diamonds have higher
              carat weights and are considered rarer than smaller diamonds. This
              rarity factor contributes to the increased value of larger carat
              weight diamonds. As lab grown diamond carat weight increases, the
              rarity of diamonds escalates exponentially, making larger diamonds
              highly sought after and prized in the market.
            </p>

            <p>
              Diamond carat weight plays a crucial role in determining the
              overall appearance, value, and desirability of a diamond. While
              carat weight is significant, it's essential to consider other
              factors such as cut, color, and clarity to ensure a well-balanced
              and visually appealing diamond. By understanding the importance of
              diamond carat weight and its relationship to other quality
              factors, consumers can make informed decisions when selecting
              diamonds that align with their preferences and budget.
            </p>
          </div>
        </>
      ),
    },
    {
      featureData: (
        <h3>Are Diamond Carat and Diamond Size the Same Concept?</h3>
      ),
      featureDes: (
        <>
          <p>
            While diamond carat and size are closely related, they are not
            synonymous. Carat refers specifically to the weight of a diamond,
            whereas size encompasses various factors such as diameter, depth,
            and proportions. Two diamonds with the same carat weight may appear
            different in size depending on their cut and shape. Therefore, it's
            essential to consider both carat weight and size when selecting a
            diamond to ensure it meets your desired specifications.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>How Big is One Carat Diamond?</h3>,
      featureDes: (
        <div className="space-y-5">
          <p>
            The size & dimension of a 1 carat diamond may differ depending on
            its cut and shape. On average, a round brilliant-cut one carat
            diamond has a diameter of approximately 6.5 millimeters. However,
            it's important to note that other factors such as depth and
            proportions also influence the perceived size of the diamond.
            Diamonds with different shapes and cuts may appear larger or smaller
            than their actual carat weight suggests.
          </p>
          <p>
            A one carat diamond weighs approximately 200 milligrams or 0.2
            grams. This standardized measure ensures consistency in diamond
            weight across the industry, allowing consumers to compare diamonds
            accurately. Knowing the weight of a one carat diamond provides a
            baseline for understanding and evaluating the sizes and prices of
            other diamonds such as 2 Carat Diamonds.
          </p>
        </div>
      ),
    },
    {
      featureData:
        <h3>How Is Diamond Carat Measured & What Is Diamond Carat Size Chart?</h3>,
      featureDes: (
        <>
          <div className="space-y-5">
            <p>
              Diamond carat is measured using precision scales capable of
              accurately weighing gemstones to the nearest hundredth of a carat.
              Gemologists use these specialized scales to determine the exact
              carat weight of a diamond during the grading process. The precise
              measurement of carat weight ensures consistency and accuracy in
              evaluating diamond sizes and prices.
            </p>
            <p>
              A diamond carat size chart provides a visual reference for
              understanding the size and appearance of diamonds at different
              carat weights. This chart helps consumers visualize the relative
              sizes of diamonds and make informed decisions when purchasing
              diamonds based on their desired carat weight. By referring to a
              diamond carat chart, consumers can better understand how carat
              weight translates into diamond size and appearance, facilitating
              the selection process and ensuring they find the perfect diamond
              for their needs and preferences.
            </p>
          </div>
        </>
      ),
    },
    {
      featureData: <h3>How Does A Lab Grown Diamond Carat Weight Impacts Price?</h3>,
      featureDes: (
        <>
          <p>
            Carat weight significantly impacts the price of a diamond. Larger
            carat weight diamonds command higher Diamond Carat Price due to
            their rarity and increased demand. As carat weight increases, the
            price per carat also escalates, reflecting the higher value
            associated with larger diamonds. However, it's important to note
            that other factors such as cut, color, and clarity also influence
            the overall price of a diamond.
          </p>
        </>
      ),
    },
    {
      featureData: <h3>What do different carat weight diamonds look like?</h3>,
      featureDes: (
        <>
          <p>
            Different carat weight diamonds exhibit varying sizes and
            appearances. Smaller carat weight diamonds may appear dainty and
            delicate, while larger carat weight diamonds are more substantial
            and eye-catching. It's essential to consider the desired look and
            feel when selecting a diamond with a specific carat weight.
            Consulting with a reputable jeweler and viewing diamonds in person
            can provide a better understanding of how different carat weights
            translate into visual appearance and presence.
          </p>
        </>
      ),
    },
    {
      featureData: <h4>What Carat Weight Diamond Should You Buy?</h4>,
      featureDes: (
        <>
          <p>
            Selecting the appropriate carat weight for a diamond depends on
            various factors, including personal preference, budget, and desired
            appearance. While larger carat weight diamonds may be visually
            impressive, they also come with higher price tags. It's essential to
            strike a balance between carat weight, quality, and budget when
            choosing a diamond. Consulting with a reputable source can provide
            valuable guidance in selecting the perfect carat weight diamond
            along with all the{" "}
            <Link
              href="/4-cs-lab-grown-diamonds"
              className="text-[#024638] underline underline-offset-1 font-bold"
            >
              4cs of diamonds
            </Link>{" "}
            that meets your needs and preferences.
          </p>
        </>
      ),
    },
  ];
  const isTablet = useMediaQuery("(max-width:600px)");
  return (
    <>
      <MainSection>
        <div className="main-img">
          {isTablet ? (
            <img src={CaratWeightBannerMobile} alt="Carat Weight"/>
          ) : (
            <img src={CaratWeightBannerDesktop} alt="Carat Weight"/>
          )}
        </div>
        <p className="mainBannerHeading">
          The 4Cs <span className="highlight">Carat Weight</span>
        </p>
      </MainSection>

      <CaratWeightSection>
        <div className="container">
          <p className="caratWeightHeading">Diamond Carat Weight</p>
          <div className="maincarat grid grid-cols-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
            <div className="diamond-one">
              <img src={DaimondSizeOne} alt="0.25CT"/>
              <p>0.25CT</p>
            </div>
            <div className="diamond-two">
              <img src={DaimondSizeTwo} alt="0.50CT"/>
              <p>0.50CT</p>
            </div>
            <div className="diamond-three">
              <img src={DaimondSizeThree} alt="0.75CT"/>
              <p>0.75CT</p>
            </div>
            <div className="diamond-four">
              <img src={DaimondSizeFour} alt="1.00CT"/>
              <p>1.00CT</p>
            </div>
            <div className="diamond-five">
              <img src={DaimondSizeFive} alt="1.50CT"/>
              <p>1.50CT</p>
            </div>
            <div className="diamond-six">
              <img src={DaimondSizeSix} alt="2.00CT"/>
              <p>2.00CT</p>
            </div>
            <div className="diamond-seven">
              <img src={DaimondSizeSeven} alt="2.50CT"/>
              <p>2.50CT</p>
            </div>
            <div className="diamond-eight">
              <img src={DaimondSizeEight} alt="3.00CT"/>
              <p>3.00CT</p>
            </div>
          </div>
        </div>
      </CaratWeightSection>

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

export default DiamondCaratWeight;
