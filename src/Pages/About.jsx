import React from 'react'
import AboutImg from "../assets/AboutImg.jpg"
import AboutImg1 from "../assets/aboutImg3.png"
import AboutImg2 from "../assets/aboutImg2.png"
import { Fade } from "react-awesome-reveal";


const About = () => {
  return (
    <div>
      <div className='h-[500px] flex items-center flex-col bg-[#E8E8ED] justify-center '>
        <Fade direction='up'>
        <h3 className=' text-2xl text-[#363636] font-semibold '>We are never limited to one </h3>
        <h1 className=' text-5xl text-blue-700 font-bold '>SINGLE PLATFORM</h1>
        </Fade>
      </div>

      <div className=' max-w-[1320px] mx-auto mb-14  '>

        <div className='flex items-center justify-between lg:flex-row flex-col lg:gap-0 gap-[3rem] py-[3rem] lg:py-[5rem] my-[2rem] rounded-lg  px-[1rem] lg:px-[4rem] bg-[#D2E3FC] '>
          <div className=' px-7 text-center lg:order-1 order-2  '>
            <Fade direction='down'>
            <h3 className='text-2xl text-[#363636] font-bold mb-4 '>Who We Are</h3>
            </Fade>
            <p>Upsilon is a dynamic and innovative software development company
              committed to transforming businesses through cutting-edge technology solutions. With a passion for excellence, we specialize in designing, developing, and launching software tailored to meet the unique needs of our clients across various industries.</p>
          </div>
          <div className=' max-w-[35rem] lg:order-2 order-1  '>
            <img src={AboutImg} alt="" className='w-full rounded-lg  h-full object-cover' />
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 grid-cols-1 '>
          <div className='bg-[#E8EAED] rounded-lg pb-6 '>
            <div className='h-[350px]'>
              <img src={AboutImg1} alt="" className='w-full rounded-t-lg h-full ' />
            </div>
            <div className='mt-7 text-center py-[1rem] px-[4%] '>
              <Fade direction='down'>
              <h3 className='text-xl font-semibold'>Mission</h3>
              </Fade>
              <p className='text-sm mt-4 '>Our mission is to deliver high-quality software solutions that meet our clients' needs and exceed their expectations. We aim to provide exceptional service and support throughout the entire software development lifecycle. We also strive to foster a culture of creativity, collaboration, and excellence among our team members.</p>
            </div>
          </div>

          <div className='bg-[#CEEAD6] rounded-lg pb-6'>
            <div className='h-[350px]'>
              <img src={AboutImg2} alt="" className='w-full rounded-t-lg h-full ' />
            </div>
            <div className='mt-7 text-center py-[1rem] px-[4%] '>
              <Fade direction='down'>
              <h3 className='text-xl font-semibold'>Vision</h3>
              </Fade>
              <p className='text-sm mt-4 '>Our vision is to become a global leader in software development and innovation. We aspire to create cutting-edge solutions that solve real-world problems and make a positive impact on society. We also seek to expand our network of clients and partners across different domains and regions.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About