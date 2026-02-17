"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, TreePine, AlertTriangle, BarChart3, Leaf, Home, Shield, Map as MapIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { UserButton, useUser } from "@clerk/nextjs"
import { VintageLogo } from "@/components/vintage-logo"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Trees", href: "/trees", icon: TreePine },
  { name: "Civic Issues", href: "/issues", icon: AlertTriangle },
  { name: "Impact", href: "/impact", icon: BarChart3 },
  { name: "Map", href: "/map", icon: MapIcon },
  { name: "Admin", href: "/admin", icon: Shield },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-[#2d5016] bg-[#1a3a1a] lg:flex">
      {/* Logo */}
      <div className="flex h-32 items-center justify-center border-b border-[#2d5016] py-4 bg-[#1a3a1a]">
        <VintageLogo width={60} height={90} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-[#d4af37] text-[#1a3a1a] shadow-lg scale-105"
                  : "text-[#e8e6d9] hover:bg-[#2d5016] hover:text-white hover:scale-102"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 transition-transform duration-200",
                isActive && "scale-110"
              )} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer / User Profile */}
      <div className="border-t border-[#2d5016] p-4">
        <div className="flex items-center gap-3 rounded-lg bg-[#2d5016]/50 p-3 transition-all duration-200 hover:bg-[#2d5016]">
          <UserButton afterSignOutUrl="/" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{user?.fullName || "User"}</span>
            <span className="text-xs text-[#e8e6d9]">{user?.primaryEmailAddress?.emailAddress}</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
