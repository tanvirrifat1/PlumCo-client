"use client";
import Loading from "@/app/loading";
import { useAddAllBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";

const LatestNews = () => {
  const arg = {};
  const { data, isLoading } = useAddAllBlogsQuery({ ...arg });

  return (
    <section className="py-20 w-full lg:w-[1440px] mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Latest News & Blog
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          data?.map((blog: any) => (
            <>
              <div className="card bg-base-100 shadow-xl">
                <figure className=" ">
                  <Image
                    src={blog?.image}
                    alt="Shoes"
                    width={500}
                    height={500}
                    className="h-[330px] w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog?.title}</h2>
                  <p>
                    {blog?.content.length > 100
                      ? blog?.content.slice(0, 100)
                      : blog?.content}
                    ...
                  </p>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">
                      {blog?.author?.fullName}
                    </div>
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </section>
  );
};

export default LatestNews;
