
import { styled } from "@mui/system";

export const ContainerWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  margin: 0 20px;
  position: relative;
  top: 10%;

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
`;
