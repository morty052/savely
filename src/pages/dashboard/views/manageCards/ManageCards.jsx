import { useState } from "react"
import { CardsTabs, CardView , ManageCardModal} from "./components";
import { FaCog, FaPlusCircle, FaShieldAlt, FaSnowflake } from "react-icons/fa";
import {PhysicalCard} from "./components";
import { SavelyCard } from "../../partials";

const ManageCards = ({user}) => {
  
  const {firstname, lastname, cards} = user ? user : ""

  if (!cards) {
   return null
  }
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [physical, setPhysical] = useState(cards.filter((card)=> (
   card.cardtype.physical == true
 )))
 const [virtual, setVirtual] = useState(cards.filter((card)=> (
   card.cardtype.virtual == true
 )))
 const [activeCard, setactiveCard] = useState(physical?.[0])
 const [openModal, setopenModal] = useState(false)


  const PhysicalSection = () => {
   return(
      <>
      {
         physical?.map((card)=>(
            <PhysicalCard 
            firstname={firstname}
            lastname={lastname}
            issued={card.issued}
            expires={card.expires}
            
            />
         ))
      }
      </>
   )
  }

  const VirtualSection = () => {
   return(
     <>
      {
         virtual?.map((card)=>(
            <SavelyCard
            firstname={firstname}
            lastname={lastname}
            issued={card.issued}
            expires={card.expires}
            />
         ))
      }
     </>
   )
  }

  return (
     <>
<div className="grid  sm:grid-cols-12 sm:gap-x-6 sm:mt-4  sm:px-2  ">

       
{/* LEFT SIDE /DEFAULT SCREEN */}
<div className="flex flex-col items-center sm:col-span-6 ">
  <CardsTabs 
  user={user} 
  physical={<PhysicalSection/>}
  virtual={<VirtualSection/>}
  setVirtualCard={() => setactiveCard(virtual?.[0])}
  setPhysicalCard={() => setactiveCard(physical?.[0])}/>
</div>


{/* RIGHT SIDE */}
<div className="px-2 mt-8 sm:mt-0 sm:col-span-6 sm:px-6  ">
  <div className=" relative border border-white rounded-2xl  bg-gray-200/40  sm:px-4  sm:rounded-2xl sm:py-4 sm:shadow-xl  ">
   <div className="py-4 px-4">
       <div className="mb-2  text-gray-800">
        <p>Manage {activeCard?.cardtype.physical ? "Physical" : "Virtual"} Card</p>
       </div>


       <div className=" flex justify-center">
        {
          activeCard?.cardtype?.physical == true  ? 
          <CardView firstname={firstname} lastname={lastname}
          cvv={physical?.[0].cvv}
         from={"from-teal-300 "}
         to={"to-teal-600"}
        /> 
        :
         <CardView  firstname={"Savely"} lastname={"Virtual Card"}
         cvv={virtual?.[0].cvv}
         from={"from-blue-300 "}
         to={"to-blue-600 "}
        /> 

        }
       </div>

      {
       activeCard.active 
      ?
       <ul className="mt-4 bg-gray-50 max-w-sm mx-auto shadow-2xl   p-4 rounded-xl space-y-6">

         {/* <li className="">
            <a className="flex gap-x-4 items-center ">
               <FaPlusCircle/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Activate Card</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li> */}

         <li onClick={() => setopenModal(true)} className="cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaSnowflake className=" text-sky-500"/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Freeze Card</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>

         <li onClick={() => setopenModal(true)} className="cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaShieldAlt/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Pin & Security</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>

         <li onClick={() => setopenModal(true)} className="cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaCog className=" text-gray-500"/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Settings</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>
      </ul>
      :
      <ul className="mt-4 bg-gray-50 max-w-sm mx-auto shadow-2xl   p-4 rounded-xl space-y-6">

         <li className=" cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaPlusCircle/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Request Card</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>

         <li className=" cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaSnowflake className=" text-sky-500"/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Freeze Card</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>

         <li className=" cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaShieldAlt/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Pin & Security</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>

         <li className=" cursor-pointer">
            <a className="flex gap-x-4 items-center ">
               <FaCog className=" text-gray-500"/>
               <div className="">
               <p className="text-sm font-medium text-gray-800">Settings</p>
               <p className="text-xs text-gray-600">Active your savely debit card</p>
               </div>
            </a>
         </li>
      </ul>
      }
   </div>
  </div>
</div>
</div>
<ManageCardModal open={openModal} close={setopenModal}/>
     </>
    );
}

export default ManageCards