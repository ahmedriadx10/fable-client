import ProfileManage from "@/components/dashboard/user-component/ProfileManage";
import { getUserSession } from "@/lib/core/session";

const UserProfilePage = async () => {
  const user = await getUserSession();

  return (
    <div className="p-6 ">
      {/* Header section from the design */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-950 mb-2">User Profile</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Manage your editorial identity and account preferences across the Fable ecosystem.
        </p>
      </div>

      {/* Profile Card Component */}
      <ProfileManage user={user} />
    </div>
  );
};

export default UserProfilePage;