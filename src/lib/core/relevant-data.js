import { 
  FiGrid,        
  FiBookOpen,    
  FiBookmark,    
  FiUser,       
  FiPlusCircle, 
  FiDollarSign,  
  FiUsers       
} from "react-icons/fi";
export const roleBasedDashboardLink={

user:'/dashboard/user',
writer:'/dashboard/writer',
admin:'/dashboard/admin'

}




export const roleBasedDashboardNavigationLinks = {
  user: [
    { name: "Dashboard Home", href: "/dashboard/user", icon: FiGrid },
    { name: "Purchased Ebooks", href: "/dashboard/user/purchased-ebooks", icon: FiBookOpen },
    { name: "Bookmark", href: "/dashboard/user/my-bookmark", icon: FiBookmark },
    { name: "Profile", href: "/dashboard/user/profile", icon: FiUser },
  ],
  writer: [
    { name: "Dashboard Home", href: "/dashboard/writer", icon: FiGrid },
    { name: "Add Ebook", href: "/dashboard/writer/add-ebook", icon: FiPlusCircle },
    { name: "Bookmark", href: "/dashboard/writer/bookmark", icon: FiBookmark },
    { name: "Manage Ebook", href: "/dashboard/writer/manage-ebooks", icon: FiDollarSign },
  ],
  admin: [
    { name: "Dashboard Home", href: "/dashboard/admin", icon: FiGrid },
    { name: "Manage Ebooks", href: "/dashboard/admin/manage-all-ebooks", icon: FiBookOpen },
    { name: "All Transactions", href: "/dashboard/admin/all-transactions", icon: FiDollarSign },
    { name: "Manage Users", href: "/dashboard/admin/manage-users", icon: FiUsers },
  ]
};