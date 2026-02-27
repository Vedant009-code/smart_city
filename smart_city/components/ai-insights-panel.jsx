"use client"

import { Lightbulb, AlertTriangle, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { aiInsights } from "@/lib/data"

const categoryIcons = {
  Optimization: Zap,
  "Risk Alert": AlertTriangle,
  Recommendation: Lightbulb,
}

function getPriorityStyle(priority) {
  switch (priority) {
    case "high":
      return { badge: "bg-destructive text-destructive-foreground", icon: "bg-destructive/10 text-destructive" }
    case "medium":
      return { badge: "bg-[var(--warning)] text-foreground", icon: "bg-[var(--warning)]/10 text-[var(--warning)]" }
    case "low":
      return { badge: "bg-accent text-accent-foreground", icon: "bg-accent/10 text-accent" }
    default:
      return { badge: "bg-muted text-muted-foreground", icon: "bg-muted text-muted-foreground" }
  }
}

export function AiInsightsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">AI Insights & Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[320px] pr-4">
          <div className="flex flex-col gap-3">
            {aiInsights.map((insight) => {
              const Icon = categoryIcons[insight.category] || Lightbulb
              const style = getPriorityStyle(insight.priority)
              return (
                <div key={insight.id} className="flex items-start gap-3 rounded-lg border p-3">
                  <div className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${style.icon}`}>
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">{insight.category}</span>
                      <Badge className={`text-[9px] px-1.5 py-0 ${style.badge}`}>
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{insight.message}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
