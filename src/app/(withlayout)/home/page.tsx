import Cart from "@/components/ui/Cart";
import Header from "@/components/ui/Header";
import LatestNews from "@/components/ui/LatestNews";
import Reviews from "@/components/ui/Reviews";
import Services from "@/components/ui/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Services />
      <Reviews />
      <LatestNews />
      <Cart />
    </div>
  );
};

export default page;
