"use client";

import Loading from "@/app/loading";
import { ENUM_USER_ROLE } from "@/enum/user";
import { useAddToCartMutation } from "@/redux/api/addToCartApi";
import { useGetServicesByCategoryIdQuery } from "@/redux/api/serviceApi";
import { getUserInfo, isLoggedin } from "@/service/auth.service";
import {
  ClipboardDocumentCheckIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Helmet } from "react-helmet-async";
import { BiSolidCartAdd } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
import { GrFormNext, GrLinkNext } from "react-icons/gr";
import Swal from "sweetalert2";

const page = ({ params }: { params: any }) => {
  const { id } = params;

  const { role } = getUserInfo() as any;
  const router = useRouter();
  const isLoggedIn = isLoggedin();

  const { data, isLoading } = useGetServicesByCategoryIdQuery(id);
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (id: string) => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      if (id) {
        const res: any = await addToCart({ serviceId: id });
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Service is Added!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
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
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(`/booking/${id}`);
    }
  };

  return (
    <section className="py-20 w-full lg:w-[1440px] mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
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
      <div>
        <Helmet>
          <title>Plumbing | Category</title>
        </Helmet>
      </div>
      ;
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {isLoading ? (
          <>
            <span className="loading loading-spinner text-warning"></span>
          </>
        ) : (
          data?.map((service: any) => (
            <>
              <div key={service.id} className="">
                <div className="card card-compact  bg-base-100 shadow-xl">
                  <Image
                    width={250}
                    height={250}
                    className="h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover object-top rounded "
                    src={service.image}
                    alt={service.title}
                  />

                  <div className="card-body">
                    <h2 className="card-title">{service?.title}</h2>
                    <p className="">{service?.description.slice(0, 50)}...</p>
                    <p className="">Price: {service?.price} $</p>
                    <div className="flex hover:text-purple-800 my-2">
                      <Link href={`/service/${service?.id}`}>
                        <div className="flex">
                          <p className="text-xl">READ MORE</p>
                          <GrLinkNext className="text-xl hover:text-purple-800 mt-1" />
                        </div>
                      </Link>
                    </div>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleAddToCart(service?.id)}
                        disabled={role === "admin" || role === "super_admin"}
                        className="btn btn-outline  w-48 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg"
                      >
                        <CiSaveUp2 className="text-2xl" /> Add
                      </button>
                      <button
                        onClick={() => handleBook(service?.id)}
                        disabled={role === "admin" || role === "super_admin"}
                        className="btn btn-outline  w-48 h-6 hover:bg-white hover:text-black hover:shadow-lg"
                      >
                        <BiSolidCartAdd className="text-2xl" /> Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </section>
  );
};

export default page;
