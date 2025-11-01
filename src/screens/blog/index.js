"use client";
import React, { useEffect, useState } from "react";
import {
  BannerTitle,
  // BannerWrapper,
  BlogContainer,
  // BlogMarque,
  BlogWrapper,
  Container,
  CardWrapper,
  LatestBlogTitle,
} from "./styled";
import { useParams, useRouter } from "next/navigation";
import { GET } from "@/services/methods";
import {
  BasicCard,
  BlogCard,
  CardBody,
  CardButton,
  CardDate,
  CardDescription,
  CardImage,
  CardTitle,
} from "../Blogs/styled";
// import Script from "next/script";
import { blogNewsUrl } from "@/constants/constants";
import { Parser } from "html-to-react";
// import Head from "next/head";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

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

const Blog = ({ children }) => {
  const params = useParams();
  // const isMobile = useMediaQuery("(max-width:425px)");
  // const isSmallMobile = useMediaQuery("(max-width:320px)");
  // const { parse } = new Parser();
  const [blogDatas, setBlogDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [latestBlogs, setLatestBlog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GET(`/blog/${params?.id}`)
      .then((data) => {
        if (data.data) {
          setBlogDatas(data.data);
          const xmlString = `${data.data.schema}`;
          if (xmlString) {
            const doc = new DOMParser().parseFromString(xmlString, "text/html");
            document.head.appendChild(doc.head.firstChild);
          }
        } else {
          router.replace(blogNewsUrl);
        }
      })
      .catch((e) => {
        router.replace(blogNewsUrl);
      });
  }, [params?.id, router]);

  useEffect(() => {
    setIsLoading(true);
    GET("/blog")
      .then((data) => {
        setLatestBlog(data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Container>
        <div>{children}</div>

        <div>
          <LatestBlogTitle>latest blogs</LatestBlogTitle>
          <CardWrapper>
            {!!latestBlogs?.blogs?.length &&
              latestBlogs?.blogs?.slice(0, 3).map((blog, index) => {
                return (() => {
                  return <BasicBlogCard key={index} content={blog} />;
                })();
              })}
          </CardWrapper>
        </div>
      </Container>
    </>
  );
};

export default Blog;
