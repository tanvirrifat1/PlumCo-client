"use client";
import Image from "next/image";
import React from "react";
import Images from "../assets/error.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Image src={Images} width={800} height={500} alt="" />
      </div>

      <div className="flex justify-center mt-96">
        <Link href={"/home"}>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Reload
          </button>
          <p className="font-semibold m-6 text-red-600">Offs sorry 🙂</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
