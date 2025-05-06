import React from "react";
import img from "../assets/img-2.png";

import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <>
      <div
        id="About"
        className="my-20 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#f06321] opacity-90 shadow-xl mx-0 md:mx-20 rounded-lg p-12 "
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold pb-5">About</h2>

          <div className="md:flex flex-wrap flex-col md:flex-row items-center">
            <img
              src={img}
              width={500}
              className=" shadow-xl"
              alt=" About Image"
            />

            <ul>
              <div className="flex gap-3 py-4 pl-3">
                <IoMdArrowRoundForward size={30} className=" mt-1" />

                <span className="w-96">
                  <h1 className="text-xl md:text-3xl font-semibold leading-normal hover:underline cursor-pointer">
                    Softwear Developer
                  </h1>
                  <p className=" text-sm md:text-base leading-normal pt-2">
                    We are looking for a talented and motivated Software
                    Developer to join our dynamic team. As a Software Developer,
                    you will be responsible for designing, coding, testing, and
                    maintaining software applications.
                  </p>
                </span>
              </div>

              <div className="flex gap-3 py-4 pl-3">
                <IoMdArrowRoundForward size={30} className="mt-1" />

                <span className="w-96">
                  <h1 className="text-xl md:text-3xl font-semibold leading-normal hover:underline cursor-pointer">
                    Web Developer
                  </h1>
                  <p className=" text-sm md:text-base leading-normal pt-2">
                    We are looking for a talented and motivated Software
                    Developer to join our dynamic team. As a Software Developer,
                    you will be responsible for designing, coding, testing, and
                    maintaining software applications.
                  </p>
                </span>
              </div>

              <div className="flex gap-3 py-4 pl-3">
                <IoMdArrowRoundForward size={30} className=" mt-1" />

                <span className="w-96">
                  <h1 className="text-xl md:text-3xl font-semibold leading-normal hover:underline cursor-pointer">
                    User interface designer
                  </h1>
                  <p className=" text-sm md:text-base leading-normal pt-2">
                    We are looking for a talented and motivated Software
                    Developer to join our dynamic team. As a Software Developer,
                    you will be responsible for designing, coding, testing, and
                    maintaining software applications.
                  </p>
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
