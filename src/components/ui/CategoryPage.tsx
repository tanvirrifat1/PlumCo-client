"use client";

import Loading from "@/app/loading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { ICategory } from "@/types";
import { useRouter } from "next/navigation";
import { BiSolidGasPump } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

const CategoryPage = () => {
  const query: Record<string, any> = {};
  const { data, isLoading } = useCategoriesQuery({ ...query });
  const router = useRouter();
  const handleService = (id: string) => {
    router.push(`/category/service/${id}`);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container lg:w-[1000px] pt-20 pb-5">
      <div className="grid grid-cols-1   md:grid-cols-2 gap-10">
        {data?.categories?.map((category: ICategory, i: number) => (
          <div
            onClick={() => handleService(category?.id)}
            className={`${
              i === 0 ? "bg-[#253041]" : "bg-[#0052DA]"
            } card bg-base-100 shadow-xl text-black py-8 cursor-pointer rounded bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center gap-7`}
            key={category?.id}
          >
            {i === 0 ? (
              <BiSolidGasPump className="lg:w-20 lg:h-20 w-12 h-12 inline-block text-black" />
            ) : (
              <MdDesignServices className="lg:w-20 lg:h-20 w-12 h-12 inline-block text-black" />
            )}
            <h1 className="text-center font-bold text-black text-xl md:text-2xl lg:text-4xl">
              {category?.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
