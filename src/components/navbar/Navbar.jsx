import {NavLink} from "react-router-dom"
import { savelylogowhite } from "../../assets"
import { useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {
const navigate = useNavigate()

const handleCreate = (e) => {
 localStorage.setItem('accountname', e)
 navigate('/signup')
}

const path = useLocation().pathname


  
  return (
    <header className="sticky top-0  flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  bg-teal-400 border-b border-white/[.5] text-sm py-3 sm:py-0">
  <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-4 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      {/* <a className="flex-none text-xl font-semibold text-white"  aria-label="Brand">Savely</a> */}
      <img className="w-40" src={savelylogowhite} alt="" />

      {/* MOBILE SIDEBAR BUTTON */}
      <div className="sm:hidden">
        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
          <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>

    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-4 sm:mt-0 lg:pl-7 lg:gap-x-7 ">

        {/* NAVLINKS */}
        <NavLink to={"/"} className="font-medium text-white "  aria-current="page">Home</NavLink>
        {/* <NavLink to={"/budgeting"} className="font-medium text-white/[.8] hover:text-white " >Budgeting</NavLink> */}
        {/* <NavLink to={"/activatecard"} className="font-medium text-white/[.8] hover:text-white " >Activate Card</NavLink> */}

         {/* RESOURCES BUTTON */}
         {/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex items-center w-full text-white/[.8] hover:text-white font-medium">
            Resources
            <svg className="ml-2 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </button>
               
            RESOURCES MENU
          <div className="mt-2 sm:mt-0 divide-y divide-gray-200 sm:divide-y-0       hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2     before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
            <a to={"/signup"} onClick={()=> handleCreate("savings")} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Careers
            </a>

            <a onClick={()=> handleCreate("checking")}  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Our Team
            </a>
            <a onClick={()=> handleCreate("student")} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              FAQ
            </a>
          </div>
        </div> */}
        
        {/* Open Account BUTTON */}
        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
          <button type="button" className="flex whitespace-nowrap items-center w-full text-white/[.8] hover:text-white font-medium">
            Open Account
            <svg className="ml-2 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </button>
               
            {/* DROPDOWN MENU */}
          <div className="mt-2 sm:mt-0 divide-y divide-gray-200 sm:divide-y-0       hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2     before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
            <a to={"/signup"} onClick={()=> handleCreate("savings")} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Savings Account
            </a>
            {/* <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
              <button type="button" className=" flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   ">
                Sub Menu
                <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </button>

              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2     before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
                  About
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
                  Team Account
                </a>
              </div>
            </div> */}

            <a onClick={()=> handleCreate("checking")}  className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Checking Account
            </a>
            {/* <a onClick={()=> handleCreate("")} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Savely budget Account
            </a> */}
            <a onClick={()=> handleCreate("student")} className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500   " >
              Student Account
            </a>
          </div>
        </div>

        <NavLink to={'/login'} className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-2 lg:pl-6" >
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          Log in
        </NavLink> 
        <NavLink to={"/activatecard"} className="font-medium text-teal-400 hover:text-teal-500 sm:py-2 px-4 rounded-2xl bg-white shadow-2xl w-fit" >Activate Card</NavLink>
      </div>
    </div>
  </nav>
</header>
  )
}

export default Navbar