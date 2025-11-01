"use client"
import LocationSurat from "@/screens/LoactionSurat";
import React, { useLayoutEffect } from "react";

const Surat = () => {
  const lang = 'en-IN'
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <>
      <LocationSurat lang={lang} />
    </>
  );
};

export default Surat;
