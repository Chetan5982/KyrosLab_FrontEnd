import {
    ProductDaimond,
    ProductDaimondMobile,
    ProductDaimondTablet,
    ProductMainBanner,
    ProductMainBannermobile,
} from "@/constants/images";
import { styled } from "@mui/system";
import { isIOS } from "react-device-detect";

export const BannerSection = styled("div")`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export const BannerWrapper = styled("div")`
    clip: rect(0, auto, auto, 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const IOSBanner = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    background-image: url(${ProductMainBanner});
    min-height: 95vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transform: translateZ(0);
    will-change: transform;

    img {
        height: 95vh;
        width: 100%;
    }

    .container {
        position: absolute;
        max-width: 1000px;
        height: 100%;
    }

    .header {
        font-family: "Prumo Deck";
        color: #024638;
        text-transform: capitalize;
        font-size: 64px;
        line-height: normal;
        position: absolute;
        font-style: normal;
        font-weight: 400;
    }

    .header1 {
        top: 120px;
        right: 0;
    }

    .header2 {
        bottom: 100px;
        left: 0;
        width: 556px;
        line-height: 126.02%;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .header {
            font-size: 80px;
        }

        .header2 {
            width: 785px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .header {
            font-size: 64px;
        }

        .header2 {
            width: 556px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .header {
            font-size: 55px;
        }

        .header2 {
            width: 556px;
        }
    }

    @media screen and (max-width: 1024px) {
        .header {
            font-size: 40px;
            margin: 0 20px;
        }

        .header2 {
            width: 480px;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ProductMainBannermobile});

        .header {
            font-size: 32px;
            line-height: 118.531%;
        }

        .header2 {
            width: 350px;
        }
    }

    @media screen and (max-width: 650px) {
        .header {
            font-size: 24px;
        }

        .header1 {
            top: 50px;
            right: 0;
            width: 150px;
            text-align: center;
        }

        .header2 {
            bottom: 90px;
            left: 0;
            width: 215px;
        }
    }

    @media screen and (max-width: 375px) {
        .header {
            font-size: 20px;
        }
    }
`;

const Banner = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    background-image: url(${ProductMainBanner});
    min-height: 95vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    /* ----- only for parallax animation --- */
    position: fixed;
    /* display: block; */
    top: 80px;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transform: translateZ(0);
    will-change: transform;
    /* ------------- */

    img {
        height: 95vh;
        width: 100%;
    }

    .container {
        position: absolute;
        max-width: 1000px;
        height: 100%;
    }

    .header {
        font-family: "Prumo Deck";
        color: #024638;
        text-transform: capitalize;
        font-size: 64px;
        line-height: normal;
        position: absolute;
        font-style: normal;
        font-weight: 400;
    }

    .header1 {
        top: 120px;
        right: 0;
    }

    .header2 {
        bottom: 100px;
        left: 0;
        width: 556px;
        line-height: 126.02%;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .header {
            font-size: 90px;
        }

        .header2 {
            width: 785px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .header {
            font-size: 64px;
        }

        .header2 {
            width: 556px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .header {
            font-size: 55px;
        }

        .header2 {
            width: 556px;
        }
    }

    @media screen and (max-width: 1024px) {
        .header {
            font-size: 40px;
            margin: 0 20px;
        }

        .header2 {
            width: 480px;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ProductMainBannermobile});
        // top:0%;
        .header {
            font-size: 32px;
            line-height: 118.531%;
        }

        .header2 {
            width: 350px;
        }
    }

    @media screen and (max-width: 650px) {
        .header {
            font-size: 24px;
        }

        .header1 {
            top: 90px;
            right: 0;
            width: 150px;
            text-align: center;
        }

        .header2 {
            bottom: 90px;
            left: 0;
            width: 215px;
        }
    }
    @media screen and (max-width: 375px) {
        .header {
            font-size: 20px;
        }
    }
`;

export const IOSLabToLuxury = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${ProductDaimond});
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transform: translateZ(0);
    will-change: transform;

    img {
        width: 100%;
    }

    .black {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .container {
        position: absolute;
        max-width: 1000px;
        margin-top: 60px;
    }

    .content {
        width: 536px;
        margin-left: auto;
    }

    .header {
        position: relative;
        color: #ffffff;
        font-size: 40px;
        font-family: "Prumo Deck";
        font-style: normal;
        font-weight: 400;
        line-height: 152.559%;
        text-transform: uppercase;
        margin-bottom: 30px;

        .arrow {
            position: absolute;
            top: -65px;
            left: 180px;
            width: 160px;
        }

        .highlight {
            font-weight: 600;
            color: #024638;
            background-color: #fff;
            padding: 0 10px;
        }
    }

    .description {
        color: #ffffff;
        font-size: 20px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        line-height: 165.1%;
        margin-top: 20px;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .content {
            width: 840px;
        }

        .header {
            font-size: 60px;

            .arrow {
                top: -100px;
                left: 240px;
                width: 260px;
            }
        }

        .description {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .content {
            width: 536px;
        }

        .header {
            font-size: 40px;

            .arrow {
                top: -65px;
                left: 180px;
                width: 160px;
            }
        }

        .description {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .content {
            width: 462px;
        }

        .header {
            font-size: 35px;

            .arrow {
                top: -53px;
                left: 145px;
                width: 144px;
            }
        }

        .description {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1024px) {
        .content {
            width: 430px;
            margin-right: 20px;
        }

        .header {
            font-size: 30px;

            .arrow {
                top: -55px;
                left: 130px;
                width: 130px;
            }
        }

        .description {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ProductDaimondMobile});

        .container {
            position: absolute;
            bottom: 0;
        }

        .content {
            width: auto;
            margin: 20px 20px 40px;
        }

        .header {
            font-size: 32px;
            line-height: 132.559%;
            text-transform: capitalize;
            margin-bottom: 15px;

            .arrow {
                top: -50px;
                left: 130px;
                width: 120px;
            }
        }

        .description {
            font-size: 16px;
            line-height: 146%;
            text-transform: capitalize;
            margin-top: 10px;
        }
    }
`;

const LabToLuxury = styled("div")`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${ProductDaimond});
    min-height: 100vh;
    ${() =>
        !isIOS &&
        `
  // background-attachment: fixed;
`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    //------ only for paralax animation ---
    position: fixed;
    /* display: block; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    transform: translateZ(0);
    will-change: transform;
    /* --------------------- */

    img {
        width: 100%;
    }

    .black {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .container {
        position: absolute;
        max-width: 1000px;
        margin-top: 60px;
    }

    .content {
        width: 536px;
        margin-left: auto;
    }

    .header {
        position: relative;
        color: #ffffff;
        font-size: 40px;
        font-family: "Prumo Deck";
        font-style: normal;
        font-weight: 400;
        line-height: 152.559%;
        text-transform: uppercase;
        margin-bottom: 30px;

        .arrow {
            position: absolute;
            top: -65px;
            left: 180px;
            width: 160px;
        }

        .highlight {
            font-weight: 600;
            color: #024638;
            background-color: #fff;
            padding: 0 10px;
        }
    }

    .description {
        color: #ffffff;
        font-size: 20px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        line-height: 165.1%;
        margin-top: 20px;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .content {
            width: 840px;
        }

        .header {
            font-size: 60px;

            .arrow {
                top: -100px;
                left: 240px;
                width: 260px;
            }
        }

        .description {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .content {
            width: 536px;
        }

        .header {
            font-size: 40px;

            .arrow {
                top: -65px;
                left: 180px;
                width: 160px;
            }
        }

        .description {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .content {
            width: 462px;
        }

        .header {
            font-size: 35px;

            .arrow {
                top: -53px;
                left: 145px;
                width: 144px;
            }
        }

        .description {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1024px) {
        .content {
            width: 430px;
            margin-right: 20px;
        }

        .header {
            font-size: 30px;

            .arrow {
                top: -55px;
                left: 130px;
                width: 130px;
            }
        }

        .description {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 768px) {
        background-image: url(${ProductDaimondTablet});

        .container {
            position: absolute;
            bottom: 0;
        }

        .content {
            width: auto;
            margin: 20px 20px 40px;
        }

        .header {
            font-size: 24px;
            line-height: 132.559%;
            text-transform: capitalize;
            margin-bottom: 15px;

            .arrow {
                top: -50px;
                left: 100px;
                width: 120px;
            }
        }

        .description {
            font-size: 14px;
            line-height: 146%;
            text-transform: capitalize;
            margin-top: 10px;
        }
    }
    @media screen and (max-width: 425px) {
        background-image: url(${ProductDaimondMobile});
    }
    @media screen and (max-width: 320px) {
        .header {
            .arrow {
                top: -50px;
                left: 90px;
                width: 120px;
            }
        }
    }
`;

const LabGrownDiamonds = styled("div")`
    display: flex;

    .left {
        flex: 1;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .section3-right {
        justify-content: start;
    }

    .right {
        flex: 1;

        img {
            width: 100%;
        }
    }

    .left > div {
        width: 440px;
        margin-right: 55px;
    }

    .section3-right > div {
        margin-right: 0;
        margin-left: 55px;
    }

    .header {
        color: #000;
        font-size: 64px;
        font-family: "Prumo Deck";
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
    }

    .title {
        color: #000;
        font-size: 24px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        line-height: 35px;
        margin: 30px 0;
    }

    .description {
        color: #000;
        // text-align: justify;
        font-size: 20px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        line-height: 140.6%;
        margin-top: 20px;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .left > div {
            width: 840px;
        }

        .header {
            font-size: 90px;
        }

        .title {
            font-size: 40px;
            margin: 40px 0;
            line-height: 50px;
        }

        .description {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .left > div {
            width: 530px;
            margin-right: 110px;
        }

        .section3-right > div {
            margin-right: 0;
            margin-left: 70px;
        }

        .header {
            font-size: 64px;
        }

        .title {
            font-size: 24px;
            margin: 30px 0;
            line-height: 35px;
        }

        .description {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .left > div {
            width: 440px;
            margin-right: 55px;
        }

        .section3-right > div {
            margin-right: 0;
            margin-left: 55px;
        }

        .header {
            font-size: 55px;
        }

        .title {
            font-size: 20px;
        }

        .description {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1024px) {
        .left > div {
            width: 430px;
            margin-right: 45px;
        }

        .section3-right > div {
            margin-right: 0;
            margin-left: 45px;
        }

        .header {
            font-size: 35px;
        }

        .title {
            font-size: 18px;
            line-height: initial;
            margin: 20px 0;
        }

        .description {
            font-size: 16px;
            margin-top: 10px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;

        .right {
            order: 1;
        }

        .left {
            order: 2;
        }

        .left > div {
            width: auto;
            margin: 20px 7px 50px 11px;
        }

        .header {
            font-size: 32px;
            font-weight: 400;
            margin-top: 10px;
            width: 300px;
        }

        .title {
            font-size: 18px;
            font-weight: 500;
            line-height: 27px;
            text-transform: capitalize;
            margin: 15px 0;
        }

        .description {
            font-size: 16px;
            margin-top: 10px;
        }
    }
`;

const IIADiamonds = styled("div")`
    display: flex;

    .left {
        flex: 1;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .right {
        flex: 1;

        img {
            width: 100%;
        }
    }

    .left > div {
        width: 440px;
        margin-right: 55px;
    }

    .header {
        color: #000;
        font-size: 64px;
        font-family: "Prumo Deck";
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize;
        margin-bottom: 40px;
    }

    .description {
        color: #000;
        // text-align: justify;
        font-size: 20px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        line-height: 140.6%;
        margin: 20px 0;
    }

    .footer {
        color: #000;
        font-size: 24px;
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        line-height: 35px;
        text-transform: capitalize;
    }

    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }

        .left > div {
            width: 840px;
        }

        .header {
            font-size: 90px;
            margin-bottom: 60px;
        }

        .description {
            font-size: 28px;
        }

        .footer {
            font-size: 34px;
        }
    }

    @media screen and (max-width: 1920px) {
        .container {
            max-width: 1300px;
        }

        .left > div {
            width: 550px;
            margin-right: 95px;
        }

        .header {
            font-size: 64px;
            margin-bottom: 40px;
        }

        .description {
            font-size: 20px;
        }

        .footer {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 1440px) {
        .container {
            max-width: 1000px;
        }

        .left > div {
            width: 440px;
            margin-right: 55px;
        }

        .header {
            font-size: 55px;
        }

        .description {
            font-size: 18px;
        }

        .footer {
            font-size: 18px;
            line-height: 140.6%;
        }
    }

    @media screen and (max-width: 1024px) {
        .left > div {
            width: 430px;
            margin-right: 45px;
        }

        .header {
            font-size: 35px;
            margin-bottom: 20px;
        }

        .description {
            font-size: 16px;
            margin: 10px 0;
        }

        .footer {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;

        .left {
            justify-content: center;
            align-items: center;
        }

        .left > div {
            width: auto;
            margin: 20px 20px;
        }

        .header {
            font-size: 32px;
            font-weight: 400;
            margin-top: 10px;
        }

        .description {
            font-size: 16px;
            line-height: 140.6%;
            margin-bottom: 10px;
        }

        .footer {
            font-size: 18px;
            margin-top: 15px;
        }
    }
`;
export const Unfasten = styled("div")`
    // margin: 0 3%;
    background-color: rgb(249, 249, 249);
    width: 75%;
    margin: auto;
    .container {
        max-width: 1300px;
        width: 100%;
        margin: auto;
    }

    .first-pere .main-title {
        font-size: 36px;
        font-weight: 700;
    }

    .inner_Link {
        font-weight: bold;
        color: #024638;
    }
    .main-title {
        font-size: 32px;
        font-family: "Prumo Deck";
        line-height: 140.6%;
        font-style: normal;
        font-weight: 500;
        margin: 40px 0px 12px 0px;
    }
    .inner-p {
        font-family: "IBM Plex Sans";
        color: #000;
        font-size: 18px;
        line-height: 140.6%;
        font-style: normal;
        font-weight: 400;
        margin: 10px 0px;
    }
    .innercontain {
        padding: 7% 0 8% 0;
    }
    @media screen and (max-width: 2560px) {
        .container {
            max-width: 1800px;
        }
        .first-pere .main-title {
            font-size: 48px;
        }
        .main-title {
            font-size: 42px;
        }
        .inner-p {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 1920px) {
        width: 75%;
        .container {
            max-width: 1300px;
        }
        .innercontain {
            padding: 5% 0;
        }
        .inner-p {
            font-size: 18px;
        }
        .main-title {
            font-size: 32px;
        }
    }
    @media screen and (max-width: 1440px) {
        width: 80%;
        .container {
            max-width: 1000px;
        }
        .innercontain {
            padding: 7% 3% 8% 3%;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 95%;
        .main-title {
            font-size: 34px;
        }
        .first-pere .main-title {
            font-size: 36px;
        }
        .innercontain {
            padding: 7% 4% 8% 4%;
        }
    }
    @media screen and (max-width: 425px) {
        width: 90%;
        margin: 0 4%;
        .main-title {
            font-size: 22px;
        }
        .inner-p {
            font-size: 16px;
        }
        .first-pere .main-title {
            font-size: 29px;
        }
    }
    @media screen and (max-width: 320px) {
        .main-title {
            font-size: 21px;
        }
        .first-pere .main-title {
            font-size: 23px;
        }
    }
`;

export { Banner, LabToLuxury, LabGrownDiamonds, IIADiamonds };
