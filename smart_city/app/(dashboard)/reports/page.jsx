"use client"

import { FileText, Download, Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const reports = [
  { id: 1, name: "Daily Waste Collection Summary", type: "Waste", date: "Feb 27, 2026", status: "Generated" },
  { id: 2, name: "Weekly Air Quality Report", type: "Pollution", date: "Feb 24, 2026", status: "Generated" },
  { id: 3, name: "Monthly AI Analytics Report", type: "AI", date: "Feb 01, 2026", status: "Generated" },
  { id: 4, name: "Automation Performance Report", type: "Automation", date: "Feb 27, 2026", status: "Pending" },
  { id: 5, name: "Critical Incidents Report", type: "Alerts", date: "Feb 26, 2026", status: "Generated" },
  { id: 6, name: "Sensor Health Report", type: "System", date: "Feb 25, 2026", status: "Generated" },
]

const reportStats = [
  { label: "Reports This Month", value: "24", icon: FileText },
  { label: "Scheduled Reports", value: "8", icon: Calendar },
  { label: "Average Generation", value: "2.3s", icon: Clock },
]

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-foreground">Reports</h1>
        <p className="text-sm text-muted-foreground">Generate and manage system reports</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {reportStats.map((stat) => (
          <Card key={stat.label} className="gap-0 py-3">
            <CardContent className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold">Report History</CardTitle>
            <Button size="sm" className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90">
              <FileText className="mr-1.5 size-3" />
              Generate Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium text-foreground">{report.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-[10px]">{report.type}</Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{report.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={`text-[10px] px-1.5 py-0 ${
                        report.status === "Generated"
                          ? "bg-accent text-accent-foreground"
                          : "bg-[var(--warning)] text-foreground"
                      }`}
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      disabled={report.status !== "Generated"}
                    >
                      <Download className="size-3.5 text-muted-foreground" />
                      <span className="sr-only">Download report {report.name}</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
