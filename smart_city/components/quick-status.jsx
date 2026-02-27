"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { binData } from "@/lib/data"

function getStatusColor(fillLevel) {
  if (fillLevel >= 85) return "bg-destructive"
  if (fillLevel >= 60) return "bg-[var(--warning)]"
  return "bg-accent"
}

export function QuickStatus() {
  const topBins = binData
    .sort((a, b) => b.fillLevel - a.fillLevel)
    .slice(0, 6)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Top Bins by Fill Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {topBins.map((bin) => (
            <div key={bin.id} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{bin.id}</span>
                  <span className="text-muted-foreground">{bin.location}</span>
                </div>
                <span className={`font-semibold ${
                  bin.fillLevel >= 85
                    ? "text-destructive"
                    : bin.fillLevel >= 60
                    ? "text-[var(--warning)]"
                    : "text-accent"
                }`}>
                  {bin.fillLevel}%
                </span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full transition-all ${getStatusColor(bin.fillLevel)}`}
                  style={{ width: `${bin.fillLevel}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
