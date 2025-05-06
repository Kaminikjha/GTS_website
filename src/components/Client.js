import React from "react";
import image from "../assets/img-4.jpg";

const Client = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold pb-5 text-[#f06321] flex justify-center p-5">
          Clients
        </h2>
      </div>
      <div
        id="Client"
        className="text-white flex md:flex flex-wrap flex-col-2 md:flex-row  w-full justify-evenly items-start md:p-20"
      >
        <div className=" bg-[#f06321] border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 mb-5">
          <h1 className=" text-xl md:text-4xl px-16 py-16">GTS</h1>
        </div>

        <div className=" bg-[#f06321] border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 ">
          <h1 className=" text-xl md:text-4xl px-16 py-16">GTS</h1>
        </div>

        <div className=" bg-[#f06321] border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 ">
          <h1 className=" text-xl md:text-4xl px-16 py-16">GTS</h1>
        </div>

        <div className=" bg-[#f06321] border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105  mb-5">
          <h1 className=" text-xl md:text-4xl px-16 py-16">GTS</h1>
        </div>
      </div>
    </>
  );
};

export default Client;
