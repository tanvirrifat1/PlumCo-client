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

const Services = () => {
  const arg: Record<string, any> = {};

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  const { data, isLoading } = useGetAllServicesQuery({
    ...arg,
    searchTerm: debouncedTerm,
  });
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
      router.push(`/booking/${id}`);
    }
  };

  const reseatFilters = () => {
    setSearchTerm("");
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
              A pipe service offer generally refers to the products or services
              offered by a company or organization in the context of pipes or
              plumbing. These services may include
            </p>
          </div>
        </div>
      </div>
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
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((service: any) => (
          <div
            key={service?.id}
            className=" rounded-md shadow-md group relative"
          >
            <Image
              src={service?.image}
              alt={service?.title}
              className="object-cover object-center w-full rounded-t-md h-72 dark-bg-gray-500"
              height={350}
              width={300}
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tighter">
                  {service?.title}
                </h2>
                <p className="text-black">
                  {service?.description.slice(0, 32)}
                </p>
              </div>
              <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
                <div className="flex gap-2 ">
                  <button
                    onClick={() => handleAddToCart(service?.id)}
                    disabled={role === "admin" || role === "super_admin"}
                    className="btn btn-outline  w-24 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg"
                  >
                    <CiSaveUp2 className="text-2xl" /> Add
                  </button>
                  <button
                    onClick={() => handleBook(service?.id)}
                    disabled={role === "admin" || role === "super_admin"}
                    className="btn btn-outline  w-24 h-6 hover:bg-white hover:text-black hover:shadow-lg"
                  >
                    <BiSolidCartAdd className="text-2xl" /> Book
                  </button>
                  <button className="btn btn-outline  w-24 h-6 bg-white text-black">
                    <Link href={`/service/${service?.id}`}>
                      <div className="flex ">
                        <p className="">READ MORE</p>
                        <GrLinkNext className="text-xl hover:text-purple-800 mt-1" />
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
// data?.map((service: any) => (
//             <>
//               <div key={service.id} className="">
//                 <div className="card w-full bg-base-100 shadow-xl">
//                   <figure className="px-10 pt-10">
//                     <Image
//                       width={500}
//                       height={500}
//                       src={service?.image}
//                       alt={service?.title}
//                       className="rounded-xl"
//                     />
//                   </figure>

//                   <div className="card-body">
//                     <h2 className="card-title">{service?.title}</h2>
//                     <p className="">{service?.description.slice(0, 50)}...</p>
//                     <p className="">Price: {service?.price} $</p>
//                     <div className="flex  hover:text-purple-800 my-2 ">
//                       <Link href={`/service/${service?.id}`}>
//                         <div className="flex ">
//                           <p className="text-xl">READ MORE</p>
//                           <GrLinkNext className="text-xl hover:text-purple-800 mt-1" />
//                         </div>
//                       </Link>
//                     </div>
//                     <div className="flex justify-center gap-3 ">
//                       <button
//                         onClick={() => handleAddToCart(service?.id)}
//                         disabled={role === "admin" || role === "super_admin"}
//                         className="btn btn-outline  w-44 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg"
//                       >
//                         <CiSaveUp2 className="text-2xl" /> Add
//                       </button>
//                       <button
//                         onClick={() => handleBook(service?.id)}
//                         disabled={role === "admin" || role === "super_admin"}
//                         className="btn btn-outline  w-44 h-6 hover:bg-white hover:text-black hover:shadow-lg"
//                       >
//                         <BiSolidCartAdd className="text-2xl" /> Book
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))
