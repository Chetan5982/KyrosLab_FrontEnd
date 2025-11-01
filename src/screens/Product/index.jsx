"use client";
import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Banner,
  LabToLuxury,
  LabGrownDiamonds,
  IIADiamonds,
  BannerSection,
  BannerWrapper,
  IOSBanner,
  IOSLabToLuxury,
  Unfasten,
} from "./styled";
// import iiaDiamonds from "../../asset/images/iiaDiamonds.png";
// import polishedLab from "../../asset/images/polishedLab.png";
// import roughLab from "../../asset/images/roughLab.png";
// import black from "../../asset/images/black.png";
// import mobileblack from "../../asset/images/mobileblack.png";
// import arrow from "../../asset/images/arrow.png";
import { isIOS } from "react-device-detect";
import { useEffect } from "react";
import { useState } from "react";
import {
  ProductPolisedLab,
  ProductRoughLab,
  ProductTypeTwo,
  Productarrow,
  Productblack,
  ProductblackMobile,
} from "@/constants/images";

const Product = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isIphone, setIsIphone] = useState(false);

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);
  return (
    <>
      {isIphone ? (
        <>
          <BannerSection>
            <BannerWrapper>
              <IOSBanner>
                <div className="container">
                  <div className="header header1">
                    <div style={{ paddingTop: "50px" }}>
                      From raw to refined
                    </div>
                  </div>
                  <div className="header header2">
                    <div>brilliantly bold to subtly sublime</div>
                  </div>
                </div>
              </IOSBanner>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSLabToLuxury>
                {/* <Image
                  className="black"
                  src={isMobile ? ProductblackMobile : Productblack}
                  alt="black"
                /> */}
                <div className="container">
                  <div className="content">
                    <h1 className="header">
                      <Image
                        src={Productarrow}
                        width={1000}
                        height={1000}
                        className="arrow"
                        alt="arrow"
                      />
                      From <span className="highlight">Lab</span> to{" "}
                      <span className="highlight">Luxury</span> Explore The
                      Fascinating World of CVD Diamonds
                    </h1>
                    <div className="description">
                      Welcome to a revolutionary alternative to mined diamonds -
                      lab grown diamonds produced through the Chemical Vapor
                      Deposition process. These diamonds are an ethical and
                      sustainable substitute for natural diamonds, with
                      identical properties.
                    </div>
                    <div className="description">
                      We specialize in creating CVD diamonds that meet the
                      highest industry standards. We use state-of-the-art
                      technology to create diamonds that are free of impurities,
                      have excellent color and clarity, and are available in a
                      range of sizes, colors, and shapes.
                    </div>
                  </div>
                </div>
              </IOSLabToLuxury>
            </BannerWrapper>
          </BannerSection>
        </>
      ) : (
        <>
          {/* <Banner>
            <div className="container">
              <div className="header header1">
                <div>From raw to refined</div>
              </div>
              <div className="header header2">
                <div>brilliantly bold to subtly sublime</div>
              </div>
            </div>
          </Banner>

          <LabToLuxury>
            <Image
              className="black"
              src={isMobile ? mobileblack : black}
              alt="black"
            />
            <div className="container">
              <div className="content">
                <div className="header">
                  <Image src={arrow} className="arrow" alt="arrow" />
                  From <span className="highlight">Lab</span> to{" "}
                  <span className="highlight">Luxury</span> Explore The
                  Fascinating World of CVD Diamonds
                </div>
                <div className="description">
                  Welcome to a revolutionary alternative to mined diamonds - lab
                  grown diamonds produced through the Chemical Vapor Deposition
                  process. These diamonds are an ethical and sustainable
                  substitute for natural diamonds, with identical properties.
                </div>
                <div className="description">
                  We specialize in creating CVD diamonds that meet the highest
                  industry standards. We use state-of-the-art technology to
                  create diamonds that are free of impurities, have excellent
                  color and clarity, and are available in a range of sizes,
                  colors, and shapes.
                </div>
              </div>
            </div>
          </LabToLuxury> */}

          <BannerSection>
            <BannerWrapper>
              <Banner>
                <div className="container">
                  <div className="header header1">
                    <div>From raw to refined</div>
                  </div>
                  <div className="header header2">
                    <div>brilliantly bold to subtly sublime</div>
                  </div>
                </div>
              </Banner>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <LabToLuxury>
                {/* <Image
              className="black"
              src={isMobile ? ProductblackMobile : Productblack}
              alt="black"
              width={1000}
              height={1000}
            /> */}
                <div className="container">
                  <div className="content">
                    <h1 className="header">
                      <Image
                        src={Productarrow}
                        width={1000}
                        height={1000}
                        className="arrow"
                        alt="arrow"
                      />
                      From <span className="highlight">Lab</span> to{" "}
                      <span className="highlight">Luxury</span> Explore The
                      Fascinating World of CVD Diamonds
                    </h1>
                    <div className="description">
                      Welcome to a revolutionary alternative to mined diamonds -
                      lab grown diamonds produced through the Chemical Vapor
                      Deposition process. These diamonds are an ethical and
                      sustainable substitute for natural diamonds, with
                      identical properties.
                    </div>
                    <div className="description">
                      We specialize in creating CVD diamonds that meet the
                      highest industry standards. We use state-of-the-art
                      technology to create diamonds that are free of impurities,
                      have excellent color and clarity, and are available in a
                      range of sizes, colors, and shapes.
                    </div>
                  </div>
                </div>
              </LabToLuxury>
            </BannerWrapper>
          </BannerSection>
        </>
      )}

      <LabGrownDiamonds>
        <div className="left">
          <div>
            <div className="header">Rough Lab Grown Diamonds</div>
            <div className="title">
              Rough, yet Refined: Diamonds that Sparkle with Intensity
            </div>
            <div className="description">
              Rough lab grown diamonds fuse nature and science to create an
              ethical and eco-friendly masterpiece. Crafted with advanced
              technology, each diamond is unique and guilt-free.
            </div>
            <div className="description">
              By choosing rough diamonds, you not only showcase your
              individuality with a one-of-a-kind gemstone but also contribute to
              a sustainable and responsible future for the planet.
            </div>
          </div>
        </div>
        <div className="right">
          <Image src={ProductRoughLab} width={1000} height={1000} alt="rough" />
        </div>
      </LabGrownDiamonds>

      <LabGrownDiamonds>
        <div className="right">
          <Image
            src={ProductPolisedLab}
            width={1000}
            height={1000}
            alt="polished"
          />
        </div>
        <div className="left section3-right">
          <div>
            <div className="header">Polished Lab Grown Diamonds</div>
            <div className="title">
              Crafted by Science, Polished by Art: Diamonds With Exceptional
              Brilliance
            </div>
            <div className="description">
              Polished diamonds are the epitome of modern luxury with a perfect
              blend of technology and beauty, crafted to perfection by our
              master craftsmen.
            </div>
            <div className="description">
              When you choose polished diamonds, you're not just indulging in
              the ultimate luxury; you're also making a conscious choice for an
              ethical future for the planet.
            </div>
          </div>
        </div>
      </LabGrownDiamonds>

      <IIADiamonds>
        <div className="left">
          <div>
            <div className="header">Type IIa Diamonds</div>
            <div className="description">
              Type IIa diamonds are renowned for their exceptional beauty,
              brilliance, and rarity. In fact, they represent less than 2% of
              all diamonds mined or created. These diamonds are completely free
              of nitrogen impurities, making them the most chemically pure
              diamonds in existence.
            </div>
            <div className="description">
              At Bhanderi, we have harnessed the power of advanced scientific
              techniques to create one of the rarest and most sought-after gems
              in the world - the Type IIa diamonds. Our skilled artisans
              carefully craft each diamond to perfection, ensuring that each one
              is a masterpiece that is truly one of a kind.
            </div>
            <div className="footer">
              Visit us today to experience the unparalleled beauty of Type IIa
              diamonds!
            </div>
          </div>
        </div>
        <div className="right">
          <Image src={ProductTypeTwo} width={1000} height={1000} alt="iia" />
        </div>
      </IIADiamonds>
      <Unfasten>
        <div className="container">
          <div className="innercontain">
            <div className="first-pere">
              <h2 className="main-title">
              Unfasten The Future Of Ethical Luxury With Bhanderi Lab Grown Diamonds
              </h2>
              <p className="inner-p">
              Welcome to Bhanderi Lab Grown Diamonds, your trusted source for exceptional lab grown diamonds in USA, where brilliance meets conscience. Our dedication to sustainability and innovation has prompted us to focus on producing and selling Type IIa CVD lab diamonds. With a reputation for perfection, we provide lab grown rough and polished diamonds to meet the various demands of the B2B market.
              </p>
              <p className="inner-p">
              By providing a moral and sustainable alternative to conventionally mined diamonds, lab diamonds have revolutionized the diamond industry. The type IIa lab diamond that we specialize in is known for its excellent purity and brilliance, and it represents a step forward in innovation. The Chemical Vapor Deposition (CVD) technique is used to make our lab created diamonds, ensuring that each gem satisfies the highest quality standards of ethics and quality. 
              </p>
            </div>
            <div className="second-pere">
              <h3 className="main-title">
              The Future Of Diamond Creation: CVD Lab Grown Diamonds
              </h3>
              <p className="inner-p">
              The chemical vapor deposition (CVD) is not just a process, it’s a revolution in diamond creation. The process has just revolutionized the method of making diamonds. Our CVD lab diamonds are grown layer by layer, replicating the natural diamond formation process while leaving behind the environmental concerns of traditional mining. These lab made diamonds are evidence of our dedication to a more environmentally friendly future. At Bhanderi, you will find not just diamonds but hope, innovation, and a brighter tomorrow.
              </p>
              <p className="inner-p">
              Introducing the cornerstone of our collection, the Type IIa Diamonds, our most prized assets. Type IIa diamonds, also known as "diamonds of the gods," are examples of how well-designed nature is. These lab diamonds have a stellar reputation for rarity and clarity, and they have raised the bar for brilliance. At Bhanderi, we have committed ourselves to developing and creating the finest <a href="https://blgdlab.com/lab-grown-diamonds-blog/bhanderi-lab-grown-diamonds-type-iia-excellence" className="inner_Link">Type IIa lab diamonds</a>, each of which facets radiates with a radiant grace that is a true marvel of contemporary science and ethics. Our dedication to perfection ensures that every lab grown diamond type IIa we produce is of utmost quality.
              </p>
            </div>
            <div className="third-pere">
              <h3 className="main-title">
              Unearth The Beauty Within: Our Rough Lab Grown Diamonds
              </h3>
              <p className="inner-p">
              For artists and enthusiasts, our selection of unpolished lab grown diamonds is a gold mine. Each rough diamond that is grown using CVD technology goes through a careful selection process. Because we are aware that perfection begins in the raw, our rough diamonds serve as the cornerstone of your aspirations. Whether you are a jeweler seeking inspiration or a manufacturer ready to transform these gems, our rough diamonds are your raw canvas for brilliance.
              </p>
            </div>
            <div className="fourth-pere">
              <h3 className="main-title">
              Crafted By Artisans, Worn By You: Our Polished Lab Grown Diamonds
              </h3>
              <p className="inner-p">
              Our flawless polished lab diamonds are more than just stones; they are the product of a labor of love. At Bhanderi, skilled craftspeople turn rough diamonds into stunning gems. Every polished diamond tells a tale of artistry, elegance, and your particular vision. Our polished diamonds are endowed with a touch of humanity that adds warmth and character to every facet, whether it's a bright solitaire, an exquisite engagement ring, or the centerpiece of a bespoke jewelry design. Ready to explore our exquisite lab-grown diamonds? <a href="https://blgdlab.com/book-appointment" target="_blank" className="inner_Link">Book appointment</a> for further inquiries and to experience the brilliance firsthand.
              </p>
            </div>
            <div className="fourth-pere">
              <h3 className="main-title">
              Bringing your diamond dreams to life – The Bhanderi Way
              </h3>
              <p className="inner-p">
              Bhanderi is more than just a supplier in the field of lab grown diamonds; we are your collaborators in realizing your aspirations. As you explore the brilliance of Type IIa lab diamonds, you are embracing not only the pinnacle of purity but also a more promising, sustainable future. 
              </p>
              <p className="inner-p">
              Whether you work as a jeweler, gemologist, or manufacturer, our raw and polished lab diamonds exemplify luxurious living with a conscience. When you choose us, you are making a commitment to ethics, sustainability, and remarkable beauty in addition to your choice of diamonds.
              </p>
              <p className="inner-p">
              With us, experience the appeal of <a href="https://blgdlab.com/revolutionary-lab-grown-diamond" className="inner_Link">Best Lab Made Diamonds</a> and the unmatched radiance of Type IIa lab diamonds, where every feature is a tribute to the flawless fusion of nature's perfection and human innovation.
              </p>
            </div>
          </div>
        </div>
      </Unfasten>
    </>
  );
};

export default Product;
