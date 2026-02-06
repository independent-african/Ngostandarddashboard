import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Plus, 
  Download,
  FileText,
  Clock,
  CheckCircle2,
  Calendar,
  Send,
  Eye
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const templates = [
  {
    name: "USAID Template",
    description: "Standard quarterly report format",
    lastUsed: "2024-09-30",
    frequency: "Quarterly"
  },
  {
    name: "EU Template",
    description: "European Union compliance format",
    lastUsed: "2024-10-01",
    frequency: "Monthly"
  },
  {
    name: "UN OCHA Template",
    description: "Humanitarian response reporting",
    lastUsed: "2024-09-15",
    frequency: "Bi-weekly"
  }
];

const reports = [
  {
    id: "RPT-2024-Q3-001",
    title: "Q3 2024 USAID Progress Report",
    template: "USAID",
    project: "Rural Health Initiative",
    status: "completed",
    generatedDate: "2024-09-30",
    submittedDate: "2024-10-01",
    dueDate: "2024-10-05",
    recipient: "USAID Regional Office"
  },
  {
    id: "RPT-2024-09-002",
    title: "September EU Monthly Report",
    template: "EU",
    project: "Education Access Program",
    status: "completed",
    generatedDate: "2024-10-01",
    submittedDate: "2024-10-02",
    dueDate: "2024-10-05",
    recipient: "EU Development Fund"
  },
  {
    id: "RPT-2024-10-003",
    title: "October Bi-weekly OCHA Update",
    template: "UN OCHA",
    project: "Emergency Food Relief",
    status: "draft",
    generatedDate: "2024-10-10",
    submittedDate: null,
    dueDate: "2024-10-12",
    recipient: "UN OCHA Field Office"
  }
];

const scheduled = [
  {
    template: "USAID",
    nextDue: "2024-12-31",
    frequency: "Quarterly",
    autoSend: true
  },
  {
    template: "EU",
    nextDue: "2024-11-05",
    frequency: "Monthly",
    autoSend: true
  },
  {
    template: "UN OCHA",
    nextDue: "2024-10-26",
    frequency: "Bi-weekly",
    autoSend: false
  }
];

export function DonorReportsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Donor Reports</h2>
          <p className="text-sm text-muted-foreground">
            Automated compliance reporting for major donors
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Reports Generated</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">47</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">70%</div>
            <p className="text-xs text-emerald-600">vs manual reporting</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">On-Time Delivery</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">100%</div>
            <p className="text-xs text-muted-foreground">All deadlines met</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Upcoming Reports</CardTitle>
            <Calendar className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3</div>
            <p className="text-xs text-muted-foreground">Due this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <CardDescription>
            Pre-configured templates aligned with donor frameworks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {templates.map((template, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-base">{template.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Frequency</p>
                    <Badge variant="outline">{template.frequency}</Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Last Used</p>
                    <p className="text-sm">{new Date(template.lastUsed).toLocaleDateString()}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <CardDescription>
            Track generated and submitted donor reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Generated</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-mono text-sm">{report.id}</TableCell>
                  <TableCell className="max-w-xs">{report.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.template}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{report.project}</TableCell>
                  <TableCell className="text-sm">
                    {new Date(report.generatedDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-sm">
                    {new Date(report.dueDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={report.status === "completed" ? "secondary" : "outline"}
                    >
                      {report.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      {report.status === "completed" && (
                        <Button variant="ghost" size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Scheduled Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>
            Automated report generation and delivery schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduled.map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm mb-0">{schedule.template} Report</h4>
                    {schedule.autoSend && (
                      <Badge variant="secondary" className="text-xs">
                        Auto-send enabled
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Frequency: {schedule.frequency}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next due</p>
                    <p className="text-sm">{new Date(schedule.nextDue).toLocaleDateString()}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
