"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Trash2,
  Wind,
  BrainCircuit,
  Workflow,
  Bell,
  FileText,
  Settings,
  Shield,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { TopNavbar } from "@/components/top-navbar"

const navItems = [
  { title: "Dashboard Overview", href: "/", icon: LayoutDashboard },
  { title: "Waste Management", href: "/waste", icon: Trash2 },
  { title: "Air Pollution", href: "/pollution", icon: Wind },
  { title: "AI Analytics", href: "/analytics", icon: BrainCircuit },
  { title: "n8n Automation", href: "/automation", icon: Workflow },
  { title: "Alerts & Notifications", href: "/alerts", icon: Bell },
  { title: "Reports", href: "/reports", icon: FileText },
  { title: "Settings", href: "/settings", icon: Settings },
]

export function DashboardShell({ children }) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="p-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary">
              <Shield className="size-4 text-sidebar-primary-foreground" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold text-sidebar-foreground">Smart City AI</span>
              <span className="text-xs text-sidebar-foreground/60">Command Center</span>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-sidebar-foreground/40 uppercase tracking-wider text-[10px]">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="group-data-[collapsible=icon]:hidden">
          <div className="rounded-lg bg-sidebar-accent/50 p-3">
            <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
              <div className="size-2 rounded-full bg-accent animate-pulse" />
              <span>System Online</span>
            </div>
            <p className="mt-1 text-[10px] text-sidebar-foreground/40">All services operational</p>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <TopNavbar />
        <div className="flex flex-1 flex-col overflow-auto">
          <div className="flex-1 p-4 md:p-6">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
