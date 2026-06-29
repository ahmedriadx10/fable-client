import ManageEbooks from "@/components/dashboard/admin-component/ManageEbooks";
import { getAllEbooksData } from "@/lib/api/AdminEbooksData";

const AdminManageAllEbook = async () => {
  const allEbooksData = await getAllEbooksData();

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* Header and Introduction */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Manage All Ebooks 📚
        </h1>
        <p className="text-base text-gray-500 max-w-2xl">
          Review, publish, unpublish, or permanently remove ebooks across the Fable platform. Track active statuses and control system-wide content availability.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Table Section Card */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Ebook Directory</h2>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Total Ebooks: {allEbooksData?.length || 0}
          </span>
        </div>
        <ManageEbooks ebooksData={allEbooksData} />
      </section>
    </div>
  );
};

export default AdminManageAllEbook;