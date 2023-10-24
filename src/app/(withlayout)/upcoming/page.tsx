"use client";

import Image from "next/image";

const Upcoming = () => {
  const UpcomingService = [
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
      image: "https://i.ibb.co/rsT6jx5/img6.jpg",
    },
    {
      id: 5,
      title: "Fixture Installation.",
      price: "276",
      descripttion:
        "Plumbers install and replace fixtures such as faucets, sinks, toilets, showers, and bathtubs. They ensure that these fixtures are connected properly to the plumbing system and function as intended.",
      image: "https://i.ibb.co/Px9NgXZ/img4.jpg",
    },
    {
      id: 6,
      title: "Septic System Services.",
      price: "276",
      descripttion:
        "For homes not connected to a municipal sewage system, plumbers offer services related to septic tanks and systems. This includes installation, maintenance, pumping, and repairs to ensure proper waste disposal.",
      image: "https://i.ibb.co/mSk4mdH/black-Holl.jpg",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-5xl text-black text-center font-semibold my-2">
          Upcoming Service
        </h1>
        <span className="text-center flex justify-center items-center ">
          In the fast-paced world of piping and plumbing, staying updated with
          the latest advancements and upcoming services is crucial for
          professionals and enthusiasts alike.
        </span>
        <span className="text-center flex justify-center items-center ">
          This article delves into the innovative pipe services on the horizon,
          helping you navigate the ever-evolving landscape of this vital
          industry.
        </span>
      </div>
      <div className="w-full lg:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {UpcomingService?.map((service: any, i) => (
          <div key={i} className="card w-96 glass">
            <figure className="px-10 pt-10">
              <Image
                width={500}
                height={500}
                src={service?.image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service?.title}</h2>
              <p>{service?.descripttion.slice(0, 75)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
