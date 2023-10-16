"use client";
import React from "react";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import Loading from "@/app/loading";
import { IUserProfile } from "@/types";
import Link from "next/link";

const page = () => {
  const arg = {};

  const { data, isLoading } = useGetAllUserQuery({ ...arg });

  const mappedArray = data?.admins?.map((object: IUserProfile) => {
    return {
      ...object,
    };
  });

  console.log(mappedArray);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pr-20 pl-5 py-10">
      <div className="flex justify-between border-b-2 pb-1">
        <h1 className="text-4xl font-bold">Users List</h1>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ContactNo
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>

              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {mappedArray.map((field: any) => (
              <tr key={field?.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <Image
                        alt={field?.title}
                        src={field?.profileImage}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {field?.address}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {field?.contactNo}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {format(parseISO(field?.createdAt), "PP")}
                </td>

                <div className="whitespace-nowrap ">
                  <button className="btn  py-2 mr-3 bg-purple-700 text-white hover:text-black">
                    Reject
                  </button>
                  <button className="btn  bg-green-700 text-white hover:text-black">
                    Make Admin
                  </button>
                  <Link
                    href={`/dashBoard/user/${field?.id}`}
                    className="btn ml-3 bg-pink-600 text-white hover:text-black"
                  >
                    Profile
                  </Link>
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
