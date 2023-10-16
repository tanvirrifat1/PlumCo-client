"use client";

import React from "react";

import Link from "next/link";
import { useAllFaqQuery, useDeleteFaqMutation } from "@/redux/api/faqApi";
import Loading from "@/app/loading";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";

const page = () => {
  const arg = {};
  const { data, isLoading } = useAllFaqQuery({ ...arg });

  const [deleteFaq] = useDeleteFaqMutation();

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
          deleteFaq(id);
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
      <div className="pr-20 pl-5 py-10">
        <div className="flex justify-between border-b-2 pb-1">
          <h1 className="text-4xl font-bold">Faq List</h1>
          <Link
            href="/dashBoard/faq/create"
            className="btn btn-outline rounded-full hover:bg-white hover:text-black hover:shadow-lg"
          >
            Add Faq
          </Link>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Question
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Answer
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Updated Here
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.map((faq: any) => (
                <tr key={faq?.id}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {faq?.question.slice(0, 70)}...
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {faq?.answer.slice(0, 70)}...
                  </td>

                  <div className="whitespace-nowrap px-4 py-2">
                    <td className="whitespace-nowrap py-2">
                      {/* <Link href={`/dashBoard/faq/${faq?.id}`}> */}
                      <AiOutlineEye className="text-3xl" />
                      {/* </Link> */}
                    </td>

                    <td className="whitespace-nowrap  py-2">
                      <AiFillDelete
                        onClick={() => handleDelete(faq?.id)}
                        className="text-3xl text-red-500"
                      />
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
