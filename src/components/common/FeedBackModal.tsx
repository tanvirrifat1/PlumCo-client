"use client";

import React, { useState } from "react";
import Form from "../forms/Form";
import FormInput from "../forms/FormIntput";
import { getUserInfo } from "@/service/auth.service";
import { useReviewMutation } from "@/redux/api/reviewApi";
import { StarIcon } from "@heroicons/react/20/solid";
import { toast } from "react-toastify";

const FeedBackModal = ({ id, setOpenModal }: any) => {
  const [rating, setRating] = useState<number>(0);
  const { userId } = getUserInfo() as any;

  const [review] = useReviewMutation();

  const onSubmit = async (data: any) => {
    if (userId) {
      data.userId = userId;
    }
    data.serviceId = id;
    data.rating = rating;
    try {
      const res = await review(data);

      if (res) {
        toast("Review successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setOpenModal(null);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="my_modal_6" className="btn">
        open modal
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Provider you feedback</h3>

          <Form submitHandler={onSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <div className="mt-2">
                  <FormInput
                    id=""
                    name="review"
                    type="text"
                    label="Your review"
                    placeholder="enter your comments"
                    className="block w-[300px] rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex space-x-3">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <StarIcon
                      key={index}
                      className={`w-6 h-6 ${
                        index <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onMouseEnter={() => setRating(index)}
                      onMouseLeave={() => setRating(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="btn btn-outline mt-6 w-44 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg">
              Submit
            </button>
          </Form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn btn-square btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackModal;
