"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { pollutantData } from "@/lib/data"

function getStatusStyle(status) {
  switch (status) {
    case "Good":
      return { badge: "bg-accent text-accent-foreground", bar: "bg-accent" }
    case "Moderate":
      return { badge: "bg-[var(--warning)] text-foreground", bar: "bg-[var(--warning)]" }
    case "Poor":
      return { badge: "bg-destructive text-destructive-foreground", bar: "bg-destructive" }
    default:
      return { badge: "bg-muted text-muted-foreground", bar: "bg-muted-foreground" }
  }
}

export function PollutantCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {pollutantData.map((p) => {
        const style = getStatusStyle(p.status)
        const percentage = (p.value / p.limit) * 100
        return (
          <Card key={p.name} className="gap-0 py-3">
            <CardContent className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">{p.name}</span>
                <Badge className={`text-[9px] px-1.5 py-0 ${style.badge}`}>
                  {p.status}
                </Badge>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">{p.value}</span>
                <span className="text-[10px] text-muted-foreground">{p.unit}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${style.bar}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
                <span className="text-[9px] text-muted-foreground">
                  Limit: {p.limit} {p.unit}
                </span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
