import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import "./globals.css";
import Script from "next/script";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import GoogleTranslate from "GoogleTranslate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhanderi Prime Lab Grown CVD Diamonds Manufacturer in India",
  description:
    "Bhanderi leading manufacturer of Type IIa lab grown diamonds in India, ensures excellent quality and craftsmanship with cutting-edge technology.",
  alternates: {
    canonical: `https://blgdlab.com/`,
  },
  openGraph: {
    type: "website",
    url: "https://blgdlab.com/",
    title: "Bhanderi Prime Lab Grown CVD Diamonds Manufacturer in India",
    description:
      "Bhanderi leading manufacturer of Type IIa lab grown diamonds in India, ensures excellent quality and craftsmanship with cutting-edge technology.",
    images: [
      {
        url: "https://blgd-s3.s3.ap-south-1.amazonaws.com/Logo/bhanderi-lab-grown-diamonds.png",
      },
    ],
  },
  robots: { index: true },
  twitter: {
    card: "summary",
    site: "@Bhanderi Lab Grown Diamonds",
    title: "Bhanderi Prime Lab Grown CVD Diamonds Manufacturer in India",
    description:
      "Bhanderi leading manufacturer of Type IIa lab grown diamonds in India, ensures excellent quality and craftsmanship with cutting-edge technology.",
    images: [
      {
        url: "https://blgd-s3.s3.ap-south-1.amazonaws.com/Logo/bhanderi-lab-grown-diamonds.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    // <Provider store={store}>
    <html lang="en-in">
      <head>
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <link
          rel="preload"
          href="../assets/fonts/prumo/PrumoDeck-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans&family=Roboto:ital,wght@0,400;1,700&display=swap"
          rel="stylesheet"
        />
        <Script id="google-analytics">
          {` (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-KMHB72B8");`}
        </Script>
        <Script id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '345662930529435');
            fbq('track', 'PageView');
            `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=345662930529435&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMHB72B8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Layout>{children}</Layout>
        {/* <GoogleTranslate /> */}
      </body>
    </html>
    // </Provider>
  );
}
