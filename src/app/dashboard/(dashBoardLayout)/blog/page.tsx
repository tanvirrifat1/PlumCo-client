"use client";

import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  useAddAllBlogsQuery,
  useDeleteBlogMutation,
} from "@/redux/api/blogApi";
import { AiFillDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";

const DashboardServicePage = () => {
  const arg: any = {};
  const { data, isLoading } = useAddAllBlogsQuery({ ...arg });

  const [deleteBlog] = useDeleteBlogMutation();

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
          deleteBlog(id);
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
        <h1 className="text-4xl font-bold">Blogs List</h1>
        <Link
          href="/dashBoard/blog/create"
          className="btn btn-outline rounded-full hover:bg-white hover:text-black hover:shadow-lg"
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
                Update here
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
                  {format(parseISO(service?.createdAt), "PP")}
                </td>

                <td className="whitespace-nowrap py-2">
                  <AiOutlineEye className="text-3xl" />
                </td>
                <td className="whitespace-nowrap  py-2">
                  <Link href={`/dashBoard/blog/edit/${service?.id}`}>
                    <AiOutlineEdit className="text-3xl" />
                  </Link>
                </td>
                <td className="whitespace-nowrap  py-2">
                  <AiFillDelete
                    onClick={() => handleDelete(service?.id)}
                    className="text-3xl text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardServicePage;
