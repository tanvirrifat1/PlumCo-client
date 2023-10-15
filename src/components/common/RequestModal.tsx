import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Form from "../forms/Form";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
};

const RequestModal = ({ isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("no-scroll");
      document.body.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll"),
        document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const areas = [
    "Mohammadpur",
    "Farmgate",
    "Dhanmondi",
    "Gulshan",
    "Mirpur",
    "Motijheel",
    "Uttara",
    "Banani",
    "Mirpur DOHS",
    "Mohakhali DOHS",
    "Baridhara DOHS",
    "Bashundhara R/A",
    "Khilkhet",
    "Nikunjo",
    "Badda",
    "Banani DOHS",
    "Baridhara",
    "Bashabo",
    "Jatrabari",
    "Kakrail",
    "Kafrul",
    "Khilgaon",
    "Mogbazar",
    "Mohakhali",
    "Rampura",
    "Shabag",
    "Laxmibazar",
    "Wari",
    "Joydebpur",
    "Tongi",
    "Narayanganj",
    "Uttarkhan",
    "Sabujbag",
    "Tejgaon",
    "Dakshinkhan",
    "Cantonment",
    "Ramna",
    "Old Town (Dhata)",
    "Vatara",
    "Nasirabad",
    "Sugandha",
    "Bayejid Bostabi",
    "Chadgaon",
    "Pachlaish",
    "Pahartali",
    "Khulshi",
    "Kotwali (chittagram)",
    "Bakalia",
    "Halishahar",
    "Double mooring",
    "Bander",
    "Patenga",
  ];

  const onsubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 z-50">
      <Form submitHandler={onsubmit}>
        <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
        <div className="modal-container fixed inset-0 flex items-center justify-center">
          <div className="modal-content lg:p-0 rounded-lg shadow-md relative w-full md:w-[50vw] ring-2 ring-primaryColor bg-[#fff]">
            <div>
              <h2 className="sub-heading mt-0 text-center py-2 shadow-lg">
                Request for Service
              </h2>
              <form className="">
                <div className="px-[20%] py-10 shadow-md">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="area"
                    >
                      Choice your area
                    </label>
                    <div className="">
                      <select
                        id="area"
                        name="area"
                        className="input input-bordered input-info"
                      >
                        <option>select Location</option>
                        {areas.map((area, i) => (
                          <option key={i} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      className="input input-bordered input-info"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="enter your full email"
                    />
                  </div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 pt-5"
                    htmlFor="type-of-service"
                  >
                    You need what type of service?
                  </label>
                  <textarea
                    name="service"
                    id="type-of-service"
                    className="textarea textarea-info w-full"
                    rows={2}
                    placeholder="Example: I want to shifting my office"
                  ></textarea>
                  <div className="flex gap-3 pt-5">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="username"
                      >
                        Your name
                      </label>
                      <input
                        className="input input-bordered input-info"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="enter your full name"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="phone-number"
                      >
                        Your number
                      </label>
                      <input
                        className="input input-bordered input-info"
                        id="phone-number"
                        type="text"
                        placeholder="Enter your number"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center py-2">
                  <button
                    type="submit"
                    className="btn btn-outline rounded-full  hover:bg-white hover:text-black hover:shadow-lg"
                  >
                    Request Service
                  </button>
                </div>
              </form>
            </div>
            <button
              className="modal-close absolute -top-5 -right-5 w-8 lg:w-14 h-8 lg:h-14 bg-[#fff] shadow-lg hover:shadow-xl opacity-90 ring hover:ring-primaryColor transition-all duration-150 group hover:opacity-100 flex items-center justify-center rounded-full "
              onClick={onClose}
            >
              <AiOutlineClose className="w-6 h-6 group-hover:scale-125 transition-all duration-150 text-primaryColor" />
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RequestModal;
