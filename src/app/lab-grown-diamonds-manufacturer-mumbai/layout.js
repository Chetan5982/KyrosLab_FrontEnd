import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title: "Top Lab Grown Diamonds Manufacturer in Mumbai - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in Mumbai? Bhanderi India's biggest diamond suppliers, exporters for buying certified grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai`,
    languages: {
      "x-default": "https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai",
      "en-in": "https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai",
      "hi-in":
        "https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai/hi-in",
    },
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamonds Manufacturer Mumbai",
    image: "https://blgdlab.com/LocationMumbai/MumbaiofficesImg.png",
    "@id": " https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai",
    telephone: "+91 97264 32003",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "FD-4120 To DW-3100, F-  Tower,Bharat Diamond Bourse, Bandra Kurla Complex, Bandra (E), 400051",
      addressLocality: "Mumbai",
      postalCode: "400051",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:30",
        closes: "14:00",
      },
    ],
  };
  return (
    <>
      <Schema data={schemaData} />
      {children}
    </>
  );
};

export default Layout;
