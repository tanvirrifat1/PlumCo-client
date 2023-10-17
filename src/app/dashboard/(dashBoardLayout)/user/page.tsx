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
import { ENUM_USER_ROLE } from "@/enum/user";
import { EyeIcon } from "@heroicons/react/20/solid";

const page = () => {
  const arg: any = {};
  const { data, isLoading } = useGetAllUserQuery({ ...arg });
  const [updateUser] = useUpdateUserMutation();
  const { role } = getUserInfo() as any;

  //this function for deleted
  type IValues = {
    id: string;
    role: string;
  };
  const handleMakeAdmin = (values: IValues) => {
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
        text: "Be carefull then accept!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Accept it!",
        cancelButtonText: "No, Accept!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = updateUser({
            id: values?.id,
            body: { role: values?.role },
          });
          if (res.arg.track) {
            swalWithBootstrapButtons.fire(
              "Confirm!",
              "User successfully update role Admin.",
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
            "Not Accept",
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
      <div className="flex justify-end">
        {role === "super_admin" ? (
          <>
            <Link
              href="/dashBoard/user/create"
              className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg"
            >
              Add Admin
            </Link>
          </>
        ) : (
          <></>
        )}
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
                Created Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.admins?.map((user: any) => (
              <tr key={user?.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <Image
                        alt={user?.fullName}
                        src={user?.profileImage as string}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user?.fullName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {format(parseISO(user?.createdAt), "PP")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-primary">
                  {user?.role}
                </td>
                <td className="whitespace-nowrap px-4 py-2 items-center flex space-x-2">
                  <Link
                    href={`/dashBoard/user/${user?.id}`}
                    className="btn bg-slate-500 hover:text-black flex items-center justify-center rounded px-4 py-2 text-xs font-medium text-white "
                  >
                    <EyeIcon className="w-5 h-5" />
                  </Link>
                  {user?.role === ENUM_USER_ROLE.USER && (
                    <button
                      onClick={() =>
                        handleMakeAdmin({ id: user?.id, role: "admin" })
                      }
                      className="btn btn-secondary inline-block rounded px-4 py-2 text-xs font-medium text-white "
                    >
                      Make-admin
                    </button>
                  )}
                  {role === ENUM_USER_ROLE.SUPER_ADMIN &&
                    user?.role === ENUM_USER_ROLE.ADMIN && (
                      <button
                        onClick={() =>
                          handleMakeAdmin({ id: user?.id, role: "user" })
                        }
                        className="btn btn-primary inline-block rounded px-4 py-2 text-xs font-medium text-white "
                      >
                        Make-user
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
