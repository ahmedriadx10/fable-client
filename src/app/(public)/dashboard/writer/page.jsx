import WriterDashboardStats from "@/components/dashboard/writer-component/WriterDashboardStats";
import WriterSalesHistory from "@/components/dashboard/writer-component/WriterSalesHistory";
import { getWriterDashboardStats } from "@/lib/api/WriterDashboardStatsData";
import { getWriterSalesHistory } from "@/lib/api/WriterSalesHisotory";
import { getUserSession } from "@/lib/core/session";

const WriterDashboardHome = async () => {
  const user = await getUserSession();
  const writerDashboardStatsData = await getWriterDashboardStats(user?.id);
  const writerSalesHistoryData = await getWriterSalesHistory(user?.id);

  // Server response reference:
  // { "totalPublished": 6, "totalBookmarked": 1, "totalAmount": 59.739999999999995 }

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* Header and Welcome Text */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Fable Creator Studio, {user?.name || "Author"}! ✍️
        </h1>
        <p className="text-base text-gray-500 max-w-2xl">
          Manage your published work, track how many readers bookmarked your stories, and view your complete sales analytics here.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Writer Stats Cards Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Performance Overview</h2>
        <WriterDashboardStats statsData={writerDashboardStatsData} />
      </section>

      {/* Writer Sales History Section */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Book Sales & Revenue</h2>
        <WriterSalesHistory salesData={writerSalesHistoryData} />
      </section>
    </div>
  );
};

export default WriterDashboardHome;