import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Users, DollarSign, TrendingUp, Activity, AlertCircle, CheckCircle2, Clock, MapPin } from "lucide-react";

const keyMetrics = [
  {
    title: "Active Beneficiaries",
    value: "8,247",
    change: "+12.3%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Total Disbursed",
    value: "$2.4M",
    change: "+8.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Active Projects",
    value: "3",
    change: "1 new",
    trend: "neutral",
    icon: Activity,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Impact Score",
    value: "94%",
    change: "+2.4%",
    trend: "up",
    icon: TrendingUp,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }
];

const activeProjects = [
  {
    name: "Rural Health Initiative",
    location: "Northern Region",
    beneficiaries: 3250,
    budget: "$850,000",
    progress: 68,
    status: "On Track",
    lastUpdate: "2 hours ago"
  },
  {
    name: "Education Access Program",
    location: "Central Districts",
    beneficiaries: 2890,
    budget: "$620,000",
    progress: 45,
    status: "On Track",
    lastUpdate: "5 hours ago"
  },
  {
    name: "Emergency Food Relief",
    location: "Western Zone",
    beneficiaries: 2107,
    budget: "$430,000",
    progress: 82,
    status: "Attention Needed",
    lastUpdate: "1 hour ago"
  }
];

const recentActivity = [
  { action: "New survey submitted", count: 124, time: "15 mins ago", type: "info" },
  { action: "Cash transfer completed", count: 85, time: "1 hour ago", type: "success" },
  { action: "Beneficiary verification pending", count: 12, time: "2 hours ago", type: "warning" },
  { action: "Monthly report generated", count: 1, time: "3 hours ago", type: "info" }
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-muted-foreground">{metric.title}</CardTitle>
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={metric.trend === "up" ? "text-emerald-600" : "text-slate-600"}>
                    {metric.change}
                  </span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Active Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Monitor ongoing interventions and their progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activeProjects.map((project, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="mb-0">{project.name}</h4>
                      <Badge 
                        variant={project.status === "On Track" ? "secondary" : "destructive"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {project.beneficiaries.toLocaleString()} beneficiaries
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {project.budget}
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-muted-foreground">Progress</div>
                    <div>{project.progress}%</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={project.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Updated {project.lastUpdate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from your operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {activity.type === "success" && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  )}
                  {activity.type === "warning" && (
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                  )}
                  {activity.type === "info" && (
                    <Activity className="h-4 w-4 text-blue-600" />
                  )}
                  <div>
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <Badge variant="outline">{activity.count}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
