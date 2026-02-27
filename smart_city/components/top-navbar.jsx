"use client"

import * as React from "react"
import { Bell, MapPin, User } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

function LiveClock() {
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="tabular-nums text-sm font-medium text-foreground">
      {time || "--:--:-- --"}
    </span>
  )
}

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-card px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-5" />
      <div className="flex items-center gap-2">
        <MapPin className="size-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Metro City</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <LiveClock />
        <Separator orientation="vertical" className="h-5" />
        <Button variant="ghost" size="icon" className="relative size-8">
          <Bell className="size-4 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            3
          </span>
          <span className="sr-only">Notifications</span>
        </Button>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary">
            <User className="size-4 text-primary-foreground" />
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-xs font-semibold text-foreground">Admin</span>
            <span className="text-[10px] text-muted-foreground">System Administrator</span>
          </div>
        </div>
      </div>
    </header>
  )
}
