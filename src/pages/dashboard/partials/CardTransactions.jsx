import { FaArrowDown, FaArrowUp, FaBan } from "react-icons/fa"
import formatter from "../../../utils/formatter"
import { day } from "../../../lib/dayjs"
import { Empty } from "antd"

const CardTransactions = ({card}) => {

   

    const {transactions} = card ? card : []


    function Transaction({time, sender, amount, status, type}) {
       
       const timeago = day(time)
       const timefromNow = timeago.fromNow()

      const HandleIcon = () => {
        let icon
         if (type?.withdrawal) {
            return <FaArrowUp className=" text-xs text-rose-600"/>
         }

        else if (type?.deposit) {
            return <FaArrowDown className=" text-xs text-green-300"/>
         }

         return (
            <a>
                {icon}
            </a>
         )
      }

      const HandleSatus = () => {
        let icon
         if (status?.completed) {
            return(
                <a className={`${type.withdrawal ? "text-rose-600" : "text-green-600"}`}>
                { type.withdrawal ? "- " : "+ " }
                <span>{formatter.format(amount)}</span>
               </a> 
            )
            
         }

        else if (status?.witheld) {
            return (
                <a className="text-gray-400 flex items-center gap-x-1"> 
                <FaBan/>
                 {formatter.format(amount)}
                </a>
            )
         }

        else if (status?.pending) {
            return <FaArrowDown className=" text-xs text-green-300"/>
         }

         return (
            <a>
                {icon}
            </a>
         )
      }

        return(
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 border grid place-content-center rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
                            {/* <FaArrowDown className=" text-xs text-green-300"/> */}
                            <HandleIcon/>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {sender}
                        </p>
                        <p className={`text-sm  truncate ${!status?.witheld ?  "text-gray-500 " : "text-rose-400 font-medium"}`}>
                            {!status?.witheld ? timefromNow : "Witheld"}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold  ">
                       {/* <span>{formatter.format(amount)}</span>  */}
                       <HandleSatus/>
                    </div>
                </div>
            </li>
        )
    }

  return (
    
<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  ">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-bold leading-none text-gray-900 ">Recent Transactions</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
            {/* TRANSACTIONS */}
           {
            transactions?.length > 1 ?
            <div className="">
                 {
                card?.transactions?.map((transaction, index) => (
                        <a key={index} >
                            <Transaction 
                             amount={transaction.amount}
                             status={transaction.status}
                             sender={transaction.sendername}
                             time={transaction.created}
                             type={transaction.type} />
                        </a>
                ))
            }
            </div>
            :
            <div className="">
                <Empty description="No recent transactions."/>
            </div>
           }
        </ul>
   </div>
</div>

  )
}

export default CardTransactions