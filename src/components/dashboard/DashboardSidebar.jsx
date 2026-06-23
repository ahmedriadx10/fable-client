import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = ({user}) => {
  return (
    <div className="h-full">
      <DashboardSidebarContent user={user}/>
    </div>
  );
};

export default DashboardSidebar;