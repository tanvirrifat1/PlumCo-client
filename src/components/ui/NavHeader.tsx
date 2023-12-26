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
    <div className="bg-slate-700">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between gap-2 items-center">
          <div className="flex justify-center items-center mb-2 lg:mb-0">
            <BsSmartwatch className="font-semibold text-4xl text-blue-600" />
            <p className="font-semibold text-white ml-1 text-sm lg:text-base">
              {formattedDate}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="lg:font-semibold text-white ml-1 text-sm lg:text-base">
              +88 01633912193
            </p>
            <FcCallback className="font-semibold text-4xl m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
