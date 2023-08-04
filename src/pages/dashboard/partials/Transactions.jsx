
const Transactions = () => {
  return (
    // <!-- Table Section -->
    <>
    {/* Default TABLE */}
<div className="max-w-[85rem]  sm:hidden">
  {/* <!-- Card --> */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden  ">

          {/* <!-- Table --> */}
          <table className="min-w-full divide-y divide-gray-200 px-4 ">
            <thead className="bg-gray-50 ">
              <tr>
                <th scope="col" className="pl-2 pr-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Amount
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Sender
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Status
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 sm:hidden  ">
              <tr>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="pl-2 pr-6 py-2">
                    <a className="text-sm text-blue-600 decoration-2 hover:underline " href="#">$14,000.00</a>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-600 ">Jase Marley</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-2">
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800  ">
                      <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Paid
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>        
          </table>
          {/* <!-- End Table --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
</div>



 {/* BIG SCREEN TABLE */}
<div className="max-w-[85rem] hidden sm:block">
  {/* <!-- Card --> */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden  ">

          {/* <!-- Table --> */}
          <table className="min-w-full divide-y divide-gray-200 px-4 ">
            <thead className="bg-gray-50 ">
              <tr>
                <th scope="col" className="pl-2 pr-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Amount
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left  ">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Time
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Sender
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Status
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            
            <tbody className="divide-y divide-gray-200 ">
              <tr>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="pl-2 pr-6 py-2">
                    <a className="text-sm text-blue-600 decoration-2 hover:underline " href="#">$14,000.00</a>
                  </div>
                </td>
               <td className="h-px w-px whitespace-nowrap   ">
                  <div className="px-6 py-2 hidden sm:block">
                    <span className="text-sm text-gray-600 ">Aug 17, 2020, 5:48 (ET)</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-2">
                    <span className="text-sm text-gray-600 ">Jase Marley</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-2">
                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800  ">
                      <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      Paid
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- End Table --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
</div>
    </>
  )
}

export default Transactions