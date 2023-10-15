"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import {
  useGetSingleBlogsQuery,
  useUpdateBlogMutation,
} from "@/redux/api/blogApi";
import { getUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

type IProps = {
  params: any;
};

const page = ({ params }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const { userId } = getUserInfo() as any;
  const router = useRouter();
  const { id } = params;
  const { data } = useGetSingleBlogsQuery(id);
  const [updateBlog] = useUpdateBlogMutation();

  const Values = {
    content: data?.content,
    title: data?.title,
    image: data?.image,
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const IMAGEURL = process.env.NEXT_PUBLIC_IMBB_KEY;

  const onSubmit = async (data: any) => {
    setLoading(true);
    if (userId) {
      data.authorId = userId;
    }

    if (!image) {
      console.log("Please select image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${IMAGEURL}`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.data) {
        data.image = responseData.data.display_url;
        const res = await updateBlog({ id, body: data });
        if (res) {
          toast("Blog Updated", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/dashBoard/blog");
          setLoading(false);
        }
      }
    }
  };

  return (
    <div>
      <div className="py-10">
        <div className="container xl:w-[40%] px-20 py-5 border-gray-900 mt-5 border rounded-xl">
          <Form submitHandler={onSubmit} defaultValues={Values}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Submit Your Updated Blogs
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-6">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                      />
                      {image && <p>{image.name}</p>}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <FormInput
                        id=""
                        name="title"
                        type="text"
                        label="Title"
                        placeholder="enter your title"
                        className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <FormInput
                        id=""
                        name="content"
                        type="text"
                        label="Content"
                        placeholder="enter your content"
                        className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-outline w-72 rounded-full"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
