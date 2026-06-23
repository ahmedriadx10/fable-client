import { redirect } from "next/navigation"
import { authClient } from "../auth-client"

export const logoutAccount=async ()=>{

  await authClient.signOut({
    fetchOptions:{
      onSuccess:()=>{
        redirect('/login')
      }
    }
  })

}