import { styled } from "@mui/system";

const Main = styled("div")`
  background-color: #024638;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  height: 80px;

  .header-btn {
    border: 1px solid #fff;
    padding: 10px 25px;
    border-radius: 10px;
    font-family: "Prumo Deck";
    font-size: 18px;
    font-weight: 600;
  }
  .container {
    max-width: 1000px;
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    color: white;
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

  @media screen and (max-width: 480px) {
    height: 63px;
    .header-btn {
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
    }
    .logo {
      width: auto;
      height: 27px;
    }
    .headericon {
      width: 24px;
    }
  }
`;

export { Main };
