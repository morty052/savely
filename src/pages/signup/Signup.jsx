import { useState } from "react"
import { createUser } from "../dashboard/features"
import { message } from "antd"
import { NavLink } from "react-router-dom"

const Signup = () => {

  const accountname = localStorage.getItem("accountname")

  const AccountForm = () => {
    const [user, setuser] = useState({
      _type:"users",
      firstname:"",
      lastname:"",
      dob:"",
      email:"",
      password:"",
      ssn:"",
      accounts:[
        {
          type:`${accountname}`,
          balance:0,
          deployed:false
        },
      ],
      cards:[
        {
          cvv:"",
          cardnumber:"",
          issued:"",
          expires:"",
          active:false,
          cardtype:{
            physical:true
          }
        },
        {
          cvv:"",
          cardnumber:"",
          issued:"",
          expires:"",
          active:false,
          cardtype:{
            virtual:true
          }
        },
      ]
  
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
      switch (true) {
        case !user.firstname:
          message.error("Please enter your firstname")        
          break;

        case !user.lastname:
          message.error("Please enter your lastname")        
          break;

        case !user.email:
          message.error("Please enter a valid email")        
          break;

        case !user.ssn:
          message.error("Please enter a valid SSN")        
          break;

        case !user.password:
          message.error("Please choose a password")        
          break;

        case !user.dob:
          message.error("Please enter your date of birth")        
          break;
      
        default:
          break;
      }
      localStorage.setItem("firstname", user.firstname)
      createUser(user)
    }
    return (
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
        <h2 className="text-xl font-semibold text-gray-800 ">
          Fill in the form
        </h2>

        <form>
          <div className="mt-6 grid gap-4 lg:gap-6">
            {/* <!-- NAME Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-firstname-hire-us-1"
                  className="block text-sm text-gray-700 font-medium "
                >
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setuser((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }));
                  }}
                  type="text"
                  name="hs-firstname-hire-us-1"
                  id="hs-firstname-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                />
              </div>

              <div>
                <label
                  for="hs-lastname-hire-us-1"
                  className="block text-sm text-gray-700 font-medium "
                >
                  Last Name
                </label>
                <input
                 onChange={(e) => {
                  setuser((prev) => ({
                    ...prev,
                    lastname: e.target.value,
                  }));
                }}
                  type="text"
                  name="hs-lastname-hire-us-1"
                  id="hs-lastname-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                />
              </div>
            </div>
            {/* <!-- End Grid --> */}

            {/* EMAIL SECTION */}
            <div>
              <label
                for="hs-work-email-hire-us-1"
                className="block text-sm text-gray-700 font-medium "
              >
                Email
              </label>
              <input
              onChange={(e) => {
                setuser((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
                type="email"
                name="hs-work-email-hire-us-1"
                id="hs-work-email-hire-us-1"
                autocomplete="email"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>

            {/* PASSWORD SECTION */}
            <div>
              <label
                for="hs-work-pass-hire-us-1"
                className="block text-sm text-gray-700 font-medium "
              >
                Create Password
              </label>
              <input
              onChange={(e) => {
                setuser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
                type="password"
                name="hs-work-pass-hire-us-1"
                id="hs-work-email-pass-us-1"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
              />
            </div>

            {/* <!-- PERSONAL INFO Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-company-hire-us-1"
                  className="block text-sm text-gray-700 font-medium "
                >
                  SSN
                </label>
                <input
                onChange={(e) => {
                  setuser((prev) => ({
                    ...prev,
                    ssn: e.target.value,
                  }));
                }}
                  type="password"
                  name="hs-company-hire-us-1"
                  id="hs-company-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                />
              </div>

              <div>
                <label
                  for="hs-company-website-hire-us-1"
                  className="block text-sm text-gray-700 font-medium "
                >
                  Date of birth
                </label>
                <input
                onChange={(e) => {
                  setuser((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }));
                }}
                  type="date"
                  name="hs-company-website-hire-us-1"
                  id="hs-company-website-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                />
              </div>
            </div>
            {/* <!-- End Grid --> */}

            {/* <div>
              <label for="hs-about-hire-us-1" className="block text-sm text-gray-700 font-medium ">Details</label>
              <textarea id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "></textarea>
            </div> */}
          </div>
          {/* <!-- End Grid --> */}

          {/* <!-- Checkbox --> */}
          <div className="mt-3 flex">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600  cursor-pointer focus:ring-blue-500     "
              />
            </div>
            <div className="ml-3">
              <label for="remember-me" className="text-sm text-gray-600 ">
                By submitting this form I have read and acknowledged the{" "}
                <NavLink
                  to={"/privacy"}
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  
                >
                  Privacy policy
                </NavLink>
              </label>
            </div>
          </div>
          {/* <!-- End Checkbox --> */}

          {/* SUBMIT BUTTON */}
          <div className="mt-6 grid">
            <button onClick={(e) => handleSubmit(e)}
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
            >
              Create Account
            </button>
          </div>
        </form>

        {/* FOOTNOTE */}
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    // <!-- Hire Us -->
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Grid --> */}
  <div className="grid md:grid-cols-2 items-center gap-y-6 sm:gap-12">
    <div>
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight ">
        Create a {accountname} account with <span className="text-teal-400">Savely</span>
      </h1>
      <p className="mt-1 md:text-lg text-gray-800 ">
        Join Thousands of customers saving over 30% extra with savely online bank at no extra cost.
      </p>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 ">
          What can I expect?
        </h2>

        <ul className="mt-2 space-y-2">
          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-gray-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span className="text-gray-600 ">
              Industry-leading design
            </span>
          </li>

          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-gray-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span className="text-gray-600 ">
              Efficient Service
            </span>
          </li>

          <li className="flex space-x-3">
            <svg className="flex-shrink-0 h-6 w-6 text-gray-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
            </svg>
            <span className="text-gray-600 ">
              Simple and affordable
            </span>
          </li>
        </ul>
      </div>


      <div className="mt-10 flex items-center gap-x-5">
      </div>
    </div>
    {/* <!-- End Col --> */}


     {/* SIGN UP FORM */}
    <div className="relative">
      {/* <!-- Card --> */}
      <AccountForm/>
      {/* <!-- End Card --> */}
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
  )
}

export default Signup