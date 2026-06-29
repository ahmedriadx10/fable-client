import ManageUsers from "@/components/dashboard/admin-component/ManageUsers";
import { getAllUserByAdmin } from "@/lib/api/AdminAllUserGet";
import { getUserSession } from "@/lib/core/session";

const AdminManageUsersPage = async () => {
  const currentAdmin = await getUserSession();
  const users = await getAllUserByAdmin();
  
  console.log('users data is here by admin:', users);

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* Header with Title & Meta */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          User Operations & Management 👥
        </h1>
        <p className="text-base text-gray-500 max-w-2xl">
          View all registered members, alter platform roles (User, Writer, Admin), or permanently terminate accounts from the central database.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Main Container Card */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">User Ledger</h2>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            Total System Users: {users?.total || 0}
          </span>
        </div>
        
        {/* পাস করা হচ্ছে users, totalUser এবং কারেন্ট লগইন করা অ্যাডমিনের ID */}
<div className="max-h-200 overflow-y-auto scrollbar-thumb-(--color-primary)">
          <ManageUsers 
          users={users?.users} 
          totalUser={users?.total} 
          currentAdminId={currentAdmin?.id} 
        />
</div>
      </section>
    </div>
  );
};

export default AdminManageUsersPage;