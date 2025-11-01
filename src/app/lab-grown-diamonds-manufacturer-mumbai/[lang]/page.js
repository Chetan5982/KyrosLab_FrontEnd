"use client"
import React, { useLayoutEffect } from "react";
import Mumbai from "../page";

const Lang = ({ params }) => {
  const { lang } = params;
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  },[lang]);
  return <Mumbai lang={lang} />;
};

export default Lang;
