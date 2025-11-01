"use client"
import LocationDubai from "@/screens/LocationDubai";
import React, { useLayoutEffect } from "react";

const Dubai = () => {
  const lang = 'en-AE'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationDubai lang={lang}/>
    </>
  );
};

export default Dubai;
