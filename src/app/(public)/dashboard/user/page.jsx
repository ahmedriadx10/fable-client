import DashboardStats from "@/components/dashboard/user-component/DashboardStats";
import UserPurchaseHistory from "@/components/dashboard/user-component/PurchaseHistory";
import { userDashboardStatsGet } from "@/components/dashboard/user-component/UserDashboardStats";
import { getUserPurchaseData } from "@/lib/api/PurchaseData";
import { getUserSession } from "@/lib/core/session";

const UserDashboardHome = async () => {
  const user = await getUserSession();

  const dashboardStatsData = await userDashboardStatsGet(user?.id);
  const userPurchaseData = await getUserPurchaseData(user?.id);

  // Dashboard stats data response format:
  // { totalBookmarks: 1, totalPurchased: 1, totalAmount: 19.99 }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* Header and Introduction */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Welcome back, {user?.name || "Reader"}! 👋
        </h1>
        <p className="text-base text-gray-500 max-w-2xl">
          Here is a quick overview of your Fable account. Track your saved bookmarks, purchased ebooks, and overall spending at a glance.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Stats Cards Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Account Overview</h2>
        <DashboardStats statsData={dashboardStatsData} />
      </section>

      {/* Purchase History Section */}
      <section className="bg-white rounded-2xl border max-h-125 overflow-y-scroll scrollbar-thumb-(--color-primary) border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Purchases</h2>
        <UserPurchaseHistory purchaseData={userPurchaseData} />
      </section>
    </div>
  );
};

export default UserDashboardHome;