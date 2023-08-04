import { WithdrawalStatus,PinGate} from "../../partials"
import { AccountPage, WithdrawScreen, WithdrawalReceipt } from "./components"
import { Route, Routes } from "react-router-dom"



const Withdraw = ({user}) => {
const {accounts, beneficiaries} = user ? user : ""

if (!accounts) {
  return null
}



  return (
    <>
    
<div className="grid  ">
{/* Mobile TOP */}
<Routes>
 <Route path="/" element={<AccountPage user={user} accounts={accounts}/>}/>  
 <Route path="receipt/:id" element={<WithdrawalReceipt />}/>  
 <Route path="withdraw/:id" element={<WithdrawScreen user={user}/>}/>  
 <Route path="enterpin/:id" element={<PinGate user={user}/>}/>  
 <Route path="withdrawing/:id" element={<WithdrawalStatus user={user}/>}/>  
</Routes> 
</div>
    </>
  );
}

export default Withdraw