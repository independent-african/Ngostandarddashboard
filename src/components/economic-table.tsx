import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const economicData = [
  {
    aspect: "Pricing Structure",
    description: "$499/month per project, scalable by project count.",
    value: "Predictable recurring revenue; sustainable margin per active NGO."
  },
  {
    aspect: "Beneficiary Limit",
    description: "Up to 10,000 beneficiaries per project.",
    value: "Supports mid-sized interventions; cost ≈ $0.05 per beneficiary/month."
  },
  {
    aspect: "Hosting Infrastructure",
    description: "Dedicated cloud instance per NGO (vs. shared).",
    value: "Improved performance, reliability, and data sovereignty."
  },
  {
    aspect: "Cost Efficiency",
    description: "Bulk data handling, optimized ML analytics, API access.",
    value: "Reduces operational cost by 40–60% vs. manual field systems."
  },
  {
    aspect: "Revenue Driver",
    description: "Mid-tier NGOs upgrading from free pilots or donor mandates.",
    value: "Converts local pilots → institutional customers."
  },
  {
    aspect: "Customer Support",
    description: "Priority email + dedicated account manager.",
    value: "Adds 15–25% customer satisfaction boost; lower churn rate."
  },
  {
    aspect: "Annual Billing Incentive",
    description: "20% discount encourages long-term retention.",
    value: "Smooth cash flow, predictable annualized revenue."
  },
  {
    aspect: "Integration Value",
    description: "API access allows collaboration with external CRMs, GIS, and donor systems.",
    value: "Strengthens ecosystem lock-in and data interoperability."
  }
];

export function EconomicTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-emerald-50/50">
                <TableHead className="w-[200px]">Aspect</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Economic Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {economicData.map((row, index) => (
                <TableRow key={index} className="hover:bg-emerald-50/30">
                  <TableCell className="text-emerald-900">{row.aspect}</TableCell>
                  <TableCell className="text-slate-600">{row.description}</TableCell>
                  <TableCell className="text-slate-700">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
