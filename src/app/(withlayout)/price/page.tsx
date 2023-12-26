"use client";

import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Price = () => {
  return (
    <section className="lg:-mt-52 mt-6 w-full lg:p-[180px] mx-auto">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold  uppercase ">OUR PRICING</span>
          <h2 className="text-4xl font-bold lg:text-4xl">Flexible Pricing</h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow-2xl sm:p-8  ">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">BASIC</h4>
                <span className="text-4xl font-bold">
                  $30
                  <span className="text-sm ">/month</span>
                </span>
              </div>

              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Air conditioner installing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Cooler dust cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Customer Ultra Benefits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Test compressure heat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <Link className="btn btn-outline" href={"/Contacts"}>
                <MdArrowOutward className="text-xl" />
                <button>selected package</button>
              </Link>
            </div>
          </div>
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3  lg:mb-0">
            <div className="flex  flex-grow flex-col p-6 space-y-6 rounded shadow-lg sm:p-8  ">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">PREMIUM</h4>
                <span className="text-4xl font-bold">
                  $60
                  <span className="text-sm ">/month</span>
                </span>
              </div>

              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Air conditioner installing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Cooler dust cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Customer Ultra Benefits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Test compressure heat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>24/7 support</span>
                </li>
              </ul>

              <Link
                className="btn bg-black text-white hover:text-black"
                href={"/Contacts"}
              >
                <MdArrowOutward className="text-xl" />
                <button>selected package</button>
              </Link>
            </div>
          </div>
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow-2xl sm:p-8  ">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">ULTIMATE</h4>
                <span className="text-4xl font-bold">
                  $90
                  <span className="text-sm ">/month</span>
                </span>
              </div>

              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Air conditioner installing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Cooler dust cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Customer Ultra Benefits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>Test compressure heat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <IoArrowForwardCircle className="text-xl" />
                  <span>24/7 support</span>
                </li>
              </ul>

              <Link className="btn btn-outline" href={"/Contacts"}>
                <MdArrowOutward className="text-xl" />
                <button>selected package</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
