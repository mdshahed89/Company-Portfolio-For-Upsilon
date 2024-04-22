import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter }  from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Products from './Pages/Products.jsx';
import Partners from './Pages/Partners.jsx';

const router = createBrowserRouter([{
  path:"/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/partners",
      element: <Partners />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/portfolio",
      element: <Portfolio />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
