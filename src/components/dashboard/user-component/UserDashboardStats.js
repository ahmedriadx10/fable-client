import { protectedFetch } from "@/lib/core/server"

export const userDashboardStatsGet=async(userId)=>{

  return protectedFetch(`/dashboard-stats/${userId}`)

}