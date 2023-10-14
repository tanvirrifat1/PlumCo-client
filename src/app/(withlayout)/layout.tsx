"use client";

import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { isLoggedin } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import Loading from "../loading";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const useLoggedIn = isLoggedin();

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!useLoggedIn) {
      router.push("/login");
    }
    setLoading(true);
  }, [router, loading]);

  if (!loading) {
    return (
      <div className="flex justify-center items-center h-screen text-4xl">
        <div className=" loading loading-spinner text-info"></div>
      </div>
    );
  }
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
