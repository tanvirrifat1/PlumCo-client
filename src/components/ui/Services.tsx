"use client";

import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { CiSaveUp2 } from "react-icons/ci";
import Image from "next/image";

import React, { useState } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { getUserInfo, isLoggedin } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "@/redux/api/addToCartApi";
import Swal from "sweetalert2";
import { AiOutlineReload } from "react-icons/ai";
import { useDebounced } from "@/redux/hooks";
import Link from "next/link";
import { GrFormNext, GrLinkNext } from "react-icons/gr";
import {
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  EyeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import { ENUM_USER_ROLE } from "@/enum/user";
import Loading from "@/app/loading";

const Services = () => {
  const arg: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);

  arg["page"] = page;

  arg["size"] = 6;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const { data, isLoading } = useGetAllServicesQuery({
    ...arg,
    searchTerm: debouncedTerm,
  });

  //@ts-ignore
  const { data: totalData } = useGetAllServicesQuery(undefined);

  //@ts-ignore
  const pageCount = Math.ceil(totalData?.length / 6);

  const handlePrev = async () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = async () => {
    if (page < pageCount) {
      setPage((prev) => prev + 1);
    }
  };

  const { role } = getUserInfo() as any;

  const router = useRouter();
  const userloggedIn = isLoggedin();

  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (id: string) => {
    if (!userloggedIn) {
      router.push("/login");
    } else {
      if (id) {
        const res: any = await addToCart({ serviceId: id });
        if (res.data) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Service is Added!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-right",
            icon: "error",
            title: "This service Already Added!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  const handleBook = (id: string) => {
    if (!userloggedIn) {
      router.push("/login");
    } else {
      window.location.assign(`/booking/${id}`);
      // router.push(`/booking/${id}`);
    }
  };

  const reseatFilters = () => {
    setSearchTerm("");
  };

  const handleLoading = () => {
    <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
      <div className="h-48 rounded-t dark:bg-gray-700"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-full h-6 rounded dark:bg-gray-700"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
      </div>
    </div>;
  };

  return (
    <section className="py-10 md:py-20 container">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:-mb-10">
            <span className="block mb-2 text-lg font-semibold text-primary">
              Our Services
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              What We Offer
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-between my-5">
        <div className="flex gap-x-4"></div>
        <div className="m-6 flex justify-center py-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-primary w-full max-w-xs"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="ml-2">
            {searchTerm && (
              <button onClick={reseatFilters} className="btn btn-primary">
                <AiOutlineReload className=" text-2xl mr-2 " />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {isLoading ? (
          <>
            {/* <Loading /> */}
            {handleLoading()}
            {handleLoading()}
            {handleLoading()}
            {handleLoading()}
          </>
        ) : (
          data?.map((service: any) => (
            <div
              key={service?.id}
              className="border overflow-hidden group border-gray-200 rounded p-3 shadow hover:shadow hover:shadow-primaryColor text-center relative"
            >
              <div className="relative rounded overflow-hidden inline-block w-full">
                {/* <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-gray-900 group-hover:h-[50%] opacity-80"></span> */}
                <Image
                  width={250}
                  height={250}
                  className="h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover object-top rounded"
                  src={service?.image}
                  alt={service?.title}
                />
                {/* <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-300 ease-out transform translate-y-0 bg-gray-900 group-hover:h-[50%] opacity-80"></span> */}
                <div
                  onClick={() =>
                    window.location.assign(`/service/${service?.id}`)
                  }
                  className="absolute mx-44 top-[42%] scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"
                >
                  <button className="btn inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white hover:bg-accent">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-1 md:p-2 lg:p-4 mt-1 md:mt-3 space-y-2">
                <h2 className="text-xl md:text-2xl lg:text-3xl sm:text-sm font-bold text-gray-800">
                  {service?.title}
                </h2>
                <p className="text-xs md:text-base">
                  {service?.description.slice(0, 100)}
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-3">
                <button
                  onClick={() => handleAddToCart(service?.id)}
                  className="btn btn-outline "
                  disabled={
                    role === ENUM_USER_ROLE.ADMIN ||
                    role === ENUM_USER_ROLE.SUPER_ADMIN
                  }
                >
                  <ShoppingBagIcon className="w-6 h-6 inline-block" /> Add To
                  Cart
                </button>
                <button
                  onClick={() => handleBook(service?.id)}
                  className="btn btn-neutral"
                  disabled={
                    role === ENUM_USER_ROLE.ADMIN ||
                    role === ENUM_USER_ROLE.SUPER_ADMIN
                  }
                >
                  <ClipboardDocumentCheckIcon className="w-6 h-6 inline-block" />{" "}
                  Book now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="join m-3">
        <button onClick={handlePrev} className="join-item btn">
          «
        </button>
        <button className="join-item btn">{page}</button>
        <button onClick={handleNext} className="join-item btn">
          »
        </button>
      </div>
    </section>
  );
};

export default Services;
