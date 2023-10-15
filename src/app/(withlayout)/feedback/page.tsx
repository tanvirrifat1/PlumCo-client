"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import React from "react";

const page = () => {
  const arg = {};
  const { data, isLoading } = useGetAllUserQuery({ ...arg });

  const admins = data?.admins;

  const feedbackOptions = admins?.map((feedback: any) => {
    return {
      label: feedback?.fullName,
      value: feedback?.id,
    };
  });
  console.log(feedbackOptions);
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="py-10">
      <div className="container xl:w-[40%] px-20 py-5 border-gray-900 mt-5 border">
        <Form submitHandler={onSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Your Feedback
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please share the article or the text you like me to review, and
                let me know what specific aspects you would like feedback on
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      type="text"
                      name="userId"
                      placeholder="Select your id"
                      label="UserId"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="serviceId"
                      type="text"
                      placeholder="your serviceId"
                      label="your serviceId"
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="comments"
                      type="text"
                      label="Your comments"
                      placeholder="enter your comments"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="suggestions"
                      label="Suggestions"
                      type="text"
                      placeholder="write your suggestions"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn btn-outline w-72 rounded-full">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
