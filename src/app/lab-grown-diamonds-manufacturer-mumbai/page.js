"use client"
import LocationMumbai from "@/screens/LocationMumbai";
import React, { useLayoutEffect } from "react";

const Mumbai = () => {
  const lang = 'en-IN'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationMumbai lang={lang}/>
    </>
  );
};

export default Mumbai;
