import React from 'react'
import ProductImg from "../assets/productImg.jpg"

const Products = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center font-bold bg-black text-white  '>
      <img src={ProductImg} alt="" className='w-full h-full object-cover hidden sm:block  ' />
      <h3 className='text-4xl block sm:hidden '>COMING SOON</h3>
    </div>
  )
}

export default Products
