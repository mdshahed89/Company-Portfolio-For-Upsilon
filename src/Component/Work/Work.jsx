import React, { useState } from 'react'
import SubWork from './SubWork'
import ScrollTrigger from 'react-scroll-trigger';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';




const Work = () => {

    const [triggerScroll, setTriggerScroll] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setTriggerScroll(true)} onExit={() => setTriggerScroll(false)} >


            <div className='flex justify-center mt-[2rem]  md:flex-row flex-col text-[#1B1B1B] items-center  '>
                <div className='w-full md:w-1/2 bg-[#BDDCF8]  py-12  md:pt-20 flex justify-end '>
                    <div className=' max-w-[660px] md:mx-0 mx-auto px-5  '>
                        <div className='md:mb-[5rem] mb-[3rem] '>
                            <Fade direction='down'>
                            <h3 className='text-3xl md:text-start text-center font-semibold mb-2 '>Who we are</h3>
                            </Fade>
                            <p className='md:text-start text-center'>Upsilon specializes in providing custom software development services. Get premium software solutions from a reliable outsourcing partner and set your business apart. Skilled teams that can design, build, space and scale your vision in the most efficient way.
                            </p>
                        </div>
                        <div className='grid lg:grid-cols-4 grid-cols-2 mx-auto md:place-items-start place-items-center gap-3 '>
                            <SubWork scrolltrigger={triggerScroll} number="30" title="Project Done" />
                            <SubWork scrolltrigger={triggerScroll} number="50" title="Happy Clients" />
                            <SubWork scrolltrigger={triggerScroll} number="15" title="Expert Team" />
                            <SubWork scrolltrigger={triggerScroll} number="3" title="Experienced" />
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/2 pt-5 md:pt-20  pb-12 '>
                    <div className='md:mx-0 flex items-center md:items-start
                      flex-col mx-auto max-w-[660px] px-5 md:pl-[2rem] '>
                        <div className='md:mb-[7rem] mb-[3rem] '>
                            <Fade direction='down'>
                            <h3 className='text-3xl md:text-start text-center font-semibold mb-2 '>Mission</h3>
                            </Fade>
                            <p className='md:text-start text-center'>Our mission is to deliver high-quality software solutions that meet our clients' needs and exceed their expectations. We aim to provide exceptional service and support throughout the entire software development lifecycle.</p>
                        </div>
                        <Link to={"/about"}>
                        <button className="text-lg w-48 h-10  border border-[#000]  text-[#1B1B1B] relative overflow-hidden group z-10 hover:text-[#fff] duration-1000"><span className="absolute bg-gradient-to-l from-[#34343A] to-[#3C3A79] w-60 h-20 rounded-full group-hover:scale-100 scale-0 -z-10 -left-6 -top-5 group-hover:duratio-1000 duration-1000 origin-center transform transition-all"></span><span className="absolute bg-[#474747] w-60 h-20 -left-6 -top-5 rounded-full group-hover:scale-1000 scale-0 -z-10 group-hover:duration-1000 duration-1000 origin-center transform transition-all"></span>Explore More</button>
                        </Link>
                    </div>
                </div>
            </div>

        </ScrollTrigger>
    )
}

export default Work
