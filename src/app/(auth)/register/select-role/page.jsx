import RoleSelection from "@/components/auth/RoleSelection";

const SelectRolePage = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] flex flex-col justify-between p-6 md:p-12">
      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto my-auto">
        <RoleSelection />
      </div>

      {/* ফুটার ফিচার বার (ছবির নিচের অংশের মতো) */}
      <div className="border-t border-slate-100 pt-8 mt-12 max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* ফিচার ১ */}
          <div className="flex gap-3">
            <span className="text-[#6322d6] text-xl mt-0.5">🛡️</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">Verified Content</h4>
              <p className="text-xs text-slate-500 mt-0.5">Every story is reviewed for quality and authenticity.</p>
            </div>
          </div>

          {/* ফিচার ২ */}
          <div className="flex gap-3">
            <span className="text-[#6322d6] text-xl mt-0.5">📖</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">Premium Experience</h4>
              <p className="text-xs text-slate-500 mt-0.5">Distraction-free reading and writing environment.</p>
            </div>
          </div>

          {/* ফিচার ৩ */}
          <div className="flex gap-3">
            <span className="text-[#6322d6] text-xl mt-0.5">👥</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">Creative Community</h4>
              <p className="text-xs text-slate-500 mt-0.5">Join thousands of curators and bibliophiles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRolePage;