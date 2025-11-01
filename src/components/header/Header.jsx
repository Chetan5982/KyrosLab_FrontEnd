import React from "react";
import Image from "next/image";
// import menu from "@/asset/images/Menu.svg";
import { useRouter } from "next/navigation";
// import logo from "@/asset/images/logo.svg";
// import login from "@/asset/icons/Login.svg";
import { Main } from "./styled";
import { HeaderLogin, HeaderMenu, mainLogo } from "@/constants/images";
// import GoogleTranslate from "GoogleTranslate";

const Header = ({ open, setOpen }) => {
  const router = useRouter();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Main className="blgd-header">
      <div className="container">
        <Image
          className="logo"
          src={mainLogo}
          alt="bhanderi lab grown diamonds"
          title="bhanderi lab grown diamonds"
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
          height={200}
          width={200}
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <button onClick={handleOpen}>
            <Image
              src={HeaderMenu}
              alt="menu"
              className="headericon"
              height={40}
              width={40}
            />
          </button>
          {/* <GoogleTranslate/> */}
          <button onClick={() => router.push("/login")} className="header-btn">
            {/* <Image
              src={HeaderLogin}
              alt="login"
              className="headericon"
            /> */}
            Login
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Header;
