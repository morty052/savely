import { AccountCard } from "../partials"
import { useState } from "react"

const AddMoney = ({user}) => {

const [withdrawAmount, setWithdrawAmount] = useState("")
const [withdraw, setwithdraw] = useState(null)

const {accounts} = user ? user : ""



  return (
    <div className="grid p-2 sm:grid-cols-12 sm:gap-x-6 sm:pt-10 ">

      {/* Mobile TOP */}
    { !withdraw ?
     <div className=" grid justify-center  sm:hidden bg-yellow-200">
        <h3 className="text-2xl text-center">Accounts</h3>
        {
          accounts?.map((account, index) =>(
            <AccountCard key={index} type={account.type} amount={account.balance} func={() => (setwithdraw(account))}/>
          ))
        }
     </div> 

     :
     <div className=" sm:hidden sm:col-span-6 sm:p-6  ">
        <div className=" relative sm:border  sm:bg-white sm:px-4  sm:rounded-2xl sm:py-6 sm:shadow-xl  ">
          <div className="">
            <p className="text-xl font-semibold text-blk text-center">
              Withdraw from Checking
            </p>

            <div className=" grid   ">
              <div className="col-span-4">
                {/* {from section} */}

                <div className="flex items-center gap-x-4 pb-6">
                  <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                    <p className="font-semibold  text-blk">From</p>
                  </div>

                  <div className="">
                    <p className=" font-semibold text-blk">
                      Checking
                    </p>
                    <p className="text-base font-medium text-blk">
                      Balance: 3000
                    </p>
                  </div>
                </div>

                <hr className="w-px h-14 bg-teal-500 mx-3" />

                {/* {to section} */}

                <div className="flex items-center gap-x-4 pt-6">
                  <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                    <p className="font-semibold  text-blk">To</p>
                  </div>
                  <div className="">
                    <p className="text-lg font-semibold text-blk">
                      Beneficiary
                    </p>
                    {/* <ListDropdown setoption={setbeneficiary} options={accounts}/> */}
                    <select name="" id=""></select>
                  </div>
                </div>
              </div>

              <div className="col-span-4 sm:mt-6 sm:space-y-6">
                {/* {Amount input section} */}

                <div className="flex flex-col py-6 sm:py-0">
                  <div>
                    {/* {input section} */}

                    <div className="py-2">
                      <input
                        placeholder="Enter amount to withdraw"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="w-full rounded-2xl placeholder:text-sm placeholder:text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* {Transfer Button} */}

                <div className=" w-full flex gap-y-4 flex-col ">
                  <button className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
                    Withdraw
                  </button>

                  <button onClick={() => setwithdraw("")} className="w-full border border-gray-800  rounded-3xl px-4 py-2 text-gray-800 tracking-wide font-semibold sm:hidden">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    }
      

      <div className=" hidden sm:grid justify-center  sm:col-span-6  bg-yellow-200">
        <h3 className="text-2xl text-center">Accounts</h3>
        {
          accounts?.map((account, index) =>(
            <AccountCard key={index} type={account.type} amount={account.balance} func={() => (setwithdraw(account))}/>
          ))
        }
     </div> 

      {/* LARGE SCREEN RIGHT SIDE/WITHDRAW PAGE */}
      <div className="hidden sm:block sm:col-span-6 sm:p-6  ">
        <div className=" relative border  bg-white sm:px-4  sm:rounded-2xl sm:py-6 sm:shadow-xl  ">
          <div className="">
            <p className="text-xl font-semibold text-blk text-center">
              Withdraw from Checking
            </p>

            <div className=" grid   ">
              <div className="col-span-4">
                {/* {from section} */}

                <div className="flex items-center gap-x-4 pb-6">
                  <div className="p-4 w-20 h-20 flex justify-center items-center   border-4 border-green-200 shadow-xl rounded-lg">
                    <p className="font-semibold  text-blk">From</p>
                  </div>

                  <div className="">
                    <p className=" font-semibold text-blk">
                      Checking
                    </p>
                    <p className="text-base font-medium text-blk">
                      Balance: 3000
                    </p>
                  </div>
                </div>

                <hr className="w-px h-14 bg-teal-500 mx-3" />

                {/* {to section} */}

                <div className="flex items-center gap-x-4 pt-6">
                  <div className="p-4 w-20 h-20 flex justify-center items-center border-4 border-green-200 shadow-xl rounded-lg">
                    <p className="font-semibold  text-blk">To</p>
                  </div>
                  <div className="">
                    <p className="text-lg font-semibold text-blk">
                      Beneficiary
                    </p>
                    {/* <ListDropdown setoption={setbeneficiary} options={accounts}/> */}
                    <select name="" id=""></select>
                  </div>
                </div>
              </div>

              <div className="col-span-4 sm:mt-6 sm:space-y-6">
                {/* {Amount input section} */}

                <div className="flex flex-col py-6 sm:py-0">
                  <div>
                    {/* {input section} */}

                    <div className="py-2">
                      <input
                        placeholder="Enter amount to withdraw"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="w-full rounded-2xl placeholder:text-sm placeholder:text-center"
                      />
                    </div>
                  </div>
                </div>

                {/* {Transfer Button} */}

                <div className=" w-full flex gap-y-4 flex-col ">
                  <button className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
                    Withdraw
                  </button>

                  <button className="btnHollow sm:hidden">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMoney