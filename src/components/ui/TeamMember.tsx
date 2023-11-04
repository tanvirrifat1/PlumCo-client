"use client";

import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const TeamMember = () => {
  const member = [
    {
      id: 1,
      title: "Team Leader",
      name: "Henry Barton",
      image: "https://i.ibb.co/KyLNVxw/likage.jpg",
    },
    {
      id: 2,
      title: "Junior Member",
      name: "Mattie Washington",
      image: "https://i.ibb.co/5kqyGZy/drain.jpg",
    },
    {
      id: 3,
      title: "Team Leader",
      name: "Winifred Harmon",
      image: "https://i.ibb.co/93mFsk3/img2.jpg",
    },
    {
      id: 4,
      title: "Senior Member",
      name: "Shelia Lawrence",
      image: "https://i.ibb.co/GMc7RzP/member.jpg",
    },
  ];

  return (
    <section className="py-20 w-full lg:w-[1440px] mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Dedicated Member
            </h2>
            <p className="text-base text-body-color">
              If you are looking for a blog article related to pipe services,
              you might consider writing or searching for articles on topics
              such as plumbing tips, pipe maintenance, common plumbing issues,
              or specific pipe-related services. Here is a general outline for a
              blog article on pipe services
            </p>
          </div>
          <div className="w-full  lg:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {member?.map((card: any) => (
              <div
                key={card?.id}
                className="max-w-xs rounded-md shadow-md group relative"
              >
                <Image
                  src={card?.image}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 dark-bg-gray-500"
                  height={350}
                  width={300}
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">
                      {card?.name}
                    </h2>
                    <p className="text-black">{card?.title}</p>
                  </div>
                  <div className="flex justify-center absolute bottom-0 left-0 w-full h-0 flex-col  items-center opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
                    <div className="flex gap-2 bg ">
                      <button className="btn btn-circle btn-outline bg-white text-black">
                        <BiLogoFacebook className="text-xl" />
                      </button>
                      <button className="btn btn-circle btn-outline bg-white text-black">
                        <FaLinkedinIn className="text-xl" />
                      </button>
                      <button className="btn btn-circle btn-outline bg-white text-black">
                        <AiOutlineTwitter className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
