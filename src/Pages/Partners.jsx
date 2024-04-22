import React from 'react'
import Partner1 from "../assets/Partner1.png"
import Partner2 from "../assets/Partner2.png"
import Partner3 from "../assets/Partner3.png"
import Partner4 from "../assets/Partner4.png"
import Partner5 from "../assets/Partner5.png"
import Partner6 from "../assets/Partner6.png"
import Partner7 from "../assets/Partner7.png"
import Partner8 from "../assets/Partner8.png"
import Partner9 from "../assets/Partner9.png"
import { Fade } from 'react-awesome-reveal'

const Partners = () => {
  return (
    <div>
        <div className=' h-[300px] md:h-[500px] flex items-center justify-center flex-col w-full bg-[#E8E8ED]  '>
            
                <Fade direction='up'>
                <h4 className=' text-base '>We can help build a world of  </h4>
                <h1 className=' text-3xl md:text-5xl text-[#007AFF] font-bold  '>Equal Opportunities</h1>
                </Fade>
            
        </div>

        <div className=' max-w-[1320px] mx-auto my-[3rem] '>
            <div className='text-center md:px-0 px-3 max-w-[30rem] mx-auto '>
                <Fade direction='down'>
                <h3 className='text-2xl font-semibold'>Our Clients</h3>
                <h4 className='text-sm'>Trusted by over 100+ clients. Our clients are our top priority, and we are committed to providing them with the heights level of services.</h4>
                </Fade>
            </div>
            <div className=' mx-auto h-[1px] bg-[#202020] w-[20%] mt-10 '></div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-[3rem] '>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner9} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner8} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner7} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner6} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner5} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner4} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner3} alt="" />
                </div>
                <div className='bg-[#F9F9FB] px-[2rem] py-[1rem] flex items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner2} alt="" />
                </div>
                <div className='bg-[#F9F9FB] md:flex hidden px-[2rem] py-[1rem]  items-center justify-center rounded-md h-[7rem] md:h-[10rem] '>
                    <img src={Partner1} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Partners