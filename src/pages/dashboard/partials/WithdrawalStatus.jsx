import { Progress, message } from "antd"
import { useState, useEffect } from "react";
import { client } from "../../../lib/client";

const WithdrawalStatus = ({user}) => {

   const {accounts} = user ? user : ""
   

    const [percent, setpercent] = useState(10)

    const cookie = localStorage.getItem('cookie')
    const amount = localStorage.getItem("withdrawalamount")
    const sendername = localStorage.getItem("beneficiary")
    const accountKey = localStorage.getItem("withdrawingaccount")
  
    let a = {
      amount:Number(amount),
      sendername:`${sendername}`,
      type:{
        withdrawal:true
      },
      status:{
        witheld:true
      },
      // "status.completed":true,
    }

    if (!accounts) {
      return null
    }

    // FIND TARGET ACCOUNT TRANSACTIONS
    const useraccount = accounts?.find((account)=>(
      `${accountKey}` == account._key
    ))

   const transactions = useraccount.transactions ?
    accounts?.map((account)=>{
     return account.transactions ? account.transactions : ""
   })

   :
   []



   
    // UPDATE TARGET ACCOUNTS TRANSACTIONS
 const updatedtransactions = transactions.length > 0 ?  [...transactions[0],{
  amount:Number(amount),
  sendername:`${sendername}`,
  type:{
    withdrawal:true
  },
  status:{
    witheld:true
  },
  // "status.completed":true,
}] : [
  {
    amount:Number(amount),
    sendername:`${sendername}`,
    type:{
      withdrawal:true
    },
    status:{
      witheld:true
    },
    // "status.completed":true,
  }
]

    // UPDATE ACCOUNTS
    let updatedaccounts = accounts?.map((account) => {
      if (account._key == `${accountKey}`) {
        return{
          ...account,
          balance:account.balance - Number(amount),
          transactions:updatedtransactions
        }
      }
    })

    const handleIncrease = async() => {
    const increase  = () => setpercent((prev) => prev + 5)
    

    if (percent == 80) {
        console.log("finished")
        message.error("Withdrawal Failed")
        await client.patch(`${cookie}`)
        .set({accounts:updatedaccounts})
        .commit({autoGenerateArrayKeys:true})
        .then((res) => console.log(res))
        console.log(updatedtransactions)
        return
    }

    else {
        setTimeout(() => {
            increase()
           }, 1000);
    }
    }

    useEffect(() => {
    handleIncrease()

    }, [percent])
    

  return (
    <div className=" grid place-content-center ">
      <div className="max-w-sm flex flex-col items-center py-8 px-2 mx-auto ">
         <Progress status={percent == 80 && "exception"} size={180} percent={percent} type="circle"/>
         <div className="mt-4">
          { 
           
           percent != 80 ?
           <p className=" text-center text-xl font-semibold animate-pulse">Withdrawing</p>
           :
           <>
           <p className=" text-center text-xl font-semibold text-rose-600">Withdrawal Failed</p>
           <p className="text-center text-sm">Something went wrong with your withdrawal please contact customer care to process this transaction.</p>
           </>
           }
         </div>
      </div>
    </div>
  );
}

export default WithdrawalStatus