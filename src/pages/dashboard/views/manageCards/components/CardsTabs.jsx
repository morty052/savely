import { Tab } from '@headlessui/react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {SavelyCard} from "../../../partials"
import PhysicalCard from './PhysicalCard'

const CardsTabs = ({user, setPhysicalCard, setVirtualCard, physical, virtual}) => {
    const path = useLocation().pathname
    const [active, setactive] = useState(1)

    const {firstname, lastname} = user ? user : ""

    return (
        <Tab.Group>
          <Tab.List className={" flex gap-x-8 h-fit  rounded-xl p-2"}>
          <Tab onClick={() => {
            setactive(1)
            setPhysicalCard()
          }
            }  className={` px-4 py-2 text-sm rounded-xl ${ active == 1 ? "bg-gray-200 shadow-md ring-2 ring-blue-500 text-gray-800 border-white" : "bg-gray-200/50"}`}>Physical</Tab>
          <Tab onClick={() => {
            setactive(2)
            setVirtualCard()
          }} className={` px-4 py-2 text-sm rounded-xl ${ active == 2 ? "bg-gray-200 shadow-md ring-2 ring-blue-500 text-gray-800 border-white" : "bg-gray-200/50"}`}>Virtual</Tab>
            {/* <Tab className={"px-1 py-2 flex w-28  justify-center bg-teal-400 rounded-xl text-sm shadow-md ring-1 ring-white cursor-pointer hover:bg-teal-300"}>Add Money</Tab> */}
          </Tab.List>
          <Tab.Panels>

            {/* PHYSICAL */}
            <Tab.Panel>
               {/* <PhysicalCard firstname={firstname} lastname={lastname}/> */}
               {physical}
            </Tab.Panel>

            {/* VIRTUAL */}
            <Tab.Panel>
              {/* <SavelyCard number={"5554567895694278"}/> */}
              {virtual}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      )
}

export default CardsTabs