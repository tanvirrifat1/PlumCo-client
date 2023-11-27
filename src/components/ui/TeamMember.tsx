"use client";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

import image1 from "../../assets/mamber/member2.png";
import image2 from "../../assets/mamber/member.png";
import image3 from "../../assets/mamber/member3.png";
import image4 from "../../assets/mamber/member4.png";

const TeamMember = () => {
  const member = [
    {
      id: 1,
      title: "Team Leader",
      name: "Henry Barton",
      image: image4,
    },
    {
      id: 2,
      title: "Junior Member",
      name: "Mattie Washington",
      image: image2,
    },
    {
      id: 3,
      title: "Team Leader",
      name: "Winifred Harmon",
      image: image3,
    },
    {
      id: 4,
      title: "Senior Member",
      name: "Shelia Lawrence",
      image: image1,
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
              It appears that you are interested in an article about dedicated
              members or membership in a specific context. To provide you with a
              more relevant and informative article, please specify the topic or
              field you are interested in.
            </p>
          </div>
          <div className="w-full  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {member?.map((card: any) => (
              <div
                key={card?.id}
                className="rounded-md shadow-md group relative"
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
                    <h2 className="text-3xl font-semibold tracking-tighter">
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
