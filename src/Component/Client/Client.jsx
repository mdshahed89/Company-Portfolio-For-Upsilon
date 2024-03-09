import React from 'react'
import TradeWithUpsilon2 from "../../assets/TradeWithUsImg2.jpg"
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const Client = () => {
  return (
    <div className='bg-[#efefef] py-10 '>
      <div className='flex flex-col lg:flex-row gap-10 justify-between max-w-[1320px] mx-auto items-center '>
        <div className='flex lg:order-1 order-2 flex-col justify-center items-center text-[#383839]'>
          <div className='text-center max-w-[30rem] mx-auto mb-10 '>
            <Fade direction='down'>
            <h1 className=' text-3xl font-bold md:text-4xl'>Grow With Upsilon</h1>
            </Fade>
            <h4 className='mt-2 px-5 md:text-base text-sm '>Helping businesses go online and grow bigger with high-tech web applications. Get in touch with Upsilon to help you grow your business or startup.</h4>
          </div>
          <Link to={"/contact"}>
          <button className="text-lg w-48 h-10 border border-[#1B1B1B] text-[#1B1B1B] relative overflow-hidden group z-10 hover:text-[#fff] duration-1000"><span className="absolute bg-gradient-to-l from-[#34343A] to-[#3C3A79] w-60 h-20 rounded-full group-hover:scale-100 scale-0 -z-10 -left-6 -top-5 group-hover:duratio-1000 duration-1000 origin-center transform transition-all"></span><span className="absolute bg-[#474747] w-60 h-20 -left-6 -top-5 rounded-full group-hover:scale-1000 scale-0 -z-10 group-hover:duration-1000 duration-1000 origin-center transform transition-all"></span>Explore More</button>
          </Link>
        </div>
        <div className='rounded-full order-1 lg:order-2 w-[350px] sm:w-[400px] md:w-[600px] '>
          <img src={TradeWithUpsilon2} alt="" className='rounded-lg w-full h-full object-cover ' />
        </div>
      </div>
    </div>
  )
}

export default Client
