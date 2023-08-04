import Browsermockup from "./Browsermockup";

const SupportedCountries = () => {

const countries = [
    {
     name:"USD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/49fdcb36078976c218c94765a1e86128fb51136f-512x512.png"
    },
    {
     name:"GBP",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/deda43271d3aa92057ecb5cb1906e374a83ef1b1-512x512.png"
    },
    {
     name:"EUR",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/d7cef4cdd036725ef942d5fb510e620cedfca8b7-512x512.png"
    },
    {
     name:"CAD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/ceb5e653f8bbcb23cfcfc29326bb0db6cb19fb98-512x512.png"
    },
    {
     name:"CHF",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/e925c44f6ed11a212e855f8694a538ef46374d9c-512x512.png"
    },
    {
     name:"CZK",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/ee9ac38351883bc5b3522618efcb446c50bd1e20-512x512.png"
    },
    {
     name:"HKD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/3c0508a3b99bfc83d2dccef96c162e34c9fc1ce0-512x512.png"
    },
    {
     name:"AED",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/6977edce1285a02a77ad68d8180e6c48e83623b9-512x512.png"
    },
    {
     name:"AUD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/2d291e9c84db1fb03da8fa8636f149a904e0b068-512x512.png"
    },
    {
     name:"QAR",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/ab7c2d8fd93fa4d5433c20c232e8ae72217746f1-512x512.png"
    },
    {
     name:"TND",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/f35ff298e92cf94458b4331fbaf8c2b302517037-512x512.png"
    },
    {
     name:"NOK",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/77a16c4b7816d93d14edf3f92fc2dd05ef7a55f7-512x512.png"
    },
    {
     name:"JPY",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/585957de8a5c53f65aefb5ccfe68950766b4641a-512x512.png"
    },
    {
     name:"SGD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/5200f2add6890d15a3a30649faf7be856e0c86b6-512x512.png"
    },
    {
     name:"TRY",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/b92a00b02d8fd33de2f21d0c485654ffd6cd7149-512x512.png"
    },
    {
     name:"KWD",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/7c72dcc9ace9c1c95b2baa8902787347320f557b-512x512.png"
    },
    {
     name:"MXN",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/c5799b7617185fe4fa7a7527748f4debe979731f-512x512.png"
    },
    {
     name:"ILS",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/98a40f416298ffd30913d6b33104b71757890639-512x512.png"
    },
    {
     name:"DKK",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/e15ccc719aa04c55603989dbecbbd44d6582807b-512x512.png"
    },
    {
     name:"BWP",
     flag:"https://cdn.sanity.io/images/noj3nhym/production/4cf49cce2fc23dac27d226df8e13c78cbca8e466-512x512.png"
    },
]

const Country = ({currency, flag}) => {
    return(
        <a
          className="group w-20 mx-auto flex flex-col bg-white border shadow-2xl rounded-xl hover:shadow-md transition  "
        >
          <div className="p-2 ">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <img
                  className="h-[2.375rem] w-[2.375rem] rounded-full"
                  src={flag}
                  alt="Image Description"
                />
              </div>
              <p className="text-xs">{currency}</p>
            </div>
          </div>
        </a>
    )
}

  return (
    <div className="relative">
      <div className="flex items-center justify-center divide-x-2 divide-slate-800 pb-8">
        <p className="text-6xl text-center mr-1 font-black sm:text-7xl text-gray-800">
          75{" "}
        </p>

        <div className="ml-2">
          <p className="text-lg font-bold ml-2 text-gray-800">
            Currencies
            <br /> Supported
          </p>
        </div>
      </div>
      <div className="flex justify-center px-2">
        <p className="text-center lg:text-xl">
          Savely is proud to present a variety of Multi-currency IBAN accounts
          <br className="hidden sm:block" /> that support hierarchical client structures in 75 different
          currencies
        </p>
      </div>
      <div className="px-2 ">
      <div className="grid py-4  grid-cols-3 sm:grid-cols-5  items-center justify-center   sm:mx-auto sm:gap-x-4 ">
        {/* // <!-- Card --> */}
        {
        countries.map((country, index) => (
       <div key={index} className="sm:col-span-1 mt-4">
                <Country flag={country.flag} currency={country.name}/>
       </div>
            ))
        }
        {/* <!-- End Card --> */}
      </div>
      {/* <p className="text-3xl text-center font-semibold my-8 sm:text-4xl text-gray-800">
        And Many More
      </p> */}
      </div>
      <div className=" absolute  bottom-0  inset-x-0 -z-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2dd4bf" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,144C672,149,768,139,864,149.3C960,160,1056,192,1152,176C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </div>
  );
}

export default SupportedCountries