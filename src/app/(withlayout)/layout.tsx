"use client";

import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "../loading";
import Navbar from "@/components/ui/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
