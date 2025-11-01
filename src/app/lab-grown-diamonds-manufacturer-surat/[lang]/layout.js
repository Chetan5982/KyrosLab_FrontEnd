const englishMetadata = {
  title: "Lab Grown Diamond Manufacturer in Surat - Bhanderi India",
  description:
    "Bhanderi, Top lab grown diamond manufacturer and suppliers in Surat. Offering sustainable, exquisite diamonds for brighter and responsible tomorrow.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-surat/en-in`,
    languages: {
      "x-default": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "en-in": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "hi-in":
        "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat/hi-in",
    },
  },
};

const hindiMetadata = {
  title: "सूरत में लैब ग्रोन डायमंड निर्माता - भंडेरी इंडिया",
  description:
    "भंडेरी, सूरत में शीर्ष प्रयोगशाला विकसित हीरा निर्माता और आपूर्तिकर्ता। उज्जवल और जिम्मेदार कल के लिए टिकाऊ, उत्तम हीरे की पेशकश।",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-surat/hi-in`,
    languages: {
      "x-default": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "en-in": "https://blgdlab.com/lab-grown-diamonds-manufacturer-surat",
      "hi-in": 'https://blgdlab.com/lab-grown-diamonds-manufacturer-surat/hi-in',
    },
  },
};

export async function generateMetadata({ params, searchParams }, parent) {
  console.log(params, "[p[p[p[p[p");
  return params.lang == "hi-in" ? hindiMetadata : englishMetadata
  
}
const Layout = ({ children, params: { lang } }) => {
  return children;
};

export default Layout;
