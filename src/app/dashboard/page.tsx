"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/dashboard.png";
import { Helmet } from "react-helmet-async";

const DashboardPage = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Plumbing | DashBoard</title>
        </Helmet>
      </div>
      <div>
        <h1 className="text-black text-3xl text-center m-4">
          Welcome to DashBoard Page
        </h1>
      </div>
      <div className="flex justify-center">
        <Image src={img} width={800} height={500} alt="" />
      </div>
    </div>
  );
};

export default DashboardPage;
