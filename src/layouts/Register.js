import React, {useState} from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";


const Register = () => {

   const [open, setOpen] =useState(false)

   //handle toggle
 
   const toggle =() =>{
     setOpen(!open)
   }

   const navigate = useNavigate();
  return (
    <>
    <div className='w-full h-screen flex items-center justify-center bg-[#f06321] tracking-wider'>
        <div className='w-11/12 sm:w-5/12 md:w-3/11 text-sm'>
         <div className='w-full text-center my-3 border-2 rounded-xl py-10 '>
            <h2 className=' text-2xl text-white font-medium underline pb-10'>Register</h2>
         
         <form className=' my-2'>
          <div className=' flex  border-b-white border-b-2 mx-5 my-7 py-1'>
            <input type="text" 
            className='text-white text-lg w-11/12 bg-transparent outline-none placeholder-white' 
            placeholder='Enter Your Name'/>
             <div className=' w-2/12 flex items-center justify-end text-white'>
             <FaUser className='text-xl' />
             </div>
          </div>



          <div className=' flex  border-b-white border-b-2 mx-5 my-7 py-1'>
            <input type="email" 
            className='text-white text-lg w-11/12 bg-transparent outline-none placeholder-white' 
            placeholder='Your Email Address'/>
             <div className=' w-2/12 flex items-center justify-end text-white'>
             <IoMdMail className='text-xl' />
             </div>
          </div>


          <div className=' flex  border-b-white border-b-2 mx-5 my-7 py-1'>
            <input type={(open === false)? 'password' : 'text'} 
            className='text-white text-lg w-11/12 bg-transparent outline-none placeholder-white' 
            placeholder='Create a Strong Password'/>
             <div className=' w-2/12 flex items-center justify-end text-white gap-3'>
             {
                  (open === false)? <FaEyeSlash onClick={toggle} className=" text-xl"/>  : <FaEye onClick={toggle} className=" text-xl"/>
                }
             <FaLock className='text-xl' />
             </div>
          </div>
        
         <div className='mx-5 my-7 py-2'>
            <button className='bg-white w-full h-[35px] rounded-sm hover:opacity-85 duration-300 text-sm font-bold text-[#f06321]'>Register</button>

         </div>

         <div className=' mx-5 my-5 py-2 flex items-center justify-center cursor-pointer'>
            <p className=' text-white text-sm lg:text-base'>Already have a account? / <span onClick={()=> navigate("/login")} className=' hover:underline'>Login</span></p>
         </div>
          </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register