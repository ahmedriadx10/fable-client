"use client"; // Recharts ইন্টারঅ্যাক্টিভিটির জন্য ক্লায়েন্ট কম্পোনেন্ট প্রয়োজন

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell 
} from "recharts";

// ডোনাট চার্টের জন্য রঙের প্যালেট (ইমেজের মতো বেগুনি শেডস)
const COLORS = ["#6366f1", "#8b5cf6", "#a855f7", "#c084fc", "#e9d5ff"];

const AdminDashboardAnalytics = ({ monthlySales, popularGenres }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* 📈 বাম পাশের লাইন/এরিয়া চার্ট (Monthly Sales Performance) */}
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800">Monthly Sales Performance</h2>
            <p className="text-xs text-slate-400 mt-0.5">Revenue trends across the last 6 fiscal months.</p>
          </div>
          <span className="text-xs bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg font-medium cursor-pointer flex items-center gap-1">
            Last 6 Months <span className="text-[10px]">▼</span>
          </span>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" h="100%">
            <AreaChart data={monthlySales} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                {/* চার্টের নিচের বেগুনি গ্রেডিয়েন্ট এফেক্ট */}
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
                formatter={(value) => [`$${value}`, "Sales"]}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#8b5cf6" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorSales)" 
                activeDot={{ r: 6, strokeWidth: 0, fill: "#6d28d9" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🍩 ডান পাশের ডোনাট চার্ট (Popular Genres) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Popular Genres</h2>
          <p className="text-xs text-slate-400 mt-0.5">Ebook distribution by category.</p>
        </div>

        {/* ডোনাট চার্ট রেন্ডারিং */}
        <div className="w-full h-52 flex justify-center items-center my-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={popularGenres}
                cx="50%"
                cy="50%"
                innerRadius={60}  // ডোনাট শেপ দেওয়ার জন্য ইনার রেডিয়াস
                outerRadius={85}
                paddingAngle={2}
                dataKey="value"
              >
                {popularGenres.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                  contentStyle={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0" }}
              formatter={(value) => [value, "Books Sold"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* কাস্টম লিজেন্ড বা নিচে জেনরা লিস্ট (হুবহু ইমেজের লেআউট) */}
        <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
          {popularGenres.map((item, index) => (
            <div key={item.genre} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-3 h-3 rounded-full shrink-0" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }} 
                />
                <span className="text-slate-600 font-medium truncate max-w-35">
                  {item.genre}
                </span>
              </div>
              <span className="font-bold text-slate-800">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboardAnalytics;