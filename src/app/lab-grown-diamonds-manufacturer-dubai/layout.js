import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title: "Lab Grown Diamond Manufacturer in Dubai - CVD Diamonds - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in Dubai? Bhanderi GIA, IGI certified cost-effective diamond suppliers, exporters for buying CVD grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-dubai`,
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamonds Manufacturer Dubai",
    image: "http://images.blgdlab.com/LocationDubai/dubaiofficeImg.png",
    "@id": " https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-dubai",
    telephone: "+971 45 147 853",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "38-F Almas Tower, 38th Floor, Jumeirah Lakes Tower, Jlt Dubai",
      addressLocality: "Dubai",
      postalCode: "500001",
      addressCountry: "AE",
      addressRegion: "Dubai",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "12:00",
        closes: "16:00",
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
