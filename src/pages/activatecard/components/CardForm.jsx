import { useState } from "react"

const CardForm = () => {
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
          type:"Checking",
          balance:0,
          deployed:false
        }
      ],
      cards:[
        {
          cvv:"474",
          cardnumber:"4848 44874 5574 5678",
          issued:"01/23",
          expires:"09/28",
          active:false,
          cardtype:{
            physical:true
          }
        },
        {
          cvv:"474",
          cardnumber:"4848 44874 5574 5678",
          issued:"01/23",
          expires:"09/28",
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
      <div className="py-8 sm:py-16 px-2">
        <div className="flex mx-auto flex-col border rounded-xl p-4 sm:p-6 lg:p-10  max-w-xl ">
        <h2 className="text-xl font-semibold text-gray-800 ">
          Fill in the card activation form
        </h2>
        <h2 className="text-xl font-semibold text-gray-800 ">
        <h2 className="text-sm font-semibold text-gray-800 ">
          You are a few seconds away from using your new savely card
        </h2>
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

            {/* Card Number SECTION */}
            <div>
              <label
                for="hs-work-email-hire-us-1"
                className="block text-sm text-gray-700 font-medium "
              >
                Card Number
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

            {/* SSN SECTION */}
            <div>
              <label
                for="hs-work-pass-hire-us-1"
                className="block text-sm text-gray-700 font-medium "
              >
                SSN
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

            {/* <!-- CVV Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-company-hire-us-1"
                  className="block text-sm text-gray-700 font-medium "
                >
                  CVV
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
                  Zip code
                </label>
                <input
                onChange={(e) => {
                  setuser((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }));
                }}
                  type="number"
                  name="hs-company-website-hire-us-1"
                  id="hs-company-website-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                />
              </div>
            </div>
            {/* <!-- End Grid --> */}
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
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Privacy policy
                </a>
              </label>
            </div>
          </div>
          {/* <!-- End Checkbox --> */}

          {/* SUBMIT BUTTON */}
          <div className="mt-6 grid">
            <button onClick={(e) => handleSubmit(e)}
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-teal-400 hover:bg-teal-500 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
            >
              Activate Card
            </button>
          </div>
        </form>

        {/* FOOTNOTE */}
        {/* <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div> */}
      </div>
      </div>
    );
  }

export default CardForm