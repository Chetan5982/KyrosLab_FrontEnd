"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Banner,
  Welcome,
  Card,
  Cards,
  Contact,
  BannerSection,
  BannerWrapper,
  IOSBanner,
} from "./styled";
// import costEffective from "../../asset/images/CostEffective.png";
// import lifetimeExchange from "../../asset/images/LifetimeExchange.png";
// import paymentTerms from "../../asset/images/PaymentTerms.png";
// import customerSupport from "../../asset/images/CustomerSupport.png";
// import worldwideDelivery from "../../asset/images/WorldwideDelivery.png";
// import unmatchedQuality from "../../asset/images/UnmatchedQuality.png";
// import jewelersContactnowBanner from "../../asset/images/JewelersContactnowBanner.png";
import { useEffect } from "react";
import { isIOS } from "react-device-detect";
import {
  JewelersContactnowBanner,
  JewelersCostEffective,
  JewelersCustomerSupport,
  JewelersUnmatchedQuality,
  JewelersWorldwideDelivery,
} from "@/constants/images";
import Link from "next/link";
import { contactUrl } from "@/constants/constants";

const cards = [
  {
    img: JewelersCostEffective,
    header: "Cost-effective Pricing:",
    title: "Luxurious Diamonds Within Reach",
    description:
      "Indulge in Magnificence without Compromising on Quality or Price. At Bhanderi, we believe that every jeweler deserves access to exquisite diamonds without breaking the bank. Our cost-effective pricing ensures that you can offer your customers the allure of lab grown diamonds while enjoying excellent value. Experience the opulence and brilliance of our diamonds, knowing that our pricing empowers you to create stunning jewelry pieces without compromising on quality.",
  },
  // {
  //   img: lifetimeExchange,
  //   title: "Lifetime Exchange - Brilliance and Sustainability That Endures",
  //   description:
  //     "Invest in Diamonds Backed by a Lifetime Policy. When you choose us, you are investing in a lifetime of brilliance and sustainability. Our diamonds are meticulously sculpted, capturing the essence of everlasting elegance. We stand behind the quality of our stones with a lifetime exchange policy, ensuring that you and your customers can cherish the brilliance of our diamonds for generations to come.",
  // },
  // {
  //   img: paymentTerms,
  //   title: "Payment Terms - Shop Smarter with Net 60",
  //   description:
  //     "Hassle-Free Shopping Experience with Flexible Payment Options. At Bhanderi, we understand that convenience matters. That's why we offer smart payment solutions designed to streamline your jewelry purchasing experience. With our net 60 payment terms, you can shop with ease, knowing that your payment process aligns with our commitment to quality and customer satisfaction.",
  // },
  {
    img: JewelersWorldwideDelivery,
    header: "Worldwide Delivery:",
    title: "Timely Service, Global Brilliance",
    description:
      "Shine Brighter with Faster Global Delivery. At Bhanderi, we understand the importance of timely delivery without compromising quality or customer service. With our worldwide delivery, you can trust that your orders will arrive promptly, allowing you to fulfill your customers' desires with efficiency and excellence. Experience the radiance of Bhanderi Diamonds, with the assurance that our commitment to quality extends to every aspect of our service.",
  },
  {
    img: JewelersUnmatchedQuality,
    header: "Unmatched Quality:",
    title: "the Brilliance of Exceptional Craftsmanship",
    description:
      "Immerse yourself in the world of Diamonds and discover the unparalleled quality that sets us apart. Our diamonds are meticulously crafted with precision and expertise, showcasing the brilliance and beauty that only true craftsmanship can achieve. Each stone undergoes rigorous quality checks to ensure it meets the highest standards, guaranteeing that you and your customers will experience the utmost satisfaction and delight.",
  },
  {
    img: JewelersCustomerSupport,
    header: "Customer Support:",
    title: "Guided by Knowledge, Available Around the Clock",
    description:
      "Expert Assistance is Just a Call Away, 24/7. At Bhanderi, we take pride in providing exceptional customer support. Our knowledgeable team is available around the clock, ready to assist you with any inquiries, information, or guidance you may need. From selecting the perfect diamonds to addressing any concerns, we are here to ensure your journey with us is seamless and satisfying.",
  },
];

const Jewelers = () => {
  const router = useRouter();
  const [isIphone, setIsIphone] = useState(false);

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
                <h1 className="header">
                  <div>
                    Discover <span className="highlight">the Radiance</span> of
                  </div>
                  <div>Bhanderi Lab Grown Diamonds</div>
                  <div>
                    for <span className="highlight">Jewelers</span>
                  </div>
                </h1>
              </div>
            </IOSBanner>
          </BannerWrapper>
        </BannerSection>
      ) : (
        // <Banner>
        //   <div className="container">
        //     <div className="header">
        //       <div>Discover the Radiance of</div>
        //       <div>Bhanderi Lab Grown Diamonds</div>
        //       <div>for Jewelers</div>
        //     </div>
        //   </div>
        // </Banner>
        <BannerSection>
          <BannerWrapper>
            <Banner>
              <div className="container">
                <h1 className="header">
                  <div>Discover the Radiance of</div>
                  <div className="inner-header">
                    <div>Bhanderi Lab Grown Diamonds</div>
                    <div>for Jewelers</div>
                  </div>
                </h1>
              </div>
            </Banner>
          </BannerWrapper>
        </BannerSection>
      )}

      <Welcome>
        <div className="container">
          <div className="title">
            Welcome to Bhanderi Lab Grown Diamonds - where ethically crafted
            diamonds meet your jewelry aspirations.
          </div>
          <div className="description">
            As a jeweler, you strive to create masterpieces that mesmerize and
            captivate. At Bhanderi, we understand your pursuit of extraordinary
            beauty, exceptional value, and unwavering support. That's why our
            meticulously curated collection of loose <a href="https://blgdlab.com/lab-grown-diamonds" className="text-[#024638] font-semibold">lab grown diamonds</a> is
            specifically designed to exceed your expectations at every turn. By
            choosing our diamonds, you are unlocking sustainable elegance and
            empowering your customers with an ethical choice.
          </div>

          <div className="title">
            Elevate your craftsmanship to new heights!
          </div>
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
          className="img"
          src={JewelersContactnowBanner}
          width={1000}
          height={1000}
          alt="jewelersContactnowBanner"
        />
        <div className="description">
          <p>
            Explore the difference of a true partnership with Bhanderi Lab Grown
            Diamonds. Our commitment to providing exceptional quality,
            unparalleled variety, competitive pricing, and a reliable supply
            chain sets us apart as your trusted ally in the jewelry trade. Let
            us empower your business with the finest lab diamonds, enabling you
            to create masterpieces that captivate hearts and stand the test of
            time.
          </p>
          <button>
            <Link href={contactUrl}> Contact Now </Link>
          </button>
        </div>
      </Contact> */}
    </>
  );
};

export default Jewelers;
