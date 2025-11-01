import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
// import BLGDLogo from "@/asset/icons/logo.svg";
import { mainLogo } from "@/constants/images";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src={mainLogo}
        alt="logo"
        height={70}
        width={174}
        priority
        style={{ filter: "invert(1)" }}
      />
    </LinkStyled>
  );
};

export default Logo;
