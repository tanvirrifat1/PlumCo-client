"use client";
import {
  useDeleteServiceMutation,
  useGetUpcomingServiceQuery,
} from "@/redux/api/upcomingServiceApi";
import Link from "next/link";
import React from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Loading from "@/app/loading";
import Swal from "sweetalert2";

const page = () => {
  const { data, isLoading } = useGetUpcomingServiceQuery(undefined);

  const [deleteService] = useDeleteServiceMutation();

  const handleDelete = async (id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteService(id);
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className="pr-20 pl-5 py-10">
          <div className="flex justify-between border-b-2 pb-1">
            <h1 className="text-4xl font-bold">Service List</h1>
            <Link
              href="/dashBoard/upcomingService/create"
              className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg"
            >
              Add Upcoming-Service
            </Link>
          </div>
          <h1 className="text-2xl font-bold">total service: {data?.length}</h1>
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
                    Description
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Update Here
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data?.map((service: any) => (
                  <tr key={service?.id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <div className="avatar w-16  rounded">
                        <div className="w-14 rounded">
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
                      {service?.description.slice(0, 100)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {service?.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {format(parseISO(service?.createdAt), "PP")}
                    </td>

                    <td className="flex gap-2">
                      <button className="btn btn-secondary ">
                        <Link href={`/dashBoard/service/edit/${service?.id}`}>
                          <AiOutlineEdit className="text-3xl" />
                        </Link>
                      </button>
                      <button className="btn bg-red-600">
                        <AiFillDelete
                          onClick={() => handleDelete(service?.id)}
                          className="text-3xl text-white hover:text-black"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
