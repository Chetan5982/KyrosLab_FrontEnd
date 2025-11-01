import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconArticle,
  IconCalendarEvent,
  IconBrandAppgallery,
  IconUsers,
  IconHome2,
  IconTransform,
  IconCategory,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: "Home",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Dashboard",
  //   icon: IconLayoutDashboard,
  //   href: "/",
  // },
  {
    id: uniqueId(),
    title: "Popup",
    icon: IconHome2,
    href: "/admin/popup",
  },
  {
    id: uniqueId(),
    title: "Redirects",
    icon: IconTransform,
    href: "/admin/redirect",
  },
  {
    id: uniqueId(),
    title: "Home",
    icon: IconHome2,
    href: "/admin/home-banner",
  },
  {
    id: uniqueId(),
    title: "Blogs",
    icon: IconArticle,
    href: "/admin/blogs",
  },
  {
    id: uniqueId(),
    title: "Category",
    icon: IconCategory,
    href: "/admin/category",
  },

  {
    id: uniqueId(),
    title: "Events",
    icon: IconCalendarEvent,
    href: "/admin/events",
  },
  {
    id: uniqueId(),
    title: "Gallery",
    icon: IconBrandAppgallery,
    href: "/admin/gallery",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUsers,
    href: "/admin/users",
  },

  // {
  //   navlabel: true,
  //   subheader: "Auth",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/authentication/login",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Register",
  //   icon: IconUserPlus,
  //   href: "/authentication/register",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Admin",
  //   icon: IconUserPlus,
  //   href: "/admin",
  // },
];

export default Menuitems;
