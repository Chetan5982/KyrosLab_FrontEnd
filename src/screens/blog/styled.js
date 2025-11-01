import styled from "@emotion/styled";

export const Container = styled("div")`
  max-width: 1000px;
  margin: 91px auto 152px;

  .header {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 2560px) {
    max-width: 1800px;
    margin: auto;

    .header {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 1920px) {
    max-width: 1300px;

    .header {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1440px) {
    max-width: 1000px;

    .header {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 70px 20px;
  }

  @media screen and (max-width: 500px) {
    margin: 50px 20px;

    .header {
      font-size: 18px;
      // text-align: justify;
    }
  }
`;

// export const BannerWrapper = styled("div")`
//   // background-color: black;
//   /* background-image: ${(props) => `url(${props.url})`}; */
//   -webkit-background-position: center;
//   background-position: center;
//   -webkit-background-size: cover;
//   background-size: cover;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100vh; */
// `;

export const BannerTitle = styled("h1")`
  /* text-align: center; */
  /* font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 48px;
  color: #333;
  text-transform: capitalize;
  padding: 20px; */

  color: #000;
  font-family: "Prumo Deck";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;

  @media (max-width: 1440px) {
    font-size: 34px;
  }

  @media (max-width: 1024px) {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 570px) {
    font-size: 28px;
  }
`;

export const BlogWrapper = styled("div")`
  /* padding: 0 20px; */
  margin-top: 10%;

  .container {
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 2560px) {
    margin-top: 8%;
    .main-title {
      margin-left: 4%;
    }
  }
  @media screen and (max-width: 1440px) {
    margin-top: 10%;
    .main-title {
      margin-left: 0%;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 16%;
  }

  @media screen and (max-width: 570px) {
    margin-top: 18%;
  }
  @media screen and (max-width: 375px) {
    margin-top: 22%;
  }
  @media screen and (max-width: 320px) {
    margin-top: 26%;
  }
`;

export const BlogContainer = styled("div")`
  // color: #024638;
  width: 100%;
  max-width: 1200px;
  // padding: 80px 30px;
  background-color: #f9f9f9;
  margin: auto;
  padding-bottom: 20px;
  .inner-img {
    object-fit: cover;
  }

  .tag-wrapper {
    display: flex;
    flex-flow: wrap;
    gap: 20px;
    padding: 17px 30px 30px;
  }

  .blog-tag {
    padding: 12px 30px;
    background: rgb(206, 206, 206);
    color: #000;
    font-family: "IBM Plex Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  /* img {
     width: 100%;
     height: 700px;
   } */
  .desc {
    margin: 3% 3%;

    img {
      width: 50%;
      height: 500px;
    }
    ol {
      list-style: auto;
      padding: revert;
    }

    ul {
      list-style: unset;
      padding: revert;
    }
    // padding-bottom: 8%;
    /* margin: 80px 30px 0px; */
  }

  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
  h5 {
    font-size: 14px;
  }
  h6 {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    img {
      height: auto !important;
    }
  }

  /* @media (max-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 1440px) {
    max-width: 1024px;
    padding: 130px 120px 150px;
    margin-left: 0px;
  }

  @media (max-width: 1024px) {
    max-width: 768px;
    padding: 100px 80px 110px;
  }

  @media (max-width: 768px) {
    margin: 0 auto 100px;
  }

  @media (max-width: 570px) {
    padding: 32px;
    margin: 0 auto 60px;
  } */
`;

// export const BlogMarque = styled("div")`
//   width: 100%;
//   height: 90px;
//   background: #024638;

//   .marquee {
//     position: relative;
//     width: 100vw;
//     max-width: 100%;
//     height: 200px;
//     overflow-x: hidden;
//   }

//   .track {
//     position: absolute;
//     white-space: nowrap;
//     will-change: transform;
//     animation: marquee 32s linear infinite;
//   }

//   @keyframes marquee {
//     from {
//       transform: translateX(0);
//     }
//     to {
//       transform: translateX(-50%);
//     }
//   }

//   .marque-text {
//     font-family: "Prumo Deck";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 64px;
//     line-height: 77px;
//     /* identical to box height */

//     display: flex;
//     align-items: center;
//     text-transform: uppercase;

//     color: #efedf2;
//   }

//   @media (max-width: 768px) {
//     height: 70px;
//     .marque-text {
//       font-size: 30px;
//     }
//   }
// `;

export const LatestBlogTitle = styled("div")`
  padding: 50px 0px 0px;
  color: #000;
  text-align: center;
  font-family: "Prumo Deck";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const CardWrapper = styled("div")`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 100px;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
