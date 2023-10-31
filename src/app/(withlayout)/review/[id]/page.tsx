"use client";
import Loading from "@/app/loading";
import { useGetSingleDataQuery } from "@/redux/api/reviewApi";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet-async";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleDataQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[45vh]">
      <div className="lg:w-[1200px] hero-content  flex-col lg:flex-row mx-auto flex space-x-10 my-10 border-4 border-black p-5 rounded ">
        <div className="rounded-xl">
          <Image
            src={data?.user?.profileImage as string}
            alt={data?.fullName}
            width={200}
            height={250}
            className="w-[800px] h-[350px] rounded-full p-1 "
          />
        </div>
        <div>
          <Helmet>
            <title>Plumbing | Reviews</title>
          </Helmet>
        </div>
        <div className="space-y-4">
          <h1 className="flex ">
            <strong className="w-[115px]">Name</strong>{" "}
            <span>: {data?.user?.fullName}</span>
          </h1>
          <h1 className="flex ">
            <strong className="w-[200px]">review</strong>{" "}
            <span>: {data?.review}</span>
          </h1>

          <h1 className="flex ">
            <strong className="w-[115px]">Rating</strong> :{" "}
            <div className="flex gap-0.5 ">
              {Array(data?.rating)
                .fill(0)
                .map((index, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-500" />
                ))}
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div className="flex justify-center">
  <div className="card card-side bg-base-100 shadow-xl">
    <figure>
      <Image src={data?.user?.dataImage} alt="Album" width={300} height={300} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{data?.user?.fullName}</h2>
      <span>{data?.review}</span>
      <div className="flex justify-center mt-2 gap-0.5 ">
        {Array(data?.rating)
          .fill(0)
          .map((index, i) => (
            <StarIcon key={i} className="w-6 h-6 text-yellow-500" />
          ))}
      </div>
    </div>
  </div>
</div>; */
}
