import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { TrendingUp, Heart } from "lucide-react";

const balanceData = [
  {
    dimension: "Scalability",
    economic: "Enables multi-project expansion without linear cost increase.",
    humanitarian: "Expands reach to tens of thousands of lives."
  },
  {
    dimension: "Automation",
    economic: "Reduces admin overhead via ML-powered automation.",
    humanitarian: "Frees teams to focus on people, not paperwork."
  },
  {
    dimension: "Integration",
    economic: "Streamlines donor, partner, and field data.",
    humanitarian: "Improves transparency and coordination."
  },
  {
    dimension: "Reporting",
    economic: "Cuts reporting time by 70%.",
    humanitarian: "Increases donor confidence → more funding."
  },
  {
    dimension: "Data Ethics",
    economic: "Secure, compliant data handling.",
    humanitarian: "Protects beneficiary dignity and privacy."
  }
];

export function BalanceComparison() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-emerald-50 to-rose-50">
                <TableHead className="w-[180px]">Dimension</TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <span>Economic Outcome</span>
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-600" />
                    <span>Humanitarian Outcome</span>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {balanceData.map((row, index) => (
                <TableRow key={index} className="hover:bg-slate-50">
                  <TableCell className="text-indigo-900">{row.dimension}</TableCell>
                  <TableCell className="text-slate-700 bg-emerald-50/20">{row.economic}</TableCell>
                  <TableCell className="text-slate-700 bg-rose-50/20">{row.humanitarian}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
