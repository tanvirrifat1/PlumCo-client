"use client";

import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { TrashIcon } from "@heroicons/react/20/solid";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
import {
  useCategoriesQuery,
  useDeleteCategoryMutation,
} from "@/redux/api/categoryApi";
import Loading from "@/app/loading";

const DashboardCategory = () => {
  const arg: any = {};
  const { data, isLoading } = useCategoriesQuery({ ...arg });
  const [deleteService] = useDeleteCategoryMutation();

  //this function for deleted
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
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const res = deleteService(id);
          if (res.arg.track) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else {
            swalWithBootstrapButtons.fire(
              "Not Deleted!",
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
        <h1 className="text-4xl font-bold">Categories List</h1>
        <Link
          href="/dashBoard/category/create"
          className="btn btn-outline rounded-full  w-48 h-6 hover:bg-white hover:text-black hover:shadow-lg"
        >
          Add Category
        </Link>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Created Date
              </th>

              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data?.categories?.map((category: any) => (
              <tr key={category?.id}>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {category?.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {format(parseISO(category?.createdAt), "PP")}
                </td>
                <td className="whitespace-nowrap px-4 py-2 space-x-1">
                  <Link href={`/dashBoard/category/edit/${category?.id}`}>
                    <button className="btn inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(category?.id)}
                    className="btn btn-error inline-block rounded px-4 py-2 text-xs font-medium text-white "
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardCategory;
