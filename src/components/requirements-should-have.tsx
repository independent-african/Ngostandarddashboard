import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const shouldHaveRequirements = [
  {
    category: "Integrations",
    requirement: "External API Layer",
    description: "REST/GraphQL APIs for CRMs (Salesforce, HubSpot), GIS data sources, and donor databases."
  },
  {
    category: "Automation",
    requirement: "Auto-report Scheduling",
    description: "Scheduled generation and email delivery of compliance reports to donors or government partners."
  },
  {
    category: "White-Labeling",
    requirement: "NGO Branding Control",
    description: "Allow NGOs to rebrand dashboards, URLs, and report templates."
  },
  {
    category: "AI Data Cleaning",
    requirement: "Smart Data Validation",
    description: "Automatically detect anomalies or duplicates in survey and beneficiary submissions."
  },
  {
    category: "Collaboration",
    requirement: "Shared Workspaces",
    description: "Multi-user dashboards for collaborative data editing and analysis."
  }
];

export function RequirementsShouldHave() {
  return (
    <Card className="border-2 border-amber-300 bg-amber-50/30">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-amber-100/50 hover:bg-amber-100/50">
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead className="w-[280px]">Requirement</TableHead>
                <TableHead>Description / Expected Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shouldHaveRequirements.map((req, index) => (
                <TableRow key={index} className="hover:bg-amber-50/50">
                  <TableCell>
                    <Badge variant="outline" className="border-amber-400 text-amber-800">
                      {req.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-amber-900">{req.requirement}</TableCell>
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
