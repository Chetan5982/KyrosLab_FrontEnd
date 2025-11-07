import React from "react";

export const metadata = {
  title: "Lab Grown Diamonds -  Explore Bhanderi's CVD Diamonds (Type IIa)",
  description:
    "Bhanderi Lab Grown Diamonds: The epitome of lab to luxury. Explore our collection of rough & polished Lab Made Diamonds for sustainable brilliance.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds`,
  },
  openGraph: {
    type: "website",
    url: "https://blgdlab.com/lab-grown-diamonds",
    title: "Lab Grown Diamonds -  Explore Bhanderi's CVD Diamonds (Type IIa)",
    description:
      "Bhanderi Lab Grown Diamonds: The epitome of lab to luxury. Explore our collection of rough & polished Lab Made Diamonds for sustainable brilliance.",
    images: [
      {
        url: "https://images.blgdlab.com/Productpage/Compressimg/daimondnew-compressed.jpg",
        alt: "Diamond Image",
      },
    ],
  },
  robots: { index: true },
  twitter: {
    card: "summary",
    site: "@Bhanderi Lab Grown Diamonds",
    title: "Lab Grown Diamonds -  Explore Bhanderi's CVD Diamonds (Type IIa)",
    description:
      "Bhanderi Lab Grown Diamonds: The epitome of lab to luxury. Explore our collection of rough & polished Lab Made Diamonds for sustainable brilliance.",
    images: [
      {
        url: "https://images.blgdlab.com/Productpage/Compressimg/daimondnew-compressed.jpg",
      },
    ],
  },
};

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
