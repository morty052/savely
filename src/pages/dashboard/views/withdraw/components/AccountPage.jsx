import { AccountCard, SavelyCard,   } from "../../../partials"
import { useState, useEffect } from "react"
import WithdrawScreenLarge from "./WithdrawScreenLarge"
import { client } from "../../../../../lib/client"

const AccountPage = ({accounts, user}) => {
  const {beneficiaries, firstname, lastname} = user ? user : ""
  const [activeAccount, setactiveAccount] = useState(accounts?.[0])
  const [withdrawing, setwithdrawing] = useState(false)
  
 

    return(
      <>
      {
      <div className="grid sm:grid-cols-12">
      <div className="  flex flex-col items-center sm:col-span-6">
                    <h3 className="text-xl text-center text-gray-800">Accounts</h3>
                    {accounts?.map((account, index) => (
                      <AccountCard to={`withdraw/${account._key}`} key={index} firstname={firstname} lastname={lastname} type={account.type} amount={account.balance} func={() => (setactiveAccount(account))} />
                    ))}
      </div>
      <div className="hidden sm:block sm:col-span-6">
        <WithdrawScreenLarge setwithdrawing={setwithdrawing} activeAccount={activeAccount} beneficiaries={beneficiaries}/>
      </div>
      </div>

      }
      </>
      )
}

export default AccountPage