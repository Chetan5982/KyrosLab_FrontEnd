import { styled } from "@mui/system";

export const BlogSliderWrapper = styled("div")`
    background: ${(props) =>
        `linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)), url(${props.url})`};
    /* background-image: ${(props) => `url('${props.url}')`}; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    display: flex !important;
    align-items: center !important;
    height: 92vh;

    margin-top: 80px;

    @media screen and (max-width: 1880px) {
        height: 725px;
    }

    @media screen and (max-width: 1440px) {
        height: 725px;
    }

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 500px) {
        align-items: flex-end !important;
        margin-top: 60px;
    }
`;
export const CustomSlider = styled("div")`
    .custom_slider .slick-dots {
        bottom: 35px !important;
    }
    .custom_slider .slick-dots li button:before {
        content: "▪";
        font-size: 45px;
        color: #a4c89a;
    }
`;
export const BannerWrapper = styled("div")`
    // padding: 264px 0 153px;
`;

export const BannerIndex = styled("div")`
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    text-transform: capitalize;
    color: #ffffff;

    @media screen and (max-width: 1440px) {
        font-size: 105px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 85px;
    }

    @media screen and (max-width: 500px) {
        font-size: 62px;
    }
`;

export const BannerTitle = styled("div")`
    color: #fff;
    font-size: 64px;
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

    width: 100%;
    max-width: 911px;

    @media screen and (max-width: 1440px) {
        font-size: 45px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 31px;
        font-weight: 500;
    }
`;

export const BannerDeacription = styled("div")`
    color: #fff;
    font-size: 20px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 160.5%;
    width: 100%;

    margin-top: 5px;
    max-width: 996px;

    @media screen and (max-width: 1440px) {
        font-size: 22px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 18px;
    }

    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const BannerButton = styled("button")`
    border: none;
    outline: none;
    padding: 9px 51px;
    background-color: #a4c89a;
    color: #024638;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    color: #024638;

    margin-top: 50px;

    @media screen and (max-width: 1440px) {
        margin-top: 40px;
    }
    @media screen and (max-width: 1024px) {
        margin-top: 30px;
    }

    @media screen and (max-width: 500px) {
        margin-top: 20px;
    }
`;

export const BannerContainer = styled("div")`
    // max-width: 1000px;
    // margin: 0px auto;
    // padding: 100px;
    // @media screen and (max-width: 2560px) {
    //   max-width: 1800px;
    // }

    // @media screen and (max-width: 1920px) {
    //   max-width: 1350px;
    // }

    // @media screen and (max-width: 1440px) {
    //   max-width: 1000px;
    // }

    // @media screen and (max-width: 1024px) {
    //   margin: 0px 20px;
    // }
    max-width: 1000px;
    margin: 12% auto 16% auto;

    .header {
        font-family: "IBM Plex Sans";
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 2560px) {
        max-width: 1800px;

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
            text-align: justify;
        }
    }
`;

export const Container = styled("div")`
    // max-width: 1000px;
    // margin: 0px auto;
    // padding: 100px;
    // @media screen and (max-width: 2560px) {
    //   max-width: 1800px;
    // }

    // @media screen and (max-width: 1920px) {
    //   max-width: 1350px;
    // }

    // @media screen and (max-width: 1440px) {
    //   max-width: 1000px;
    // }

    // @media screen and (max-width: 1024px) {
    //   margin: 0px 20px;
    // }

    .active-tab {
        background-color: rgb(2, 70, 56) !important;
        color: #fff !important;
    }

    max-width: 1000px;
    margin: 120px auto;

    .header {
        font-family: "IBM Plex Sans";
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 2560px) {
        max-width: 1800px;

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
            text-align: justify;
        }
    }
`;

export const Tab = styled("div")`
    padding: 14px 30px;
    color: #333;
    font-family: "IBM Plex Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.34px;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid var(--studio-lightmode-placeholders-bac-2-d-6, #bac2d6);
    background: var(--studio-darkmode-allwhite-ffffff, #fff);
    user-select: none;
`;

export const BlogTitle = styled("h1")`
    font-family: "Prumo Deck";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    text-transform: capitalize;
    color: #000000;
    text-align: center;
    margin-bottom: 57px;

    @media screen and (max-width: 1440px) {
        font-size: 45px;
    }
    @media screen and (max-width: 1024px) {
        font-size: 35px;
    }

    @media screen and (max-width: 500px) {
        font-size: 32px;
    }
`;

export const CardTitle = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;
    color: #ffffff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
        font-size: 15px;
    }
`;

export const MainCardTitle = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    color: #ffffff;
    width: 100%;
    max-width: 732px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    @media screen and (max-width: 1440px) {
        font-size: 15px;
        max-width: 466px;
    }
`;

export const CardDate = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
    color: #ffffff;
    margin-top: 10px;

    @media screen and (max-width: 1440px) {
        font-size: 10px;
        margin-top: 5px;
    }
`;

export const MainCardDate = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
    color: #ffffff;
    margin-top: 10px;

    @media screen and (max-width: 1440px) {
        margin-top: 5px;
    }
`;

export const CardDescription = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
    color: #ffffff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 20px 0px 32px;

    @media screen and (max-width: 1440px) {
        margin: 5px 0px 20px;
        font-size: 12px;
    }
`;

export const MainCardDescription = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
    color: #ffffff;
    width: 100%;
    // max-width: 392px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
`;

export const CardWrapper = styled("div")`
    width: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 177px;
    margin-top: 57px;

    @media screen and (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const BlogCard = styled("div")`
    border: none;
    background-color: #024638;
    color: #fff;
    height: 100%;
`;

export const CardImage = styled("img")`
    height: 50%;
    width: 100%;
    border: none;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        height: 100%;
    }
`;
export const MainCardImage = styled("img")`
    // height: 60%;
    width: 100%;
    border: none;
    object-fit: cover;
    @media screen and (max-width: 1024px) {
        height: 100%;
    }
`;

export const CardBody = styled("div")`
    height: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    @media screen and (max-width: 1440px) {
        padding: 15px;
    }
    @media screen and (max-width: 1024px) {
        height: 100%;
    }
`;

export const MainCardBody = styled("div")`
    height: 27%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        height: 100%;
    }
`;

export const CardButton = styled("button")`
    padding: 4px 27px;
    background-color: #a4c89a;
    border: none;
    outline: none;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #024638;
`;

export const QuateCard = styled("div")`
    grid-row: 1/3;
    grid-column: 3/4;
    background: #024638;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    .date-text {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        display: flex;
        align-items: flex-end;
        text-transform: capitalize;
        color: #ffffff;
        width: 100%;
        flex-grow: 1;
        justify-content: flex-start;
        padding: 56px;
    }
`;

export const QuateWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    // height: 100%;
    flex-grow: 2;
    padding: 30px;
`;

export const QuateOne = styled("div")`
    width: 100%;
    margin-bottom: 25px;
`;
export const QuateTwo = styled("div")`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const QuateText = styled("div")`
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #ffffff;

    @media screen and (max-width: 1440px) {
        font-size: 30px;
    }
    @media screen and (max-width: 425px) {
        font-size: 20px;
    }
`;

export const BasicCard = styled("div")`
    height: 500px;
    @media screen and (max-width: 1024px) {
        height: 100%;
        width: 100%;
    }
`;

export const MainCard = styled("div")`
    grid-row: 2/4;
    grid-column: 1/3;
    @media screen and (max-width: 1024px) {
        height: 100%;
        width: 100%;
    }
`;
