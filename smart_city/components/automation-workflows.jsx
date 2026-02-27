"use client"

import { Play, Pause, RotateCcw, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { automationWorkflows } from "@/lib/data"

export function AutomationWorkflows() {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground mb-3">Workflow Status</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {automationWorkflows.map((wf) => (
          <Card key={wf.id} className="gap-0 py-4">
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{wf.name}</span>
                <Badge
                  className={`text-[10px] px-1.5 py-0 ${
                    wf.status === "Active"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {wf.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex flex-col gap-0.5">
                  <span className="text-muted-foreground">Last Run</span>
                  <span className="font-medium text-foreground">{wf.lastRun}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-muted-foreground">Total Runs</span>
                  <span className="font-medium text-foreground">{wf.runs}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3 text-accent" />
                <span className="text-[10px] text-muted-foreground">
                  Success Rate: <span className="font-semibold text-foreground">{wf.successRate}%</span>
                </span>
                <div className="ml-auto h-1.5 w-12 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${wf.successRate}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                {wf.status === "Active" ? (
                  <Button variant="outline" size="sm" className="h-7 text-xs flex-1">
                    <Pause className="mr-1 size-3" />
                    Pause
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="h-7 text-xs flex-1">
                    <Play className="mr-1 size-3" />
                    Start
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  <RotateCcw className="size-3" />
                  <span className="sr-only">Re-run workflow</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
