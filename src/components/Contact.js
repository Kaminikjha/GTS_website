import React from 'react'
import cube from "../assets/cube.png";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { ImAddressBook } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <section
        id="Contact"
        className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center"
      >
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white border-2 shadow-lg rounded-lg px-8 py-12 gap-10 z-20">
          <div className="flex justify-center items-start flex-col gap-4 w-full">
            
            <div
              id="phone"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-700"
            >
              <span className="  flex justify-center items-center bg-[#f06321] opacity-90  hover:bg-orange-500 p-3 rounded-full h-12 w-12 ">
              <IoMdCall className='text-white'/>
              </span>
              +91 123456789
            </div>

            <div
              id="mail"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-700"
            >
              <span className="  flex justify-center items-center bg-[#f06321] opacity-90  hover:bg-orange-500 p-3 rounded-full h-12 w-12 ">
              <MdOutlineMail className='text-white'/>
              </span>
              demomail@gmail.com
            </div>

            <div
              id="address"
              className=" flex justify-center items-center gap-4 text-lg font-semibold text-gray-700"
            >
              <span className="  flex justify-center items-center bg-[#f06321] opacity-90  hover:bg-orange-500 p-3 rounded-full h-12 w-14 ">
              <ImAddressBook className='text-white'/>
              </span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              libero!
            </div>
            <div
              id="logos"
              className="flex justify-center items-center gap-4 mt-10 "
            >
              <span className=" flex justify-center items-center bg-[#f06321] opacity-90  rounded-full cursor-pointer hover:bg-orange-500 h-12 w-12 ">
              <FaFacebook className='text-white'/>
              </span>

              <span className=" flex justify-center items-center bg-[#f06321] opacity-90  rounded-full cursor-pointer hover:bg-orange-500 h-12 w-12 ">
              <FaLinkedin className='text-white'/>
              </span>

              <span className=" flex justify-center items-center bg-[#f06321] opacity-90  rounded-full cursor-pointer hover:bg-orange-500 h-12 w-12 ">
              <FaTwitter className='text-white'/>
              </span>

              <span className=" flex justify-center items-center bg-[#f06321] opacity-90 rounded-full cursor-pointer hover:bg-orange-500 h-12 w-12 ">
              <FaYoutube className='text-white'/>
              </span>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-4 w-full border-2 border-[#f06321] opacity-90 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-4 w-full border-2 border-[#f06321] opacity-90 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-orange-400"
            />
            <textarea
              className="px-4 py-4 w-full border-2 border-[#f06321] opacity-90 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-orange-400"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
            <button className=" bg-[#f06321] opacity-90 text-white px-4 py-3 w-full rounded-lg hover:bg-orange-500 font-bold cursor-pointer">
              SUBMIT
            </button>
          </div>
        </div>

        <img
          src={cube}
          alt="cube"
          className="w-full h-72  absolute hidden lg:block"
        />
      </section>
    </>
  )
}

export default Contact
