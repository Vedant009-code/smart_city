"use client"

import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { alerts } from "@/lib/data"

const typeConfig = {
  Critical: { icon: AlertTriangle, color: "bg-destructive/10 text-destructive", badgeClass: "bg-destructive text-destructive-foreground" },
  Warning: { icon: AlertCircle, color: "bg-[var(--warning)]/10 text-[var(--warning)]", badgeClass: "bg-[var(--warning)] text-foreground" },
  Info: { icon: Info, color: "bg-primary/10 text-primary", badgeClass: "bg-primary text-primary-foreground" },
}

export function RecentAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[320px] pr-4">
          <div className="flex flex-col gap-3">
            {alerts.slice(0, 6).map((alert) => {
              const config = typeConfig[alert.type]
              const Icon = config.icon
              return (
                <div
                  key={alert.id}
                  className={`flex items-start gap-3 rounded-lg border p-3 ${
                    !alert.read ? "bg-muted/50" : ""
                  }`}
                >
                  <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${config.color}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Badge className={`text-[10px] px-1.5 py-0 ${config.badgeClass}`}>
                        {alert.type}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed">{alert.message}</p>
                  </div>
                  {!alert.read && (
                    <div className="size-2 shrink-0 rounded-full bg-primary mt-1" />
                  )}
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
