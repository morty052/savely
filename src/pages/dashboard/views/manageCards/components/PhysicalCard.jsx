import { pattern, physicalLogo, masterlogo } from "../../../../../assets";
import { FaChevronRight } from "react-icons/fa";


const PhysicalCard = ({firstname, lastname, amount, func, number, issued, expires}) => {
  const str1 = number?.slice(0,4)
  const str2 = number?.slice(4,8)
  const str3 = number?.slice(8,12)
  const str4 = number?.slice(12,16)

  const parsed = [str1, str2, str3, str4].join(" ")
    return (
        <>
          <div onClick={func} className="my-4  font-space  rounded-2xl ">
            <div
              className={` cursor-pointer drop-shadow-2xl shadow-2xl border border-gray-50 w-[340px] h-[200px] xxs:w-[calc(100vw-20px)] ss:max-w-[370px] xxs:h-[230px] sm:min-w-[350px] sm:min-h-[200px]  2xl:min-w-[400px]    p-4  rounded-xl  relative flex items-center `}
              style={{
                backgroundImage: `url(${pattern})`,
                backgroundSize: "cover",
              }}
            >

              {/* MASTERCARD LOGO */}
              <div className="absolute -top-3  left-2 z-40">
              <img src={masterlogo}  alt="" className="w-16" />
                {/* <h3 className="text-lg text-white font-black ">Savely</h3> */}
              </div>

              {/* CARD LOGO */}
              <div className="absolute top-1  right-5 z-40">
              <img src={physicalLogo}  alt="" className="w-36  " />
                {/* <h3 className="text-lg text-white font-black ">Savely</h3> */}
              </div>

              {/* CARD NUMBER */}
              <div className="px-4 z-40">
                {/* <p className="text-3xl text-white font-medium">{`${"$ "}${amount?.toLocaleString(
                  "en-us",
                  "currency"
                )}`}</p> */}
                <p className="text-xl text-white font-medium">{number ? parsed : "XXXX XXXXX XXXX XXX"}</p>
              </div>
               
               {/* CARDHOLDER NAME */}
              <div className="absolute bottom-4 left-5 z-40  ">
                <p className="text-white text-sm uppercase font-medium truncate  max-w-[35ch] leading-snug ">{`${firstname} ${lastname}`}</p>
              </div>

              <div className="absolute left-2 top-2 flex items-center z-40">
                <div className=" w-[130px] ">
                  {/* <img src={stashlogo} alt="" className='w-full'/> */}
                </div>
              </div>

              {/* CHEVRON ICON */}
              <div className="absolute top-[45%] right-5 z-50">
                <FaChevronRight style={{ color: "#ffffff", fontSize: "20px" }} />
              </div>

              {/* ISSUE AND EXPIRY */}
              <div className="absolute right-10 bottom-14 z-40 flex w-fit gap-x-4">
                <p className="text-[10px] font-medium text-white">
                  Issued <br />
                  {issued}
                </p>
                <p className="font-medium text-[10px] text-white">
                  Expires <br />
                  {expires}
                </p>
              </div>

              {/* INSURANCE TEXT */}
              <div className="absolute left-5 bottom-0 z-40">
                <span className="text-[6px] text-white">
                  SAVELY STASH<sup>®</sup> FDIC INSURED
                </span>
              </div>

              {/* BACKGROUND GRADIENT */}
              <div className="bg-gradient-to-r from-teal-300 to-teal-600 absolute inset-0 opacity-75 rounded-xl shadow-inner  "></div>
              

            </div>
          </div>
        </>
      );
}

export default PhysicalCard