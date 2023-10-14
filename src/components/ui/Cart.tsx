"use client";

import Image from "next/image";
import appointment from "../../assets/background.png";
import img from "../../assets/call.png";

const Cart = () => {
  return (
    <div
      className="mt-32"
      style={{
        backgroundImage: `url(${appointment})`,
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
          <div>
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
            <button className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg">
              Add Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
