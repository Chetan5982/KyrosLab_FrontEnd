"use client"
import React, { useLayoutEffect } from "react";
import Surat from "../page";

const Lang = ({ params }) => {
  // const { lang } = params;
  const lang = 'Us-in'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return <Surat lang={lang} />;
};

export default Lang;
