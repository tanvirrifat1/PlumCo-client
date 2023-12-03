"use client";

import Loading from "@/app/loading";
import DatePickerField from "@/components/forms/DatePickerField";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormIntput";
import AllBookingData from "@/components/ui/AllDataBoking";
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

  return (
    <>
      <AllBookingData serviceId={id} />
    </>
  );
};

export default page;
