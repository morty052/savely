import { sepa } from "../assets"
import { useNavigate } from "react-router-dom";

const IbanAccounts = () => {

  const navigate = useNavigate()

  const handleCreate = (e) => {
    localStorage.setItem('accountname', e)
    navigate('/signup')
   }

   

  return (
    // <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8  mx-auto overflow-hidden">
      {/* SMALL SCREEN TOP IMAGE */}
      {/* <div className="sm:hidden">
         <img class="rounded-xl" src="https://cdn.sanity.io/images/noj3nhym/production/5205ee63ee2ae7e1acc0601d8be04516e312f30a-621x567.png" alt="Image Description"/>
         </div> */}

      <div className="flex  justify-center lg:hidden">
        <img className="w-40 h-40" src={sepa} alt="" />
      </div>

      {/* <!-- Title --> */}
      <div class="mx-auto max-w-2xl mb-2 lg:mb-14 text-center">
        <h2 class="text-3xl sm:text-4xl text-gray-800 font-bold ">
          Get Your Own European IBAN Account
        </h2>
        <p class="mt-3 text-gray-800 md:hidden ">
          Easily manage your everyday financial operations with your own IBAN
          account. No branch visit needed. We execute both incoming and outgoing
          SEPA payments with all EU banks that support SEPA transfers.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-lg lg:hidden">
        <p className="text-center text-lg">
          So, which account would you like to open?
        </p>
        <p>
          <span className="text-blue-600 cursor-pointer">Savings Account</span>{" "}
          or{" "}
          <span className="text-blue-600 cursor-pointer">
            Checking Account{" "}
          </span>{" "}
          ?
        </p>
      </div>
      {/* <!-- End Title --> */}

      {/* <!--CIRCLE SECTION --> */}
      <div class="hidden  relative lg:flex justify-center  ">
        <img
          className=" absolute -left-14   hidden md:block"
          src="https://cdn.sanity.io/images/noj3nhym/production/5205ee63ee2ae7e1acc0601d8be04516e312f30a-621x567.png"
          alt=""
        />

        {/* INNER CIRCLE */}
        <div className=" z-10 bg-white mx-auto border  border-gray-200 shadow-2xl grid place-content-center rounded-full  w-[600px] h-[600px]">
          <div className="mx-auto border  border-teal-400 grid place-content-center pb-10 px-4 rounded-full  w-[550px] h-[550px]">
            <div className="flex justify-center">
              <img className="w-40 h-40" src={sepa} alt="" />
            </div>
            <p className="text-center text-lg my-2 ">
              Easily manage your everyday financial operations with your own
              IBAN account. No branch visit needed. We execute both incoming and
              outgoing SEPA payments with all EU banks that support SEPA
              transfers.
            </p>
            <p className="text-center my-2 text-lg">
              So, which account would you like to open?
            </p>
            <div className="flex justify-center text-lg">
              <p>
                <span onClick={() => handleCreate("Savings")} className="text-blue-600 cursor-pointer">
                  Savings Account
                </span>{" "}
                or{" "}
                <span onClick={() => handleCreate("Checking")} className="text-blue-600 cursor-pointer">
                  Checking Account{" "}
                </span>{" "}
                ?
              </p>
            </div>
          </div>
        </div>

        <img
          className=" absolute -right-14 hidden md:block"
          src="https://cdn.sanity.io/images/noj3nhym/production/ca1d0b702395659b485b6dee748f4c54717be77e-621x567.png"
          alt=""
        />
      </div>

      {/* BOTTOM IMAGES */}
      <div class="mt-10 items-center  lg:hidden">
        {/* <!-- End Col --> */}

        <div class=" ">
          <img
            class="rounded-xl mx-auto"
            src="https://cdn.sanity.io/images/noj3nhym/production/ca1d0b702395659b485b6dee748f4c54717be77e-621x567.png"
            alt="Image Description"
          />
        </div>
        {/* <!-- End Col --> */}

        {/* <div class="col-span-4 md:col-span-3">
          <img class="rounded-xl" src="https://cdn.sanity.io/images/noj3nhym/production/ca1d0b702395659b485b6dee748f4c54717be77e-621x567.png" alt="Image Description"/>
        </div> */}
        {/* <!-- End Col --> */}
      </div>
    </div>
  );
}

export default IbanAccounts