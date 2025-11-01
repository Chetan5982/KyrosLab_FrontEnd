"use client";
import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/navigation";
// import DirectorImage from "@/asset/images/directors.png";
// import DirectorImagemob from "@/asset/images/directorsmob.png";
// import DirectorSecondImage from "@/asset/images/director-rectangle.png";
// import DirectorDiamond from "@/asset/images/directorDiamond.png";
// import directorLastimg from "@/asset/images/director-lastimg.png";
// import directorLastimgmobile from "@/asset/images/director-lastimgmobile.png";
// import DirectorMobileDiamond from "@/asset/images/Dmobile.svg";
import Image from "next/image";

import { useMediaQuery } from "@mui/material";
import {
  Container,
  DescOne,
  DescTwo,
  EthicalWrapper,
  LastSection,
  Title,
} from "./styled";
import {
  MainDirector,
  MainDirectorMobile,
  dairectorLastImg,
  dairectorLastImgMobile,
  dairectorLastImgSmallMobile,
  dairectorRectangal,
  dairectordaimond,
  dairectordaimondmobile,
} from "@/constants/images";
import Link from "next/link";
import { contactUrl } from "@/constants/constants";

const ethicalData = [
  {
    title: "Cultivating Diamonds, Nurturing Ethics :",
    list: [
      {
        title:
          "Our lab grown diamonds flourish through a sustainable and eco-friendly cultivation process, upholding our commitment to ethical practices.",
      },
      {
        title:
          "By embracing responsible methods, we eliminate the environmental impact associated with traditional diamond mining, allowing nature to shine without compromise.",
      },
    ],
  },
  {
    title: "Sparkling Conflict-Free Assurance :",
    list: [
      {
        title:
          "Each Bhanderi lab grown diamond guarantees a conflict-free origin, free from any association with unethical practices.",
      },
      {
        title:
          "Our stringent sourcing policies ensure that every stone sparkles with integrity, embodying the purity of ethical beauty.",
      },
    ],
  },
  {
    title: "The transparency that Shines :",
    list: [
      {
        title:
          "Transparency illuminates our supply chain, enlightening customers with a clear and traceable journey of their chosen diamonds.",
      },
      {
        title:
          "With complete visibility into the origin and craftsmanship, Bhanderi empowers customers to make conscious choices and celebrate their radiant treasures.",
      },
    ],
  },
  {
    title: "Empowering Partnerships, Empowering Lives :",
    list: [
      {
        title:
          "Fair trade lies at the heart of our values, as we forge partnerships that empower all individuals involved in the creation and distribution of our diamonds.",
      },
      {
        title:
          "We illuminate lives, creating a brighter future by fostering fair labor standards and ensuring the prosperity of every community we touch.",
      },
    ],
  },
  {
    title: "Radiant Responsibility :",
    list: [
      {
        title:
          "Our commitment to social and environmental responsibility infuses every facet of the business.",
      },
      {
        title:
          "By embracing responsible methods, we eliminate the environmental impact associated with traditional diamond mining, allowing nature to shine without compromise.",
      },
    ],
  },
  {
    title: "The Brilliance that Exceeds Expectations :",
    list: [
      {
        title:
          "Customer satisfaction is the cornerstone of our ethos, as we strive to surpass expectations with our exceptional service and unwavering integrity.",
      },
      {
        title:
          "Bhanderi Lab Grown Diamonds lights the path for their customers, guiding them towards an extraordinary experience that shines as brightly as diamonds. ",
      },
    ],
  },
  {
    title: "Illuminating Innovation and Collaboration :",
    list: [
      {
        title:
          "We embrace innovation and collaborate with industry pioneers to drive ethical practices and lead the way in the lab grown diamond realm.",
      },
      {
        title:
          "By continuously pushing boundaries and championing technological advancements, we remain at the forefront of brilliance and innovation.",
      },
    ],
  },
];

const Director = () => {
  const router = useRouter();
  const mobile = useMediaQuery("(max-width:425px)");
  const smallmobile = useMediaQuery("(max-width:320px)");
  const laptop = useMediaQuery("(max-width:1444px)");
  const bigScreen = useMediaQuery("(min-width:1890px)");

  return (
    <div>
      <Container className="h-full flex flex-col justify-end items-center pt-28 gap-6">
        <Title>Wellsprings Of Inspiration</Title>
        <Image
          src={mobile ? MainDirectorMobile : MainDirector}
          alt="director"
          height={2000}
          width={2000}
        />
      </Container>
      <div
        style={{
          backgroundImage: `url('${dairectorRectangal}')`,
        }}
      >
        <Container className="flex flex-col justify-center items-center pb-12">
          <Image
            src={laptop ? dairectordaimondmobile : dairectordaimond}
            // style={{ width: "60%" }}
            height={1000}
            width={1000}
            alt="direcors"
            className="directordaimond"
          />
          <DescOne>
            Enriching every home with the brilliance of diamonds will fulfill
            our sole mission.
          </DescOne>
          <DescTwo>
            We are proud to present our lab grown diamonds, which possess the
            same beauty and brilliance as their natural counterparts. Through
            advanced technology and sustainable processes, we have crafted these
            top-notch diamonds in a controlled environment, free from the
            environmental impact and social concerns associated with traditional
            mining. Join us in embracing a future of exquisite diamonds that are
            both ethically and environmentally responsible
          </DescTwo>
        </Container>
      </div>
      <EthicalWrapper className="ethical-wrapper">
        <div className="bg-color">
          <Container className="pt-[155px] pb-[100px] max-[768px]:py-12">
            <div className="header">
              <div className="header-1">The Ethical Compass Of Bhanderi</div>
              <div className="header-2">
                Our Guiding Principles For Sustainable Sparkle
              </div>
            </div>
            <div className="ethics-topic">
              {/* {ethicalData.map((item, index) => (
                <Fragment key={index}>
                  <div className="ethics-title">{item.title}</div>
                  <div className="ethics-list-Wrapper">
                    <ul>
                      {item.list.map((list, i) => (
                        <li key={i}>{list.title}</li>
                      ))}
                    </ul>
                    {index !== ethicalData.length - 1 && <hr />}
                  </div>
                </Fragment>
              ))} */}
              {ethicalData.map((item, index) => (
                <Fragment key={index}>
                  <div className="ethics-title">{item.title}</div>
                  <div className="ethics-list-Wrapper">
                    <ul>
                      {item.list.map((list, i) => (
                        <li key={i}>
                          {list.title.includes(
                            "Bhanderi Lab Grown Diamonds"
                          ) ? (
                            <span>
                              {list.title
                                .split("Bhanderi Lab Grown Diamonds")
                                .map((text, j) => (
                                  <Fragment key={j}>
                                    {j === 0 ? null : (
                                      <a
                                        href="https://blgdlab.com/"
                                        className="text-[#024638] font-semibold"
                                      >
                                        Bhanderi Lab Grown Diamonds
                                      </a>
                                    )}
                                    {text}
                                  </Fragment>
                                ))}
                            </span>
                          ) : (
                            list.title
                          )}
                        </li>
                      ))}
                    </ul>
                    {index !== ethicalData.length - 1 && <hr />}
                  </div>
                </Fragment>
              ))}
            </div>
          </Container>
        </div>
      </EthicalWrapper>
      <LastSection>
        <Image
          className="img"
          src={mobile ? dairectorLastImgMobile : dairectorLastImg}
          alt="directorLastimg"
          width={1000}
          height={1000}
        />
        <div className="description">
          <p>
            At Bhanderi Lab Grown Diamonds, our commitment to ethical brilliance
            sets us apart. We radiate a sustainable path, where beauty,
            integrity, and responsibility converge. Join us in embracing a
            radiant future and discovering the extraordinary allure of ethically
            crafted diamonds that truly illuminate the world.
          </p>
          <Link href={contactUrl}>
            <button>Contact Now</button>
          </Link>
        </div>
      </LastSection>
    </div>
  );
};

export default Director;
