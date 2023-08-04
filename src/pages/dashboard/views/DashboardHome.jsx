import { SavelyCard, Tabs, RecentTransactions, AccountCard, CardTransactions } from "../partials"
import { PhysicalCard } from "./manageCards/components"
import { useState,} from "react"
import { Progress } from "antd"

const DashboardHome = ({user}) => {
  const {firstname, lastname, accounts, cards} = user ? user : ""


  if (!cards || !accounts) {
    return null
  }

  const [view, setview] = useState(1)

  const [physicalCard, setPhysical] = useState(cards.filter((card)=> (
    card.cardtype.physical == true
  )))
  const [virtualCard, setVirtualCard] = useState(cards.filter((card)=> (
    card.cardtype.virtual == true
  )))
 const [activeCard, setactiveCard] = useState(physicalCard)
 const [activeAccount, setactiveAccount] = useState(accounts?.[0])


  const CardSection = () => {

    return(
  <div className="grid  justify-center sm:justify-start ">

        {/* PHYSICAL SECTION */}
        <div className="">
         {
          physicalCard?.map((card, index)=>(
            <PhysicalCard func={() => setactiveCard(physicalCard)}
              key={index}
              firstname={firstname}
              lastname={lastname}
              number={card.cardnumber}
              expires={card.expires}
              issued={card.issued}
               />
          ))
         }
        </div>

        {/* Virtual SECTION */}
        <div className=" ">
        {
          virtualCard?.map((card, index)=>(
            <SavelyCard
             func={() => setactiveCard(virtualCard)}
             key={index}
             firstname={firstname}
             lastname={lastname}
             number={card.cardnumber}
             expires={card.expires}
             issued={card.issued}
              />
          ))
         }
        </div>
  </div>
    )
  }

  const AccountSection = () => {
    return(
      <div className="grid pt-4 sm:justify-start sm:pt-0 ">
        <div className=" mx-auto">
        {
          accounts?.map((account, index)=>(
            <AccountCard type={account.type} key={index} firstname={firstname} lastname={lastname} amount={accounts?.[0].balance}/>
          ))
        }
        </div>
  </div>
    )
  }
  
  const Performance = () =>{

    // function performanceInfo(params) {
    //     setquestion(explainers.portfolioBalance.question)
    //     setanswer(explainers.portfolioBalance.answer)
    //     setshowInfo(true)
    // }

    return(
        <>
     <div className='bg-gray-200/80 shadow-xl ring-1 ring-slate-100 rounded-lg p-4'>
         <div className='mb-4'>
             <h3 className='text-base font-semibold text-gray-800'>Budgeting score
              <span>
                {/* <Infobutton func={performanceInfo}/> */}
              </span>
             </h3>
             <p className='text-sm text-gray-700'>No budgeting activity</p>
        </div>
     <div>
      <div className='flex justify-between'>
         <span className='text-xs text-gray-700 font-semibold'>Less balanced</span>
         <span className='text-xs text-gray-700 font-semibold'>More balanced</span>
      </div>
     <Progress status='normal' trailColor='#f9f8f8'strokeWidth={20} showInfo={false}  type='line'/>
     <p className='text-xs'>Keep using your savely account to get more feedback on your budgeting.</p>

     {/* <div className='py-4'>
     <button  className='py-2 px-4 rounded-3xl bg-green-300 shadow-md focus:bg-green-500 transition-all duration-500 ease-in'>
         See my breakdown
     </button>
     </div> */}


     </div>
         </div>
        </>
    )
}

const DiscountPerformance = () =>{

  // function performanceInfo(params) {
  //     setquestion(explainers.portfolioBalance.question)
  //     setanswer(explainers.portfolioBalance.answer)
  //     setshowInfo(true)
  // }

  return(
      <>
   <div className='bg-gray-200/80 shadow-xl ring-1 ring-slate-100 rounded-lg p-4'>
       <div className='mb-4'>
           <h3 className='text-base font-semibold text-gray-800'>Discount tier
            <span>
              {/* <Infobutton func={performanceInfo}/> */}
            </span>
           </h3>
           <p className='text-sm text-gray-700'>No discount activity</p>
      </div>
   <div>
    <div className='flex justify-between'>
       <span className='text-xs text-gray-700 font-semibold'>Less balanced</span>
       <span className='text-xs text-gray-700 font-semibold'>More balanced</span>
    </div>
   <Progress status='normal' trailColor='#f9f8f8'strokeWidth={20} showInfo={false}  type='line'/>
   <p className='text-xs'>Keep shopping with your savely card at designated vendors to build up discounts on products up to 11%.</p>

   {/* <div className='py-4'>
   <button  className='py-2 px-4 rounded-3xl bg-green-300 shadow-md focus:bg-green-500 transition-all duration-500 ease-in'>
       See my breakdown
   </button>
   </div> */}


   </div>
       </div>
      </>
  )
}

const LargeScreenRightSide = () => {

  

  return(
    <>
    {/* LARGE SCREEN RIGHT SIDE */}
<div className="hidden sm:px-4 sm:block col-span-6 sm:border mt-4 pt-4 pb-8 rounded-lg h-fit bg-white shadow-lg  ">

{ view == 1 ?

// ACCOUNT VIEW
<div className=" max-w-md mx-auto  space-y-6">
  {/* ACCOUNT DETAILS */}
 <div className="bg-white rounded-lg p-4  shadow border border-gray-200">
 <h3 className="text-center text-xs text-gray-600 sm:text-start ">
    Deposit Information
</h3>
 <ul className=" divide-y">

<li className="text-sm font-medium flex justify-between py-1">
  <a >Account Number</a>
  <a >{activeAccount.number ? activeAccount.number : "Not issued"}</a>
</li>

<li className="text-sm font-medium flex justify-between py-1">
  <a >Routing Number</a>
  <a >127898926</a>
</li>

 </ul>
 </div>
<div className="mt-2">
<RecentTransactions user={user}/>
</div>
<Performance/>
</div>
  :
  
  // CARD VIEW
<div className=" max-w-md mx-auto  space-y-6">
  {/* ACCOUNT DETAILS */}
 <div className="bg-white rounded-lg p-4  shadow border border-gray-200">
 <h3 className="text-center text-xs text-gray-600 sm:text-start ">
   {!activeCard?.[0].cardtype?.virtual ? "Physical" : "Virtual"} Card Information
</h3>
 <ul className=" divide-y">

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  <a >Card Number</a>
  <a >{activeCard?.[0].cardnumber ? activeCard?.[0].cardnumber : "N/A"}</a>
</li>

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  <a >CVV </a>
  <a >{activeCard?.[0].cvv ? activeCard?.[0].cvv : "N/A" }</a>
</li>

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  <a >Issued </a>
  <a >{activeCard?.[0].issued ? activeCard?.[0].issued : "N/A" }</a>
</li>

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  <a >Expires </a>
  <a >{activeCard?.[0].expires ? activeCard?.[0].expires : "N/A" }</a>
</li>

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  <a >Card Type </a>
  <a >{!activeCard?.[0].cardtype?.virtual ? "Physical" : "Virtual"}</a>
</li>

<li className="text-sm font-medium flex justify-between py-1 text-gray-800">
  {activeCard?.[0].active && <a >Status </a>}
  <a >{!activeCard?.[0].active ? <span className=" cursor-pointer text-blue-600">Request {!activeCard?.[0].cardtype?.virtual ? "Physical Card" : "Virtual Card"} </span> : "Issued"}</a>
</li>

 </ul>
 </div>
<div className="mt-2">
<CardTransactions card={!activeCard?.[0].cardtype?.virtual ? physicalCard[0] : virtualCard[0]} />
</div>
<DiscountPerformance/>
</div>
 }
 
</div>
    </>
  )
}


  return (
    <>
  <div className="  grid justify-center sm:grid-cols-12 sm:px-4 sm:gap-x-6  ">
  
   {/* DEFAULT VIEW/  TABLET LEFT SIDE */}
  <div className=" sm:mx-auto sm:col-span-6  ">

    {/* SWITCH TO CARD OR ACCOUNT VIEW */}
    <Tabs setcardview={()=> setview(2)} setaccountview={()=> setview(1)} accounts={<AccountSection/>} cards={<CardSection/>}/>

     {/* MOBILE TRANSACTION AND PERFORMANCE VIEW */}
    <div className="py-4 px-2 space-y-6 sm:hidden">
        <h3 className="text-center sm:text-start text-xl">
            {view == 1 ? "Account" : "Card" } Activity
        </h3>

        {/* CONDITIONALY RENDER TRANSACTIONS AND PERFOMANCE WHEN SWITCHING TO CARD OR ACCOUNT VIEW */}
       { 
       view == 1 ?
       <RecentTransactions user={user}/>
       :
       <CardTransactions card={!activeCard?.[0].cardtype?.virtual ? physicalCard[0] : virtualCard[0]} />
       }
        <Performance/>
    {/* <Transactions/> */}
    </div>

  </div>

  {/*TABLET RIGHT SIDE */}
  <LargeScreenRightSide/>
  </div>
    </>
  )
}

export default DashboardHome