import AdminDashboardAnalytics from "@/components/dashboard/admin-component/AdminDashboardAnalytics";
import AdminDashboardStats from "@/components/dashboard/admin-component/AdminDashboardStats";
import { getAdminDashboardAnalyticsData } from "@/lib/api/AdminDasboardAnalytics";

const AdminDashboardHome = async () => {
  const adminAnalyticsData = await getAdminDashboardAnalyticsData();

  // ব্যাকএন্ড ফেল করলে বা ডেটা না থাকলে সেফটি হ্যান্ডেলিং
  const analyticsData = adminAnalyticsData?.success ? adminAnalyticsData : {
    totalUsers: 0,
    totalWriters: 0,
    totalEbookSold: 0,
    totalSaleAmount: 0,
    monthlySales: [],
    popularGenres: []
  };

  return (
    <section className="p-6  min-h-screen space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Analytics Overview</h1>
        <p className="text-sm text-slate-500 mt-1">Real-time performance tracking for Fable's publishing ecosystem.</p>
      </div>

      {/* উপরের স্ট্যাটস কার্ডগুলো */}
      <AdminDashboardStats data={analyticsData} />

      {/* নিচের চার্ট অ্যানালিটিক্স */}
      <AdminDashboardAnalytics 
        monthlySales={analyticsData.monthlySales} 
        popularGenres={analyticsData.popularGenres} 
      />
    </section>
  );
};

export default AdminDashboardHome;