import React from 'react'
import Service from './Service'
import { Fade } from "react-awesome-reveal";


const Services = () => {
    return (
        <div className=' my-8 '>
            <div>
                <Fade direction='down'>
                <h3 className='text-center text-[#313132] font-semibold text-2xl mb-8 '>The Services Which We Provide</h3>
                </Fade>
            </div>
            <div className='grid max-w-[1320px] md:grid-cols-2 grid-cols-1 mx-auto '>
                <div className='border-r border-[#313132] '>
                    <Service text="Custom Software Development" description="Our experienced team works closely with clients to understand their requirements and make sure Custom software i.g. E-Commerce." number="01" />
                    <Service text="Mobile Application" description="We Provide designing, developing, testing, and deploying mobile apps for platforms like iOS and Android." number="02" />
                    <Service text="Scalable System Design" description="High-performing product giving you a tailored solution for your business." number="03" />
                    <Service text="Cloud Services" description="Cloud computing services involve leveraging cloud infrastructure for storage, processing data and applications over the internet." number="04" />
                    <Service text="IoT" description="We Provide Internet of things of physical objects with sensors, processing ability that connect and exchange data with other devices and systems." Last="last" number="05" />
                </div>
                <div>
                    <Service text="Database Management" description="DBMS establish the relationship between datasets, and how users interact with them." number="06" />
                    <Service text="Embedded System Design" description="Provide high-quality embedded system design and embedded architecture design services." number="07" />
                    <Service text="UI/Ux Design" description="We provide easy User Interface & Smooth user experience  which visually appealing and user-friendly." number="08" />
                    <Service text="IT Security & Services" description="This involves implementing security measures, conducting risk assessments, and ensuring compliance with security standards." number="09" />
                    <Service text="Maintenance and Support" description="We ensures that the software remains functional, secure, and up-to-date with evolving technology and business needs." Last="last" number="10" />
                </div>
            </div>
        </div>
    )
}

export default Services
