import React from 'react'


const Project = ({ProjectName, ClientName, ProjectImg}) => {
    return (
        <div className='bg-[#F3F3F3] rounded-lg shadow-md '>
            <div className='w-[23rem] h-[250px] '>
                <img src={ProjectImg} alt="" className='w-full h-full object-cover rounded-lg' />
            </div>
            <div className='px-5 py-5 flex flex-col gap-2'>
                <h3 className='text-xl font-semibold '>{ProjectName}</h3>
                <h4 className='text-sm'>{ClientName}</h4>
            </div>
        </div>
    )
}

export default Project
