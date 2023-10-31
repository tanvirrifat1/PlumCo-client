"use client";

import Link from "next/link";
import React, { useState } from "react";
import img from "../../assets/home.png";
import Image from "next/image";
import {
  getUserInfo,
  isLoggedin,
  removeUserInfo,
} from "@/service/auth.service";
import { authKey } from "@/constants/storageKey";
import { usePathname, useRouter } from "next/navigation";
import { useProfileQuery } from "@/redux/api/profileApi";
import NavHeader from "./NavHeader";
import Drawer from "@/app/(withlayout)/drawer/page";

const Navbar = () => {
  const { userId } = getUserInfo() as any;
  const { data } = useProfileQuery(userId);
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const userloggedIn = isLoggedin();

  const navOption = (
    <>
      <ul className="lg:flex justify-center font-semibold text-xl space-x-6 text-black ">
        <li></li>

        <li>
          <Link
            className={`${pathname === "/home" ? "active" : ""}`}
            href={"/home"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/upcoming" ? "active" : ""}`}
            href={"/upcoming"}
          >
            Upcoming service
          </Link>
        </li>
        <li>
          <Link
            className={`${pathname === "/Contacts" ? "active" : ""}`}
            href={"/Contacts"}
          >
            Contact
          </Link>
        </li>
        {userloggedIn && (
          <li>
            <Link
              className={`${pathname === "/feedback" ? "active" : ""}`}
              href={"/feedback"}
            >
              Feedback
            </Link>
          </li>
        )}
        {/* <Link href={"/review"}>
          <li>
            <li className="text-black text-xl">Review</li>
          </li>
        </Link> */}

        <li>
          <Link
            className={`${pathname === "/faq" ? "active" : ""}`}
            href={"/faq"}
          >
            Faq
          </Link>
        </li>

        <li>
          <Link
            className={`${pathname === "/blog" ? "active" : ""}`}
            href={"/blog"}
          >
            Blog
          </Link>
        </li>

        {userloggedIn && (
          <li>
            <Link
              className={`${pathname === "/dashBoard" ? "active" : ""}`}
              href={"/dashBoard"}
            >
              DashBoard
            </Link>
          </li>
        )}
        <div className="dropdown mt-1">
          <li tabIndex={0} className=" m-1 hover:text-indigo-700 ">
            SignUp
          </li>
          <li
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/signup"}>signup</Link>
            </li>
            <li>
              <Link href={"/login"}> Login</Link>
            </li>

            <li className="lg:ml-3" onClick={logOut}>
              Logout
            </li>
          </li>
        </div>
      </ul>
    </>
  );

  return (
    <div className="sticky top-0 z-50  ">
      <div>
        <NavHeader />
      </div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>

          <Link href={"/home"}>
            <div>
              <Image src={img} alt=""></Image>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>{navOption}</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="avatar mx-4" tabIndex={0}>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  width={50}
                  height={50}
                  alt="avater"
                  src={data?.profile?.profileImage as string}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <li onClick={logOut}>Logout</li>
              </li>
            </ul>
          </div>
          <p className="m-2">{data?.profile?.fullName as string}</p>
          <Drawer />;
        </div>
      </div>
    </div>
  );
};

export default Navbar;
