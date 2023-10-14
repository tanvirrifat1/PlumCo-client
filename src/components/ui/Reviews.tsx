"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/Reviews.modules.css";
import {
  Navigation,
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi";

const Reviews = () => {
  const arg = {};
  const { data, isLoading } = useGetAllReviewQuery({ ...arg });

  const SERVICE = data?.review;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#F5F8FE] w-full lg:w-[1440px] mx-auto">
      <section className="container relative py-20">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Read trusted reviews from our customers
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What Peoples Say
              </h2>
              <p className="text-base text-body-color">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. has been the industrys standard dummy text ever since
                the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Keyboard]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonal"
          >
            {SERVICE?.map((review: any, i: any) => (
              <SwiperSlide className="pt-3" key={i}>
                <div className="mb-10">
                  <figure className="cursor-pointer">
                    <Image
                      width={100}
                      height={100}
                      src={review?.user?.profileImage}
                      alt=""
                      className="w-[140px] lg:-mb-16 p-2 mx-auto object-cover h-[140px] rounded-full ring"
                    />
                  </figure>
                  <blockquote className="blockquote bg-blue-100 flex h-full flex-col justify-center group rounded-2xl cursor-pointer transition-all duration-300  sm:pt-16 sm:p-8">
                    <p className="text-2xl mb-1 text-center font-bold text-primaryColor sm:text-3xl">
                      {review?.user?.fullName}
                    </p>
                    <div className="relative text-center">
                      <FaQuoteLeft className="absolute quote top-0 -left-2 w-4 h-4 text-gray-900" />
                      <p className="inline">{review?.review}</p>
                      <FaQuoteRight className="absolute quote bottom-0 right-0 w-4 h-4 text-gray-900" />
                    </div>

                    <div className="flex justify-center mt-2 gap-0.5 ">
                      {Array(review?.rating)
                        .fill(0)
                        .map((index, i) => (
                          <StarIcon
                            key={i}
                            className="w-6 h-6 text-yellow-500"
                          />
                        ))}
                    </div>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute right-20 bottom-10 hidden md:flex gap-5">
          <button className="prev z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:-translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineLeft className="w-6 h-6 text-white" />
          </button>
          <button className="next z-10 w-10 h-10 rounded-full bg-blue-500 shadow-xl flex items-center hover:translate-x-1 transition-all duration-300 justify-center group">
            <AiOutlineRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* <ReviewModal isOpen={isModalOpen} onClose={closeModal}></ReviewModal> */}
      </section>
    </div>
  );
};

export default Reviews;
