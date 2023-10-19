"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import FormTextArea from "@/components/forms/FormTextArea";
import LatestNews from "@/components/ui/LatestNews";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import { getUserInfo } from "@/service/auth.service";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const { userId } = getUserInfo() as any;
  const [createBlog] = useCreateBlogMutation();

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
        const res = await createBlog(data);
        if (res) {
          toast("Blog Posted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(false);
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-4xl">
        <div className=" loading loading-spinner text-info"></div>
      </div>
    );
  }

  return (
    <div>
      <LatestNews />
      <div>
        <Helmet>
          <title>Plumbing | Blog</title>
        </Helmet>
      </div>
      ;
    </div>
  );
};

export default page;
