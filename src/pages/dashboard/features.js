import { message } from "antd";
import { client } from "../../lib/client";
import { useState, useEffect } from "react";

export function useFetchUser(params) { 
const [user, setuser] = useState(null)

    async function FetchUser(params) { 

        let id = localStorage.getItem("cookie")
        const query = `*[_type == "users" && _id == "${id}"]`
        const user = await client.fetch(query).then(res => res)
        console.log(user)
        setuser(user[0])
       }
 
       useEffect(() => {
        FetchUser()
         return () => {
           console.log("fetched")
         }
       }, [])

       if (!user) {
        return null
       }
       
    return user
}

export async function Addbeneficiary(newone, func) {


    const beneficiary = {
     firstname:newone.firstname,
     lastname:newone.lastname,
     accountnumber:newone.accountnumber,
     routingnumber:newone.routingnumber,
     bankname:newone.bankname
    }

    // if (!beneficiary.firstname || !!beneficiary.lastname || !!beneficiary.accountnumber || !!beneficiary.routingnumber ||!!beneficiary.bankname) {
    //     return message.error("Please Fill in all required info.")
    // }

    const cookie = localStorage.getItem("cookie")
    await client.patch(cookie)
    .setIfMissing({beneficiaries: []})
    .insert('after', 'beneficiaries[-1]', [beneficiary])
    .commit({
        autoGenerateArrayKeys: true,
    })
    .then(res => {
        message.success("Added Beneficiary")
        func()}
        )


}

export async function createUser(user) {
    client.create(user).then(res => {
        localStorage.setItem("cookie", res._id)
        window.location.replace(`/createpin/${res._id}`)
    })
    // window.location.replace(`/createpin/${8}`)
}

export async function updatepin(id, pin) {
    client.patch(id)
    .set({pin:pin})
    .commit({
        autoGenerateArrayKeys:true
    }).then(res => {
        console.log(res)
        window.location.replace("/dashboard")
    })
}

export async function LogOut(params) {
    window.location.replace("/")
}