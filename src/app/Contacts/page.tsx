"use client";

import ContactHeader from "@/components/ui/Contact/ContactHeader";
import FormContact from "@/components/ui/Contact/FormContact";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ContactHeader />
      <FormContact />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
