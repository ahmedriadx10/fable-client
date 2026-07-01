
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardSidebarMobileMenu from "@/components/dashboard/DashboardSidebarMobileMenu";
import { getUserSession } from "@/lib/core/session";

const DashboardLayout = async({ children }) => {


  const userData=await getUserSession()




  return (
    <section className="flex flex-col lg:flex-row  min-h-screen bg-slate-50/50 text-slate-800">

      <aside className="hidden lg:block w-64 bg-white border-r border-slate-100 fixed inset-y-0 left-0 z-20">
        <DashboardSidebar user={userData}/>
      </aside>
      <DashboardSidebarMobileMenu user={userData}/>

{/* previous code */}
      {/* <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">

        
        <main className="flex-1 p-4 md:p-6  w-full">
          {children}
        </main>
      </div> */}
{/* after solve issue */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen w-full overflow-x-hidden">
  <main className="flex-1 p-4 md:p-6">
    {children}
  </main>
</div>
    </section>
  );
};

export default DashboardLayout;