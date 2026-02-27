"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { binData } from "@/lib/data"

function StatusBadge({ status }) {
  const styles = {
    Critical: "bg-destructive text-destructive-foreground",
    Full: "bg-[var(--warning)] text-foreground",
    Medium: "bg-primary text-primary-foreground",
    Empty: "bg-accent text-accent-foreground",
  }
  return (
    <Badge className={`text-[10px] ${styles[status] || ""}`}>
      {status}
    </Badge>
  )
}

export function WasteBinTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Smart Bin Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bin ID</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Fill Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {binData.map((bin) => (
              <TableRow key={bin.id}>
                <TableCell className="font-medium text-foreground">{bin.id}</TableCell>
                <TableCell className="text-muted-foreground">{bin.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${
                          bin.fillLevel >= 85
                            ? "bg-destructive"
                            : bin.fillLevel >= 60
                            ? "bg-[var(--warning)]"
                            : "bg-accent"
                        }`}
                        style={{ width: `${bin.fillLevel}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground">{bin.fillLevel}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={bin.status} />
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{bin.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="size-7">
                    <Eye className="size-3.5 text-muted-foreground" />
                    <span className="sr-only">View bin {bin.id}</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
