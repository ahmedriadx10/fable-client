import { protectedFetch } from "../core/server"

export const getUserPurchaseData=async(userId)=>{


  return protectedFetch(`/purchase/${userId}`)
}