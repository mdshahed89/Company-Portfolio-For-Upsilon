import React from 'react'
import PortfolioImg from "../assets/PortfolioBanner.jpg"
import Project from '../Component/Project/Project.jsx';
import PortfolioImg1 from "../assets/PortfolioImg1.jpg"
import PortfolioImg2 from "../assets/PortfolioImg2.jpg"
import PortfolioImg3 from "../assets/PortfolioImg3.jpg"
import PortfolioImg4 from "../assets/PortfolioImg4.webp"
import PortfolioImg5 from "../assets/PortfolioImg5.jpg"
import PortfolioImg6 from "../assets/PortfolioImg6.jpg"
import PortfolioImg7 from "../assets/PortfolioImg7.png"
import PortfolioImg8 from "../assets/PortfolioImg8.jpeg"
import PortfolioImg9 from "../assets/PortfolioImg9.png"
import { Fade } from "react-awesome-reveal";



const Portfolio = () => {
  return (
    <div>
      <div className='h-[80vh] '>
        <img src={PortfolioImg} alt="" className='w-full h-full object-cover' />
      </div>
      <div>
        <Fade direction='up'>
        <h3 className='text-center text-xl my-8 font-bold'>Our Recent Project</h3>
        </Fade>
        <div className='flex flex-wrap justify-center gap-5 px-5 md:px-[5%] lg:px-[10%] mb-[4rem] '>
          <Project ProjectName="Dental Website" ClientName="Md Mahfuzur Rahman Dental Hospital Project" ProjectImg={PortfolioImg1} />
          <Project ProjectName="Educational Website" ClientName="Acap Project" ProjectImg={PortfolioImg2} />
          <Project ProjectName="Stock Management Software" ClientName="A Super Shop Project" ProjectImg={PortfolioImg3} />
          <Project ProjectName="E-Commerce Website" ClientName="Private Project" ProjectImg={PortfolioImg4} />
          <Project ProjectName="Real Estate Website" ClientName="Mahar's Development Project" ProjectImg={PortfolioImg5} />
          <Project ProjectName="Restaurant Website" ClientName="Burgurita Project" ProjectImg={PortfolioImg6} />
          <Project ProjectName="Stock Management Software" ClientName="VIP Tailors Project" ProjectImg={PortfolioImg7} />
          <Project ProjectName="Grades Up Solution" ClientName="Enterprise Solution, Mobile Application" ProjectImg={PortfolioImg8} />
          <Project ProjectName="Travel Mobile Application" ClientName="Travelo Project" ProjectImg={PortfolioImg9} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio