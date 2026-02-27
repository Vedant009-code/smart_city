"use client"

import {
  Trash2,
  AlertTriangle,
  PackageOpen,
  PackageCheck,
  Wind,
  CloudSun,
  BrainCircuit,
  Workflow,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { summaryCards } from "@/lib/data"

const cards = [
  {
    title: "Total Smart Bins",
    value: summaryCards.totalBins.toLocaleString(),
    icon: Trash2,
    trend: "+12",
    trendDir: "up",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Filled Bins",
    value: summaryCards.filledBins.toLocaleString(),
    icon: PackageCheck,
    trend: "+8",
    trendDir: "up",
    color: "text-[var(--warning)]",
    bgColor: "bg-[var(--warning)]/10",
  },
  {
    title: "Empty Bins",
    value: summaryCards.emptyBins.toLocaleString(),
    icon: PackageOpen,
    trend: "-5",
    trendDir: "down",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Critical Bins",
    value: summaryCards.criticalBins.toLocaleString(),
    icon: AlertTriangle,
    trend: "+3",
    trendDir: "up",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Current AQI",
    value: summaryCards.currentAQI.toString(),
    icon: Wind,
    trend: "-4",
    trendDir: "down",
    color: "text-[var(--warning)]",
    bgColor: "bg-[var(--warning)]/10",
  },
  {
    title: "Pollution Status",
    value: summaryCards.pollutionStatus,
    icon: CloudSun,
    trend: "Stable",
    trendDir: "neutral",
    color: "text-[var(--warning)]",
    bgColor: "bg-[var(--warning)]/10",
  },
  {
    title: "Active AI Predictions",
    value: summaryCards.activePredictions.toString(),
    icon: BrainCircuit,
    trend: "+6",
    trendDir: "up",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Active Automations",
    value: summaryCards.activeAutomations.toString(),
    icon: Workflow,
    trend: "+2",
    trendDir: "up",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

function TrendIndicator({ trend, dir }) {
  if (dir === "neutral") {
    return (
      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        <Minus className="size-3" />
        {trend}
      </span>
    )
  }
  if (dir === "up") {
    return (
      <span className="flex items-center gap-1 text-xs text-accent">
        <TrendingUp className="size-3" />
        {trend}
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 text-xs text-primary">
      <TrendingDown className="size-3" />
      {trend}
    </span>
  )
}

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="gap-0 py-4">
          <CardContent className="flex items-center gap-4">
            <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${card.bgColor}`}>
              <card.icon className={`size-5 ${card.color}`} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-muted-foreground">{card.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-foreground">{card.value}</span>
              </div>
              <TrendIndicator trend={card.trend} dir={card.trendDir} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
