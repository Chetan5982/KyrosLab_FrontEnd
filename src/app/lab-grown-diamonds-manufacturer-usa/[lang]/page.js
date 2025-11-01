"use client"
import React, { useLayoutEffect } from "react";
import USA from "../page";

const Lang = ({ params }) => {
  // const { lang } = params;
  const lang = 'en-US'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return <USA lang={lang} />;
};

export default Lang;
