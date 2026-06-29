import { protectedFetch } from "../core/server"

export const getWriterSalesHistory=async(writerId)=>{

  return protectedFetch(`/sales-history/${writerId}`)
}