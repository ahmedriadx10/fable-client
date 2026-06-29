import Image from "next/image";
import UpdateProfile from "./UpdateProfile";

const ProfileManage = ({ user }) => {
  // ডিফেন্সিভ কোডিং: ইউজার অবজেক্ট না থাকলে নাল রিটার্ন বা ফলব্যাক হ্যান্ডেল করা ভালো
  if (!user) return <div className="text-gray-500">Loading user profile...</div>;

  const { _id, name, email, image, role } = user;

  // কন্ডিশনাল রোল টেক্সট নির্ধারণ (role 'user' হলে 'Reader', অন্যথায় প্রথম অক্ষর বড় হাতের করা হবে)
  const displayRole = role === "user" ? "Reader" : role?.charAt(0).toUpperCase() + role?.slice(1);

  return (
    <div className="flex justify-center items-center w-full  py-12">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-xl shadow-sm p-8 flex flex-col items-center">
        
        {/* Profile Image Wrap */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-md mb-5 bg-gray-50">
          <Image
            src={image || "https://placehold.co/150"} // ইমেজ না থাকলে একটি ফলব্যাক প্লেসহোল্ডার ইমেজ
            alt={name || "User Avatar"}
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{name || "N/A"}</h2>
        <p className="text-sm text-gray-500 mb-3">{email || "N/A"}</p>

        {/* Role Badge */}
        <span className="px-3 py-1 bg-purple-50 text-[#6A1B9A] font-bold text-xs uppercase tracking-wider rounded-md mb-6">
          {displayRole}
        </span>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-100 mb-6" />

        {/* Update Profile Button */}
<UpdateProfile user={user}>
          <span className="">
          Update Profile
        </span>
</UpdateProfile>
      </div>
    </div>
  );
};

export default ProfileManage;