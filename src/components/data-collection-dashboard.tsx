import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { 
  Plus, 
  FileText, 
  Download,
  CheckCircle2,
  Clock,
  Wifi,
  WifiOff,
  Eye,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const surveys = [
  {
    id: 1,
    name: "Monthly Health Assessment",
    project: "Rural Health Initiative",
    status: "active",
    totalResponses: 2847,
    targetResponses: 3250,
    offlineSubmissions: 124,
    lastSync: "15 mins ago",
    completionRate: 88,
    createdBy: "Dr. Sarah Khan",
    deployedDate: "2024-09-15"
  },
  {
    id: 2,
    name: "Education Attendance Tracker",
    project: "Education Access Program",
    status: "active",
    totalResponses: 1923,
    targetResponses: 2890,
    offlineSubmissions: 89,
    lastSync: "1 hour ago",
    completionRate: 67,
    createdBy: "Ahmed Ibrahim",
    deployedDate: "2024-09-20"
  },
  {
    id: 3,
    name: "Food Distribution Survey",
    project: "Emergency Food Relief",
    status: "active",
    totalResponses: 2056,
    targetResponses: 2107,
    offlineSubmissions: 15,
    lastSync: "2 hours ago",
    completionRate: 98,
    createdBy: "Fatima Ali",
    deployedDate: "2024-10-01"
  },
  {
    id: 4,
    name: "Baseline Needs Assessment",
    project: "Rural Health Initiative",
    status: "draft",
    totalResponses: 0,
    targetResponses: 500,
    offlineSubmissions: 0,
    lastSync: "Never",
    completionRate: 0,
    createdBy: "Dr. Sarah Khan",
    deployedDate: null
  }
];

export function DataCollectionDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Data Collection</h2>
          <p className="text-sm text-muted-foreground">
            Advanced survey builder with offline support
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Survey
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Active Surveys</CardTitle>
            <FileText className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">5</div>
            <p className="text-xs text-muted-foreground">3 active, 2 drafts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Responses</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">6,826</div>
            <p className="text-xs text-emerald-600">+412 today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Offline Submissions</CardTitle>
            <WifiOff className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">228</div>
            <p className="text-xs text-muted-foreground">Pending sync</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Avg. Completion Rate</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">84%</div>
            <p className="text-xs text-muted-foreground">Across all surveys</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-dashed">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-slate-900">Offline Sync Status</h3>
              <p className="text-sm text-muted-foreground">
                228 submissions waiting to sync. Last successful sync: 15 mins ago
              </p>
            </div>
            <Button>
              <Wifi className="mr-2 h-4 w-4" />
              Sync Now
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Surveys List */}
      <div className="space-y-4">
        <h3 className="text-slate-900">Survey Management</h3>
        
        {surveys.map((survey) => (
          <Card key={survey.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle>{survey.name}</CardTitle>
                    <Badge variant={survey.status === "active" ? "secondary" : "outline"}>
                      {survey.status}
                    </Badge>
                    {survey.offlineSubmissions > 0 && (
                      <Badge variant="outline" className="border-amber-300 text-amber-700">
                        <WifiOff className="h-3 w-3 mr-1" />
                        {survey.offlineSubmissions} offline
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-4">
                    <span>{survey.project}</span>
                    <span>•</span>
                    <span>Created by {survey.createdBy}</span>
                    {survey.deployedDate && (
                      <>
                        <span>•</span>
                        <span>Deployed {new Date(survey.deployedDate).toLocaleDateString()}</span>
                      </>
                    )}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit Survey</DropdownMenuItem>
                    <DropdownMenuItem>View Responses</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Export Data
                    </DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    {survey.status === "draft" && (
                      <DropdownMenuItem>Deploy Survey</DropdownMenuItem>
                    )}
                    {survey.status === "active" && (
                      <DropdownMenuItem className="text-destructive">
                        Close Survey
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Responses</p>
                  <p className="text-lg">
                    {survey.totalResponses.toLocaleString()} / {survey.targetResponses.toLocaleString()}
                  </p>
                  <Progress 
                    value={(survey.totalResponses / survey.targetResponses) * 100} 
                    className="h-1 mt-1"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                  <p className="text-lg">{survey.completionRate}%</p>
                  <Progress value={survey.completionRate} className="h-1 mt-1" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Sync</p>
                  <p className="text-lg text-sm">{survey.lastSync}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Offline Queue</p>
                  <p className="text-lg">{survey.offlineSubmissions}</p>
                </div>
              </div>

              {survey.status === "active" && (
                <div className="flex items-center gap-2 pt-2 border-t">
                  <Button variant="outline" size="sm">
                    View Responses
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    Analytics
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
