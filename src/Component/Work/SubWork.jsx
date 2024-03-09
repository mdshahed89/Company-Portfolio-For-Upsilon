import React from 'react'
import CountUp from 'react-countup';


const SubWork = ({ scrolltrigger, number, title }) => {
  return (
    <div className='   '>
      <div className='flex font-semibold text-2xl '>
        {
          scrolltrigger ? <CountUp
            start={0}
            end={number}
            duration={3}
            className=''
          /> : 0
        }
        <h3>+</h3>
      </div>
      <div className=' '>
       
        <div className=' '>
          {title}
        </div>
      </div>

    </div>
  )
}

export default SubWork
