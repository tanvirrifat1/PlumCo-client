"use client";

import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Loading from "../loading";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const Navbar = dynamic(() => import("../../components/ui/Navbar"), {
    ssr: false,
  });

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
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
