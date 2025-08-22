import { SidebarProvider} from "@/components/ui/sidebar"
import { CustomSidebar } from "./CustomSidebar"
import { Outlet } from "react-router-dom"
 
export default function Layout() {
  return (
    <div className="flex">
    <SidebarProvider className="rounded-tr-2xl w-1/5">
      <CustomSidebar />
    </SidebarProvider>
      <main className="w-full p-4 bg-gray-100">
        <Outlet/>
      </main>
      </div>
  )
}