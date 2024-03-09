import React from 'react'
import { Fade } from "react-awesome-reveal";
import InvestorImg from "../../assets/InvestorImg.jpeg"
import { Link } from 'react-router-dom';

const Investor = () => {
  return (
    <div className='bg-[#efefef] py-10 my-6 '>
      <div className='flex flex-col lg:flex-row gap-5 justify-between max-w-[1320px] mx-auto items-center '>
        <div className='rounded-full sm:w-[400px] md:w-[600px] '>
          <img src={InvestorImg} alt="" className='rounded-lg w-full h-full object-cover ' />
        </div>
        <div className='flex  flex-col justify-center items-center text-[#383839]'>
          <div className='text-center max-w-[39rem] mx-auto mb-10 px-5 '>
            <Fade direction='up'>
            <h1 className=' text-3xl font-bold md:text-4xl'>Want to join us as a partner ?</h1>
            </Fade>
            <h4 className='mt-2  md:text-base text-sm '>Get consultation free for your startup. Strat your valuable 
            business with us. Let’s Make it happen with dealing.</h4>
          </div>
          <Link to={"/contact"}>
          <button className="text-lg w-48 h-10 border border-[#1B1B1B] text-[#1B1B1B] relative overflow-hidden group z-10 hover:text-[#fff] duration-1000"><span className="absolute bg-gradient-to-l from-[#34343A] to-[#3C3A79] w-60 h-20 rounded-full group-hover:scale-100 scale-0 -z-10 -left-6 -top-5 group-hover:duratio-1000 duration-1000 origin-center transform transition-all"></span><span className="absolute bg-[#474747] w-60 h-20 -left-6 -top-5 rounded-full group-hover:scale-1000 scale-0 -z-10 group-hover:duration-1000 duration-1000 origin-center transform transition-all"></span>Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Investor
