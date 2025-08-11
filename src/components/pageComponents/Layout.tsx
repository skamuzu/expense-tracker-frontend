import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { CustomSidebar } from "./CustomSidebar"
import { Outlet } from "react-router-dom"
 
export default function Layout() {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main>
        <SidebarTrigger />
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}