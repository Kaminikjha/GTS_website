import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Career = () => {
  const navigate = useNavigate();
  return (
   <>
   <div id='Career' className='gap-3 text-white  md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#f06321] opacity-90 shadow-xl mx-0 md:mx-20 rounded-lg p-12 my-20'>
   <div>
    <h2 className='text-2xl md:text-4xl font-bold pb-5'>
    Elevate Your Careers with Us
    </h2>
    
    </div>
    
    {/* <button onClick={()=> navigate("/login")}>Click me!</button> */}

    
    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className="text-white font-semibold underline">
      Backend Developer
      </h1>
      <p>Skills:- Node.js / Python (Django/Flask) / PHP</p>
      <div className='pt-2 flex gap-3'>
      <button className='border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Internship
      </button>

      </div>
        </div>
      <button onClick={()=> navigate("/login")} className='border-white hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2 text-white'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className="text-white font-semibold underline">
      Frontend Developer
      </h1>
      <p>Skills:- Frontend: HTML, CSS, JavaScript (React/Angular optional)</p>
      <div className='pt-2 flex gap-3'>
     
      <button className='gap-3 border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Job
      </button>
      </div>
        </div>
      <button onClick={()=> navigate("/login")} className='border-white hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2 text-white'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className="text-white font-semibold underline">
      Database
      </h1>
      <p>Skills:- MySQL / PostgreSQL / MongoDB</p>
      <div className='pt-2 flex gap-3'>
      <button className='border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Internship
      </button>

      </div>
        </div>
      <button onClick={()=> navigate("/login")} className='border-white hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2 text-white'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className="text-white font-semibold underline">
      Authentication
      </h1>
      <p>Skills:- JWT / OAuth</p>
      <div className='pt-2 flex gap-3'>
      

      <button className='gap-3 border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Job
      </button>
      </div>
        </div>
      <button onClick={()=> navigate("/login")} className='border-white hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2 text-white'>
        Apply
      </button>

    </div>
    <div className='flex items-center justify-center'>
    <button className=' border-white underline hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2 text-white'>
        View More
      </button>
    </div>
    
   </div>
   </>
  )
}

export default Career
