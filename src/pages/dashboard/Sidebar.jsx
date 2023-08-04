import { NavLink } from "react-router-dom"
import { savelylogowhite } from "../../assets"
import { useLocation } from "react-router-dom"
import { FaBell, FaClock, FaCreditCard, FaDollarSign, FaHome, FaPaperPlane } from "react-icons/fa"
import { LogOut } from "./features"
import { Dialog, Transition } from "@headlessui/react"
import { useState } from "react"

const Sidebar = ({open, setopen}) => {
  const path = useLocation().pathname

  const handleSignout = () => {
    LogOut()
  }

  const links = [
    {
      to:"/dashboard",
      name:"Dashboard",
      icon: <FaHome/>
    },
    {
      to:"withdraw",
      name:"Withdraw",
      icon: <FaDollarSign/>
    },
    // {
    //   to:"transactionhistory",
    //   name:"Transaction History",
    //   icon: <FaClock/>
    // },
    // {
    //   to:"transfer",
    //   name:"Transfer",
    //   icon:<FaPaperPlane/>

    // },
    {
      to:"cards",
      name:"Manage Card",
      icon: <FaCreditCard/>
    },
    {
      to:"notifications",
      name:"Notification Centre",
      icon: <FaBell/>
    },

  ]

  const SideBarLink = ({name, to, icon}) => {
    return(
      <li>
      <NavLink onClick={()=> setopen(false)}  to={`${to}`}  className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md text-white  `} >
        {icon}
        {name}
      </NavLink >
    </li>
    )
  }

  return (
  <>
  <Dialog open={open} onClose={setopen}>
  <div  className=" fixed top-0 left-0 bottom-0 z-[60] w-64 bg-slate-800 border-r border-teal-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:hidden  ">
    <div className="px-6">
      <img className="w-32" src={savelylogowhite} alt="" />
    </div>
    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        {
          links.map((link, index) => (
            <SideBarLink 
            key={index}
            to={link.to} 
            name={link.name}
            icon={link.icon}
            />
          ))
        }

        {/* SIGN OUT BUTTON */}
        <div class="flex items-center justify-between  px-2.5 pt-12  ">
          <button onClick={()=> handleSignout()} class="group flex items-center space-x-4 rounded-md  py-3 text-gray-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="group-hover:text-gray-50   ">Sign Out</span>
          </button>
          
        </div>
      </ul>
    </nav>
  </div>
  </Dialog>
  

  {/* LARGE SCREEN SIDEBAR */}
  <div id="application-sidebar" className=" hidden hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform  fixed top-0 left-0 bottom-0 z-[60] w-64 bg-slate-800 border-r border-teal-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0   ">
    <div className="px-6">
      {/* <a className="flex-none text-xl font-semibold text-teal-500 "  aria-label="Brand">Savely</a> */}
      <img className="w-32" src={savelylogowhite} alt="" />
    </div>

    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul className="space-y-1.5">
        <li>
          <NavLink  to={"/dashboard"}  className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800 sidebarlink  ${path == "/dashboard" ? "bg-white text-gray-800" : "text-white"}`} >
            <FaHome/>
            Dashboard
          </NavLink >
        </li>

        <li>
        <NavLink to={"withdraw"} className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800  ${path.includes("withdraw") ? "bg-white text-gray-800" : "text-white"}`} >
          <FaDollarSign/>
          Withdraw
        </NavLink>
        </li>
        {/* <li>
        <NavLink to={"transfer"} className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800  ${path.includes("transfer") ? "bg-white text-gray-800" : "text-white"}`}>
          <FaPaperPlane/>
          Transfer
        </NavLink>
        </li> */}
        <li>
        <NavLink to={"cards"} className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800  ${path.includes("cards") ? "bg-white text-gray-800" : "text-white"}`} >
          <FaCreditCard/>
          Cards
        </NavLink>
        </li>
        {/* <li>
        <NavLink to={"transactionhistory"} className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800  ${path.includes("cards") ? "bg-white text-gray-800" : "text-white"}`} >
          <FaClock/>
          Transaction History
        </NavLink>
        </li> */}
        <li>
        <NavLink to={"notifications"} className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm rounded-md hover:bg-gray-100 hover:text-gray-800  ${path.includes("notifications") ? "bg-white text-gray-800" : "text-white"}`} >
          <FaBell/>
          Notification Centre
        </NavLink>
        </li>

        {/* SIGN OUT BUTTON */}
        <div class="flex items-center justify-between  px-2.5 pt-12  ">
          <button onClick={()=> handleSignout()} class="group flex items-center space-x-4 rounded-md  py-3 text-gray-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="group-hover:text-gray-50   ">Sign Out</span>
          </button>
          
        </div>
      </ul>
    </nav>
  </div>
  </>
  )
}

export default Sidebar