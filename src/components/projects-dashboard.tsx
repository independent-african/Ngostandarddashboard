import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Plus, 
  MapPin, 
  Users, 
  DollarSign, 
  Calendar, 
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "Rural Health Initiative",
    location: "Northern Region",
    status: "active",
    beneficiaries: 3250,
    targetBeneficiaries: 4000,
    budget: 850000,
    spent: 578000,
    progress: 68,
    startDate: "2024-01-15",
    endDate: "2025-06-30",
    activities: 12,
    completedActivities: 8,
    health: "on-track"
  },
  {
    id: 2,
    name: "Education Access Program",
    location: "Central Districts",
    status: "active",
    beneficiaries: 2890,
    targetBeneficiaries: 3500,
    budget: 620000,
    spent: 279000,
    progress: 45,
    startDate: "2024-03-01",
    endDate: "2025-08-31",
    activities: 10,
    completedActivities: 5,
    health: "on-track"
  },
  {
    id: 3,
    name: "Emergency Food Relief",
    location: "Western Zone",
    status: "active",
    beneficiaries: 2107,
    targetBeneficiaries: 2500,
    budget: 430000,
    spent: 352600,
    progress: 82,
    startDate: "2024-02-10",
    endDate: "2025-02-28",
    activities: 8,
    completedActivities: 7,
    health: "attention-needed"
  }
];

export function ProjectsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Manage and monitor all active interventions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Active Projects</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">3</div>
            <p className="text-xs text-muted-foreground">All on schedule</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">8,247</div>
            <p className="text-xs text-muted-foreground">82% of target</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$1.9M</div>
            <p className="text-xs text-muted-foreground">63% utilized</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Avg. Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">65%</div>
            <p className="text-xs text-emerald-600">+5% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects List */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active (3)</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="planned">Planned</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle>{project.name}</CardTitle>
                      <Badge 
                        variant={project.health === "on-track" ? "secondary" : "destructive"}
                      >
                        {project.health === "on-track" ? "On Track" : "Attention Needed"}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                      </span>
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Beneficiaries</p>
                    <p className="text-lg">
                      {project.beneficiaries.toLocaleString()} / {project.targetBeneficiaries.toLocaleString()}
                    </p>
                    <Progress 
                      value={(project.beneficiaries / project.targetBeneficiaries) * 100} 
                      className="h-1 mt-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="text-lg">
                      ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                    </p>
                    <Progress 
                      value={(project.spent / project.budget) * 100} 
                      className="h-1 mt-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Activities</p>
                    <p className="text-lg">
                      {project.completedActivities} / {project.activities}
                    </p>
                    <Progress 
                      value={(project.completedActivities / project.activities) * 100} 
                      className="h-1 mt-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Overall Progress</p>
                    <p className="text-lg">{project.progress}%</p>
                    <Progress 
                      value={project.progress} 
                      className="h-1 mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {Math.ceil((new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days remaining
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">Active projects view</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
