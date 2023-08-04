
const Browsermockup = () => {

    // DEVICE IMAGE SIZE img/1618x1010

  return (
    <figure className=" relative z-[1]  h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] ">
      <div className="relative flex items-center  bg-slate-800 rounded-t-lg py-2 px-24 ">
        <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
          <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
          <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
          <span className="w-2 h-2 bg-gray-600 rounded-full "></span>
        </div>
        <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]  ">
          savelybank.com
        </div>
      </div>

      <div className="bg-slate-800 rounded-b-lg">
        <img
          className="min-w-full h-auto rounded-b-lg"
          src="https://cdn.sanity.io/images/noj3nhym/production/c17a0b64326a4191b2d19163ed5ae2b8a0544d73-1606x1014.jpg"
          // src="https://placehold.co/1618x1010/EEE/31343C"
          
          alt="Image Description"
        />
      </div>
    </figure>
  );
}

export default Browsermockup