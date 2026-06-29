import { FiBookmark, FiShoppingBag, FiDollarSign } from "react-icons/fi";

const DashboardStats = ({ statsData }) => {
  // Destructuring with safe fallback values to prevent crashes if data is loading/missing
  const { totalBookmarks = 0, totalPurchased = 0, totalAmount = 0 } = statsData || {};

  const cards = [
    {
      id: 1,
      title: "Total Bookmarks",
      value: totalBookmarks,
      icon: <FiBookmark className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
    },
    {
      id: 2,
      title: "Purchased Ebooks",
      value: totalPurchased,
      icon: <FiShoppingBag className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
    },
    {
      id: 3,
      title: "Total Spent",
      value: `$${totalAmount.toFixed(2)}`,
      icon: <FiDollarSign className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md"
        >
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              {card.title}
            </p>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
              {card.value}
            </h3>
          </div>
          <div className={`p-4 rounded-xl ${card.bgColor} flex items-center justify-center`}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;