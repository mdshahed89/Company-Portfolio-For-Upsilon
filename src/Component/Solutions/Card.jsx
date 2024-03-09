import React from 'react'
import "./Solution.css"


const Card = ({caption, details, icon}) => {
  return (
    <div className='bg-[#fff] p-5 card group group-hover:text-white  '>
      <div className=' '>
        <h3 className='font-semibold md:text-xl text-[#313132] group-hover:text-white  text-base'>{caption}</h3>
        <h4 className='md:text-sm text-[#585858] group-hover:text-white text-xs mt-1'>{details}</h4>
      </div>
    </div>
  )
}

export default Card
