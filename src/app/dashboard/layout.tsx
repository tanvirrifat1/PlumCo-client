"use client";

import Sidebar from "@/components/ui/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLoggedin } from "@/service/auth.service";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = isLoggedin() as boolean;
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </section>
  );
}
