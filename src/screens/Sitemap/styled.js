import styled from "@emotion/styled";

export const MainSection = styled("div")`
  background-color: rgb(249, 249, 249);
  margin-top: 80px;
  padding: 50px 0px;
  .container {
    max-width: 1300px;
    margin: auto;
  }
  .site_map_title h3 {
    color: #404e5c;
    font-family: "Prumo Deck";
    font-size: 24px;
    font-weight: 500;
    line-height: 17.7px;
    text-transform: capitalize;
    position: relative;
    padding-bottom: 20px;
  }
  .sitemap_arrow {
    color: #6c6c6c;
    font-family: "IBM Plex Sans";
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .sitemap_arrow:hover {
    color: #024638;
  }
  .site_maps_urls {
    margin-top: 20px;
  }
  .site_map_title h3::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: #024638;
    left: 0;
    bottom: 0;
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

  @media screen and (max-width: 600px) {
    .map_column_1,
    .map_column_2,
    .map_column_3,
    .map_column_4,
    .map_column_5,
    .map_column_6 {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 600px) {
    .map_column_1,
    .map_column_2,
    .map_column_3,
    .map_column_4,
    .map_column_5,
    .map_column_6 {
      margin-top: 20px;
      margin-bottom: 0px;
    }
  }
`;
