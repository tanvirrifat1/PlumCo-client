import AddServiceCart from "@/components/ui/Cart";
import CategoryPage from "@/components/ui/CategoryPage";
import Header from "@/components/ui/Header";
import LatestNews from "@/components/ui/LatestNews";
import Reviews from "@/components/ui/Reviews";
import Services from "@/components/ui/Services";
import Upcoming from "@/components/ui/Upcoming";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <CategoryPage />
      <Services />
      <Upcoming />
      <Reviews />
      <LatestNews />
      <AddServiceCart />
    </div>
  );
};

export default page;
