"use client";

import Image from "next/image";
import bg from "../../assets/background.png";
import img from "../../assets/call.png";
import { useState } from "react";
import RequestModal from "../common/RequestModal";

const AddServiceCart = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="mt-32 group relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={img}
            className="-mt-32 lg:w-1/2 hidden md:block rounded-lg shadow-2xl"
            alt=""
          />
          <div className="-mt-12">
            <h1 className="text-black text-4xl font-bold">
              Make an Service Today
            </h1>
            <p className=" text-black py-6">
              A pipe service description typically refers to a description of
              services related to pipes, which are often associated with
              plumbing or other industrial applications. These services may
              include maintenance, repair, installation, and more. Here a
              general outline of what a pipe service description might include:
            </p>
            <button
              onClick={openModal}
              className="btn btn-outline rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white hover:text-black hover:shadow-lg"
            >
              Add Service
            </button>
          </div>
        </div>
        <RequestModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default AddServiceCart;
