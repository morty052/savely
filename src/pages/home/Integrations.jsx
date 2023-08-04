import { budgetvid } from "../../assets"

function Integrations({}) {
  return (
    // <!-- Features -->
<div className="py-12 relative bg-slate-800">
  <div className="absolute -bottom-5 inset-x-0">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,266.7C480,277,600,299,720,293.3C840,288,960,256,1080,208C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </div>
<div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
  {/* <!-- Grid --> */}
  <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
    <div>
      {/* <img className="rounded-xl" src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80" alt="Image Description"/> */}
      <video autoPlay muted playsInline loop className="rounded-xl" src={budgetvid} alt="Image Description"/>
    </div>
    {/* <!-- End Col --> */}

    <div className="mt-5 sm:mt-10 lg:mt-0">
      <div className="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-5xl text-gray-50 ">
            Powerful Budgeting <br /> <span className="text-teal-400">Savely A.I</span>
          </h2>
          <p className="text-gray-50">
            Experience the future of budgeting technology with our state of the art savely A.I built to provide the very latest automated budgeting features available today .
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- List --> */}
        <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-50">
              <span className="font-bold">Withdrawal pattern</span> recognition
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-50">
              Bi-weekly expenditure <span className="font-bold">analysis</span>
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-50">
              Intuitive Design
            </span>
          </li>
        </ul>
        {/* <!-- End List --> */}
      </div>
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
</div>

  )
}

export default Integrations