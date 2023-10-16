"use client";

import {
  useDeleteFeedbackMutation,
  useGetAllFeedBackQuery,
} from "@/redux/api/feedbackApi";
import React from "react";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import Loading from "@/app/loading";
import Swal from "sweetalert2";
import Link from "next/link";

const page = () => {
  const arg = {};
  const { data, isLoading } = useGetAllFeedBackQuery({ ...arg });

  const [deleteFeedback] = useDeleteFeedbackMutation();

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
          deleteFeedback(id);
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
    <div className="pr-20 pl-5 py-10">
      <div className="flex justify-between border-b-2 pb-1">
        <h1 className="text-4xl font-bold">Feedbacks List</h1>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                comments
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                suggestions
              </th>

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
                        src={service?.User?.profileImage}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {service?.comments.slice(0, 50)}...
                </td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {service?.suggestions.slice(0, 50)}...
                </td>
                <button className="whitespace-nowrap py-2 btn btn-primary">
                  <Link href={`/dashBoard/feedback/${service?.id}`}>
                    <AiOutlineEye className="text-3xl" />
                  </Link>
                </button>

                <button className="whitespace-nowrap ml-2 btn py-2 bg-red-500 ">
                  <AiFillDelete
                    onClick={() => handleDelete(service?.id)}
                    className="text-3xl text-white hover:text-black"
                  />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
