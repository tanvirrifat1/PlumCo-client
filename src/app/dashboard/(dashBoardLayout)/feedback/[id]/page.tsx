"use client";

import Loading from "@/app/loading";
import { useGetSingleFeedbackQuery } from "@/redux/api/feedbackApi";
import Image from "next/image";
import React from "react";

const FeedbackPage = ({ params }: { params: any }) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleFeedbackQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className="w-[700px] mx-auto flex space-x-10 my-10 ring p-5 rounded">
          <div>
            <Image
              src={data?.User?.profileImage as string}
              alt={data?.User?.fullName}
              width={200}
              height={250}
              className="w-[200px] h-[250px] rounded p-1 border-2"
            />
          </div>

          <div className="space-y-2">
            <h1 className="flex">
              <strong className="w-[115px]">Name</strong>{" "}
              <span>: {data?.User?.fullName}</span>
            </h1>
            <h1 className="flex">
              <strong className="w-[115px]">Contact-No</strong>{" "}
              <span>: {data?.User?.contactNo}</span>
            </h1>
            <h1 className="flex">
              <strong className="w-[115px]">Email</strong>{" "}
              <span>: {data?.User?.email}</span>
            </h1>
            <h1 className="flex">
              <strong className="w-[115px]">Address</strong>{" "}
              <span>: {data?.User?.address}</span>
            </h1>
          </div>
        </div>
        <div className="card w-[700px] bg-base-100 shadow-xl mx-auto flex justify-between gap-5">
          <figure className="px-10 pt-10">
            <Image
              src={data?.Service?.image}
              alt={data?.Service?.title}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> {data?.Service?.title}</h2>
            <p> {data?.Service?.description}</p>
          </div>
        </div>

        <div className="w-[700px] mx-auto flex justify-between gap-5 my-9">
          <div className="ring p-5 flex-1 rounded">
            <h2 className="text-4xl font-bold text-gray-800 flex justify-center">
              User Feed-Back
            </h2>
            <strong>Comments: </strong>
            <h3>{data?.comments}</h3>
            <strong>Suggestoin: </strong>
            <p>{data?.suggestions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
