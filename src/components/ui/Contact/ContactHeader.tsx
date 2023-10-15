import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

const ContactHeader = () => {
  return (
    <div className="w-full mt-10  lg:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-xl">
        <div className="card-body">
          <div className="flex justify-center text-6xl py-2">
            <SlLocationPin />
          </div>
          <h2 className="card-title">Address</h2>
          <p>Garpara,Manikganj,Dhaka</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-center text-6xl py-2">
            <AiOutlineMail />
          </div>
          <h2 className="card-title">Email US</h2>
          <p>rifatkhan5567790@gmail.com</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-center text-6xl py-2">
            <BiPhoneCall />
          </div>
          <h2 className="card-title">Call Now</h2>
          <p>01633912193</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
