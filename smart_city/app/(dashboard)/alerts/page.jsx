"use client"

import { AlertTriangle, AlertCircle, Info, CheckCircle2, Bell } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { alerts } from "@/lib/data"

const typeConfig = {
  Critical: { icon: AlertTriangle, color: "bg-destructive/10 text-destructive", badgeClass: "bg-destructive text-destructive-foreground" },
  Warning: { icon: AlertCircle, color: "bg-[var(--warning)]/10 text-[var(--warning)]", badgeClass: "bg-[var(--warning)] text-foreground" },
  Info: { icon: Info, color: "bg-primary/10 text-primary", badgeClass: "bg-primary text-primary-foreground" },
}

export default function AlertsPage() {
  const criticalCount = alerts.filter((a) => a.type === "Critical").length
  const warningCount = alerts.filter((a) => a.type === "Warning").length
  const unreadCount = alerts.filter((a) => !a.read).length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-foreground">Alerts & Notifications</h1>
        <p className="text-sm text-muted-foreground">Real-time alert feed and notification history</p>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <Card className="gap-0 py-3">
          <CardContent className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Bell className="size-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Alerts</p>
              <p className="text-lg font-bold text-foreground">{alerts.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="gap-0 py-3">
          <CardContent className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-destructive/10">
              <AlertTriangle className="size-4 text-destructive" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Critical</p>
              <p className="text-lg font-bold text-destructive">{criticalCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="gap-0 py-3">
          <CardContent className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--warning)]/10">
              <AlertCircle className="size-4 text-[var(--warning)]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Warnings</p>
              <p className="text-lg font-bold text-[var(--warning)]">{warningCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="gap-0 py-3">
          <CardContent className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10">
              <CheckCircle2 className="size-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Unread</p>
              <p className="text-lg font-bold text-foreground">{unreadCount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert feed */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">Alert Feed</CardTitle>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Mark All Read
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {alerts.map((alert) => {
              const config = typeConfig[alert.type]
              const Icon = config.icon
              return (
                <div
                  key={alert.id}
                  className={`flex items-start gap-3 rounded-lg border p-4 transition-colors ${
                    !alert.read ? "bg-muted/50 border-primary/20" : ""
                  }`}
                >
                  <div className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${config.color}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={`text-[10px] px-1.5 py-0 ${config.badgeClass}`}>
                        {alert.type}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">{alert.time}</span>
                      {!alert.read && (
                        <span className="size-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{alert.message}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 text-xs shrink-0">
                    Dismiss
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
