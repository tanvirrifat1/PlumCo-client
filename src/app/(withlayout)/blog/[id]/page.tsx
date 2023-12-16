"use client";
import Loading from "@/app/loading";
import { useGetSingleBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import {
  FaBriefcase,
  FaComment,
  FaDyalog,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

const DetailsBlog = ({ params }: { params: any }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogsQuery(id);
  const arg: any = {};
  const { data: services } = useGetAllServicesQuery({ arg });

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto min-h-[70vh] py-12 ">
      <div className="grid grid-cols-12 gap-5 ">
        {/* left side section */}
        <div className="col-span-8 bg-slate-50 p-5 rounded">
          <figure className="mb-7">
            <Image
              src={data?.image}
              alt={data?.title}
              width={1100}
              height={300}
              className="group-hover:scale-110 h-full transition-all duration-200"
            />
          </figure>
          <div className="flex items-center gap-x-4">
            <p className="flex items-center">
              <span>
                <CiUser />
              </span>
              <span>By</span>
              <span className="underline cursor-pointer text-blue-500">
                {data?.author?.fullName}
              </span>
            </p>
          </div>
          <h1 className="text-4xl font-bold leading-5 my-8">{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
          {/* comments section */}
          <section></section>
        </div>
        {/* right section */}
        <aside className="col-span-4 bg-slate-50 rounded ">
          {/* profile or author section */}
          <div className="m-5 bg-slate-200 rounded ">
            <div className="avatar flex flex-col items-center justify-center py-10">
              <div className="w-[150px] rounded-full ring ring-slate-50 focus:ring-2">
                <Image
                  src={data?.author?.profileImage as string}
                  alt="Shoes"
                  width={150}
                  height={150}
                />
              </div>
              <h2 className="text-3xl font-semibold mt-5">
                {data?.author?.fullName}
              </h2>
              <p className="px-4 text-justify mt-3">
                I am Rifat Miah. as a full stact developer. I am from
                bangladesh. I love coding very much. I Looing for a job for my
                best this industries
              </p>
              <nav className="flex gap-x-2 mt-5">
                <a
                  href="https://www.facebook.com/rifat.khan7625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-[#1877f2] group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                    data-tip="facebook"
                  >
                    <FaFacebookF className="text-slate-50 group-hover:text-[#1877f2] transition-all duration-500" />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-rifat-miah-48555b257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-[#1877f2] group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                    data-tip="linkedin"
                  >
                    <FaLinkedinIn className="text-slate-50 group-hover:text-[#1877f2] transition-all duration-500" />
                  </span>
                </a>
                <a
                  href="https://github.com/tanvirrifat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                    data-tip="github"
                  >
                    <FaGithub className="text-slate-50 group-hover:text-slate-900 transition-all duration-500" />
                  </span>
                </a>
                <a
                  href="https://rifat-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span
                    className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                    data-tip="portfolio"
                  >
                    <FaBriefcase className="text-slate-50 group-hover:text-slate-900 transition-all duration-500" />
                  </span>
                </a>
              </nav>
            </div>
          </div>

          {/* recent blog */}
          <div className="m-5 rounded">
            <h2 className="text-2xl font-normal">Best Services</h2>
            <div className="flex gap-x-1 mt-2">
              <span className="w-[100px] h-[5px] bg-primary inline-block rounded-full"></span>
              <span className="flex-1 h-[5px] bg-slate-400 inline-block rounded-full"></span>
            </div>
            <div className="mt-7 space-y-3">
              {services?.slice(0, 3)?.map((service: any) => (
                <div className="flex items-center" key={service?.id}>
                  <div className="w-[150px] rounded-full ring ring-slate-50 focus:ring-2">
                    <Image
                      className="rounded-full"
                      src={service?.image}
                      alt="Shoes"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <Link
                      className="text-xl hover:underline text-blue-500"
                      href={`/service/${service?.id}`}
                    >
                      {service?.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* help section */}
          <div className="p-5 rounded bg-slate-200">
            <h2 className="text-2xl font-normal mb-3">How we can help you?</h2>
            <p>
              We are always ready to for help you you need any help any time
              contact with us we are provide best service 24 house. please for
              contact with our service team member click the contact button
            </p>
            <Link
              href="/Contacts"
              className="bg-primary text-slate-50 px-3 py-1 rounded inline-block mt-3"
            >
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DetailsBlog;
