import Footer from "./Footer"
import { Navbar } from "./navbar"
import {Outlet} from "react-router-dom"

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <div className="container mx-auto max-w-7xl">
      {children}
      <Outlet/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Layout