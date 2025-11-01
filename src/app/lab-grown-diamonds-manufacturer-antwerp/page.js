"use client"
import LocationAntwerp from "@/screens/locationAntwerp";
import React, { useLayoutEffect } from "react";

const Antwerp = () => {
  const lang = 'en-BE'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationAntwerp lang={lang} />
    </>
  );
};

export default Antwerp;
