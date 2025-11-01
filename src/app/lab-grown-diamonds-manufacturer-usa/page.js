"use client"
import LocationUsa from "@/screens/LocationUsa";
import React, { useLayoutEffect } from "react";

const USA = () => {
  const lang = 'en-US'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationUsa lang={lang}/>
    </>
  );
};

export default USA;
