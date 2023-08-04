import { TransactionHistoryTabs } from "./components"

const TransactionHistory = ({user}) => {

  const {accounts} = user ? user : []

  const {transactions} = accounts ? accounts?.[0] : []


  const TransactionRow = () => {
    return(
      <tr>
      <td classNameName="h-px w-px whitespace-nowrap">
        <div classNameName="pl-2 pr-6 py-2">
          <a classNameName="text-sm text-blue-600 decoration-2 hover:underline " href="#">$14,000.00</a>
        </div>
      </td>
     <td classNameName="h-px w-px whitespace-nowrap   ">
        <div classNameName="px-6 py-2 hidden sm:block">
          <span classNameName="text-sm text-gray-600 ">Aug 17, 2020, 5:48 (ET)</span>
        </div>
      </td>
      {/* <td classNameName="h-px w-px whitespace-nowrap">
        <div classNameName="px-6 py-2">
          <span classNameName="text-sm text-gray-600 ">Jase Marley</span>
        </div>
      </td> */}
      <td classNameName="h-px w-px whitespace-nowrap">
        <div classNameName="px-6 py-2">
          <span classNameName="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800  ">
            <svg classNameName="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            Paid
          </span>
        </div>
      </td>
    </tr>
    )
  }
  
  const TransactionTable = () => {
    return(
      <>
      
<div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">All Transactions</h5>
        {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
            View all
        </a> */}
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                        $320
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

      </>
    )
  }

  const WithdrawalHistory = () => {
    return(
      <>
      <div className="mt-4 px-2">
        <TransactionTable/>
      </div>
      </>
    )
  }

  const DepositHistory = () => {
    return(
    <>
    
    </>
    )
  }

    return (
        // <!-- Table Section -->
       <div className="sm:px-2 sm:grid sm:grid-cols-12 sm:gap-x-4 items-start ">
         <div className="sm:col-span-6 ">
         <TransactionHistoryTabs withdrawals={<WithdrawalHistory/>} deposits={<DepositHistory/>}/>
         </div>

         {/* <div className="hidden sm:block sm:col-span-6 border bg-white rounded-lg  mt-4 p-4">
          <ul className="">
            <p>Report Transaction</p>
          </ul>
         </div> */}
       </div>
      )
}

export default TransactionHistory