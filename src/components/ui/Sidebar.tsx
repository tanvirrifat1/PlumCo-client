"use client";
import { ENUM_USER_ROLE } from "@/enum/user";
import { getUserInfo } from "@/service/auth.service";
import { Square3Stack3DIcon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaBlogger, FaHome } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { MdOutlineArrowLeft, MdReviews, MdUpcoming } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";

import logo from "../../assets/el.png";
import Image from "next/image";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { role } = getUserInfo() as any;

  return (
    <div
      className={`${
        open ? "w-72" : "w-28"
      }  w-72 h-screen p-5 pt-8 bg-slate-950 relative duration-700`}
    >
      <p
        onClick={() => setOpen(!open)}
        className={`${
          open && "-rotate-180"
        } absolute cursor-pointer rounded-full bg-slate-800 -right-3 top-9 w-9 flex justify-center items-center h-8 border-2`}
      >
        <h1 className="text-4xl">
          <MdOutlineArrowLeft className=" rounded-full text-white " />
        </h1>
      </p>
      <div className="flex gap-x-4 items-center">
        <Image
          className={`${
            open && "rotate-[360deg]"
          } cursor-pointer duration-300 rounded-md`}
          src={logo}
          height={50}
          width={50}
          alt=""
        />
        <h1
          className={`${
            !open && "scale-0"
          } text-white origin-left font-semibold text-xl duration-500`}
        >
          DashBoard
        </h1>
      </div>
      <ul className="menu ">
        {role === ENUM_USER_ROLE.USER ? (
          <>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/booking"
              >
                <RiReservedFill className="w-5 h-5 inline-block " /> Booking
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/service"
              >
                <WrenchScrewdriverIcon className="w-5 h-5 inline-block font-semibold" />{" "}
                Service
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/blog"
              >
                <FaBlogger className="w-5 h-5 inline-block " />
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/faq"
              >
                <QuestionMarkCircleIcon className="w-5 h-5 inline-block " />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/feedback"
              >
                <FcFeedback className="w-5 h-5 inline-block " /> Feedback
              </Link>
            </li>

            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/user"
              >
                <AiOutlineUser className="w-5 h-5 inline-block " /> Add Admin
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/booking"
              >
                <RiReservedFill className="w-5 h-5 inline-block " /> Booking
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/category"
              >
                {" "}
                <Square3Stack3DIcon className="w-5 h-5 inline-block " />
                Category
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/review"
              >
                {" "}
                <MdReviews className="w-5 h-5 inline-block " />
                Review
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  !open && "scale-0"
                } text-white origin-left font-semibold text- duration-500 py-4`}
                href="/dashBoard/upcomingService"
              >
                <MdUpcoming className="w-5 h-5 inline-block " />
                Upcoming service
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
