import React from 'react'
import HeroImg from "../../assets/HeroImg.png"
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className='w-full h-[650px] relative'>
      <div className=' h-full'>
        <img
          src={HeroImg} alt="Hero Image"
          className=' w-full h-full  object-cover'
        />
      </div>
      <div className='flex justify-center '>
        <div className=' max-w-[1320px] mx-auto w-full flex items-center md:pl-[1rem] md:items-start flex-col justify-center absolute top-0 h-full text-white  '>
          <Fade direction='up'>
            <h3 className='md:text-5xl text-2xl sm:text-3xl font-semibold '>CODING YOUR VISION.</h3>
          </Fade>
          <Fade direction='up'>
            <p className='md:text-2xl mt-2 text-center text-base'>Build a future in online business with our team</p>
          </Fade>
          {/* <p></p> */}
          <Link to={"/contact"}>
          <button className="text-xl mt-10 w-48 h-10 border border-white text-white relative overflow-hidden group z-10 hover:text-[#000] duration-1000"><span className="absolute bg-white w-60 h-20 rounded-full group-hover:scale-100 scale-0 -z-10 -left-6 -top-5 group-hover:duratio-1000 duration-1000 origin-center transform transition-all"></span><span className="absolute bg-[#c4c4c4] w-60 h-20 -left-6 -top-5 rounded-full group-hover:scale-1000 scale-0 -z-10 group-hover:duration-1000 duration-1000 origin-center transform transition-all"></span>Contact Us</button></Link>
        </div>
      </div>
      {/* <div className='absolute text-[22rem] mx-auto w-full tracking-[2rem] bottom-0 h-full  opacity-15 '>UPSILON</div> */}
    </div>
  )
}

export default Hero
