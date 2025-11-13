import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title: "Lab Grown Diamond Manufacturer in Antwerp - CVD Diamonds - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in Antwerp? Bhanderi GIA, IGI certified Type IIa diamond suppliers, exporters for buying CVD grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-antwerp`,
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamonds Manufacturer Antwerp",
    image: "https://blgdlab.com/LocationAntwerp/AntwerpofficeImg.png",
    "@id": " https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-antwerp",
    telephone: "+32 3 685 21 31",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schupstraat 18-20 Bus 1 2018 Antwerpen",
      addressLocality: "Antwerp",
      postalCode: "2018",
      addressCountry: "BE",
      addressRegion: "Flanders",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "17:00",
    },
  };
  return (
    <>
      <Schema data={schemaData} />
      {children}
    </>
  );
};

export default Layout;
