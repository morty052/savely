import { Addbeneficiary } from "../features"
import { useState } from "react"

const BenficiaryForm = ({setmodal, func}) => {

const [beneficiary, setbeneficiary] = useState( {
  firstname:"",
  lastname:"",
  accountnumber:"",
  routingnumber:"",
  bankname:""
 })

 function handleAdd(e) {
  e.preventDefault()
  console.log(beneficiary)
  Addbeneficiary(beneficiary, func)
  setmodal()
 }

  return (
    <form>
        <div className="grid gap-4 lg:gap-6">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-contacts-1" className="block text-sm text-gray-700 font-medium ">First Name</label>
              <input onChange={(e) => {
                setbeneficiary(prev => (
                  {
                    ...prev,
                    firstname:e.target.value
                  }
                ))}


                } type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div>

            <div>
              <label for="hs-lastname-contacts-1" className="block text-sm text-gray-700 font-medium ">Last Name</label>
              <input onChange={(e) => {
                setbeneficiary(prev => (
                  {
                    ...prev,
                    lastname:e.target.value
                  }
                ))}


                } type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div>
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 ">
            {/* <div>
              <label for="hs-lastname-contacts-1" className="block text-sm text-gray-700 font-medium ">Last Name</label>
              <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div> */}
            <div>
              <label for="hs-lastname-contacts-1" className="block text-sm text-gray-700 font-medium ">Account Number</label>
              <input onChange={(e) => {
                setbeneficiary(prev => (
                  {
                    ...prev,
                    accountnumber:e.target.value
                  }
                ))}


                } type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div>
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" className="block text-sm text-gray-700 font-medium ">Routing Number</label>
              <input onChange={(e) => {
                setbeneficiary(prev => (
                  {
                    ...prev,
                    routingnumber:e.target.value
                  }
                ))}


                } type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div>

            <div>
              <label for="hs-phone-number-1" className="block text-sm text-gray-700 font-medium ">Bank Name</label>
              <input onChange={(e) => {
                setbeneficiary(prev => (
                  {
                    ...prev,
                    bankname:e.target.value
                  }
                ))}


                } type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "/>
            </div>
          </div>
          {/* <!-- End Grid --> */}

          {/* <div>
            <label for="hs-about-contacts-1" className="block text-sm text-gray-700 font-medium ">Details</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "></textarea>
          </div> */}
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-6 grid">
          <button onClick={(e) => handleAdd(e)} type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 ">Add beneficiary</button>
        </div>

        {/* <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div> */}
      </form>

  )
}

export default BenficiaryForm