"use client";

import React from "react";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import {
  useDeleteBooksMutation,
  useGetAllBookedQuery,
  useUpdateBooksMutation,
} from "@/redux/api/bookingApi";
import Loading from "@/app/loading";
import { getUserInfo } from "@/service/auth.service";
import Swal from "sweetalert2";
import { ENUM_STATUS, ENUM_USER_ROLE } from "@/enum/user";

const page = () => {
  const arg = {};
  const { data, isLoading } = useGetAllBookedQuery({ ...arg });
  const [deleteBooks] = useDeleteBooksMutation();
  const [updateBooks] = useUpdateBooksMutation();
  const { role } = getUserInfo() as any;

  const newArray = data?.map((obj: any) => obj.service?.price);

  const total = newArray
    ?.map(function (elt: any) {
      return /^\d+$/.test(elt) ? parseInt(elt) : 0;
    })
    .reduce(function (a: any, b: any) {
      return a + b;
    });

  const handleCancel = (id: string) => {
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
        confirmButtonText: "Yes, Cancel it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = deleteBooks(id);
          if (res.arg.track) {
            swalWithBootstrapButtons.fire(
              "Cancel!",
              "Your booking service has been cancel!.",
              "success"
            );
          } else {
            swalWithBootstrapButtons.fire(
              "Not Cancel!",
              "Something is wrong!!!",
              "error"
            );
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary service is safe :)",
            "error"
          );
        }
      });
  };

  const handleDelete = (id: string) => {
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
        confirmButtonText: "Yes, Delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = deleteBooks(id);
          if (res.arg.track) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your booking service has been Deleted!.",
              "success"
            );
          } else {
            swalWithBootstrapButtons.fire(
              "Not Cancel!",
              "Something is wrong!!!",
              "error"
            );
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary service is safe :)",
            "error"
          );
        }
      });
  };

  const handleAccept = (id: string) => {
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
        text: "Make a confirm then accept!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Accept it!",
        cancelButtonText: "No, Accept!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = updateBooks({ id, body: { status: "APPROVED" } });
          if (res.arg.track) {
            swalWithBootstrapButtons.fire(
              "Confirm!",
              "Client booking service has been confirm!.",
              "success"
            );
          } else {
            swalWithBootstrapButtons.fire(
              "Not Accept!",
              "Something is wrong!!!",
              "error"
            );
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Not Confirm",
            "Please confirm then accept :)",
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
      <div className="flex justify-between">
        <div className="flex justify-between border-b-2 pb-1">
          <h1 className="text-4xl font-bold">Bookings List</h1>
        </div>
        <div className="flex justify-between  pb-1">
          <h1 className="text-4xl font-bold">Total Price : {total} $</h1>
        </div>
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
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
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
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {service?.status}
                </td>

                <td className="whitespace-nowrap px-4 py-2">
                  {role !== ENUM_USER_ROLE.USER ? (
                    <>
                      <button
                        onClick={() => handleAccept(service?.id)}
                        disabled={service?.status === "APPROVED"}
                        className="btn inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        accept
                      </button>
                      <button
                        onClick={() => handleDelete(service?.id)}
                        disabled={service?.status === "APPROVED"}
                        className="btn btn-error inline-block rounded px-4 py-2 text-xs font-medium text-white mx-2"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleCancel(service?.id)}
                      disabled={service?.status === ENUM_STATUS.APPROVED}
                      className="btn btn-error inline-block rounded px-4 py-2 text-xs font-medium text-white "
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
