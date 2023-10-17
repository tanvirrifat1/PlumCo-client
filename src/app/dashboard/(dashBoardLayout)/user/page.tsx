"use client";
import React from "react";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { useGetAllUserQuery, useUpdateUserMutation } from "@/redux/api/userApi";
import Loading from "@/app/loading";
import { IUserProfile } from "@/types";
import Link from "next/link";
import Swal from "sweetalert2";
import { getUserInfo } from "@/service/auth.service";

const page = () => {
  const arg = {};

  const { role } = getUserInfo() as any;

  const { data, isLoading } = useGetAllUserQuery({ ...arg });

  const mappedArray = data?.admins?.map((object: IUserProfile) => {
    return {
      ...object,
    };
  });

  const [updateUser] = useUpdateUserMutation();

  const handleAccept = (id: string) => {
    console.log(id);
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
        text: "Make a confirm then admin!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Admin it!",
        cancelButtonText: "No, Accept!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = updateUser({ id, body: { role: role } });
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
                Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Address
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                ContactNo
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
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
                  {field?.fullName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {field?.address}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {field?.contactNo}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {field?.role}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {format(parseISO(field?.createdAt), "PP")}
                </td>

                <div className="whitespace-nowrap ">
                  <button
                    onClick={() => handleAccept(field?.id)}
                    disabled={
                      field?.role === "admin" || field?.role === "super_admin"
                    }
                    className="btn  bg-green-700 text-white hover:text-black"
                  >
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
