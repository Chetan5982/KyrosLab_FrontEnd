import { blogNewsUrl, nodeUrl } from "@/constants/constants";
import Blog from "@/screens/blog";
import BlogApi from "@/screens/blog/BlogApi";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;

  const blog = await fetch(`${nodeUrl}/blog/${id}`).then((res) => {
    return res.json();
  });
  if (!blog.data) {
    redirect(blogNewsUrl);
  }
  const meta = blog?.data?.metaRobots.split(",") || [];

  let metaObject = {};
  meta.forEach((item) => {
    metaObject[item] = true;
  });
  return {
    title: blog?.data?.metaTitle,
    description: blog?.data?.metaDescription,
    alternates: {
      canonical: blog?.data?.canonical,
    },
    openGraph: {
      title: blog?.data?.openGraphTitle,
      description: blog?.data?.openGraphDescription,
      images: [
        {
          url: blog?.data?.openGraphImage,
        },
      ],
    },
    twitter: {
      title: blog?.data?.twitterTitle,
      description: blog?.data?.twitterDescription,
      images: [
        {
          url: blog?.data?.twitterImage,
        },
      ],
    },
    robots: metaObject,
  };
}

const page = (props) => {
  return (
    <Blog>
      <BlogApi id={props.params.id} />
    </Blog>
  );
};

export default page;

export const dynamic = "force-dynamic";
