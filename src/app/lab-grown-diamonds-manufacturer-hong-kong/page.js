"use client"
import LocationHongKong from "@/screens/LocationHongKong";
import React, { useLayoutEffect } from "react";

const HongKong = () => {
  const lang = 'en-HK'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationHongKong lang={lang} />
    </>
  );
};

export default HongKong;
