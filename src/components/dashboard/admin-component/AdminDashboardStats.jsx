import { FiUsers, FiEdit3, FiBookOpen, FiDollarSign } from "react-icons/fi";

const AdminDashboardStats = ({ data }) => {
  const { totalUsers, totalWriters, totalEbookSold, totalSaleAmount } = data;

  const statCards = [
    {
      id: 1,
      title: "TOTAL USERS",
      value: totalUsers.toLocaleString(),
      badge: "+12%",
      badgeColor: "bg-green-50 text-green-600",
      icon: <FiUsers className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-50",
    },
    {
      id: 2,
      title: "TOTAL WRITERS",
      value: totalWriters.toLocaleString(),
      badge: "+5%",
      badgeColor: "bg-green-50 text-green-600",
      icon: <FiEdit3 className="w-5 h-5 text-purple-600" />,
      iconBg: "bg-purple-50",
    },
    {
      id: 3,
      title: "EBOOKS SOLD",
      value: totalEbookSold.toLocaleString(),
      badge: "Lifetime",
      badgeColor: "bg-purple-100 text-purple-700 font-medium",
      icon: <FiBookOpen className="w-5 h-5 text-orange-600" />,
      iconBg: "bg-orange-50",
    },
    {
      id: 4,
      title: "TOTAL REVENUE",
      value: `$${totalSaleAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      badge: "",
      badgeColor: "bg-green-500 w-2 h-2 rounded-full", // গ্রিন ডট
      icon: <FiDollarSign className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card) => (
        <div key={card.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-40">
          <div className="flex justify-between items-center">
            <div className={`p-2.5 rounded-xl ${card.iconBg}`}>
              {card.icon}
            </div>
            {card.badge && (
              <span className={`text-xs px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                {card.badge}
              </span>
            )}
            {!card.badge && <div className={card.badgeColor} />} {/* গ্রিন ডটের জন্য */}
          </div>
          
          <div className="mt-4">
            <p className="text-xs font-semibold text-slate-400 tracking-wider">{card.title}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardStats;