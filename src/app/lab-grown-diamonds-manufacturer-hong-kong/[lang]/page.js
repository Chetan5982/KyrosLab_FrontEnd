"use client"
import React, { useLayoutEffect } from "react";
import HongKong from "../page";

const Lang = ({ params }) => {
  const { lang } = params;
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return <HongKong lang={lang} />;
};

export default Lang;
