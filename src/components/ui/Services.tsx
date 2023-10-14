"use client";

import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const arg = {};
  const { data, isLoading } = useGetAllServicesQuery({ ...arg });
  console.log(data);
  return (
    <section className="py-20">
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
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
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
                    <div className="card-actions justify-center">
                      <button className="btn btn-outline rounded-full w-full hover:bg-white hover:text-black hover:shadow-lg">
                        Read more
                      </button>
                      <button className="btn btn-outline rounded-full w-full hover:bg-white hover:text-black hover:shadow-lg">
                        Add Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div className="p-1 md:p-2 lg:p-4 mt-1 md:mt-3 space-y-2">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-base">{service.description}</p>
                </div> */}
                {/* <div className="text-center flex justify-center ">
                  <Link
                    className="py-2 mr-3 text-[18px] text-blue-500 "
                    href="#"
                  >
                    <button className="btn btn-outline rounded-full">
                      Read more
                    </button>
                  </Link>
                  <Link className="py-2 text-[18px] text-blue-500" href="#">
                    <button className="btn btn-outline rounded-full">
                      Add Cart
                    </button>
                  </Link>
                </div> */}
              </div>
            </>
          ))
        )}
      </div>
    </section>
  );
};

export default Services;
