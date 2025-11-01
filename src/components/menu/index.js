import React from "react";
// import menuArrow from "@/asset/images/menuArrow.png";
// import closeIcon from "@/asset/images/close.png";
import "./Menu.scss";
import {
  homeUrl,
  aboutUrl,
  blogNewsUrl,
  directorsUrl,
  jewelersUrl,
  productUrl,
  tradersUrl,
  contactUrl,
  revolutionaryUrl,
  galleryUrl,
  CVDpageUrl,
} from "@/constants/constants";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
// import logo from "../../asset/images/logo.svg";
import { HeaderClose, MenuArrow, mainLogo } from "@/constants/images";
import Link from "next/link";

const Menus = [
  // { title: "Home", link: homeUrl },
  { title: "About us", link: aboutUrl },
  { title: "Revolutionary ", link: revolutionaryUrl },
  { title: "Product ", link: productUrl },
  { title: "CVD Diamond Manufacturers ", link: CVDpageUrl },
  // { title: "Traders", link: tradersUrl },
  // { title: "Jewelers", link: jewelersUrl },
  { title: "Management Team", link: directorsUrl },
  { title: "Blog & News", link: blogNewsUrl },
  { title: "Gallery ", link: galleryUrl },
  // { title: "Blog & News", link: blogNewsUrl },
  // { title: "Directors", link: directors },
  // { title: "Blog", link: "/blog" },
  { title: "Contact us", link: contactUrl },
];
const Menu = ({ setOpen }) => {
  const navigate = useRouter();
  const pathname = usePathname();

  return (
    <div className="menu-wrapper">
      <div className="container">
        <div className="menu-header">
          <Image
            className="logo"
            src={mainLogo}
            alt="logo"
            width={200}
            height={200}
            onClick={() => {
              setOpen(false);
              navigate.push("/");
            }}
          />
          <div className="close-icon-wrapper" onClick={() => setOpen(false)}>
            <Image src={HeaderClose} width={40} height={40} alt="close" />
          </div>
        </div>
        {Menus.map((data, index) => (
          <div
            className="menu-container"
            onClick={() => {
              setOpen(false);
              navigate.push(data.link);
            }}
            key={index}
          >
            <div
              className={`menu-item ${
                pathname === data.link ? "current-active" : ""
              }`}
            >
              <Link className="menu-items" href={data.link}>{data.title}</Link>
            </div>
            <div className="menu-icon">
              <Image src={MenuArrow} width={100} height={100} alt="menu" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
