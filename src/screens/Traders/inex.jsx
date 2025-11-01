"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Welcome,
  Card,
  Cards,
  Contact,
  Banner,
  BannerSection,
  BannerWrapper,
  IOSBanner,
} from "./styled";
// import exportCountries from "../../asset/images/ExportCountries.png";
// import inventorySize from "../../asset/images/InventorySize.png";
// import inventoryStones from "../../asset/images/InventoryStones.png";
// import tradersContactnowBanner from "../../asset/images/TradersContactnowBanner.png";
// import tradersContactnowBannermobile from "../../asset/images/TradersContactnowBannermobile.png";
import { isIOS } from "react-device-detect";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import {
  ExportCountries,
  InventorySize,
  InventoryStones,
  TradersContactnowBanner,
  TradersContactnowBannermobile,
} from "@/constants/images";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { contactUrl } from "@/constants/constants";

const cards = [
  {
    img: InventorySize,
    header: "Inventory Size:",
    title: "A perfect size for everyone, with our vast inventory.",
    description:
      "At Bhanderi, we understand that as a trader, having a diverse inventory is essential. That's why we offer a vast selection of lab grown diamonds to meet your specific needs. Our inventory is carefully curated to ensure that we have diamonds available in various sizes, shapes, and colors, catering to a wide range of budgets. Whether you are looking for a single stone or a bulk order, we have the perfect diamond to suit your requirements.",
  },
  {
    img: InventoryStones,
    header: "Inventory Stones:",
    title: "Infinite possibilities, in our treasure trove of diamonds.",
    description:
      "Step into our treasure trove of diamonds and explore infinite possibilities. With over 7000+ stones in our inventory, you will find an unparalleled variety of high-quality gems waiting to be discovered. From classic round brilliant cuts to fancy shapes, our diamonds are meticulously created using advanced technology to replicate the beauty and brilliance of nature. Experience the exceptional quality and craftsmanship of our lab diamonds that will leave a lasting impression on your customers.",
  },
  {
    img: ExportCountries,
    header: "Export Countries:",
    title: "The epitome of quality and ethics, exported globally.",
    description:
      "At Bhanderi, we take immense pride in the quality and ethics of our lab grown diamonds. Our commitment to excellence is recognized worldwide as we export our diamonds to over many countries. From the cutting-edge laboratories where our diamonds are grown to the strict quality control measures, we adhere to, our diamonds are branded with trust, integrity, and sustainability. When you choose us, you are selecting diamonds that not only meet the highest standards but also contribute to a more responsible and environmentally conscious future.",
  },
];

const Traders = () => {
  const router = useRouter();
  const [isIphone, setIsIphone] = useState(false);
  const isMobile = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);

  return (
    <>
    <div className="mt-20"></div>
      {/* {isIphone ? (
        <BannerSection>
          <BannerWrapper>
            <IOSBanner>
              <div className="container">
                <div className="header">
                  <div>
                    Discover A <span className="highlight">New Era</span> Of
                  </div>
                  <div>
                    <span className="highlight">Trading</span> Brilliance With
                    Bhanderi
                  </div>
                  <div>Lab Grown Diamonds</div>
                </div>
              </div>
            </IOSBanner>
          </BannerWrapper>
        </BannerSection>
      ) : (
        //   <Banner>
        //   <div className="container">
        //     <div className="header">
        //       <div>Discover A New Era Of</div>
        //       <div>Trading Brilliance With Bhanderi</div>
        //       <div>Lab Grown Diamonds</div>
        //     </div>
        //   </div>
        // </Banner>
        <BannerSection>
          <BannerWrapper>
            <Banner>
              <div className="container">
                <div className="header">
                  <div>Discover A New Era Of</div>
                  <div>Trading Brilliance With Bhanderi</div>
                  <div>Lab Grown Diamonds</div>
                </div>
              </div>
            </Banner>
          </BannerWrapper>
        </BannerSection>
      )}

      <Welcome>
        <div className="container">
          <h2 className="title">
            Welcome to Bhanderi Lab Grown Diamonds - Your Trusted Source for
            High-Quality Lab Grown Diamonds.
          </h2>
          <div className="description">
            We are your premier destination for top-notch lab diamonds that
            embody both beauty and responsibility. At Bhanderi, we understand
            the importance of offering your customers exceptional products that
            align with their values. That's why we provide an extensive
            collection of lab grown diamonds, meticulously crafted to meet the
            highest industry standards. By choosing our diamonds, you are
            offering your customers a sustainable and eco-friendly alternative
            without compromising on quality. Moreover, for <a href="https://blgdlab.com/lab-grown-diamond-jewelers" target="_blank" className="text-[#024638] font-semibold">lab grown diamond jewelers</a> we offer an exquisite selection of lab grown diamonds to stunning, ethical jewelry pieces.
          </div>

          <h3 className="title">
            Discover a World of Diamonds for Every Budget!
          </h3>
          <Cards>
            {cards.map((card) => (
              <Card key={card.title}>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={1000}
                  height={1000}
                />
                <div className="content">
                  <div className="card-header">{card.header}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-description">{card.description}</div>
                </div>
              </Card>
            ))}
          </Cards>
        </div>
      </Welcome>

      <Contact>
        <Image
          width={1000}
          height={1000}
          className="img"
          src={
            isMobile ? TradersContactnowBannermobile : TradersContactnowBanner
          }
          alt="tradersContactnowBanner"
        />
        <div className="description">
          <p>
            Partner with us, and you will gain access to a vast inventory of lab
            grown diamonds in various shapes, sizes, and colors. Our team of
            experts is committed to assisting you in finding the perfect
            diamonds that meet your specific requirements. With competitive
            pricing and a reliable supply chain, Bhanderi Lab Grown Diamonds is
            your trusted partner for sustainable diamond trading.
          </p>
          <button>
            <Link href={contactUrl}> Contact Now </Link>
          </button>
        </div>
      </Contact> */}
      {/* <Footer style={`margin-top:0px !important`}/> */}
    </>
  );
};

export default Traders;
