"use client";
import Loading from "@/app/loading";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import LoadingButton from "@/components/ui/LoginSpinner";
import SmallSpinner from "@/components/ui/SmallSpinner";
import {
  useAddCategoryMutation,
  useCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const page = ({ params }: { params: any }) => {
  const { id } = params;

  const [updateCategory] = useUpdateCategoryMutation();

  const { data, isLoading } = useCategoryQuery(id);

  const Values = {
    title: data?.title,
  };

  if (isLoading) {
    return <Loading />;
  }

  const router = useRouter();
  const handleSubmit = async (data: any) => {
    const res: any = await updateCategory({ id, body: data });
    if (res.data) {
      toast("Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/dashBoard/category");
    }
  };

  return (
    <div className="container xl:w-[80%] px-20 py-5 mt-5 ring rounded">
      <Form submitHandler={handleSubmit} defaultValues={Values}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Category
            </h2>
            <div className="col-span-2 flex gap-7">
              <div className="col-span-3 w-1/2">
                <div className="mt-2 w-full">
                  <FormInput
                    type="text"
                    name="title"
                    placeholder="Write title..."
                    label="Title"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="btn btn-outline rounded-full  w-48 h-6 hover:bg-white hover:text-black hover:shadow-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default page;
