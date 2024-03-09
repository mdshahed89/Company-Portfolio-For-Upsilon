import './App.css'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Loading from './Component/Loading/Loading.jsx'
import { useEffect, useState } from 'react'
import CustorCursor from './Component/CustomCursor/CustorCursor.jsx'


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const timeout = setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>

      {
        loading ? <Loading />
        :
      (<div className='font-Syne'>
        <CustorCursor />
        <Header />
        <div className=''>
          <Outlet />
        </div>
        <Footer />
       
        
      </div>)

      }

    </>
  )
}

export default App
