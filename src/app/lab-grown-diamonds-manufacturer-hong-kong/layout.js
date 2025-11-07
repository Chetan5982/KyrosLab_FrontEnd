import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title:
    "Lab Grown Diamond Manufacturer in Hong Kong - CVD Diamonds - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in Hong Kong? Bhanderi GIA, IGI certified cost-effective diamond suppliers, exporters for buying CVD grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-hong-kong`,
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamonds Manufacturer Hong Kong",
    image: "https://images.blgdlab.com/LocationHongKong/hongkongofficesec.png",
    "@id": " https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-hong-kong",
    telephone: "+852 2723 1243",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1006, Hung Hom Commercial Center Tower B, 37 Ma Tau Wai Road, Hung Hom",
      addressLocality: "Kowloon",
      postalCode: "00000",
      addressCountry: "HK",
      addressRegion: "Hong Kong",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
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
