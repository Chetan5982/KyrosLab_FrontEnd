"use client"
import React from "react";
import "./index.css";
import DiamondPng from '@/asset/images/loader.gif'
import Image from "next/image";

const DiamondLoader = () => {
  return (
    <div className="dn-diamond" >
        <Image src={DiamondPng} alt="diamond"/>
    </div>
  );
};

export default DiamondLoader;
