"use client";

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdPending } from "react-icons/md";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useGetAllBookedQuery } from "@/redux/api/bookingApi";
import Loading from "@/app/loading";

const page = () => {
  const arg = {};
  const { data, isLoading } = useGetAllBookedQuery({ ...arg });
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pr-20 pl-5 py-10">
      <div className="flex justify-between border-b-2 pb-1">
        <h1 className="text-4xl font-bold">Bookings List</h1>
        {/* <Link
          href="/dashBoard/service/create"
          className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg"
        >
          Add Service
        </Link> */}
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Service
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th> */}
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.map((service: any) => (
              <tr key={service?.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <Image
                        alt={service?.title}
                        src={service?.user?.profileImage}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {service?.user?.fullName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {service?.service?.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {format(parseISO(service?.createdAt), "PP")}
                </td>

                <div className="whitespace-nowrap ">
                  <button className="btn  py-2 mr-3 bg-purple-700 text-white hover:text-black">
                    pending
                  </button>
                  <button className="btn  bg-green-700 text-white hover:text-black">
                    accept
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
