import React, { useState } from 'react'
import "./Style.css"

const Service = ({ text, description, Last, number }) => {


  
  return (
    <div className= {` flex flex-col justify-center pl-[7%] pr-[3%] relative z-30 h-[9rem] my-auto  transition-all duration-300 ease-in-out group ${Last==="last"? "md:border-none": null}  border-b md:border-[#313132] serv `}>
      <div>
      <h3 className='text-xl text-[#313132] group-hover:text-white  font-semibold mb-3'>{text}</h3>
      </div>
      <p className='text-sm text-[#585858] group-hover:text-white '>{description}</p>
      <h2 className='absolute flex items-center left-3 -z-0 opacity-10 font-semibold  justify-start h-full  top-0 text-6xl '>{number}</h2>
    </div>
  )
}

export default Service
