"use client";

import Link from "next/link";
import React from "react";
import img from "../../assets/home.png";
import Image from "next/image";
import { getUserInfo, removeUserInfo } from "@/service/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { useProfileQuery } from "@/redux/api/profileApi";

const Navbar = () => {
  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  const { userId } = getUserInfo() as any;
  const { data } = useProfileQuery(userId);

  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const navOption = (
    <>
      <ul className="lg:flex justify-center font-semibold space-x-6 text-black ">
        <Link href={"/home"}>
          <li>
            <li className="text-black text-xl">Home</li>
          </li>
        </Link>

        <div className="dropdown mt-1">
          <li tabIndex={0} className="text-xl m-1 hover:text-indigo-700 ">
            SignUp
          </li>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href={"/signup"}>
              <li>
                <h1>signup</h1>
              </li>
            </Link>
            <Link href={"/login"}>
              <li>
                <h1>Login</h1>
              </li>
            </Link>
          </ul>
        </div>

        <Link href={"/service"}>
          <li>
            <li className="text-black text-xl">Service</li>
          </li>
        </Link>
        <Link href={"/Contacts"}>
          <li>
            <li className="text-black text-xl">Contact</li>
          </li>
        </Link>
        <Link href={"/feedback"}>
          <li>
            <li className="text-black text-xl">Feedback</li>
          </li>
        </Link>
        {data?.profile?.role === "admin" ? (
          <>
            <Link href={"/dashBoard"}>
              <li>
                <li className="text-black text-xl">DashBoard</li>
              </li>
            </Link>
          </>
        ) : (
          <></>
        )}
        <Link href={"/faq"}>
          <li>
            <li className="text-black text-xl">Faq</li>
          </li>
        </Link>
        {data?.profile?.role === "admin" ? (
          <>
            <Link href={"/blog"}>
              <li>
                <li className="text-black text-xl">Blog</li>
              </li>
            </Link>
          </>
        ) : (
          <></>
        )}
      </ul>
    </>
  );

  return (
    <div className="sticky top-0 z-50  ">
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
            <div className="avatar" tabIndex={0}>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  width={50}
                  height={50}
                  alt="avater"
                  src={data?.profile?.profileImage as string}
                />
              </div>
              <p className="m-2">{data?.profile?.fullName as string}</p>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
