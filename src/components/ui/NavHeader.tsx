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
      <div className=" flex justify-between">
        <div className="flex justify-center items-center my-2 px-3">
          <BsSmartwatch className="font-semibold text-4xl text-blue-600" />
          <p className="font-semibold text-white ml-1">{formattedDate}</p>
        </div>
        <div className=" flex justify-center items-center py-2 px-3">
          <p className="font-semibold text-white ml-1">+88 01633912193 </p>
          <FcCallback className="font-semibold text-4xl m-2" />
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              English
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-black text-white"
            >
              <li>
                <a>Bangla</a>
              </li>
              <li>
                <a>Hindi</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
