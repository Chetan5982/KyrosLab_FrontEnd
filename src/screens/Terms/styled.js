import { styled } from "@mui/material";

export const MainSection = styled("div")`
  padding: 5% 2%;
  background-color: rgb(249, 249, 249);
  max-width: 80%;
  margin: auto;

  .container {
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 2560px) {
    .container {
      max-width: 1800px;
    }
  }

  @media screen and (max-width: 1920px) {
    .container {
      max-width: 1300px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      max-width: 1000px;
    }
  }
  .headeing {
    font-family: "Prumo Deck";
    font-weight: 500;
    font-size: 28px;
    margin: 3% 0% 1% 0%;
  }
  .discription {
    font-family: "IBM Plex Sans";
    font-size: 18px;
  }
  .discription p {
    margin-bottom: 10px;
  }
  .discription ul li {
    list-style: disc;
    margin-left: 5rem;
  }
  @media screen and (max-width: 1024px) {
    padding: 10% 2% 5% 2%;
    .headeing {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 425px) {
    max-width: 92%;
    padding: 14% 2% 5% 2%;
    .headeing {
      font-size: 30px;
      margin: 6% 0% 1% 0%;
    }
    .discription ul li {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 375px) {
    .headeing {
      font-size: 26px;
    }
    .discription {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 320px) {
    padding: 18% 2% 6% 2%;
    .headeing {
      font-size: 24px;
    }
  }
`;
