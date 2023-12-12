"use client";
import Loading from "@/app/loading";
import { useGetSingleBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";

import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const DetailsBlog = ({ params }: { params: any }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogsQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="">
      <Link href={"/home"}>
        <div className="ml-36 mt-10">
          <BiArrowBack className="text-4xl" />
        </div>
      </Link>
      <div className="hero min-h-[500px] ">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={data?.image} width={800} height={1000} alt="" />
        </div>
      </div>
      <div className="mx-8">
        <div>
          <h1 className="text-5xl font-bold">{data?.title}</h1>
          <p className="py-6">{data?.content}</p>
          <div className="divider"></div>
          <div className="flex justify-between">
            <div>
              <div className="flex text-4xl gap-4">
                <p className="flex">
                  <AiOutlineLike onClick={handleIncrement} />
                  <p className="text-xs text-accent font-semibold text-[20px]">
                    {quantity}
                  </p>
                </p>

                <Link href={"/Contacts"}>
                  <FaRegComment />
                </Link>
              </div>
            </div>
            <div>
              <div className="card-actions justify-start">
                <div className="avatar">
                  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      src={data?.author?.profileImage}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                </div>
                <div className=" mt-4 lg:ml-3">{data?.author?.fullName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
