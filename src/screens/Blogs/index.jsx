"use client";

import React, { useEffect, useRef, useState } from "react";
// import MainImage from "../../asset/images/blogs/Main.png";
import {
  BannerButton,
  BannerContainer,
  BannerDeacription,
  BannerIndex,
  BannerTitle,
  BannerWrapper,
  BasicCard,
  BlogCard,
  BlogSliderWrapper,
  BlogTitle,
  CardBody,
  CardButton,
  CardDate,
  CardDescription,
  CardImage,
  CardTitle,
  CardWrapper,
  Container,
  CustomSlider,
  MainCard,
  MainCardBody,
  MainCardDate,
  MainCardDescription,
  MainCardImage,
  MainCardTitle,
  QuateCard,
  QuateOne,
  QuateText,
  QuateTwo,
  QuateWrapper,
  Tab,
} from "./styled";
import { useParams, useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GET } from "@/services/methods";
import FullPageLoader from "@/components/common/fullpageloader";
import { blogNewsUrl } from "@/constants/constants";
import Link from "next/link";

const blogData = [
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "Enriching Every Home with The Brilliance of Diamonds will Fulfill Our Sole Mission.- Ghanshyam Bhanderi",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "qoute",
  },
  {
    image: "https://blgdlab.com/Rectangle%2085.svg",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "main",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
  {
    image:
      "https://res.cloudinary.com/dy4qkskru/image/upload/v1686820536/mzeyhu42555tdxwb7n74.png",
    title:
      "The Cut or Clarity Factor: Which Matters Most for Lab Grown Diamonds?",
    date: "April 07, 2023",
    focusWord: " Lab Grown Diamond",
    metaDesc:
      "Among the 4 C's in a lab grown diamond - cut, color, clarity, and carat, the cut of the stone plays a significant role in determining its beauty and look.",
    blogType: "normal",
  },
];

export const BasicBlogCard = ({ content }) => {
  const router = useRouter();
  return (
    <BasicCard>
      <BlogCard>
        <CardImage src={content?.image} alt="..." />
        <CardBody>
          <CardTitle>{content?.mainTitle}</CardTitle>
          <CardDate>
            {new Date(content?.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </CardDate>
          <CardDescription>{content?.mainDescription}</CardDescription>
          <div
          // onClick={() => {
          //   router.push();
          // }}
          >
            <Link href={`${blogNewsUrl}/${content.redirectUrl}`}>
              <CardButton> Read more </CardButton>
            </Link>
          </div>
        </CardBody>
      </BlogCard>
    </BasicCard>
  );
};

export const QuateBlogCard = ({ title, date }) => (
  <QuateCard>
    <QuateWrapper>
      <QuateOne>
        <svg
          width="47"
          height="33"
          viewBox="0 0 47 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.896 32.28C5.16533 32.28 3.16 31.5973 1.88 30.232C0.685334 28.7813 0.0880003 26.9467 0.0880003 24.728V22.936C0.0880003 19.4373 1.112 15.5973 3.16 11.416C5.208 7.14933 8.06667 3.43733 11.736 0.279999H20.312C17.752 3.01067 15.6613 5.61333 14.04 8.088C12.504 10.4773 11.3947 13.1653 10.712 16.152C12.4187 16.5787 13.656 17.3893 14.424 18.584C15.2773 19.7787 15.704 21.2293 15.704 22.936V24.728C15.704 26.9467 15.064 28.7813 13.784 30.232C12.5893 31.5973 10.6267 32.28 7.896 32.28ZM33.752 32.28C31.0213 32.28 29.016 31.5973 27.736 30.232C26.5413 28.7813 25.944 26.9467 25.944 24.728V22.936C25.944 19.4373 26.968 15.5973 29.016 11.416C31.064 7.14933 33.9227 3.43733 37.592 0.279999H46.168C43.608 3.01067 41.5173 5.61333 39.896 8.088C38.36 10.4773 37.2507 13.1653 36.568 16.152C38.2747 16.5787 39.512 17.3893 40.28 18.584C41.1333 19.7787 41.56 21.2293 41.56 22.936V24.728C41.56 26.9467 40.92 28.7813 39.64 30.232C38.4453 31.5973 36.4827 32.28 33.752 32.28Z"
            fill="white"
          />
        </svg>
      </QuateOne>
      <QuateText>{title}</QuateText>
      <QuateTwo>
        <svg
          width="47"
          height="33"
          viewBox="0 0 47 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.104 0.720001C41.8347 0.720001 43.84 1.40267 45.12 2.76801C46.3147 4.21867 46.912 6.05333 46.912 8.272V10.064C46.912 13.5627 45.888 17.4027 43.84 21.584C41.792 25.8507 38.9333 29.5627 35.264 32.72H26.688C29.248 29.9893 31.3387 27.3867 32.96 24.912C34.496 22.5227 35.6053 19.8347 36.288 16.848C34.5813 16.4213 33.344 15.6107 32.576 14.416C31.7227 13.2213 31.296 11.7707 31.296 10.064V8.272C31.296 6.05333 31.936 4.21867 33.216 2.76801C34.4107 1.40267 36.3733 0.720001 39.104 0.720001ZM13.248 0.720001C15.9787 0.720001 17.984 1.40267 19.264 2.76801C20.4587 4.21867 21.056 6.05333 21.056 8.272V10.064C21.056 13.5627 20.032 17.4027 17.984 21.584C15.936 25.8507 13.0773 29.5627 9.408 32.72H0.831997C3.392 29.9893 5.48266 27.3867 7.104 24.912C8.64 22.5227 9.74933 19.8347 10.432 16.848C8.72533 16.4213 7.488 15.6107 6.72 14.416C5.86666 13.2213 5.44 11.7707 5.44 10.064V8.272C5.44 6.05333 6.08 4.21867 7.36 2.76801C8.55466 1.40267 10.5173 0.720001 13.248 0.720001Z"
            fill="white"
          />
        </svg>
      </QuateTwo>
    </QuateWrapper>
    <div className="date-text">{date}</div>
  </QuateCard>
);

export const MainBlogCard = ({
  image,
  title,
  date,
  focusWord,
  desc,
  redirectUrl,
}) => {
  const router = useRouter();

  return (
    <MainCard>
      <BlogCard>
        <MainCardImage src={image} width={200} alt="..." />
        <MainCardBody>
          <MainCardTitle>{title}</MainCardTitle>
          <MainCardDate>
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </MainCardDate>
          <MainCardDescription>{desc}</MainCardDescription>
          {title && (
            <div
            // onClick={() => {
            //   router.push();
            // }}
            >
              <Link href={`${blogNewsUrl}/${redirectUrl}`}>
                <CardButton> Read more</CardButton>
              </Link>
            </div>
          )}
        </MainCardBody>
      </BlogCard>
    </MainCard>
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "myCustomCarousel",
  arrows: false,
  autoplay: true,
};

const BlogNews = () => {
  const router = useRouter();
  const params = useParams();
  const isCategory = params?.category || false;
  const scrollRef = useRef();
  const [blogDatas, setBlogDatas] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    if (isCategory) {
      GET(`/blog/url/${isCategory}`)
        .then((data) => {
          setBlogDatas({
            ...data.data,
            blogs: data.data.blogs.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
          });
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      GET("/blog")
        .then((data) => {
          setBlogDatas({
            ...data.data,
            blogs: data.data.blogs.sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
          });
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    GET("/category")
      .then((data) => {
        if (data.data.length) {
          setTabs([{ name: "All" }, ...data.data]);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isCategory) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [blogDatas, isCategory]);

  return (
    <div className="blog-news-page">
      {!!blogDatas?.bannerBlogs?.length && (
        <CustomSlider>
          <Slider {...settings} className="custom_slider">
            {!!blogDatas?.bannerBlogs?.length &&
              blogDatas?.bannerBlogs?.map((banner, ind) => (
                <BlogSliderWrapper url={banner.image} key={banner.image}>
                  <BannerContainer>
                    <BannerWrapper>
                      <BannerIndex>#{ind + 1}.</BannerIndex>
                      <BannerTitle>{banner.mainTitle}</BannerTitle>
                      <BannerDeacription>
                        {banner.mainDescription}
                      </BannerDeacription>
                      <Link href={`${blogNewsUrl}/${banner.redirectUrl}`}>
                        <BannerButton
                        // onClick={() => {
                        //   router.push();
                        // }}
                        >
                          {" "}
                          Read More
                        </BannerButton>
                      </Link>
                    </BannerWrapper>
                  </BannerContainer>
                </BlogSliderWrapper>
              ))}
          </Slider>
        </CustomSlider>
      )}

      <Container ref={scrollRef}>
        <BlogTitle>News & Blog</BlogTitle>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {tabs.map((tab, index) => (
            <>
              <Tab
                className={
                  !isCategory
                    ? tab.name === "All"
                      ? "active-tab"
                      : ""
                    : isCategory === tab.url
                    ? "active-tab"
                    : ""
                }
                onClick={() => {
                  if (tab.name === "All") {
                    router.push(blogNewsUrl);
                  } else {
                    router.push(`${blogNewsUrl}/category/${tab.url}`);
                    // setActiveTab(tab.name);
                  }
                }}
              >
                {tab.name}
              </Tab>
            </>
          ))}
        </div>
        <CardWrapper>
          {/* first two data */}
          {!!blogDatas?.blogs?.length &&
            !isCategory &&
            blogDatas?.blogs?.slice(0, 2).map((blog, index) => {
              return (() => {
                return <BasicBlogCard key={index} content={blog} />;
              })();
            })}
          {/* third image data */}
          {!!blogDatas?.blogs?.length && !isCategory && (
            <QuateBlogCard title={blogData[2].title} date={blogData[2].date} />
          )}

          {!!blogDatas?.blogs?.length && !isCategory && (
            <MainBlogCard
              image={
                blogDatas?.mainBlogs?.length
                  ? blogDatas?.mainBlogs[0]?.image
                  : ""
              }
              title={
                blogDatas?.mainBlogs?.length
                  ? blogDatas?.mainBlogs[0]?.mainTitle
                  : ""
              }
              date={
                blogDatas?.mainBlogs?.length
                  ? blogDatas?.mainBlogs[0]?.date
                  : ""
              }
              desc={
                blogDatas?.mainBlogs?.length
                  ? blogDatas?.mainBlogs[0]?.mainDescription
                  : ""
              }
              redirectUrl={
                blogDatas?.mainBlogs?.length
                  ? blogDatas?.mainBlogs[0]?.redirectUrl
                  : ""
              }
            />
          )}

          {/* last all data */}
          {blogDatas &&
            blogDatas?.blogs?.slice(isCategory ? 0 : 2).map((blog, index) => {
              return (() => {
                return <BasicBlogCard key={index} content={blog} />;
              })();
            })}
        </CardWrapper>
        <FullPageLoader open={isLoading} />
      </Container>
    </div>
  );
};

export default BlogNews;
