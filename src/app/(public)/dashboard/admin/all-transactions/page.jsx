import ManageAllTransactions from "@/components/dashboard/admin-component/ManageAllTransactions";
import { getAllTransactionsByAdmin } from "@/lib/api/AdminAllTransactions";

const AdminTransactionManagePage = async () => {
  const allTransactionsData = await getAllTransactionsByAdmin();

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 space-y-8">
      {/* Header and Descriptive Text */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Financial Ledger & Transactions 💳
        </h1>
        <p className="text-base text-gray-500 max-w-2xl">
          Monitor all platform-wide cash flows. Review system transaction hashes, track cost types, check subscriber/writer activities, and cross-verify overall amounts.
        </p>
      </div>

      <hr className="border-gray-200" />

      {/* Main Table Card Wrapper */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">All Transactions</h2>
          <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full border border-indigo-100">
            Records: {allTransactionsData?.length || 0}
          </span>
        </div>
     <div className="max-h-150 overflow-y-auto scrollbar-thumb-(--color-primary)">
         <ManageAllTransactions transactionsData={allTransactionsData} />
     </div>
      </section>
    </div>
  );
};

export default AdminTransactionManagePage;