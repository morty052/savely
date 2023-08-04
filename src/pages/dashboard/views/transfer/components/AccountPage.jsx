import { AccountCard, SavelyCard,   } from "../../../partials"
import { useState, useEffect } from "react"
import { client } from "../../../../../lib/client"
import {TransferScreenLarge} from "./"

const AccountPage = ({accounts, user}) => {
  const {beneficiaries} = user ? user : ""
  const [activeAccount, setactiveAccount] = useState(accounts?.[0])
  const [withdrawing, setwithdrawing] = useState(false)
  
 

    return(
      <>
      <div className="grid sm:grid-cols-12">
        {/*DEFAULT SCREEN/ LARGE SCREEN LEFT SIDE */}
      <div className=" flex flex-col items-center  sm:col-span-6">
                    <h3 className="text-xl text-center text-gray-800">Accounts</h3>
                    {accounts?.map((account, index) => (
                      <AccountCard to={`withdraw/${account._key}`} key={index} type={account.type} amount={account.balance} func={() => (setactiveAccount(account))} />
                    ))}
                    <SavelyCard />
      </div>


      {/* LARGE SCREEN RIGHT SIDE */}
      <div className="hidden sm:block sm:col-span-6">
        <TransferScreenLarge setwithdrawing={setwithdrawing} activeAccount={activeAccount} beneficiaries={beneficiaries}/>
      </div>
      </div>
      </>
      )
}

export default AccountPage