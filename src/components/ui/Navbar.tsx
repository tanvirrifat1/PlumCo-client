import Link from "next/link";
import React from "react";
import img from "../../assets/home.png";
import Image from "next/image";

const Navbar = () => {
  const currentDate = new Date();

  // Format the current date as "Month Day, Year"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const navOption = (
    <>
      <ul className="lg:flex justify-center space-x-6 text-black ">
        <div className="dropdown mt-1">
          <li tabIndex={0} className="text-xl m-1 hover:text-indigo-700 ">
            signup
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

        <li>
          <button className="text-black text-xl">hello</button>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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

        <div>
          <Image src={img} alt=""></Image>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>{navOption}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <h1
          className="btn w-2/12 h-16 text-white"
          style={{ backgroundColor: "#3f37c9" }}
        >
          GET FREE QUOTE
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
