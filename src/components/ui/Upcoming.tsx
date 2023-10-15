"use client";

import Image from "next/image";

const Upcoming = () => {
  const UpcomingService = [
    {
      id: 1,
      title: "Expert Plumbing Service You Can Trust.",
      price: "280",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/gJg9JMJ/img.jpg",
    },
    {
      id: 2,
      title: "Expert Plumbing Service You Can Trust.",
      price: "170",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/d4938m2/img1.jpg",
    },
    {
      id: 3,
      title: "Expert Plumbing Service You Can Trust.",
      price: "346",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/93mFsk3/img2.jpg",
    },
    {
      id: 4,
      title: "Expert Plumbing Service You Can Trust.",
      price: "276",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/VBT5Trb/img3.jpg",
    },
    {
      id: 5,
      title: "Expert Plumbing Service You Can Trust.",
      price: "276",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/Px9NgXZ/img4.jpg",
    },
    {
      id: 6,
      title: "Expert Plumbing Service You Can Trust.",
      price: "276",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/rsT6jx5/img6.jpg",
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
          <div key={i} className="card w-96 bg-base-100 shadow-xl">
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
              {/* <div className="card-actions">
                <button className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg">
                  Buy Now
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
