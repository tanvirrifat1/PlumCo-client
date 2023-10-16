"use client";

import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { CiSaveUp2 } from "react-icons/ci";
import Image from "next/image";

import React from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { getUserInfo, isLoggedin } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "@/redux/api/addToCartApi";
import Swal from "sweetalert2";

const Services = () => {
  const arg = {};
  const { data, isLoading } = useGetAllServicesQuery({ ...arg });
  const { role, userId } = getUserInfo() as any;

  console.log(role);

  const router = useRouter();
  const userloggedIn = isLoggedin();

  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (id: string) => {
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
  };

  const handleBook = (id: string) => {
    if (!userloggedIn) {
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
      <div className="m-6">
        <input
          type="text"
          placeholder="Type here"
          className="input input-primary w-full max-w-xs"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {isLoading ? (
          <>
            <p>Loading...</p>
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
                    <p className="text-lg">
                      {service?.description.slice(0, 50)}...
                    </p>
                    <p className="text-lg">Price: {service?.price} $</p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => handleAddToCart(service?.id)}
                        disabled={role === "admin" || role === "super_admin"}
                        className="btn btn-outline rounded-full w-48 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg"
                      >
                        <CiSaveUp2 className="text-2xl" /> Add
                      </button>
                      <button
                        onClick={() => handleBook(service?.id)}
                        disabled={role === "admin" || role === "super_admin"}
                        className="btn btn-outline rounded-full  w-48 h-6 hover:bg-white hover:text-black hover:shadow-lg"
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

export default Services;
