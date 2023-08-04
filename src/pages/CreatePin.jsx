import { useRef, useState } from "react"
import {  useParams } from "react-router-dom"
import { message } from "antd"
import { updatepin } from "./dashboard/features"


const CreatePin = ({user}) => {
const [welcome, setwelcome] = useState("")
const firstname = localStorage.getItem("firstname")
const [pin, setpin] = useState({
    pin1:"",
    pin2:"",
    pin3:"",
    pin4:"",
})

const id = useParams().id



const handlePin = (e) => {

if (!pin.pin1) {
  return message.error("Passcode must be 4 digits")
}

const userpin = [pin.pin1, pin.pin2, pin.pin3, pin.pin4].join("")
if (!userpin) {
   
   return message.error("Please Choose Passcode")
}

else{
  updatepin(id,userpin)
//  window.location.replace(`/dashboard/withdraw/withdrawing/${id}`)
}

}

const pinbox1 = useRef()
const pinbox2 = useRef()
const pinbox3 = useRef()
const pinbox4 = useRef()

  return (
   <div className="">
     <div className="grid mt-40  place-content-center">
       
      <p className="text-center font-medium text-gray-800 mb-2 text-xl sm:text-2xl">Hi <span className=" first-letter:uppercase">{firstname}</span>
      </p>
      <h3 className="text-center font-medium text-gray-800 mb-4">Setup your 4 digit Passcode</h3>
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

      <div className="mt-2 text-center">
        <span className="text-gray-700 text-xs">
          Hint: Passcode can include alphabets
        </span>
      </div>
    </div>
   </div>
  );
}

export default CreatePin