import { message } from "antd"
import { useRef, useState } from "react"
import {  useParams } from "react-router-dom"


const PinGate = ({user}) => {

const id = useParams().id
const [pin, setpin] = useState({
    pin1:"",
    pin2:"",
    pin3:"",
    pin4:"",
})



const handlePin = (e) => {
//  setpin(prev => {
//    return{
//     ...prev,
//     pin1:e.target.value
//    }
//  })
const userpin = [pin.pin1, pin.pin2, pin.pin3, pin.pin4].join("")
if (userpin != user.pin) {
   
   return message.error("Incorrect Pin")
}

else{
 window.location.replace(`/dashboard/withdraw/withdrawing/${id}`)
}

}

const pinbox1 = useRef()
const pinbox2 = useRef()
const pinbox3 = useRef()
const pinbox4 = useRef()

  return (
   <div className="">
     <div className="grid mt-40  place-content-center">
      <h3 className="text-center font-medium text-gray-800 mb-4">Please Confirm Your Pin to continue</h3>
      <div className="flex gap-x-2">
        <input ref={pinbox1}
          onChange={(e) =>{
            setpin((prev) => {
              return {
                ...prev,
                pin1: e.target.value,
              };
            })
            pinbox2.current.focus()
            }
          }
          className="w-20 text-center  rounded-2xl"
          maxLength={1}
          type="password"
        />
        <input ref={pinbox2}
          onChange={(e) => {
            setpin((prev) => {
              return {
                ...prev,
                pin2: e.target.value,
              };
              
            })
            pinbox3.current.focus()
        }
          }
          className="w-20 text-center  rounded-2xl"
          maxLength={1}
          type="password"
        />
        <input ref={pinbox3}
          onChange={(e) =>{
            setpin((prev) => {
              return {
                ...prev,
                pin3: e.target.value,
              };
            })
            pinbox4.current.focus()
        }
          }
          className="w-20 text-center  rounded-2xl"
          maxLength={1}
          type="password"
        />
        <input ref={pinbox4}
          onChange={(e) =>
            {setpin((prev) => {
              return {
                ...prev,
                pin4: e.target.value,
              };
            })
            // handlePin()
            }
          }
          className="w-20 text-center  rounded-2xl"
          maxLength={1}
          type="password"
        />
      </div>
      <div className="mt-8">
    <button onClick={() => handlePin()} className=" flex  justify-center  w-full bg-blue-300 rounded-3xl px-4 py-2 text-xl md:text-xl tracking-wide font-semibold disabled:bg-black/70">
      Confirm Pin
   </button>
      </div>
    </div>
   </div>
  );
}

export default PinGate