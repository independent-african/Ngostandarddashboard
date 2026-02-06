import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { 
  Search, 
  Plus, 
  Download, 
  Upload,
  Filter,
  Users,
  UserCheck,
  UserX,
  AlertTriangle,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const beneficiaries = [
  {
    id: "BEN-2024-001",
    name: "Amina Hassan",
    age: 34,
    gender: "Female",
    location: "Northern Region, District A",
    status: "verified",
    project: "Rural Health Initiative",
    registered: "2024-01-20",
    lastContact: "2024-10-05"
  },
  {
    id: "BEN-2024-002",
    name: "Ibrahim Yusuf",
    age: 45,
    gender: "Male",
    location: "Central Districts, Zone 3",
    status: "verified",
    project: "Education Access Program",
    registered: "2024-02-15",
    lastContact: "2024-10-08"
  },
  {
    id: "BEN-2024-003",
    name: "Fatima Ali",
    age: 28,
    gender: "Female",
    location: "Western Zone, Village 12",
    status: "pending",
    project: "Emergency Food Relief",
    registered: "2024-10-10",
    lastContact: "2024-10-10"
  },
  {
    id: "BEN-2024-004",
    name: "Mohammed Ibrahim",
    age: 52,
    gender: "Male",
    location: "Northern Region, District B",
    status: "verified",
    project: "Rural Health Initiative",
    registered: "2024-01-25",
    lastContact: "2024-10-01"
  },
  {
    id: "BEN-2024-005",
    name: "Aisha Mohamed",
    age: 19,
    gender: "Female",
    location: "Central Districts, Zone 1",
    status: "flagged",
    project: "Education Access Program",
    registered: "2024-03-10",
    lastContact: "2024-09-28"
  }
];

export function BeneficiaryRegistryDashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Beneficiary Registry</h2>
          <p className="text-sm text-muted-foreground">
            Manage verified beneficiary records across all projects
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Beneficiary
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Total Beneficiaries</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">10,247</div>
            <p className="text-xs text-emerald-600">+234 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Verified</CardTitle>
            <UserCheck className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">9,847</div>
            <p className="text-xs text-muted-foreground">96% verified</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Pending Verification</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">12</div>
            <p className="text-xs text-muted-foreground">Needs review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-muted-foreground">Duplicates Found</CardTitle>
            <UserX className="h-4 w-4 text-rose-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">8</div>
            <p className="text-xs text-muted-foreground">Requires action</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by ID, name, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="health">Rural Health Initiative</SelectItem>
                <SelectItem value="education">Education Access Program</SelectItem>
                <SelectItem value="food">Emergency Food Relief</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Beneficiaries Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Beneficiaries</CardTitle>
          <CardDescription>
            Showing {beneficiaries.length} of 10,247 beneficiaries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age/Gender</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Registered</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {beneficiaries.map((beneficiary) => (
                <TableRow key={beneficiary.id}>
                  <TableCell className="font-mono text-sm">{beneficiary.id}</TableCell>
                  <TableCell>{beneficiary.name}</TableCell>
                  <TableCell>
                    {beneficiary.age}, {beneficiary.gender}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {beneficiary.location}
                  </TableCell>
                  <TableCell className="text-sm">{beneficiary.project}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        beneficiary.status === "verified"
                          ? "secondary"
                          : beneficiary.status === "pending"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {beneficiary.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(beneficiary.registered).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View History</DropdownMenuItem>
                        <DropdownMenuItem>Generate ID Card</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
