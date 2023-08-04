import register from "../../assets/registericon.png"
import deposit from "../../assets/depositicon.png"
import send from "../../assets/sendicon.png"

const HowitWorks = () => {
  return (
    // <!-- Icon Blocks -->
    <div className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8  mx-auto">
       <div className="p text-2xl mb-2 text-gray-800 font-semibold text-center sm:text-5xl sm:mb-6">
        How Savely Works
       </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 ">
        {/* <!-- Card --> */}
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
          <img className="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 sm:w-10 sm:h-10 "  src={register}/>
    
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 sm:text-2xl ">Register your account</h3>
              <p className="text-gray-600 sm:text-lg  ">Joining Savely is hassle free. You’ll be ready to go in minutes.</p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
    
        {/* <!-- Card --> */}
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
        <img className="flex-shrink-0 w-8 h-8 text-gray-800 sm:w-10 sm:h-10 mt-0.5 mr-6 "  src={deposit}/>
    
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 sm:text-2xl">Deposit Funds</h3>
              <p className="text-gray-600 sm:text-lg  ">Select any currency you prefer, then fund your account.</p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
    
        {/* <!-- Card --> */}
        <a className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all " href="#">
        <img className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mt-0.5 mr-6 "  src={send}/>
    
          <div>
            <div>
              <h3 className="block font-bold text-gray-800 sm:text-2xl">Start sending and saving.</h3>
              <p className="text-gray-600 sm:text-lg ">Done! You can now send and receive funds worldwide.</p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
    </div>
    // <!-- End Icon Blocks -->
  )
}

export default HowitWorks