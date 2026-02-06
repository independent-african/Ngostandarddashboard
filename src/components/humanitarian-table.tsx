import { Card, CardContent } from "./ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const humanitarianData = [
  {
    feature: "Up to 10,000 Beneficiaries",
    value: "Supports medium-to-large projects impacting entire communities or districts.",
    examples: "Multi-village cash relief, regional nutrition programs."
  },
  {
    feature: "Advanced Survey Builder (Offline)",
    value: "Enables field teams to collect data anywhere — no connectivity required.",
    examples: "Health outreach in remote zones, refugee registration."
  },
  {
    feature: "Multi-Channel Distributions",
    value: "Flexibility to disburse aid via cash, vouchers, SMS, or mobile money.",
    examples: "Digital humanitarian cash transfers, disaster response."
  },
  {
    feature: "Impact Tracking & ML Insights",
    value: "AI-driven dashboards visualize outcomes, trends, and inefficiencies.",
    examples: "Predictive modeling of needs; resource optimization."
  },
  {
    feature: "Donor Compliance Reporting",
    value: "Generates automatic reports aligned with donor frameworks (USAID, EU, UN).",
    examples: "Speeds up reporting cycles; enhances funding transparency."
  },
  {
    feature: "Priority Email Support",
    value: "Timely response for urgent field or data issues.",
    examples: "Reduces downtime in critical interventions."
  },
  {
    feature: "Advanced Analytics Dashboard",
    value: "Visualizes progress, costs, and beneficiary well-being indicators.",
    examples: "Impact measurement, SDG tracking, donor accountability."
  },
  {
    feature: "API Access & Integrations",
    value: "Connects to national systems, third-party CRMs, and GIS databases.",
    examples: "National ID verification, cross-agency coordination."
  },
  {
    feature: "White-Label Options",
    value: "NGOs can present dashboards under their own brand for partners or donors.",
    examples: "Strengthens institutional credibility and autonomy."
  },
  {
    feature: "Dedicated Account Manager",
    value: "Strategic human support for customization and optimization.",
    examples: "Facilitates adoption and training in the field."
  }
];

export function HumanitarianTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-rose-50/50">
                <TableHead className="w-[240px]">Feature</TableHead>
                <TableHead>Humanitarian Value</TableHead>
                <TableHead>Use Case Examples</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {humanitarianData.map((row, index) => (
                <TableRow key={index} className="hover:bg-rose-50/30">
                  <TableCell className="text-rose-900">{row.feature}</TableCell>
                  <TableCell className="text-slate-600">{row.value}</TableCell>
                  <TableCell className="text-slate-700">{row.examples}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
