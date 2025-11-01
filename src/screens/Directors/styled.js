import { styled } from "@mui/system";

export const Container = styled("div")`
  max-width: 1000px;
  margin: auto auto;
  .directordaimond {
    width: 60%;
  }
  @media screen and (max-width: 2560px) {
    max-width: 1800px;
    .directordaimond {
      width: 50%;
    }
  }

  @media screen and (max-width: 1920px) {
    max-width: 1300px;
    .directordaimond {
      width: 60%;
    }
  }

  @media screen and (max-width: 1444px) {
    max-width: 1000px;
    .directordaimond {
      width: 60%;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 00px 20px;
    .directordaimond {
      width: 60%;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0px 20px;
    .directordaimond {
      width: 60%;
    }
  }
`;

export const Title = styled("h1")`
  font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  text-transform: capitalize;
  color: #000;
  // margin-right: 90px;

  @media screen and (max-width: 807px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 519px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 10px;
    font-size: 28px;
  }
  @media screen and (max-width: 425px) {
    margin-right: 0px;
    font-size: 28px;
  }

  @media screen and (max-width: 375px) {
    font-size: 23px;
  }
  @media screen and (max-width: 320px) {
    font-size: 23px;
  }
`;

export const DescOne = styled("div")`
  font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-transform: capitalize;
  color: #ffffff;
  max-width: 788px;
  width: 56%;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 135.03%;
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 77%;
   
  }
  @media screen and (min-width: 1400px) {
    width: 72%;
  }
`;
export const DescTwo = styled("div")`
  // font-family: "IBM Plex Sans";
  // font-style: normal;
  // font-weight: 500;
  // font-size: 20px;
  // font-style: normal;
  // text-align: center;
  // // text-transform: capitalize;
  // // max-width: 1295px;
  // color: #ffffff;
  // width: 100%;
  // margin-top: 15px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  width: 100%;
  margin-top: 15px;
  line-height: 33px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 140.6%;
    text-align: left;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const EthicalWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  .bg-color {
    background-color: #f9f9f9;
    width: 80%;
    margin-bottom: 57px;
  }
  .header {
    .header-1 {
      /* font-family: "Prumo Deck";
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      text-transform: capitalize;
        color: #000000; */
      color: #000;
      font-family: "Prumo Deck";
      font-size: 64px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 1.6%;
    }
    .header-2 {
      /* font-family: "Prumo Deck";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      text-transform: capitalize;

      color: #000000; */

      color: #000;
      font-family: "Prumo Deck";
      font-size: 36px;
      font-style: normal;
      font-weight: 400;
      /* line-height: 135.031%; */
      text-transform: capitalize;
    }
  }
  .ethics-topic {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 100px;
    .ethics-title {
      /* font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      text-transform: capitalize;
      color: #000000;
      margin-bottom: 25px; */

      color: #000;
      font-family: "IBM Plex Sans";
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 115.531%; /* 34.659px */
      padding-bottom: 25px;
    }
    .ethics-list-Wrapper {
      width: 100%;
      ul {
        display: flex;
        flex-direction: column;
        gap: 13px;
        padding: 0 0 0 30px;
        list-style: disc;
        li {
          /* font-family: "IBM Plex Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          text-transform: capitalize;
          color: #000000; */

          color: #000;
          font-family: "IBM Plex Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 115.531%;
        }
      }
      hr {
        margin: 30px 0;
      }
    }
  }
  @media screen and (max-width: 2560px) {
    .bg-color {
      width: 90%;
    }
  }
  @media screen and (max-width: 1920px) {
    .bg-color {
      width: 80%;
    }
  }
  @media screen and (max-width: 1440px) {
    .bg-color {
      width: 80%;
    }
  }

  @media screen and (max-width: 1024px) {
    .bg-color {
      width: 85%;
    }
    .header .header-1 {
      font-size: 54px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .bg-color {
      width: 95%;
    }
    .header {
      .header-1 {
        font-size: 26px;
        line-height: 135.03%;
        margin-bottom: 5px;
      }
      .header-2 {
        font-size: 26px;
        line-height: 115.53%;
      }
    }

    .ethics-topic {
      margin-top: 70px;

      .ethics-title {
        font-weight: 400;
        font-size: 26px;
        line-height: 115.53%;
      }

      .ethics-list-Wrapper {
        ul {
          padding: 0 0 0 17px;

          li {
            font-size: 16px;
            line-height: 26px;
          }
        }

        hr {
          margin: 15px 0;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .bg-color {
      width: 90%;
    }
    .ethics-topic {
      .ethics-title {
        font-size: 24px;
      }
    }
  }
  @media screen and (max-width: 320px) {
    .ethics-topic {
      .ethics-title {
        font-size: 23px;
      }
    }
    .header {
      .header-2 {
        font-size: 22px;
      }
    }
  }
`;

export const LastSection = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 100%;
    height: 100%;
  }

  .description {
    position: absolute;
    top: 0;
    max-width: 1000px;
    height: 100%;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 44px;
  }

  p {
    font-family: "IBM Plex Sans";
    font-size: 20px;
    text-align: center;
    // text-transform: capitalize;
    color: white;
    margin-bottom: 30px;
  }

  button {
    color: #024638;
    font-size: 16px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
    background: #a4c89a;
    padding: 9px 33px;
  }

  @media screen and (max-width: 2560px) {
    .description {
      max-width: 1800px;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 300;
      margin-bottom: 30px;
      width: 100%;
      max-width: 1295px;
    }

    button {
      padding: 11px 59px;
    }
  }

  @media screen and (max-width: 1920px) {
    .description {
      max-width: 1300px;
    }

    p {
      color: #fff;
      text-align: center;
      font-size: 32px;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: 300;
      margin-bottom: 30px;
      width: 100%;
      max-width: 1295px;
    }

    button {
      padding: 2px 45px;
    }
  }

  @media screen and (max-width: 1440px) {
    .description {
      max-width: 1000px;
    }
    p {
      font-size: 27px;
    }
  }

  @media screen and (max-width: 1024px) {
    p {
      font-size: 20px;
      line-height: 25px;
    }
    button {
      font-size: 16px;
      padding: 7px 30px;
    }
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 0px;

    .img {
      height: 320px;
    }

    p {
      font-size: 14px;
      line-height: 19px;
      color: #ffffff;
    }

    button {
      font-size: 15px;
      padding: 0px 30px;
    }
  }
  @media screen and (max-width: 425px) {
    button {
      font-size: 15px;
      padding: 0px 21px;
    }
  }
`;
