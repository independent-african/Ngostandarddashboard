import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Brain, 
  TrendingUp,
  Target,
  BarChart3,
  Activity,
  Zap,
  Download,
  RefreshCw
} from "lucide-react";
import { Progress } from "./ui/progress";

const mlInsights = [
  {
    title: "Nutrition Recovery Prediction",
    project: "Emergency Food Relief",
    confidence: 94,
    prediction: "85% of beneficiaries will show improved nutrition markers within 3 months",
    trend: "positive",
    lastUpdated: "2 hours ago"
  },
  {
    title: "Income Recovery Forecast",
    project: "Rural Health Initiative",
    confidence: 89,
    prediction: "67% likely to achieve 50% income recovery within 6 months",
    trend: "positive",
    lastUpdated: "5 hours ago"
  },
  {
    title: "Attendance Pattern Analysis",
    project: "Education Access Program",
    confidence: 92,
    prediction: "Average attendance will increase by 23% over next quarter",
    trend: "positive",
    lastUpdated: "1 day ago"
  }
];

const sdgMappings = [
  { goal: "SDG 1: No Poverty", progress: 68, impact: "High", beneficiaries: 8247 },
  { goal: "SDG 2: Zero Hunger", progress: 82, impact: "High", beneficiaries: 2107 },
  { goal: "SDG 3: Good Health", progress: 71, impact: "Medium", beneficiaries: 3250 },
  { goal: "SDG 4: Quality Education", progress: 45, impact: "Medium", beneficiaries: 2890 }
];

const outcomes = [
  {
    metric: "Nutrition Improvement",
    baseline: 42,
    current: 68,
    target: 75,
    unit: "%",
    trend: "+26%"
  },
  {
    metric: "School Attendance",
    baseline: 58,
    current: 76,
    target: 85,
    unit: "%",
    trend: "+18%"
  },
  {
    metric: "Income Recovery",
    baseline: 35,
    current: 61,
    target: 70,
    unit: "%",
    trend: "+26%"
  },
  {
    metric: "Health Access",
    baseline: 48,
    current: 74,
    target: 80,
    unit: "%",
    trend: "+26%"
  }
];

export function ImpactAnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Impact Analytics</h2>
          <p className="text-sm text-muted-foreground">
            ML-powered insights and predictive outcome tracking
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Models
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Impact Score</CardTitle>
            <Target className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">94%</div>
            <p className="text-xs text-emerald-600">+2.4% this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">ML Models Active</CardTitle>
            <Brain className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">8</div>
            <p className="text-xs text-muted-foreground">Running predictions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Avg. Confidence</CardTitle>
            <Zap className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">91%</div>
            <p className="text-xs text-muted-foreground">Model accuracy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Data Points</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">847K</div>
            <p className="text-xs text-muted-foreground">Analyzed records</p>
          </CardContent>
        </Card>
      </div>

      {/* ML Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>ML-Powered Insights</CardTitle>
              <CardDescription>
                Predictive analytics on intervention outcomes
              </CardDescription>
            </div>
            <Badge variant="secondary">
              <Brain className="h-3 w-3 mr-1" />
              Auto-updated
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {mlInsights.map((insight, index) => (
            <Card key={index} className="border-2 border-indigo-200 bg-indigo-50/30">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-base">{insight.title}</CardTitle>
                    <CardDescription>{insight.project}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">{insight.prediction}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last updated: {insight.lastUpdated}</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* Outcome Tracking */}
      <Tabs defaultValue="outcomes" className="w-full">
        <TabsList>
          <TabsTrigger value="outcomes">Outcome Tracking</TabsTrigger>
          <TabsTrigger value="sdg">SDG Mapping</TabsTrigger>
          <TabsTrigger value="trends">Trend Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="outcomes" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Outcome Indicators</CardTitle>
              <CardDescription>
                Track progress from baseline to target across interventions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm mb-0">{outcome.metric}</h4>
                      <p className="text-xs text-muted-foreground">
                        Baseline: {outcome.baseline}{outcome.unit} → Target: {outcome.target}{outcome.unit}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg">{outcome.current}{outcome.unit}</p>
                      <Badge variant="secondary" className="text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {outcome.trend}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={(outcome.current / outcome.target) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdg" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>SDG Impact Mapping</CardTitle>
              <CardDescription>
                Align interventions with Sustainable Development Goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sdgMappings.map((sdg, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm mb-1">{sdg.goal}</h4>
                      <p className="text-xs text-muted-foreground">
                        {sdg.beneficiaries.toLocaleString()} beneficiaries impacted
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={sdg.impact === "High" ? "default" : "secondary"}
                      >
                        {sdg.impact} Impact
                      </Badge>
                      <div className="text-right">
                        <p className="text-lg">{sdg.progress}%</p>
                      </div>
                    </div>
                  </div>
                  <Progress value={sdg.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center space-y-2">
                  <Activity className="h-12 w-12 mx-auto opacity-20" />
                  <p>Trend visualization will be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
