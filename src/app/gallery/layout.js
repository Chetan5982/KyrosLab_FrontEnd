import React from "react";

export const metadata = {
  title: "Gallery - Bhanderi Lab Grown Diamond Merchant",
  description: "Browse the allure of sustainable luxury with our exquisite Bhanderi lab grown diamonds gallery, featuring captivating photos to showcase true brilliance.",
  alternates: {
    canonical: `https://blgdlab.com/gallery`,
  },
  openGraph: {
    type: "website",
    url: "https://blgdlab.com/gallery",
    title: "Gallery - Bhanderi Lab Grown Diamond Merchant",
    description:
      "Browse the allure of sustainable luxury with our exquisite Bhanderi lab grown diamonds gallery, featuring captivating photos to showcase true brilliance.",
    images: [
      {
        url: "https://blgd-s3.s3.ap-south-1.amazonaws.com/Logo/bhanderi-lab-grown-diamonds.png",
      },
    ],
  },
  robots: {  index: true },
  twitter: {
    card: "summary",
    site: "@Bhanderi Lab Grown Diamonds",
    title: "Gallery - Bhanderi Lab Grown Diamond Merchant",
    description:
      "Browse the allure of sustainable luxury with our exquisite Bhanderi lab grown diamonds gallery, featuring captivating photos to showcase true brilliance.",
      images: [
        {
          url: "https://blgd-s3.s3.ap-south-1.amazonaws.com/Logo/bhanderi-lab-grown-diamonds.png",
        },
      ],
  },
};

const Layout = ({ children }) => {
  return children;
};

export default Layout;
