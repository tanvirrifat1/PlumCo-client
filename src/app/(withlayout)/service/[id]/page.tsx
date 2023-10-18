"use client";

import Loading from "@/app/loading";
import { useGetSingleDataQuery } from "@/redux/api/serviceApi";
import { isLoggedin } from "@/service/auth.service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { GrLinkNext } from "react-icons/gr";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  const router = useRouter();
  const { data, isLoading } = useGetSingleDataQuery(id);

  const userloggedIn = isLoggedin();

  const handleBook = (id: string) => {
    if (!userloggedIn) {
      router.push("/login");
    } else {
      router.push(`/booking/${id}`);
    }
  };

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="p-6 bg-slate-600">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
          <h1 className="text-5xl font-extrabold dark:text-gray-50">
            {data?.title}
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-50">
              {data?.description}
            </span>
          </p>
          <p className="my-8">
            <span className="font-medium dark:text-gray-50">
              If choice this service please
            </span>
          </p>
          <div>
            <button
              onClick={() => handleBook(data?.id)}
              className="btn btn-outline rounded-full   w-48 h-6 bg-white hover:text-white hover:shadow-lg"
            >
              Book Now
              <GrLinkNext className="text-2xl hover:text-white" />
            </button>
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
    </section>
  );
};

export default page;
