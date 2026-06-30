import { protectedFetch } from '@/lib/core/server';
export const getAdminDashboardAnalyticsData=async()=>{

return protectedFetch('/analytics/dashboard-admin')





}