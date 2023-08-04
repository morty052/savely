import { Menu } from "@headlessui/react"
import { Empty } from "antd"
import {FaCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom"


const NotificationsDropDown = ({dropdown, setdropdown, notifications}) => {



  return (
      <>
        <Menu >
          <Menu.Button type="button" className="relative inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs  ">
           {
              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
              </svg>
           }
          </Menu.Button>
          <Menu.Items className={"bg-white border rounded-lg absolute  mt-[12px] right-0 w-72 flex flex-col py-2 px-4 shadow-2xl sm:w-80  "}>
            {/* NOTIFICATIONS HEADER */}
             <div className="flex  justify-between text-center pb-2 border-b ">
                <p className="text-xs">Notifications</p>
                <NavLink to={"notifications"} className="text-xs text-blue-600">View All</NavLink>
             </div>
            {
              !notifications ?
            <div className="">
            {
              notifications?.map((notification, index)=>(
           <Menu.Item className={"flex gap-x-2 items-center pt-2"} as={"div"}>
             <FaCircle className="text-[8px] text-blue-600"/>
             <div className="flex flex-col">
                <p className="text-[12px]">{notification.title}</p>
                <span className="text-[10px] leading-tight ">{notification.message}</span>
                <span className="text-[8px] text-gray-700">10 minutes ago</span>
             </div>
           </Menu.Item>
              ))
            }
            </div> :
            <div className="pt-2">
              <Empty description={"no notifications"}/>
            </div>
            }
          </Menu.Items>
        </Menu>
      </>
  )
}

export default NotificationsDropDown