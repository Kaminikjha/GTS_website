
import React, { useState } from "react";
import image from "../assets/Background.png";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Partner = () => {

  const [open, setOpen] =useState(false)
  
    //handle toggle
  
    const toggle =() =>{
      setOpen(!open)
    }
    const navigate = useNavigate();

  return (
    <>

      <div
        id="Partner"
        className="relative flex justify-center items-center  md:flex flex-wrap flex-col md:flex-row  md:py-20"
      >
        <div className=" absolute flex items-center justify-center mx-10 sm:mx-52">
         
         <div className="">
         <h1 className="flex justify-center gap-2 text-2xl md:text-4xl font-bold text-white p-1 md:pb-5">
            Our <span className="text-[#f06321] "> Partnerships</span>
          </h1>
          <p className="text-xs md:text-3xl  leading-normal  text-white flex justify-center items-center text-center">We collaborate with strategic partners to create value and drive mutual success. By building strong, long-term relationships, we ensure a foundation of trust and innovation. Our partnerships focus on shared goals, enabling us to leverage collective strengths for growth, and sustainable solutions.</p>

          <div className="flex justify-center p-1 md:pt-10">
          <FaChevronDown onClick={()=> navigate("/partner_fp")} className="flex justify-center rounded-full bg-white text-2xl md:text-5xl p-2 text-[#f06321]"/>
          </div>
         </div>
         
          
         
        </div>
       
 <img src={image}  alt="" />
       
      </div>
      
    </>
  );
};

export default Partner;
