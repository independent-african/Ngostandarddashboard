import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const mustHaveRequirements = [
  {
    category: "Beneficiary Management",
    requirement: "Unique Beneficiary Registry",
    description: "Maintain verified beneficiary records with demographic and geographic data. Prevent duplication across projects."
  },
  {
    category: "Data Collection",
    requirement: "Advanced Survey Builder (Offline Support)",
    description: "Field teams must create, deploy, and sync surveys offline, syncing automatically when connectivity resumes."
  },
  {
    category: "Aid Distribution",
    requirement: "Multi-Channel Disbursement",
    description: "Enable cash, voucher, SMS, or mobile money transfers, tracked per beneficiary and transaction."
  },
  {
    category: "Impact Analytics",
    requirement: "ML-powered Insights",
    description: "Run predictive analytics on outcomes (e.g., nutrition, income recovery, attendance) using automated ML pipelines."
  },
  {
    category: "Reporting",
    requirement: "Donor Compliance Reporting",
    description: "Generate standardized reports aligned with major donor templates (USAID, EU, UN OCHA)."
  },
  {
    category: "User Management",
    requirement: "Role-Based Access Control (RBAC)",
    description: "Define granular access by NGO roles: Field Officer, Data Analyst, Project Manager, Donor Liaison."
  },
  {
    category: "Data Security",
    requirement: "Encryption & Access Logging",
    description: "Enforce encryption at rest (AES-256) and in transit (TLS 1.2+), with detailed audit trails."
  },
  {
    category: "Hosting",
    requirement: "Dedicated Cloud Instance",
    description: "Each NGO instance runs on an isolated tenant with its own database and storage."
  },
  {
    category: "Dashboard Visualization",
    requirement: "Advanced Metrics Dashboard",
    description: "Real-time visual display of interventions, cost efficiency, beneficiary well-being, and SDG mapping."
  }
];

export function RequirementsMustHave() {
  return (
    <Card className="border-2 border-emerald-300 bg-emerald-50/30">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-emerald-100/50 hover:bg-emerald-100/50">
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead className="w-[280px]">Requirement</TableHead>
                <TableHead>Description / Expected Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mustHaveRequirements.map((req, index) => (
                <TableRow key={index} className="hover:bg-emerald-50/50">
                  <TableCell>
                    <Badge variant="outline" className="border-emerald-400 text-emerald-800">
                      {req.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-emerald-900">{req.requirement}</TableCell>
                  <TableCell className="text-slate-700">{req.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
