"use client";

import Services from "@/components/ui/Services";
import React from "react";
import { Helmet } from "react-helmet-async";

const page = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Plumbing | Service</title>
        </Helmet>
      </div>
      <Services />
    </div>
  );
};

export default page;
