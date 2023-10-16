"use client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PrivateRoute = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/login", request.url));
};
export const config = {
  matcher: ["dashBoard/DashboardLayout"],
};
export default PrivateRoute;
