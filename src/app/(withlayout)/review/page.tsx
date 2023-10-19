"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";

import SelectFormField from "@/components/forms/SeleteFormField";
import { useReviewMutation } from "@/redux/api/reviewApi";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/service/auth.service";
import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const review = () => {
  const { userId } = getUserInfo() as any;

  const arg = {};
  const { data: Service } = useGetAllServicesQuery({ ...arg });

  const serviceOption = Service?.map((field: any) => {
    return {
      label: field?.title,
      value: field?.id,
    };
  });

  const [review] = useReviewMutation();

  const onSubmit = async (data: any) => {
    if (userId) {
      data.userId = userId;
    }

    data.rating = parseInt(data.rating);
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
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-10">
      <div className="container xl:w-[40%] px-20 py-5 border-gray-900 mt-5 border">
        <Form submitHandler={onSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Your Review
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Please share the article or the text you like me to review, and
                let me know what specific aspects you would like feedback on
              </p>
              <div>
                <Helmet>
                  <title>Plumbing | Review</title>
                </Helmet>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <SelectFormField
                      id=""
                      options={serviceOption}
                      name="serviceId"
                      label="Your service"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="review"
                      type="text"
                      label="Your review"
                      placeholder="enter your comments"
                      className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <FormInput
                      id=""
                      name="rating"
                      type="number"
                      label="Your rating"
                      placeholder="enter your rating"
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

export default review;
