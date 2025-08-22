import {
  BanknoteArrowDown,
  LayoutDashboard,
  Wallet,
  LogOut,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Income",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Expenses",
    url: "#",
    icon: BanknoteArrowDown,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function CustomSidebar() {
  return (
    <Sidebar className="p-3 border-0 ">
      <SidebarHeader className="font-bold text-lg mb-4 pl-4">
        Expense Tracker
      </SidebarHeader>
      <div className="flex justify-center items-center flex-col mb-6 gap-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-purple-200 flex items-center justify-center">
          <User className="w-10 h-10 text-violet-600" />
        </div>
        <h2 className="font-bold">Mike Williams</h2>
      </div>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <SidebarMenuItem key={item.title} className="my-0.5">
              <SidebarMenuButton
                asChild
                className="font-bold py-5 px-4 hover:bg-purple-600 hover:text-white"
              >
                <Link to={item.url} className="flex items-center text-lg">
                  <Icon style={{ 
    width: '20px', 
    height: '20px' 
  }} />
                  <span className="ml-2 text-md">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </Sidebar>
  );
}
