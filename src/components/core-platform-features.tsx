import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Database, Send, Brain, FileText, Lock, Shield, Server, BarChart3 } from "lucide-react";

const coreFeatures = [
  {
    icon: Users,
    category: "Beneficiary Management",
    title: "Unique Beneficiary Registry",
    description: "Verified records with demographic and geographic data",
    metrics: ["10,000 beneficiaries", "Zero duplication", "Real-time sync"],
    color: "text-blue-600"
  },
  {
    icon: Database,
    category: "Data Collection",
    title: "Offline Survey Builder",
    description: "Create and sync surveys without connectivity",
    metrics: ["100% offline support", "Auto-sync", "Multi-device"],
    color: "text-purple-600"
  },
  {
    icon: Send,
    category: "Aid Distribution",
    title: "Multi-Channel Disbursement",
    description: "Cash, vouchers, SMS, or mobile money transfers",
    metrics: ["4+ channels", "Real-time tracking", "Audit trail"],
    color: "text-emerald-600"
  },
  {
    icon: Brain,
    category: "Impact Analytics",
    title: "ML-Powered Insights",
    description: "Predictive analytics on intervention outcomes",
    metrics: ["Auto ML pipelines", "Trend analysis", "Impact forecasting"],
    color: "text-indigo-600"
  },
  {
    icon: FileText,
    category: "Reporting",
    title: "Donor Compliance",
    description: "Automated reports for USAID, EU, UN OCHA",
    metrics: ["70% time saved", "100% compliance", "Auto-generation"],
    color: "text-amber-600"
  },
  {
    icon: Lock,
    category: "User Management",
    title: "Role-Based Access Control",
    description: "Granular permissions by organizational role",
    metrics: ["5+ role types", "Field-level access", "Audit logs"],
    color: "text-rose-600"
  },
  {
    icon: Shield,
    category: "Data Security",
    title: "Encryption & Logging",
    description: "AES-256 at rest, TLS 1.2+ in transit",
    metrics: ["Military-grade", "Complete audit trail", "GDPR compliant"],
    color: "text-cyan-600"
  },
  {
    icon: Server,
    category: "Hosting",
    title: "Dedicated Cloud Instance",
    description: "Isolated tenant with own database and storage",
    metrics: ["99.9% uptime", "Data sovereignty", "Auto-scaling"],
    color: "text-teal-600"
  },
  {
    icon: BarChart3,
    category: "Dashboard",
    title: "Advanced Metrics",
    description: "Real-time interventions, costs, and SDG mapping",
    metrics: ["20+ KPIs", "Live updates", "Custom views"],
    color: "text-violet-600"
  }
];

export function CorePlatformFeatures() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coreFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Icon className={`w-8 h-8 ${feature.color}`} />
                <Badge variant="secondary" className="text-xs">
                  {feature.category}
                </Badge>
              </div>
              <CardTitle className="text-base">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {feature.metrics.map((metric, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {metric}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
