import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";

const couldHaveRequirements = [
  {
    category: "Predictive Planning",
    requirement: "Scenario Simulation",
    description: "Use ML to simulate intervention outcomes based on changing resource inputs."
  },
  {
    category: "Mobile Companion App",
    requirement: "Field Agent Mobile App",
    description: "Native Android/iOS app for real-time data sync, beneficiary lookup, and offline use."
  },
  {
    category: "GIS Integration",
    requirement: "Geo-Mapping Engine",
    description: "Integrate with OpenStreetMap or Esri for visualizing aid coverage and vulnerability zones."
  },
  {
    category: "Benchmarking",
    requirement: "Cross-Project KPI Comparison",
    description: "Compare project efficiency and impact metrics across NGO instances (within privacy limits)."
  }
];

export function RequirementsCouldHave() {
  return (
    <Card className="border-2 border-orange-300 bg-orange-50/30">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-orange-100/50 hover:bg-orange-100/50">
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead className="w-[280px]">Requirement</TableHead>
                <TableHead>Description / Expected Behavior</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {couldHaveRequirements.map((req, index) => (
                <TableRow key={index} className="hover:bg-orange-50/50">
                  <TableCell>
                    <Badge variant="outline" className="border-orange-400 text-orange-800">
                      {req.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-orange-900">{req.requirement}</TableCell>
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
