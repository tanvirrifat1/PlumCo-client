"use client";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Header = () => {
  const bannars = [
    {
      id: 1,
      title: " Plumbing Service",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/7KGxBcT/gas1.jpg",
    },
    {
      id: 2,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/CBRsyy1/img6.jpg",
    },
    {
      id: 3,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://i.ibb.co/9vtN6m9/pipe.jpg",
    },
  ];
  return (
    <AwesomeSlider
      animation="foldOutAnimation"
      className="h-[270px] md:h-[70vh] lg:h-[80vh] w-[100vw]"
    >
      {bannars?.map((banner) => (
        <>
          <div
            className="hero min-w-[100vw] min-h-[100vh]"
            style={{
              backgroundImage: `url(${banner?.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
              <div className="max-w-md"></div>
            </div>
          </div>
        </>
      ))}
    </AwesomeSlider>
  );
};

export default Header;
