import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Plus, 
  DollarSign,
  Send,
  Smartphone,
  Ticket,
  MessageSquare,
  CheckCircle2,
  Clock,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const distributions = [
  {
    id: "DIST-2024-1024",
    type: "cash",
    beneficiaries: 450,
    amount: 67500,
    status: "completed",
    date: "2024-10-08",
    project: "Emergency Food Relief",
    method: "Mobile Money"
  },
  {
    id: "DIST-2024-1023",
    type: "voucher",
    beneficiaries: 320,
    amount: 16000,
    status: "completed",
    date: "2024-10-07",
    project: "Rural Health Initiative",
    method: "Paper Voucher"
  },
  {
    id: "DIST-2024-1022",
    type: "cash",
    beneficiaries: 128,
    amount: 19200,
    status: "processing",
    date: "2024-10-10",
    project: "Education Access Program",
    method: "SMS Transfer"
  },
  {
    id: "DIST-2024-1021",
    type: "mobile",
    beneficiaries: 567,
    amount: 85050,
    status: "pending",
    date: "2024-10-11",
    project: "Emergency Food Relief",
    method: "Mobile Money"
  }
];

export function AidDistributionDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Aid Distribution</h2>
          <p className="text-sm text-muted-foreground">
            Multi-channel disbursement tracking and management
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Distribution
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Disbursed</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$2.4M</div>
            <p className="text-xs text-emerald-600">+$187K this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Beneficiaries Reached</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">7,847</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Pending Transfers</CardTitle>
            <Clock className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$85K</div>
            <p className="text-xs text-muted-foreground">567 beneficiaries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">98.7%</div>
            <p className="text-xs text-emerald-600">+0.3% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Distribution Channels */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-2 border-emerald-200 bg-emerald-50/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-base">Cash Transfers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-emerald-900">$1.2M</div>
            <p className="text-sm text-muted-foreground mt-1">3,456 transactions</p>
            <Badge variant="secondary" className="mt-2">48% of total</Badge>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-blue-50/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-base">Mobile Money</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-900">$854K</div>
            <p className="text-sm text-muted-foreground mt-1">2,789 transactions</p>
            <Badge variant="secondary" className="mt-2">35% of total</Badge>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-purple-50/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-base">Vouchers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-purple-900">$312K</div>
            <p className="text-sm text-muted-foreground mt-1">1,234 distributed</p>
            <Badge variant="secondary" className="mt-2">13% of total</Badge>
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200 bg-amber-50/30">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-base">SMS Transfers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-amber-900">$94K</div>
            <p className="text-sm text-muted-foreground mt-1">368 transactions</p>
            <Badge variant="secondary" className="mt-2">4% of total</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Recent Distributions */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Distributions</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Distributions</CardTitle>
              <CardDescription>
                Track all aid disbursements across channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Distribution ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Beneficiaries</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {distributions.map((dist) => (
                    <TableRow key={dist.id}>
                      <TableCell className="font-mono text-sm">{dist.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {dist.type === "cash" && <DollarSign className="h-3 w-3 mr-1" />}
                          {dist.type === "voucher" && <Ticket className="h-3 w-3 mr-1" />}
                          {dist.type === "mobile" && <Smartphone className="h-3 w-3 mr-1" />}
                          {dist.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{dist.project}</TableCell>
                      <TableCell>{dist.beneficiaries}</TableCell>
                      <TableCell>${dist.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{dist.method}</TableCell>
                      <TableCell className="text-sm">{new Date(dist.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            dist.status === "completed"
                              ? "secondary"
                              : dist.status === "processing"
                              ? "outline"
                              : "default"
                          }
                        >
                          {dist.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                          {dist.status === "processing" && <Clock className="h-3 w-3 mr-1" />}
                          {dist.status === "pending" && <AlertCircle className="h-3 w-3 mr-1" />}
                          {dist.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
