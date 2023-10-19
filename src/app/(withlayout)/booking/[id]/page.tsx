"use client";

import DatePickerField from "@/components/forms/DatePickerField";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import LoadingButton from "@/components/ui/LoginSpinner";
import SmallSpinner from "@/components/ui/SmallSpinner";
import { useCreateBookedMutation } from "@/redux/api/bookingApi";
import { useProfileQuery } from "@/redux/api/profileApi";
import { useGetSingleDataQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/service/auth.service";
import { format } from "date-fns";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const page = ({ params }: { params: any }) => {
  const { id } = params;
  const [startDate, setStartDate] = useState(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const { userId } = getUserInfo() as any;
  const { data: service } = useGetSingleDataQuery(id);
  const { data: user } = useProfileQuery(userId);
  const date = format(startDate, "PP");

  const defaultValues = {
    fullName: user?.profile?.fullName,
    email: user?.profile?.email,
    address: user?.profile?.address,
    contactNo: user?.profile?.contactNo,
    title: service?.title,
  };

  const [createBooked] = useCreateBookedMutation();

  const onSubmit = async () => {
    const BookData = {
      serviceId: service?.id,
      userId,
      date: date,
    };
    const res: any = await createBooked(BookData);
    if (res?.data) {
      toast("booking successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Already booked!", {
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
  };

  const handleDateChange = (newDate: Date) => {
    setStartDate(newDate);
  };

  return (
    <div className="bg-white max-w-[1020px] mx-auto my-24">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Book now Carefully
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Helmet>
          <title>Plumbing | Booking</title>
        </Helmet>
      </div>
      ;
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div className="p-10 shadow-md">
          <div className="flex gap-3 pt-5">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <FormInput
                name="fullName"
                label="Your Name"
                type="text"
                placeholder="Enter your name"
                id="username"
                readonly={true}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white read-only"
              />
            </div>
            <div className="w-full md:w-1/2">
              <FormInput
                name="email"
                label="Your Email"
                type="email"
                placeholder="Enter your email"
                id="email"
                readonly={true}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <FormInput
                name="contactNo"
                label="Phone Number"
                type="text"
                placeholder="Enter your number"
                id="contactno"
                readonly={true}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2  md:mb-0">
              <FormInput
                name="address"
                label="Address"
                type="text"
                placeholder="Enter your address"
                id="address"
                readonly={true}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <div className="w-full md:w-1/2">
              <FormInput
                name="title"
                label="Service"
                type="text"
                placeholder="Enter your service"
                id="title"
                readonly={true}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date
              </label>
              <DatePickerField
                className="appearance-none block cursor-pointer w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                selectedDate={startDate as Date}
                onChange={(date) => handleDateChange(date as Date)}
              />
            </div>
          </div>

          <div className="mt-4">
            <LoadingButton
              type="submit"
              className="btn btn-accent mt-3 w-full"
              value="Login"
            >
              {loading ? <SmallSpinner /> : "Book"}
            </LoadingButton>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default page;
