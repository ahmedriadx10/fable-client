'use server'

import { redirect } from "next/navigation"


const baseUrl=process.env.NEXT_PUBLIC_BASE_URL||"http://localhost:3000"
export const serverMutation=async(path,data,method="POST")=>{


    const res=await fetch(`${baseUrl}${path}`,{
    method:method,
    headers:{
      'Content-Type':'application/json',
    
    },
    body:JSON.stringify(data)
  })



return handleStatusCode(res)



}



const handleStatusCode=(response)=>{

  if(response.status===401){
redirect('/unauthorized')

  } 
  else if(response.status===403){
    redirect('/forbidden')
  }

  return response.json()

}