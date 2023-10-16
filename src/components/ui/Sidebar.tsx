"use client";
import { ENUM_USER_ROLE } from "@/enum/user";
import { getUserInfo } from "@/service/auth.service";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { RiReservedFill } from "react-icons/ri";

const Sidebar = () => {
  const { role } = getUserInfo() as any;

  return (
    <div className="w-[250px] rounded min-h-screen bg-base-200 px-3 py-5">
      <h1 className="text-xl font-bold text-black">Plumbing-Dashboard</h1>
      <ul className="menu ">
        {role === ENUM_USER_ROLE.USER ? (
          <>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
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
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/home"
              >
                <HomeIcon className="w-5 h-5 inline-block " />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/service"
              >
                <WrenchScrewdriverIcon className="w-5 h-5 inline-block font-semibold" />{" "}
                Service
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/blog"
              >
                <FaBlogger className="w-5 h-5 inline-block " />
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/faq"
              >
                <QuestionMarkCircleIcon className="w-5 h-5 inline-block " />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/feedback"
              >
                <FcFeedback className="w-5 h-5 inline-block " /> Feedback
              </Link>
            </li>

            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/user"
              >
                <AiOutlineUser className="w-5 h-5 inline-block " /> Add Admin
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white hover:bg-gray-600 hover:rounded-lg my-1"
                href="/dashBoard/booking"
              >
                <RiReservedFill className="w-5 h-5 inline-block " /> Booking
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
