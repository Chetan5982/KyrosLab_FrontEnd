"use client";
import React from "react";
import { BannerTitle, BlogContainer, BlogWrapper } from "./styled";

const BlogContent = ({ blogDatas }) => {
  return (
    <BlogWrapper>
      <div className="container">
        <div className="main-title">
          <BannerTitle>{blogDatas?.mainTitle}</BannerTitle>
          {/* {!!latestBlogs?.blogs?.length && ( */}
          <div style={{ padding: "24px 0px" }}>
            {new Date(blogDatas?.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
            {"  "}.{"  "}
            {blogDatas?.authorName}
          </div>
          {/* )} */}
        </div>
      </div>

      {/* <BannerWrapper isMobile={isMobile} isSmallMobile={isSmallMobile}>
      <img
        src={blogDatas.image}
        // style={
        //   isMobile
        //     ? { width: "382px", height: "300px" }
        //     : { width: "1200px", height: "700px" }
        //     ? isSmallMobile
        //     : { height: "200px" }
        // }
        alt={blogDatas?.imageAltText}
      />
      <BannerTitle>{blogDatas?.mainTitle}</BannerTitle>
    </BannerWrapper> */}
      <BlogContainer>
        <img
          src={blogDatas.image}
          alt={blogDatas?.imageAltText}
          className="inner-img"
        />
        <div
          className="desc"
          dangerouslySetInnerHTML={{
            __html: blogDatas?.description,
          }}
        />
        {/* <div className="tag-wrapper">
        {!!blogDatas?.tags?.length &&
          blogDatas.tags?.map((data) => (
            <div key={data.inputValue} className="blog-tag">
              {data.inputValue}
            </div>
          ))}
      </div> */}
      </BlogContainer>
    </BlogWrapper>
  );
};

export default BlogContent;
