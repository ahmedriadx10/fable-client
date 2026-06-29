import { protectedFetch } from "../core/server"

export const getWriterDashboardStats=async(writerId)=>{

  return protectedFetch(`/dashboard-writer-stats/${writerId}`)

}