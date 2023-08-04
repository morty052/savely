import { Route, Routes, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { DashboardHome, Withdraw, TransferPage, ManageCards, DirectDeposit, AddMoney, NotificationCentre, TransactionHistory } from "./views"
import { useFetchUser } from "./features"
import { useState } from "react"

const Dashboard = () => {
const [open, setopen] = useState(false)
const user = useFetchUser()

const location = useLocation().pathname
let secondarylocation

switch (location) {
  case "/dashboard/withdraw":
    secondarylocation = "Withdraw"
    break;
  case "/dashboard/transfer":
    secondarylocation = "Transfer"
    break;
  case "/dashboard/cards":
    secondarylocation = "Manage Cards"
    break;
  case "/dashboard/settings":
    secondarylocation = "Settings"
    break;

  default:
    break;
}



  return (
<div className="bg-gray-50 min-h-screen   ">
  {/* <!-- ========== HEADER ========== --> */}
  <Header user={user}/>
  {/* <!-- ========== END HEADER ========== --> */}
  {/* <!-- ========== MAIN CONTENT ========== -->
  <!-- Sidebar Toggle --> */}
  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
    <div className="flex items-center py-4">
      {/* <!-- Navigation Toggle --> */}
      <button onClick={() => setopen(!open)} type="button" className="text-gray-500 hover:text-gray-600" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>
      {/* <!-- End Navigation Toggle --> */}

      {/* <!-- Breadcrumb --> */}
      <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-gray-800  dark:text-gray-400">
          <span className=" first-letter:uppercase">dashboard</span>
          <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </li>
        <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
          <span className=" first-letter:uppercase">
            {secondarylocation}
          </span>
        </li>
      </ol>
      {/* <!-- End Breadcrumb --> */}
    </div>
  </div>
  {/* <!-- End Sidebar Toggle --> */}

  {/* <!-- Sidebar --> */}
  <Sidebar open={open} setopen={setopen}/>
  {/* <!-- End Sidebar --> */}

  {/* <!-- Content --> */}
  <div className="lg:ml-[258px] max-w-7xl   ">
  <Routes>
  <Route path="/" element={<DashboardHome user={user}/>}/>
  <Route path="/withdraw/*" element={<Withdraw user={user}/>}/>
  <Route path="/transfer" element={<TransferPage/>}/>
  <Route path="/cards" element={<ManageCards user={user}/>}/>
  <Route path="/notifications" element={<NotificationCentre user={user}/>}/>
  <Route path="/directdeposit" element={<DirectDeposit/>}/>
  <Route path="/transactionhistory" element={<TransactionHistory user={user}/>}/>
 </Routes>
  </div>
  {/* <!-- End Content --> */}
  {/* <!-- ========== END MAIN CONTENT ========== --> */}
</div>
  )
}

export default Dashboard