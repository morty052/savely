import { cards } from "../assets"
import { NavLink } from "react-router-dom"



function CardDiscounts({}) {
  return (
    // <!-- Features -->
<div className=" relative overflow-hidden  ">

<div className="max-w-[85rem] px-4 sm:px-6 lg:py-16 mx-auto">
  {/* <!-- Grid --> */}
  <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 sm:items-center md:gap-12 xl:gap-32">
<div className=" flex items-center justify-center px-16">
  <div className="relative w-full max-w-lg">
    <div className="absolute hidden sm:block top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute hidden sm:block top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute hidden sm:block -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    {/* <div className="m-8 relative space-y-4">
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-56 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div className="flex-1">
          <div className="h-4 w-44 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div> */}
    <div className="relative">
      <img className="rounded-xl" src={cards} alt="Image Description"/>
    </div>
  </div>
</div>
    {/* <!-- End Col --> */}

    <div className="mb-5 sm:mb-0 sm:mt-10 lg:mt-0">
      
      <div className="space-y-6 sm:space-y-8">
        {/* <!-- Title --> */}
        <div className="space-y-2">
        <div className="hidden lg:flex justify-start ">
      <NavLink to={"/activatecard"} className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300   " >
        Activate Savely Card
        <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600  ">
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </NavLink>
    </div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-800 ">
           Amazing  Discounts <br/>with <span className="text-teal-400">Savely card</span>
          </h2>
          <p className="text-gray-800">
            Get up to 12% discounts on products from eligible vendors when you shop with your savely card anywhere in the world visa is accepted .
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

            <span className="text-sm sm:text-base text-gray-800">
              <span className="font-bold">2%</span> Cash back
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-800">
              Secure Shopping <span className="font-bold">With virtual cards</span>
            </span>
          </li>

          <li className="flex space-x-3">
            {/* <!-- Solid Check --> */}
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600 " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1"/>
              <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor"/>
            </svg>
            {/* <!-- End Solid Check --> */}

            <span className="text-sm sm:text-base text-gray-800">
              User Experience Design
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
<div class="hidden lg:block absolute -right-16 bottom-28 " aria-hidden="true">
        <svg class="w-72 h-auto" width="1115" height="636" viewBox="0 0 1115 636" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z" fill="currentColor" class="fill-orange-500"/>
          <path d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z" fill="currentColor" class="fill-cyan-600"/>
          <path d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z" fill="currentColor" class="fill-gray-800 "/>
        </svg>
      </div>

</div>

  )
}

export default CardDiscounts