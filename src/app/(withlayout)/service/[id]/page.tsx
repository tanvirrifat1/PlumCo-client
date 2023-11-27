"use client";

import Loading from "@/app/loading";
import { useGetSingleDataQuery } from "@/redux/api/serviceApi";
import { isLoggedin } from "@/service/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";

import img from "../../../../assets/service/img.png";
import img1 from "../../../../assets/service/img6.png";
import { Helmet } from "react-helmet-async";
import { FcFeedback } from "react-icons/fc";
import FeedBackModal from "@/components/common/FeedBackModal";

const page = ({ params }: { params: any }) => {
  const { id } = params;

  const router = useRouter();
  const { data, isLoading } = useGetSingleDataQuery(id);

  const [openModal, setOpenModal] = useState<boolean | null>(null);
  const userloggedIn = isLoggedin();

  const handleBook = (id: string) => {
    if (!userloggedIn) {
      router.push("/login");
    } else {
      router.push(`/booking/${id}`);
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="p-6 bg-slate-100">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
          <h1 className="text-5xl font-extrabold ">{data?.title}</h1>
          <p className="my-8">
            <span className="font-medium ">{data?.description}</span>
          </p>
          <div>
            <Helmet>
              <title>Plumbing | Service</title>
            </Helmet>
          </div>
          <p className="my-2">
            <span className="font-medium ">Price: {data?.price}$</span>
          </p>
          <p className="my-8">
            <span className="font-medium ">If choice this service please</span>
          </p>
          <div>
            <button
              onClick={() => handleBook(data?.id)}
              className="btn btn-outline rounded-full w-48 h-6 bg-white hover:text-white hover:shadow-lg"
            >
              Book Now
              <GrLinkNext className="text-2xl hover:text-white" />
            </button>
            <label
              onClick={handleOpen}
              htmlFor="my_modal_6"
              className="btn btn-outline rounded-full w-48 h-6 ml-2 bg-white hover:text-white hover:shadow-lg"
            >
              FeedBack
              <FcFeedback className="text-2xl hover:text-white" />
            </label>
          </div>
          <div className="grid md:grid-cols-1  grid-cols-1 mt-6">
            <div className="flex justify-center gap-2">
              <div className="card w-96 bg-base-100 rounded-md  shadow-xl ">
                <Image src={img1} alt="" width={700} height={700} />
              </div>
              <div className="card w-96 bg-base-100 rounded-md  shadow-xl ">
                <Image src={img} alt="" width={700} height={700} />
              </div>
            </div>
          </div>
        </div>
        <Image
          src={data?.image}
          alt=""
          width={800}
          height={800}
          className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
        />
      </div>
      {openModal && <FeedBackModal id={id} setOpenModal={setOpenModal} />}
    </section>
  );
};

export default page;
