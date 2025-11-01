const englishMetadata = {
  title: "Top Lab Grown Diamonds Manufacturer in Mumbai - Bhanderi",
  description:
    "Looking for Top lab grown diamonds manufacturer in Mumbai? Bhanderi India's biggest diamond suppliers, exporters for buying certified grown diamond.",
  alternates: {
    canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai/en-in`,
    languages: {
      'x-default': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai',
      'en-in': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai',
      'hi-in': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai/hi-in',
    },
  },
};

const hindiMetadata = {
  title: "मुंबई की उच्च विकसित लैब ग्रोन हिरा निर्माता - भंडेरी इंडिया",
    description:
      "क्या आप मुंबई में शीर्ष प्रयोगशाला निर्मित हीरे निर्माता की तलाश कर रहे हैं? प्रमाणित विकसित हीरे खरीदने के लिए भंडेरी भारत का सबसे बड़ा हीरा आपूर्तिकर्ता, निर्यातक है।",
    alternates: {
      canonical: `https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai/hi-in`,
      languages: {
        'x-default': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai',
        'en-in': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai',
        'hi-in': 'https://blgdlab.com/lab-grown-diamonds-manufacturer-mumbai/hi-in'
      },
    }
  };

export async function generateMetadata({ params, searchParams }, parent) {
  console.log(params, "[p[p[p[p[");
  return  params.lang == "hi-in" ? hindiMetadata : englishMetadata
};
const Layout = ({ children, params: { lang } }) => {
  return children;
};

export default Layout;
