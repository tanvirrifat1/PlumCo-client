"use client";

import ContactHeader from "@/components/ui/Contact/ContactHeader";
import FormContact from "@/components/ui/Contact/FormContact";
import MapContainer from "@/components/ui/Contact/MapContainer";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const page = () => {
  return (
    <div>
      <div className="mt-10 ml-11">
        <Link href={"/home"}>
          <BiArrowBack className="text-4xl" />
        </Link>
      </div>

      <ContactHeader />
      <FormContact />
      <MapContainer />
    </div>
  );
};

export default page;
