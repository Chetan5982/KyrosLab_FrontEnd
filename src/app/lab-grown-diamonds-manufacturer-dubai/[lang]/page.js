"use client"
import React, { useLayoutEffect } from "react";
import Dubai from "../page";

const Lang = ({ params }) => {
  const { lang } = params;
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  },[lang]);
  return <Dubai lang={lang} />;
};

export default Lang;
