"use client";

import Loading from "@/app/loading";
import {
  useDeleteCartMutation,
  useGetCartsQuery,
} from "@/redux/api/addToCartApi";
import Image from "next/image";
import Swal from "sweetalert2";

const Drawer = () => {
  const arg = {};
  const { data, isLoading } = useGetCartsQuery({ ...arg });
  const [deleteCart] = useDeleteCartMutation();

  const newArray = data?.addToCarts?.map((obj: any) => obj.Service?.price);

  const total = newArray
    ?.map(function (elt: any) {
      return /^\d+$/.test(elt) ? parseFloat(elt) : 0;
    })
    .reduce(function (a: any, b: any) {
      return a + b;
    }, 0);

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
          deleteCart(id);
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

  return (
    <div className="drawer drawer-button">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        <label htmlFor="my-drawer-4" className="drawer-button m-4 ">
          <div className="indicator ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item text-red-500">
              {" "}
              {data?.addToCarts?.length}
            </span>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="min-h-screen">
            <div>
              {data?.addToCarts?.map((cart) => (
                <div
                  key={cart?.id}
                  className="flex justify-between items-center mt-2 rounded-lg bg-slate-400 px-4 py-4"
                >
                  <div>
                    <div className="avatar">
                      <div className="w-24 rounded-xl">
                        <Image
                          src={cart?.Service?.image}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <h1 className="text-xl text-white">
                      {cart?.Service?.title as string}
                    </h1>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleDelete(cart?.id)}
                      className="rounded-xl hover:text-blue-400 bg-red-500 text-white btn-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider"></div>
            <h1 className="text-xl my-3 font-bold">Total Price : {total} $</h1>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
