"use client";
import React, { useLayoutEffect } from "react";
import Antwerp from "../page";

const Lang = ({ params }) => {
  const { lang } = params;
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return <Antwerp lang={lang} />;
};

export default Lang;
