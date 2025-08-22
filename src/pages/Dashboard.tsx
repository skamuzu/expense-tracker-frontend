import DashboardCard from "@/components/pageComponents/DashboardCard"
import { BanknoteArrowDown } from "lucide-react"
import { WalletMinimal } from "lucide-react"
import { CreditCard } from "lucide-react"
import { HandCoins } from "lucide-react"

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
    <DashboardCard icon={WalletMinimal} category="Total Balance" value="79,100" style="bg-purple-700"/>
    <DashboardCard icon={CreditCard} category="Total Income" value="86,200" style="bg-orange-500"/>
    <DashboardCard icon={HandCoins} category="Total Expenses" value="7,100" style="bg-red-500"/>
    </div>
    </>
  )
}

export default Dashboard