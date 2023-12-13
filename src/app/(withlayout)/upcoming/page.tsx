"use client";

import Loading from "@/app/loading";
import { useGetUpcomingServiceQuery } from "@/redux/api/upcomingServiceApi";
import { id } from "date-fns/locale";
import Image from "next/image";

const Upcoming = () => {
  const { data, isLoading } = useGetUpcomingServiceQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[550px]">
      <div>
        <h1 className="text-5xl  text-black text-center font-semibold my-6">
          Upcoming Service
        </h1>
      </div>
      <div className="w-full lg:w-[1300px] mx-auto grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((service: any, i: string) => (
          <div
            key={i}
            className="max-w-xs p-6 rounded-md shadow-xl  bg-base-100"
          >
            <Image
              src={service?.image}
              alt=""
              height={200}
              width={250}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex justify-between ">
              <h1 className="lg:mt-6 text-xl font-semibold mb-2">
                {service?.title}
              </h1>
              <p className="lg:mt-6 text-xl font-semibold mb-2">
                Price: {service?.price}$
              </p>
            </div>
            <p className="">{service?.description.slice(0, 150)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
