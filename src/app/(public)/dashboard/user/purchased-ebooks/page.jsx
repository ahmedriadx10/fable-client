import PurchaseManage from "@/components/dashboard/user-component/PurchaseManage";
import { getUserPurchaseData } from "@/lib/api/PurchaseData";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";
import { HiOutlineBookOpen } from "react-icons/hi"; // একটি সুন্দর আইকন

const PurchaseEbookPage = async () => {
  const user = await getUserSession();
  const userPurchaseData = (await getUserPurchaseData(user?.id)) || [];

  // যদি কোনো পারচেজ ডেটা না থাকে
  if (userPurchaseData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center bg-white rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto my-10">
        <div className="p-4 bg-purple-50 rounded-full text-purple-600 mb-4">
          <HiOutlineBookOpen className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">No Purchased Ebooks Found</h2>
        <p className="text-gray-500 mb-6 max-w-sm">
          Welcome to your personal library! It looks like you haven't acquired any stories yet.
        </p>
        <Link
          href="/browse-ebooks"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Browse Ebooks
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto lg:mx-0">
      {/* Header section identical to the design image */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchased Ebooks</h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-3xl">
          Welcome to your personal library of acquired stories. Here you can find all the titles you've purchased and dive back into your favorite worlds at any time.
        </p>
      </div>
      
      <PurchaseManage purchaseData={userPurchaseData} />
    </div>
  );
};

export default PurchaseEbookPage;