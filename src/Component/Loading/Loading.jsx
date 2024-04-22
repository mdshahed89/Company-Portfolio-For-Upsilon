import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className=' w-full h-[100vh] flex items-center justify-center '>
      <div class="wrapper flex items-center justify-center ">
      <div class="box-wrap w-[40%] h-[40%] md:w-[50%] md:h-[50%] ">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
        <div class="box six"></div>
      </div>
    </div>
    </div>
  )
}

export default Loading
