"use client";
import Loading from "@/app/loading";
import { useGetSingleBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const DetailsBlog = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleBlogsQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={data?.image} width={800} height={1000} alt="" />
          <div>
            <h1 className="text-5xl font-bold">{data?.title}</h1>
            <p className="py-6">{data?.content}</p>
            <div className="divider"></div>
            <div className="flex text-4xl gap-4">
              <p>
                <AiOutlineLike />
              </p>
              <p>
                <FaRegComment />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBlog;
