"use client";
import Loading from "@/app/loading";
import { useAllFaqQuery } from "@/redux/api/faqApi";
import React from "react";
import { Helmet } from "react-helmet-async";

const FaqPage = () => {
  const arg = {};
  const { data, isLoading } = useAllFaqQuery({ ...arg });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="w-full lg:w-[1020px] mx-auto px-3 py-24">
        <div>
          <Helmet>
            <title>Plumbing | Faq</title>
          </Helmet>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Do you want to know!
              </h2>
              <p className="text-base text-body-color">
                It is a long established fact that a reader will be distracted
                content of a page when looking.
              </p>
            </div>
          </div>
        </div>
        {data?.map((faq: any) => (
          <section key={faq?.id} className=" mt-6">
            <div className="space-y-4 text-xl rounded-3xl">
              <details className="w-full border ">
                <summary className="px-4 py-6 focus:outline-none bg-teal-600 text-white">
                  {faq?.question}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 mt-9 ">{faq?.answer}</p>
              </details>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
