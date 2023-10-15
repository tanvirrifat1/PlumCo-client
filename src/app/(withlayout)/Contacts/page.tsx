"use client";

import ContactHeader from "@/components/ui/Contact/ContactHeader";
import FormContact from "@/components/ui/Contact/FormContact";
import MapContainer from "@/components/ui/Contact/MapContainer";

import React from "react";

const page = () => {
  return (
    <div>
      <ContactHeader />
      <FormContact />
      <MapContainer />
    </div>
  );
};

export default page;
