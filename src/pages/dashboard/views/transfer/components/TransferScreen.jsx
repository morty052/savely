import { AccountsInput, CurrencyInput, BeneficiaryModal } from "../../../partials"
import { FaPlusCircle } from "react-icons/fa"
import {useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { client } from "../../../../../lib/client"
import { message } from "antd"


const TransferScreen = ({user}) => {
// const {beneficiaries} = user ? user : ""
const [beneficiaries, setbeneficiaries] = useState([])
const [account, setaccount] = useState()
const [withdrawing, setwithdrawing] = useState(false)
const [withdrawAmount, setWithdrawAmount] = useState("")
const [amount, setamount] = useState("")
const [openModal, setOpenModal] = useState(false)
const [activeAccount, setactiveAccount] = useState(null)

const navigate = useNavigate()

const key = useParams().id
const cookie = localStorage.getItem("cookie")

const fetchAccount = async () => {
  // const fetchBeneficiaries = async () =>{
  //   const bquery = `*[_type == "users" && _id == "${cookie}"]{beneficiaries[]}`
  //   const beneficiaries = await client.fetch(query).then(res => res)
  //   console.log(beneficiaries)
  //   setbeneficiaries(beneficiaries[0].beneficiaries)
  // }

const query = `*[_type == "users" && _id == "${cookie}"]{accounts[]}`
const bquery = `*[_type == "users" && _id == "${cookie}"]{beneficiaries[]}`
const accounts = await client.fetch(query).then(res => res)
const targetaccount = accounts[0].accounts.filter((account)=>{
  return account._key == key
})
const beneficiaries = await client.fetch(bquery).then(res => res)
setbeneficiaries(beneficiaries[0].beneficiaries)
console.log(beneficiaries)
setaccount(targetaccount[0])
}

const fetchBeneficiaries = async () =>{
    const query = `*[_type == "users" && _id == "${cookie}"]{beneficiaries[]}`
    await client.fetch(query).then(res => console.log(res))
    // console.log(beneficiaries)
    // setbeneficiaries(beneficiaries[0].beneficiaries)
  }



const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

useEffect(() => {
  fetchAccount()
}, [])




function handlewithdraw() {
        
  const amount = withdrawAmount.replace(",","").replace("$","")
  console.log(amount)

  if (!withdrawing) {
    return message.error("Please choose a beneficiary")
  }

  if (amount > account.balance) {
    return message.error("Insufficient Funds")
  }

  else if (amount < account.balance) {
    // return message.success("withdrawal succesfull")
    let day = new Date
    const transactionid = day.getMilliseconds()

    localStorage.setItem("withdrawalamount", amount)
    localStorage.setItem("receivingaccount", withdrawing.accountnumber)
    localStorage.setItem("beneficiary", withdrawing.firstname + " " + withdrawing.lastname)
    localStorage.setItem("remainder", account.balance - amount)
    navigate(`/dashboard/withdraw/receipt/${transactionid + withdrawing.firstname.charAt(0) +  withdrawing.lastname.charAt(0) +account._key}`)
  }
}

if (!account) {
  return null
}

    return(
    <>
    <div className="  sm:col-span-6 sm:p-6  ">
      <div className=" relative sm:border  sm:bg-white sm:px-4  sm:rounded-2xl sm:py-6 sm:shadow-xl  ">
        <div className="">
          <p className="text-xl font-semibold text-blk text-center">
            Withdraw from {account?.type}
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
                    Balance: {formatter.format(account.balance)}
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
                  <div onClick={() => setOpenModal(true)} className="flex items-center gap-x-2  cursor-pointer w-fit ">
                   <p className="text-sm font-semibold text-gray-800">Add Beneficiary</p>
                  <a  className="text-sm text-teal-400"><FaPlusCircle/></a>
                  </div>
                  {/* <ListDropdown setoption={setbeneficiary} options={accounts}/> */}
                  <AccountsInput setbeneficiary={setwithdrawing} people={beneficiaries}/>
                </div>
              </div>
            </div>
    
            <div className="col-span-4 sm:mt-6 sm:space-y-6">
              {/* {Amount input section} */}
    
              <div className="flex flex-col py-6 sm:py-0">
                <div>
                  {/* {input section} */}
    
                  <div className="py-2">
                    {/* <input
                      placeholder="Enter amount to withdraw"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="w-full rounded-2xl placeholder:text-sm placeholder:text-center"
                    /> */}
                    <CurrencyInput setAmount={setamount} value={withdrawAmount} setValue={setWithdrawAmount} placeholder={"Enter Amount to Withdraw"}/>
                  </div>
                </div>
              </div>
    
              {/* {Transfer Button} */}
    
              <div className=" w-full flex gap-y-4 flex-col ">
                <button onClick={() => handlewithdraw()} className=" w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
                  Withdraw
                </button>
    
                <button onClick={() => setactiveAccount("")} className="w-full border border-gray-800  rounded-3xl px-4 py-2 text-gray-800 tracking-wide font-semibold sm:hidden">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BeneficiaryModal func={() => fetchAccount()}  isOpen={openModal} setIsOpen={setOpenModal}/>
    </>
      )
}



export default TransferScreen