import { MessageTabs, Message } from "./components"
import { useState} from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { client } from "../../../../lib/client";
import { Empty } from "antd";


const NotificationCentre = ({user}) => {
  
    const {notifications} = user ? user : []
    

    const messages = [
        {
            _id:"1",
            title:"First message",
            snippet:" Hi There this is the first message ooooooo very long one oooooo",
            time:"9 days ago",
            read:false
        },
        {
            _id:"2",
            title:"Second message",
            snippet:" Hi There this is the first message ooooooo very long one oooooo",
            time:"12 days ago",
            read:false
        },
        {
            _id:"3",
            title:"third message",
            snippet:" Hi There this is the first message ooooooo very long one oooooo",
            time:"3 hours ago",
            read:true
        },
        {
            _id:"4",
            title:"fourth message",
            snippet:" Hi There this is the first message ooooooo very long one oooooo",
            time:"4 days ago",
            read:true
        },
        {
            _id:"5",
            title:"fifth message",
            snippet:" Hi There this is the first message ooooooo very long one oooooo",
            time:"10 mins ago",
            read:true
        },
    ]

    const [mobileview, setmobileview] = useState(null)
    const [activeMessage, setactiveMessage] = useState(notifications?.[0])
    const [read, setread] = useState([])
    
    const readmessageskey = localStorage.getItem("read")
    const readmessages =  readmessageskey ? JSON.parse(readmessageskey) : []

    
    const handleMessage = (m) => {
          setactiveMessage(m)
          setmobileview(m)
          if (readmessages.includes(m._key)) {
            return
          }

          // ADD CLICKED MESSAGE TO READ LIST
          read.push(m._key)
          localStorage.setItem("read",JSON.stringify([...read]))
          
          // FIND READ MESSAGES
         const updatedReadmessages = notifications.map((notification)=>{
          if (read.includes(notification._key)) {
            return{
              ...notification,
              read:true
            }
          }
          return notification
         })
          console.log(updatedReadmessages)

          // UPDATE MESSAGE TO READ 
          const cookie = localStorage.getItem("cookie")
          client.patch(`${cookie}`)
          .set({notifications:updatedReadmessages})
          .commit({autoGenerateArrayKeys:true})
          .then((res) => console.log(res))
       
    }

    const AllMessages = () => {

      if (!notifications) {
        return <Empty description="No Notifications"/>
      }
      return (
        <>
          <div className="divide-y">
          {notifications?.map((message, index) => (
            <Message 
            key={index}
            title={message.title}
            snippet={message.message}
            unread={!message.read && !readmessages.includes(message._key)}
            func={() => handleMessage(message)}
            setmobile={() => handleMessage(message)}
             />
          ))}
          </div>
        </>
      );
    };

    const UnreadMessages = () => {
         
        const unread = !notifications ? [] : notifications.filter((message)=>{
            return !message.read == true
        })

        if (unread.length < 1) {
          return <Empty description="No Notifications"/>
        }
          return (
            <div className="divide-y">
              {
                   unread.map((message, index) => (
                    <Message 
                    key={index}
                    title={message.title}
                    snippet={message.snippet}
                    unread={!message.read}
                    func={() => handleMessage(message)}
                     />
                  ))
              }
            </div>
          );
    }

    const TrashedMessages = () => {
        return(
            <>
            Trashed Messages
            </>
        )
    }

    

  return (
    <div className="pt-4">
         <div className="grid px-2 sm:grid-cols-12 sm:h-screen  ">

           {/* MOBILE SCREEN */}
         <div className="sm:hidden ">
            {
          !mobileview ?  
            <MessageTabs 
            allmessages={<AllMessages/>}
            unread={<UnreadMessages/>}
            trash={<TrashedMessages/>}
            />
            :
               
            // MOBILE MESSAGE VIEW
            <div className="sm:hidden py-2 ">
            {/* MESSAGES HEADER */}
            <div className="flex justify-between items-center pr-6 pl-2 py-2 rounded-lg bg-gray-200/50 border shadow">
            
            {/* MESSAGE TITLE */}
            <div className="flex flex-col ">
            <span className="text-sm font-medium">{activeMessage?.title}</span>
            <span className="text-xs text-gray-600">{activeMessage?.time}</span>
            </div>

            {/* MESSAGE ACTIONS */}
            <div className="">
            <FaTrash className="text-sm text-rose-600"/>
            </div>

            </div>
             
             {/* MESSAGE BODY */}
             <div className="py-4 px-1">
             <p>{activeMessage?.message}</p>
             </div>

             <div onClick={()=> setmobileview("")} className="mt-12 flex gap-x-2 items-center w-fit">
                <FaArrowLeft/>
                 <span>Back to notifications</span>
             </div>
            </div>
            }
         </div>



        {/* LARGE SCREEN LEFT SIDE */}
        <div className="hidden sm:block sm:col-span-6 ">
            <MessageTabs 
            allmessages={<AllMessages/>}
            unread={<UnreadMessages/>}
            trash={<TrashedMessages/>}
            />
        </div>

        {/* MESSAGE PANEL */}
        <div className="hidden border-l sm:block sm:col-span-6 pl-4 py-2 ">
            {
              activeMessage ? 
              <>
              {/* MESSAGES HEADER */}
            <div className="flex justify-between items-center pr-6 pl-2 py-2 rounded-lg bg-gray-200/50 border shadow">
            
            {/* MESSAGE TITLE */}
            <div className="flex flex-col ">
            <span className="text-sm font-medium">{activeMessage?.title}</span>
            <span className="text-xs text-gray-600">{activeMessage?.time}</span>
            </div>

            {/* MESSAGE ACTIONS */}
            <div className="">
            <FaTrash className="text-sm text-rose-600"/>
            </div>

            </div>
             
             {/* MESSAGE BODY */}
             <div className="py-4 px-1">
             <p>{activeMessage?.message}</p>
             </div>
              </>
              :
              ""
            }
        </div>
    </div>
    </div>
  )
}

export default NotificationCentre