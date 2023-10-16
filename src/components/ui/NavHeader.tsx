import React from "react";
import { FcCallback } from "react-icons/fc";
import { BsSmartwatch } from "react-icons/bs";

const NavHeader = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="bg-slate-700 ">
      <div className=" flex justify-between gap-2">
        <div className="flex justify-center items-center ">
          <BsSmartwatch className="font-semibold text-4xl text-blue-600" />
          <p className="font-semibold text-white ml-1">{formattedDate}</p>
        </div>
        <div className=" flex justify-center items-center gap-2">
          <p className="font-semibold text-white ml-1">+88 01633912193 </p>
          <FcCallback className="font-semibold text-4xl m-2" />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
