import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const wontHaveRequirements = [
  {
    category: "Blockchain Auditing",
    requirement: "Immutable ledger for all transactions",
    description: "Deferred due to complexity and cost of maintaining distributed consensus."
  },
  {
    category: "Real-Time IoT Feeds",
    requirement: "Integration with IoT devices (e.g., sensors, drones)",
    description: "Future enhancement for climate/agriculture projects."
  },
  {
    category: "Custom ML Model Uploads",
    requirement: "Allow NGOs to deploy their own models",
    description: "Future enterprise-only feature; risk of inconsistent model governance."
  }
];

export function RequirementsWontHave() {
  return (
    <Card className="border-2 border-rose-300 bg-rose-50/30">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-rose-100/50 hover:bg-rose-100/50">
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead className="w-[280px]">Requirement</TableHead>
                <TableHead>Description / Expected Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wontHaveRequirements.map((req, index) => (
                <TableRow key={index} className="hover:bg-rose-50/50">
                  <TableCell>
                    <Badge variant="outline" className="border-rose-400 text-rose-800">
                      {req.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-rose-900">{req.requirement}</TableCell>
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
