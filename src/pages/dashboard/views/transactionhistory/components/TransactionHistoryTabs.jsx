import { Tab } from '@headlessui/react'
import { useLocation } from 'react-router-dom'

const TransactionHistoryTabs = ({withdrawals,deposits, cards, setaccountview,setcardview}) => {

    const path = useLocation().pathname

    return (
        <Tab.Group>
          <Tab.List className={"flex h-fit justify-start gap-x-6 pt-4 px-2"}>
            <Tab onClick={setaccountview}
             className={({selected})=>(
              selected ?
              `px-1 py-2 flex w-28  justify-center rounded-xl text-sm shadow-md ring-1 ring-teal-400 cursor-pointer bg-teal-400  ` 
              :"`px-1 py-2 flex w-28  justify-center rounded-xl text-sm shadow-md ring-1 ring-teal-400 cursor-pointer  `"
            )}>Withdrawals</Tab>
            <Tab onClick={setcardview}
            className={({selected})=>(
              selected ?
              `px-1 py-2 flex w-28  justify-center rounded-xl text-sm shadow-md ring-1 ring-teal-400 cursor-pointer  bg-teal-400 ` 
              :"`px-1 py-2 flex w-28  justify-center rounded-xl text-sm shadow-md ring-1 ring-teal-400 cursor-pointer  `"
            )}>
              Deposits</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {withdrawals}
                {/* <DashboardHome/> */}
            </Tab.Panel>
            <Tab.Panel>{deposits}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      )
}

export default TransactionHistoryTabs