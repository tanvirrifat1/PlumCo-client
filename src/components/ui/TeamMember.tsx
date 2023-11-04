"use client";

import Image from "next/image";

const TeamMember = () => {
  const member = [
    {
      id: 1,
      title: "Leak Detection and Repair.",
      price: "280",
      descripttion:
        "This service involves identifying and fixing leaks in water supply or drainage pipes. Leaks can waste water, damage property, and lead to increased utility bills. Plumbers use various techniques, including pressure testing and visual inspection, to locate and repair leaks.",
      image: "https://i.ibb.co/KyLNVxw/likage.jpg",
    },
    {
      id: 2,
      title: "Drain Cleaning and Unclogging.",
      price: "170",
      descripttion:
        "Plumbers provide services to clear clogged drains, toilets, and sewer lines. They use tools like drain snakes, hydro-jetting, or chemical solutions to remove blockages and ensure proper drainage.",
      image: "https://i.ibb.co/5kqyGZy/drain.jpg",
    },
    {
      id: 3,
      title: "Pipe Installation and Replacement.",
      price: "346",
      descripttion:
        "Plumbers install new water supply lines, drain pipes, and fixtures in residential, commercial, or industrial settings. They may also replace old or damaged pipes to improve the plumbing system's efficiency and reliability.",
      image: "https://i.ibb.co/93mFsk3/img2.jpg",
    },
    {
      id: 4,
      title: "Water Heater Services.",
      price: "276",
      descripttion:
        "This includes the installation, repair, and maintenance of water heaters. Plumbers can work with various types of water heaters, including tankless, electric, gas, or solar, to ensure hot water is available in homes and businesses.",
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
          <div className="w-full lg:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {member?.map((card: any) => (
              <div key={card?.id} className="max-w-xs rounded-md shadow-md ">
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
                      Donec lectus leo
                    </h2>
                    <p className="dark:text-gray-100">
                      Curabitur luctus erat nunc, sed ullamcorper erat
                      vestibulum eget.
                    </p>
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
