"use client"

import { BrainCircuit, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { aiPredictions } from "@/lib/data"

function getSeverityStyle(severity) {
  switch (severity) {
    case "high":
      return "bg-destructive text-destructive-foreground"
    case "medium":
      return "bg-[var(--warning)] text-foreground"
    case "low":
      return "bg-accent text-accent-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function AiPredictionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {aiPredictions.map((pred) => (
        <Card key={pred.id} className="gap-0 py-4">
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-primary/10">
                  <BrainCircuit className="size-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground">{pred.type}</span>
              </div>
              <Badge className={`text-[9px] px-1.5 py-0 ${getSeverityStyle(pred.severity)}`}>
                {pred.severity}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{pred.prediction}</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="size-3 text-accent" />
              <span className="text-[10px] font-medium text-accent">{pred.confidence}% confidence</span>
              <div className="ml-auto h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-accent" style={{ width: `${pred.confidence}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
