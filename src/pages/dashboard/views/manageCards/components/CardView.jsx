import { pattern, savelylogowhite } from "../../../../../assets";
import { FaChevronRight } from "react-icons/fa";

const CardView = ({firstname, lastname, amount, func, from, to, cvv}) => {
  return (
    <>
      <div onClick={func} className="my-4  font-space  rounded-2xl ">
        <div
          className={` drop-shadow-2xl shadow-2xl w-[200px] h-[130px]  p-4  rounded-xl  relative flex items-center border border-white`}
          style={{
            // backgroundImage: `url(${pattern})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1 left-0 right-5 z-40 px-2 pb-1 ">
          {/* <img src={savelylogowhite}  alt="" className="w-16  " /> */}
            <div className="pb-10">
            <span className="text-[8px] text-white font-medium">Call +1 240 608 8080 for enquiries</span>
            </div>
          </div>
          <div className="absolute left-2 top-2 flex items-center z-40">
            <div className=" w-[10px] ">
              {/* <img src={stashlogo} alt="" className='w-full'/> */}
            </div>
          </div>
          {/* CVV */}
          <div className="absolute top-[20%] right-0 left-0 bg-gray-800 py-[1px] px-2 z-50 flex justify-end">
            <p className="text-sm font-semibold tracking-wide text-gray-50">{cvv ? cvv : "CVV"}</p>
          </div>
          
          {/* 3 WHITE BOXES */}
          <div className="absolute top-[38%] mt-1  right-0 left-0 z-50">
            {/* <p className="text-sm font-semibold tracking-wide">CVV</p> */}
            <div className="px-2 flex gap-x-4 justify-center">
              <a  className="bg-white h-2  rounded-lg px-4 py-2  text-white"></a>
              <a  className="bg-white h-2  rounded-lg px-4 py-2   text-white"></a>
              <a  className="bg-white h-2  rounded-lg px-4  py-2  text-white"></a>
              <a  className="bg-white h-2  rounded-lg px-4  py-2  text-white"></a>
            </div>
            <div className="pt-1 px-2.5">
            <p className="text-[6px] font-semibold tracking-wide leading-snug text-white">This card was issued by savely in partenership with meta bank</p>
            </div>
          </div>

          {/* BOTTOM LOGO */}
          <div className="absolute left-2 right-2 bottom-2 z-40 flex  items-center justify-between">
            <img src={savelylogowhite}  alt="" className="w-16  " />
            <div className="flex gap-x-4">
            <div  className="bg-white h-2 w-2  rounded-full   text-white"></div>
            <div  className="bg-white h-2 w-2  rounded-full   text-white"></div>
            <div  className="bg-white h-2 w-2  rounded-full   text-white"></div>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${from} ${to} absolute inset-0 opacity-75 rounded-xl shadow-inner`}></div>
        </div>
      </div>
    </>
  );
}

export default CardView