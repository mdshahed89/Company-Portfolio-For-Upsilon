import React, { useEffect, useRef } from "react";
import Title from '../Title/Title'
import Card from './Card'
import Icon1 from "../../assets/Icon/Icon-1.png"
import Icon2 from "../../assets/Icon/Icon-2.png"
import Icon3 from "../../assets/Icon/Icon-3.png"
import Icon4 from "../../assets/Icon/Icon-4.png"
import {motion} from "framer-motion"
import { Fade } from "react-awesome-reveal";
 


const Solutions = () => {

  

  return (
    <div className='bg-[#efefef] '>
      <div className=' py-10 max-w-[1320px] border-b-2 border-[#686868] mx-auto  '>
        <div className='text-center max-w-[40rem] mx-auto px-3 '>
          <Fade direction="down">
          <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold mb-3 text-[#313132] '>How Upsilon Works</h3>
          </Fade>
          <p className='md:text-sm text-xs text-[#1B1B1B] '>We  deliver a high quality task to meet established deadline. A business can choose the software outsourcing business model that best matches their needs.</p>
        </div>
        <div className='mt-[3rem] grid md:grid-cols-2 gap-4 grid-cols-1 '>
          <Card caption="Easy User Interface" details="we provide seamless and enjoyable User Interface which ensure simplicity, clarity, 
            and intuitiveness in Digital Solutions. " />
          <Card caption="MVP Services" details="We are an experienced and MVP development company that will help you bring your product to life." />
          <Card caption="End to End Development" details="Our team of experts takes your ideas and transforms them into top-notch products 
            through an efficient and cost-effective process" />
          <Card caption="Quality Assurance & Testing" details="We ensure Quality in each products.Our software testing strategy ensures every component of your software are free of bugs and issues." />
        </div>
      </div>
    </div>
  )
}

export default Solutions
