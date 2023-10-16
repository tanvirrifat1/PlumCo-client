"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import FormTextArea from "@/components/forms/FormTextArea";
import LoadingButton from "@/components/ui/LoginSpinner";
import SmallSpinner from "@/components/ui/SmallSpinner";
import { useCreateFaqMutation } from "@/redux/api/faqApi";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [createFaq] = useCreateFaqMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    setLoading(true);
    const res: any = await createFaq(data);
    if (res.data as any) {
      Swal.fire("faq added Successfully!");
      router.push("/dashBoard/faq");
      setLoading(false);
    } else {
      toast.error("There was an error!");
    }
  };

  return (
    <div className="bg-white max-w-[1020px] mx-auto my-24">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Faq add
            </h2>
          </div>
        </div>
      </div>
      <Form submitHandler={handleSubmit}>
        <div className="p-10 shadow-md">
          <div className="flex gap-3 pt-5">
            <div className="w-full ">
              <FormInput
                name="question"
                label="Question"
                type="text"
                placeholder="Enter Question..."
                id="question"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
              />
            </div>
          </div>

          <FormTextArea
            name="answer"
            placeholder="Write Answer..."
            id="answer"
            rows={3}
            label="Answer"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
          />
          <div className="mt-4  flex justify-center items-center ">
            <LoadingButton
              type="submit"
              className="btn btn-accent mt-3  flex justify-center items-center"
              value="Login"
            >
              {loading ? <SmallSpinner /> : "Add Faq"}
            </LoadingButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default page;
