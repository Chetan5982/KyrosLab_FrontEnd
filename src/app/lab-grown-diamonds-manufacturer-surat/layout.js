import Schema from "@/components/schema/Schema";
import React from "react";
export const metadata = {
  title: "Lab Grown Diamond Manufacturer in Surat - Bhanderi India",
  description:
    "Bhanderi, Top lab grown diamond manufacturer and suppliers in Surat. Offering sustainable, exquisite diamonds for brighter and responsible tomorrow.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-surat`,
    languages: {
      "x-default": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "en-in": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "hi-in":
        "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat/hi-in",
    },
  },

  robots: { index: true },
};
const Layout = ({ children }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lab Grown Diamonds Manufacturer Surat",
    image: "http://images.blgdlab.com/LocationSURAT/SuratOffice.png",
    "@id": "https://blgdlab.com/",
    url: "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
    telephone: "+91 85003 85003",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "4th Floor, BLGD Corporation, Akshar Building, Opp. Mehta Petrol Pump, Katargam",
      addressLocality: "Surat",
      postalCode: "395004",
      addressCountry: "IN",
      addressRegion: "Gujarat",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
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
