"use client";

import Loading from "@/app/loading";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: any }) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleUserQuery(id);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-[700px] mx-auto flex space-x-10 my-10 ring p-5 rounded">
      <div>
        <Image
          src={data?.profileImage as string}
          alt={data?.fullName}
          width={200}
          height={250}
          className="w-[200px] h-[250px] rounded p-1 border-2"
        />
      </div>

      <div className="space-y-2">
        <h1 className="flex">
          <strong className="w-[115px]">Name</strong>{" "}
          <span>: {data?.fullName}</span>
        </h1>
        <h1 className="flex">
          <strong className="w-[115px]">Contact-No</strong>{" "}
          <span>: {data?.contactNo}</span>
        </h1>
        <h1 className="flex">
          <strong className="w-[115px]">Email</strong>{" "}
          <span>: {data?.email}</span>
        </h1>
        <h1 className="flex">
          <strong className="w-[115px]">Address</strong>{" "}
          <span>: {data?.address}</span>
        </h1>
      </div>
    </div>
  );
};

export default page;
