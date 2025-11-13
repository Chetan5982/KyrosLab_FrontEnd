import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title: "Lab Grown Diamond Manufacturer in USA - CVD Diamonds - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in USA? Bhanderi GIA, IGI certified cost-effective diamond suppliers, exporters for buying CVD grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-usa`,
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamond Manufacturer USA",
    image: "https://blgdlab.com/LocationUSA/UsaOffice.png",
    "@id": " https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-usa",
    telephone: "+1 212 278 0905",
    address: {
      "@type": "PostalAddress",
      streetAddress: "551 5th Avenue, 7th Floor New York, NY 10176, USA.",
      addressLocality: "New York",
      postalCode: "10036",
      addressCountry: "US",
      addressRegion: "New York",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
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
