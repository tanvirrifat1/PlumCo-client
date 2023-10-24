"use client";

import React, { useEffect } from "react";
import { FcFeedback } from "react-icons/fc";
import Form from "../forms/Form";

const FeedBackModal = () => {
  const onsubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-outline rounded-full ml-2 w-48 h-6 bg-white hover:text-white hover:shadow-lg"
        onClick={() => {
          const modalElement = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;
          if (modalElement) {
            modalElement.showModal();
          }
        }}
      >
        FeedBack
        <FcFeedback className="text-2xl hover:text-white" />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <div className="flex justify-between">
                <div>
                  <h1 className="py-4 text-xl">FeedBack Here</h1>
                </div>
                <div>
                  <button className="btn btn-circle btn-outline">
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
                  </button>
                </div>
              </div>
              <Form submitHandler={onsubmit}>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs my-2"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs my-2"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs my-2"
                />
                <button className="btn btn-outline  w-44 h-6 bg-slate-600 text-white hover:bg-white hover:text-black hover:shadow-lg">
                  Submit
                </button>
              </Form>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FeedBackModal;
