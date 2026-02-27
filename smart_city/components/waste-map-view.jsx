"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { binData } from "@/lib/data"

const binPositions = [
  { x: 20, y: 25 }, { x: 55, y: 15 }, { x: 40, y: 45 },
  { x: 75, y: 30 }, { x: 30, y: 70 }, { x: 60, y: 55 },
  { x: 85, y: 65 }, { x: 15, y: 50 }, { x: 50, y: 80 },
  { x: 70, y: 75 },
]

function getPinColor(fillLevel) {
  if (fillLevel >= 85) return "#DC2626"
  if (fillLevel >= 60) return "#F59E0B"
  return "#16A34A"
}

export function WasteMapView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Bin Locations Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted/50 border">
          {/* Grid overlay */}
          <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-border)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Roads */}
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="8,4" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="8,4" />
            <line x1="25%" y1="0" x2="25%" y2="100%" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4,4" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4,4" />
          </svg>
          {/* Labels */}
          <div className="absolute left-2 top-2 rounded bg-card/80 px-2 py-1 text-[10px] font-medium text-muted-foreground border">
            Metro City - Live View
          </div>
          {/* Bin pins */}
          {binData.map((bin, i) => {
            const pos = binPositions[i]
            if (!pos) return null
            return (
              <div
                key={bin.id}
                className="group absolute flex flex-col items-center"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -100%)" }}
              >
                <div className="relative">
                  <MapPin
                    className="size-6 drop-shadow-md"
                    style={{ color: getPinColor(bin.fillLevel) }}
                    fill={getPinColor(bin.fillLevel)}
                    strokeWidth={1.5}
                    stroke="white"
                  />
                  {bin.fillLevel >= 85 && (
                    <span className="absolute -top-1 -right-1 flex size-3">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75" />
                      <span className="relative inline-flex size-3 rounded-full bg-destructive" />
                    </span>
                  )}
                </div>
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full mb-2 hidden rounded-lg border bg-card px-2.5 py-1.5 shadow-lg group-hover:block">
                  <p className="text-xs font-semibold text-foreground">{bin.id}</p>
                  <p className="text-[10px] text-muted-foreground">{bin.location}</p>
                  <p className="text-[10px] font-medium" style={{ color: getPinColor(bin.fillLevel) }}>
                    {bin.fillLevel}% Full
                  </p>
                </div>
              </div>
            )
          })}
          {/* Legend */}
          <div className="absolute bottom-2 right-2 flex items-center gap-3 rounded bg-card/80 px-2.5 py-1.5 border text-[10px]">
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-muted-foreground">Empty</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-[var(--warning)]" />
              <span className="text-muted-foreground">Full</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Critical</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
