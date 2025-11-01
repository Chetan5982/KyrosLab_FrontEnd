import React, { useEffect, useState } from "react";
import Image from "next/image";
import { osName, isIOS } from "react-device-detect";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mui/material";
import {
  Card,
  Cards,
  TradeShows,
  // Marquee,
  // Banner,
  // Numbers,
  IIADiamonds,
  // NetworkPartners,
  // Benefits,
  CardImageWrapper,
  WebCard,
  BannerSection,
  BannerWrapper,
  IOSBanner,
  WebBanner,
  IOSNumbers,
  DiamondManufacturer,
  HomeSliderWrapper,
  BannerSliderSection,
  // HomeSliderWrapper,
  // HomeBannerContainer,
} from "./styled";
// import homeBaneerImage1 from "../../asset/images/home-diamonds.png";
// import mumbai from "../../asset/images/mumbai.png";
// import italy from "../../asset/images/italy.png";
// import benefitsOfLab from "../../asset/images/benefits-of-lab.jpg";
// import homeTraders from "../../asset/images/home-traders.png";
// import homeJewelers from "../../asset/images/home-jewelers.png";
import { GET } from "@/services/methods";
import BannerModal from "@/components/bannerModal";
import {
  homeBaneerImage,
  homeBaneerImageMobile,
  homeBaneerImageTablat,
} from "@/constants/images";
import { blogNewsUrl } from "@/constants/constants";
import Link from "next/link";
import FullPageLoader from "@/components/common/fullpageloader";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  className: "myCustomCarouse2",
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
  pauseOnFocus: false,
};

const squareVariants = {
  // visible: { opacity: 1, scale: 3, transition: { duration: 0.8, } },
  // hidden: { opacity: 0, scale: 0 },
};

function ShowCounter({ count, time, title, increaseBy = 1 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounter((counter) => {
          if (counter < count) {
            return counter + increaseBy;
          } else {
            clearInterval(interval);
            return count;
          }
        });
      }, time);

      return () => {
        clearInterval(interval);
        setCounter(0);
      };
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="header"
      transition={{ type: "spring", stiffness: 100 }}
    >
      <span>
        {counter} {title}
      </span>
    </motion.div>
  );
}

const HomeScreen = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [eventDatas, setEventDatas] = useState([]);
  const [bannerImages, setBannerImages] = useState();
  const [open, setOpen] = useState(true);
  const [isIphone, setIsIphone] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GET("/event").then((data) => {
      setEventDatas(data.data);
    });
    setIsLoading(true);
    GET("/homeBanner")
      .then((data) => {
        if (data?.data.length) {
          setBannerImages(data?.data);
        } else {
          setBannerImages([
            {
              webImage: homeBaneerImage,
              tabletImage: homeBaneerImageTablat,
              mobileImage: homeBaneerImageMobile,
              title: "Responsibly grown, beautifully crafted.",
            },
          ]);
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    GET("/popup").then((data) => {
      setPopupImage(data?.data);
    });
  }, []);

  useEffect(() => {
    setIsIphone(isIOS);
  }, []);

  useEffect(() => {
    if (!open) {
      window.sessionStorage.setItem("isShownBanner", true);
    }
  }, [open]);

  const isShown =
    typeof window !== "undefined"
      ? window.sessionStorage.getItem("isShownBanner")
      : false;

  return (
    <>
      <FullPageLoader open={isLoading} />
      {!isShown && popupImage?.length ? (
        <BannerModal open={open} setOpen={setOpen} popupImage={popupImage} />
      ) : null}
      {isIphone ? (
        <>
          <BannerSliderSection>
            {!!bannerImages?.length && (
              <div className="">
                <Slider {...settings}>
                  {!!bannerImages?.length &&
                    bannerImages?.map((banner, ind) => (
                      <HomeSliderWrapper
                        webUrl={banner.webImage || homeBaneerImage}
                        tabletUrl={banner.tabletImage || homeBaneerImageTablat}
                        mobileUrl={banner.mobileImage || homeBaneerImageMobile}
                        key={banner.webImage}
                      >
                        <WebBanner>
                          <div className="container">
                            <div className="header">
                              <h1 className="banner-title">{banner?.title}</h1>
                            </div>
                          </div>
                        </WebBanner>
                      </HomeSliderWrapper>
                    ))}
                </Slider>
              </div>
            )}
          </BannerSliderSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs cvd-reactors">
                  <div className="container">
                    <div className="main">
                      <h4 className="header">
                        <ShowCounter
                          count={2000}
                          time={0}
                          title="+"
                          increaseBy={5}
                        />
                      </h4>
                      <h4 className="header">CVD Reactors</h4>
                      <div className="title cvd-reactors-title">
                        Lab grown Diamonds made with state-of-the-art CVD
                        technology.
                      </div>
                      <div className="discription cvd-reactors-discription">
                        Leading the way to a brighter, more sustainable future.
                      </div>
                      <div
                        className="button"
                        onClick={() =>
                          router.push(
                            `${blogNewsUrl}/bhanderi-lab-grown-diamonds-shining-with-cvd-reactors`
                          )
                        }
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs rnd-labs">
                  <div className="container">
                    <div className="main">
                      <h5 className="header">
                        <ShowCounter count={5} time={200} title="+" />
                      </h5>
                      <h5 className="header web">dedicated</h5>
                      <h5 className="header web">Labs</h5>
                      <h5 className="header mobile">dedicated</h5>
                      <h5 className="header mobile">Labs</h5>
                      <div className="title rnd-labs-title">
                        Where Lab grown diamonds come to life, in our R&D and
                        growing Lab.
                      </div>
                      <div className="discription rnd-labs-discription">
                        Shaping the future of diamonds while pushing the
                        boundaries of quality.
                      </div>
                      <div
                        className="button"
                        onClick={() =>
                          router.push(
                            `${blogNewsUrl}/bhanderi-pioneering-growth-labs-innovation-leaders`
                          )
                        }
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs polishing">
                  <div className="container">
                    <div className="main">
                      <h5 className="header">
                        <ShowCounter count={2} time={500} title="millions +" />
                        {/* 2 millions + */}
                      </h5>
                      <h5 className="header web">diamond polishing capacity</h5>
                      <h5 className="header mobile">
                        diamond polishing capacity
                      </h5>
                      <div className="title polishing-title">
                        Carving brilliance with expert precision.
                      </div>
                      <div className="discription polishing-discription">
                        With High-tech facilities and expert brains, bringing
                        brilliance to life.
                      </div>
                      <div
                        className="button"
                        onClick={() =>
                          router.push(
                            `${blogNewsUrl}/2m-diamond-polishing-capacity`
                          )
                        }
                      >
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>
        </>
      ) : (
        <>
          <BannerSliderSection>
            {!!bannerImages?.length && (
              <div className="">
                <Slider {...settings}>
                  {!!bannerImages?.length &&
                    bannerImages?.map((banner, ind) => (
                      <HomeSliderWrapper
                        webUrl={banner.webImage || homeBaneerImage}
                        tabletUrl={banner.tabletImage || homeBaneerImageTablat}
                        mobileUrl={banner.mobileImage || homeBaneerImageMobile}
                        key={banner.webImage}
                      >
                        <WebBanner>
                          <div className="container">
                            <div className="header">
                              <h1 className="banner-title">{banner?.title}</h1>
                            </div>
                          </div>
                        </WebBanner>
                      </HomeSliderWrapper>
                    ))}
                </Slider>
              </div>
            )}
          </BannerSliderSection>

          {/* <WebBanner
            webUrl={bannerImage?.webImage || "home-diamonds.png"}
            mobileUrl={bannerImage?.mobileImage || "home-diamonds-mobile.png"}
          >
            <div className="container">
              <div className="header">
                <h3>Responsibly grown,</h3>
                <h3>beautifully crafted.</h3>
              </div>
            </div>
          </WebBanner>

          <Numbers>
            <div className="techs cvd-reactors">
              <div className="container">
                <div className="main">
                  <h4 className="header">2000 +</h4>
                  <h4 className="header">CVD Reactors</h4>
                  <div className="title cvd-reactors-title">
                    Lab grown Diamonds made with state-of-the-art CVD
                    technology.
                  </div>
                  <div className="discription cvd-reactors-discription">
                    Leading the way to a brighter, more sustainable future.
                  </div>
                  <div
                    className="button"
                    onClick={() =>
                      router.push(
                        "https://blgdlab.com/blog/bhanderi-lab-grown-diamonds-shining-with-cvd-reactors"
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </Numbers>

          <Numbers>
            <div className="techs rnd-labs">
              <div className="container">
                <div className="main">
                  <h5 className="header">4 +</h5>
                  <h5 className="header web">dedicated</h5>
                  <h5 className="header web">Labs</h5>
                  <h5 className="header mobile">dedicated</h5>
                  <h5 className="header mobile">Labs</h5>
                  <div className="title rnd-labs-title">
                    Where Lab grown diamonds come to life, in our R&D and
                    growing Lab.
                  </div>
                  <div className="discription rnd-labs-discription">
                    Shaping the future of diamonds while pushing the boundaries
                    of quality.
                  </div>
                  <div
                    className="button"
                    onClick={() =>
                      router.push(
                        "https://blgdlab.com/blog/pioneering-innovations-through-dedicated-growth-labs"
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </Numbers>

          <Numbers>
            <div className="techs polishing">
              <div className="container">
                <div className="main">
                  <h5 className="header">2 millions +</h5>
                  <h5 className="header web">diamond polishing capacity</h5>
                  <h5 className="header mobile">diamond polishing capacity</h5>
                  <div className="title polishing-title">
                    Carving brilliance with expert precision.
                  </div>
                  <div className="discription polishing-discription">
                    With High-tech facilities and expert brains, bringing
                    brilliance to life.
                  </div>
                  <div
                    className="button"
                    onClick={() =>
                      router.push(
                        "https://blgdlab.com/blog/pioneering-innovations-through-dedicated-growth-labs"
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </Numbers> */}

          {/* <BannerSection>
            <BannerWrapper>
              <WebBanner
                webUrl={bannerImage?.webImage || homeBaneerImage}
                mobileUrl={bannerImage?.mobileImage || homeBaneerImageMobile}
                tablatUrl={bannerImage?.tablatUrl || homeBaneerImageTablat}
              >
                <div className="container">
                  <div className="header">
                    <h3>Responsibly grown,</h3>
                    <h3>beautifully crafted.</h3>
                  </div>
                </div>
              </WebBanner>
            </BannerWrapper>
          </BannerSection> */}

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs cvd-reactors">
                  <div className="container">
                    <div className="main">
                      <h4 className="header">
                        <ShowCounter
                          count={2000}
                          time={-100}
                          title="+"
                          increaseBy={5}
                        />
                        {/* 2000 + */}
                      </h4>
                      <h4 className="header">CVD Reactors</h4>
                      <div className="title cvd-reactors-title">
                        Lab grown Diamonds made with state-of-the-art CVD
                        technology.
                      </div>
                      <div className="discription cvd-reactors-discription">
                        Leading the way to a brighter, more sustainable future.
                      </div>
                      <Link
                        href={`${blogNewsUrl}/sparkling-innovations-bhanderi-lab-grown-diamonds-shining-with-cvd-reactors`}
                      >
                        <div
                          className="button"
                          // onClick={() =>
                          //   router.push(

                          //   )
                          // }
                        >
                          {" "}
                          Read More
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs rnd-labs">
                  <div className="container">
                    <div className="main">
                      <h5 className="header">
                        <ShowCounter count={5} time={200} title="+" />
                        {/* 4 + */}
                      </h5>
                      <h5 className="header web">dedicated</h5>
                      <h5 className="header web">Labs</h5>
                      <h5 className="header mobile">dedicated</h5>
                      <h5 className="header mobile">Labs</h5>
                      <div className="title rnd-labs-title">
                        Where Lab grown diamonds come to life, in our R&D and
                        growing Lab.
                      </div>
                      <div className="discription rnd-labs-discription">
                        Shaping the future of diamonds while pushing the
                        boundaries of quality.
                      </div>
                      <Link
                        href={`${blogNewsUrl}/bhanderi-pioneering-growth-labs-innovation-leaders`}
                      >
                        <div
                          className="button"
                          // onClick={() =>
                          //   router.push(
                          //     `${blogNewsUrl}/pioneering-innovations-through-dedicated-growth-labs`
                          //   )
                          // }
                        >
                          Read More
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>

          <BannerSection>
            <BannerWrapper>
              <IOSNumbers>
                <div className="techs polishing">
                  <div className="container">
                    <div className="main">
                      <h5 className="header">
                        <ShowCounter count={2} time={500} title="millions +" />
                        {/* 2 millions + */}
                      </h5>
                      <h5 className="header web">diamond polishing capacity</h5>
                      <h5 className="header mobile">
                        diamond polishing capacity
                      </h5>
                      <div className="title polishing-title">
                        Carving brilliance with expert precision.
                      </div>
                      <div className="discription polishing-discription">
                        With High-tech facilities and expert brains, bringing
                        brilliance to life.
                      </div>
                      <Link
                        href={`${blogNewsUrl}/2m-diamond-polishing-capacity`}
                      >
                        <div
                          className="button"
                          // onClick={() =>
                          //   router.push(
                          //     `${blogNewsUrl}/pioneering-innovations-through-dedicated-growth-labs`
                          //   )
                          // }
                        >
                          {" "}
                          Read More
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </IOSNumbers>
            </BannerWrapper>
          </BannerSection>
        </>
      )}

      <IIADiamonds>
        <div className="container">
          <div className="main">
            <div className="inner-title">
              <h2 className="max-[500px]:mt-8 title">type IIA</h2>
              <h2 className="mb-8 title">Diamonds</h2>
            </div>
            <div>
              <div className="mb-3.5 description">
                Type IIA diamonds are a rare and highly coveted type of diamond
                known for their purity and beauty as they are comprised of 100%
                carbon atoms with no measurable nitrogen or boron impurities.
              </div>
              <div className="description">
                At Bhanderi, we are proud to offer you the opportunity to own
                one of the rarest and most sought-after gems in the world - the
                Type IIA diamond.
              </div>
              <Link
                href={`${blogNewsUrl}/bhanderi-lab-grown-diamonds-type-iia-excellence`}
              >
                <div
                  className="button"
                  // onClick={() =>
                  //   router.push(

                  //   )
                  // }
                >
                  {" "}
                  Read More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IIADiamonds>

      {/* <NetworkPartners>
        <div className="container">
          <div className="header">our network partners</div>
          <div className="main">
            <div className="card">
              <div className="title">TRADERS</div>
              <div className="wrapper">
                <Image src={homeTraders} alt="homeTraders" />
                <div className="content">
                  <div className="mobile-title">TRADERS</div>
                  <div className="description">
                    A perfect size for everyone, with our vast inventory
                  </div>
                  <div
                    className="button"
                    onClick={() => router.push("/lab-grown-diamond-traders")}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="title">JEWELERS</div>
              <div className="wrapper">
                <Image src={homeJewelers} alt="homeJewelers" />
                <div className="content">
                  <div className="mobile-title">JEWELERS </div>
                  <div className="description">
                    Infinite possibilities in our veritable treasure trove of
                    diamonds
                  </div>
                  <div
                    className="button"
                    onClick={() => router.push("/lab-grown-diamond-jewelers")}
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NetworkPartners>

      <Marquee>
        <div>
          <span>Make in India</span>
          <span>Make in India</span>
          <span>Make in India</span>
          <span>Make in India</span>
          <span>Make in India</span>
        </div>
      </Marquee>

      <Benefits>
        <div className="left">
          <div>
            <div className="header">
              <h1 className="web">Unmatched Benefits</h1>
              <h1 className="web">Of Lab Grown</h1>
              <h1 className="web">Diamonds</h1>
              <h1 className="mobile">
                Unmatched Benefits Of Lab Grown Diamonds
              </h1>
            </div>
            <div className="title">
              Uncover reasons to choose Lab Grown Diamonds:
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
          <Image src={benefitsOfLab} alt="benefitsOfLab" />
        </div>
      </Benefits> */}
      <DiamondManufacturer>
        <div className="container">
          <div className="innercontain">
            <div className="first-pere">
              <h2 className="main-title">
                Top Lab Grown Diamond Manufacturer In India: Crafting
                Brilliance, Redefining Luxury
              </h2>
              <p className="inner-p">
                In a world where innovation and sustainability take center
                stage, the diamond industry is no exception. Bhanderi Lab Grown
                Diamonds, a leading name in the realm of lab grown diamond
                manufacturers, is revolutionizing how we perceive and acquire
                these precious gems. With a dedicated focus on quality, ethics,
                and environmental responsibility, we are not just a brand; we
                are a symbol of the future.
              </p>
              <p className="inner-p">
                Lab grown diamond growers have emerged as the trailblazers of a
                sparkling future, and we stand at the forefront of this
                movement. As a prominent CVD diamond manufacturer, the company
                has mastered the art of creating lab grown diamonds that rival
                their natural counterparts in every aspect, from clarity to
                carat.
              </p>
              <p className="inner-p">
                Based in the heart of India, we have quickly risen to prominence
                as one of the most trusted and reputable lab grown diamond
                manufacturers in the country. Our commitment to sustainable
                practices, coupled with our expertise in cutting-edge
                technology, has propelled us to the top of the industry.
              </p>
              <p className="inner-p">
                When you choose us, you are not just choosing a diamond; you are
                choosing an ethical masterpiece. Unlike traditional diamond
                mining, lab grown diamond growers like us utilize advanced
                scientific processes to create diamonds in controlled
                environments. This means no disruption to delicate ecosystems,
                no human rights concerns, and no questionable ethical practices.
                It's a choice that not only radiates brilliance but also
                contributes to a brighter, more sustainable future.
              </p>
            </div>
            <div className="second-pere">
              <h3 className="main-title">
                Lab Grown vs. Natural Diamond: A Clear Choice
              </h3>
              <p className="inner-p">
                The debate between lab grown and natural diamonds is a hot topic
                in the jewelry world. We are here to elucidate the matter. While
                both lab grown and natural diamonds share the same stunning
                visual appeal, lab grown diamonds offer a unique advantage – a
                clear conscience. With their reduced carbon footprint and
                minimal environmental impact, lab grown diamonds are the
                eco-conscious choice for those who want to adorn themselves with
                beauty while safeguarding the planet.
              </p>
            </div>
            <div className="third-pere">
              <h3 className="main-title">
                Bhanderi Lab Grown Diamond: A Name You Can Trust
              </h3>
              <p className="inner-p">
                When it comes to man made diamond manufacturers, we stand out as
                a name you can trust. With a commitment to quality that is
                unparalleled, every diamond that bears our name is a testament
                to exquisite craftsmanship and uncompromising standards. From
                the moment a diamond seed is nurtured to its transformation into
                a radiant gem, our experts ensure that each stone tells a story
                of precision and passion.
              </p>
            </div>
            <div className="fourth-pere">
              <h3 className="main-title">
                Made with Precision, Worn with Pride
              </h3>
              <p className="inner-p">
                We believe that luxury should be attainable without compromising
                on values. Our{" "}
                <a
                  href="https://blgdlab.com/lab-grown-diamonds"
                  target="_blank"
                  className="font-bold text-[rgb(2,70,56)]"
                >
                  lab grown diamonds
                </a>{" "}
                are meticulously crafted using state-of-the-art technology,
                resulting in stones that are indistinguishable from natural
                diamonds. The brilliance, fire, and scintillation of our diamond
                are a testament to the dedication and artistry that goes into
                every facet. In a world where sustainability and ethical choices
                define our actions, Bhanderi Lab Grown Diamonds is leading the
                charge by crafting lab grown diamonds that capture hearts and
                minds alike. As a premier lab grown diamond manufacturer in
                India, we are a shining example of innovation, ethics, and
                unmatched beauty. With a commitment to environmental
                responsibility and a dedication to creating stones that truly
                dazzle we are a beacon of brilliance for a brighter future.
                Choose us and wear your values with pride, for every stone is a
                testament to the beauty of ethics and the brilliance of
                innovation.
              </p>
            </div>
          </div>
        </div>
      </DiamondManufacturer>
      {!!eventDatas.length && (
        <TradeShows>
          <div className="container">
            <div className="header">Upcoming Trade shows</div>
            {!isMobile && (
              <Cards>
                {eventDatas.map((card) => {
                  let fromMonth = new Date(card.fromDate).toLocaleDateString(
                    "en-us",
                    {
                      month: "short",
                    }
                  );
                  let toMonth = new Date(card.toDate).toLocaleDateString(
                    "en-us",
                    {
                      month: "short",
                    }
                  );
                  let fromDay = new Date(card.fromDate).getDate();
                  let toDay = new Date(card.toDate).getDate();
                  return (
                    <WebCard key={card.title}>
                      <div className="chip">
                        <div className="date">{`${fromMonth} ${fromDay}  -  ${toMonth} ${toDay}`}</div>
                      </div>
                      <CardImageWrapper>
                        <img src={card.image} alt={card.title} />
                      </CardImageWrapper>
                      <div>
                        <div className="title">{card.title}</div>
                        <div className="description">{card.description}</div>
                      </div>
                    </WebCard>
                  );
                })}
              </Cards>
            )}

            {isMobile && (
              <Slider {...settings}>
                {eventDatas.map((card) => {
                  let fromMonth = new Date(card.fromDate).toLocaleDateString(
                    "en-us",
                    {
                      month: "short",
                    }
                  );
                  let toMonth = new Date(card.toDate).toLocaleDateString(
                    "en-us",
                    {
                      month: "short",
                    }
                  );
                  let fromDay = new Date(card.fromDate).getDate();
                  let toDay = new Date(card.toDate).getDate();
                  return (
                    <Card key={card.title}>
                      <div className="chip">
                        <div className="date">{`${fromMonth} ${fromDay}  -  ${toMonth} ${toDay}`}</div>
                      </div>
                      <CardImageWrapper>
                        <img src={card.image} alt={card.title} />
                      </CardImageWrapper>
                      <div className="content">
                        <div className="title">{card.title}</div>
                        <div className="description">{card.description}</div>
                      </div>
                    </Card>
                  );
                })}
              </Slider>
            )}
          </div>
        </TradeShows>
      )}
    </>
  );
};

export default HomeScreen;
