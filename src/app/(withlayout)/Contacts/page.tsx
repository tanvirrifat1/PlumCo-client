"use client";

import ContactHeader from "@/components/ui/Contact/ContactHeader";
import FormContact from "@/components/ui/Contact/FormContact";
import MapContainer from "@/components/ui/Contact/MapContainer";

import React from "react";
import { Helmet } from "react-helmet-async";

const page = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>Plumbing | Contact</title>
        </Helmet>
      </div>

      <ContactHeader />
      <FormContact />
      <MapContainer />
    </div>
  );
};

export default page;
