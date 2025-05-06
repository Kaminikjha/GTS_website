import React, { useState } from "react";
import image from "../assets/img.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [open, setOpen] =useState(false)
  
  //handle toggle

  const toggle =() =>{
    setOpen(!open)
  }
  const navigate = useNavigate();
  return (
    <>
      <div
        id="Home"
        className="text-white flex md:flex flex-wrap flex-col md:flex-row  w-full justify-between items-start p-10 md:p-20"
      >
        <div className="md:w-2/4 md:pt-10">
          <p className="text-sm md:text-3xl text-[#f06321] opacity-90 leading-snug tracking-normal">
            GTS is a software company that specializes in the development,
            creation, and distribution of software products or services. These
            companies can focus on a wide range of software applications,
            including desktop applications, mobile apps, enterprise solutions,
            and cloud-based platforms.
          </p>
          <button onClick={()=> navigate("/contact")} className="mt-5 md:mt-10  text-white text-sm md:text-2xl py-2 px-3 md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#f06321] ">
            Contact Us
          </button>
        </div>

        <div>
          <img src={image} width={500} alt=" Avtar Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
