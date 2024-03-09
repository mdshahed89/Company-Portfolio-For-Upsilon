import React from 'react'

import Hero from '../Component/Hero/Hero'
import Solutions from '../Component/Solutions/Solutions.jsx'
import Services from '../Component/Services/Services.jsx'
import Work from '../Component/Work/Work.jsx'
import Client from '../Component/Client/Client.jsx'
import Investor from '../Component/Investor/Investor.jsx'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Work />
      <Solutions />
      <Client />
      <Services />
      <Investor />

    </div>
  )
}

export default Home
