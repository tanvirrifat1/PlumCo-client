"use client";

import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";

const ServicePage = () => {
  const arg = {};
  const { data, isLoading } = useGetAllServicesQuery({ ...arg });

  return (
    <div>
      <div className="pr-20 pl-5 py-10">
        <div className="flex justify-between border-b-2 pb-1">
          <h1 className="text-4xl font-bold">Service List</h1>
          <Link
            href="/dashBoard/service/create"
            className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg"
          >
            Add Service
          </Link>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Image
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Price
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
                          src={service?.image}
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {service?.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {service?.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {format(parseISO(service?.createdAt), "PP")}
                  </td>
                  {/* <td className="whitespace-nowrap px-4 py-2 text-primary">
                  {service?.price} ৳
                </td> */}
                  <td className="whitespace-nowrap ">
                    <AiOutlineEye className="text-3xl" />
                  </td>
                  <td className="whitespace-nowrap ">
                    <Link href={`/dashBoard/service/edit/${service?.id}`}>
                      <AiOutlineEdit className="text-3xl" />
                    </Link>
                  </td>
                  <td className="whitespace-nowrap ">
                    <AiFillDelete
                      // onClick={() => handleDelete(service?.id)}
                      className="text-3xl text-red-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
