"use client"

import { AlertTriangle, Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { binData } from "@/lib/data"

export function WasteAlertPanel() {
  const criticalBins = binData.filter((b) => b.fillLevel >= 85)

  return (
    <Card className="border-destructive/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-4 text-destructive" />
          <CardTitle className="text-sm font-semibold text-destructive">
            Critical Alerts ({criticalBins.length})
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {criticalBins.map((bin) => (
            <div
              key={bin.id}
              className="flex flex-col gap-2 rounded-lg border border-destructive/20 bg-destructive/5 p-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">{bin.id}</span>
                <Badge className="bg-destructive text-destructive-foreground text-[10px] px-1.5 py-0">
                  {bin.fillLevel}% Full
                </Badge>
              </div>
              <p className="text-[11px] text-muted-foreground">{bin.location}</p>
              <p className="text-[10px] text-muted-foreground">Updated {bin.lastUpdated}</p>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                <Truck className="mr-1 size-3" />
                Dispatch Collection
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
