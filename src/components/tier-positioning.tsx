import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Globe, Sparkles } from "lucide-react";

const tiers = [
  {
    icon: Sparkles,
    emoji: "🕊️",
    name: "Free (Pilot)",
    price: "$0",
    reach: "Up to 1,000",
    value: "Accessibility & Proof of Concept",
    color: "from-sky-50 to-cyan-50",
    borderColor: "border-sky-200",
    iconColor: "text-sky-600"
  },
  {
    icon: Building2,
    emoji: "🏛️",
    name: "Atlas Sanctum (NGO Standard)",
    price: "$499/mo",
    reach: "Up to 10,000",
    value: "Scalable Impact & Operational Intelligence",
    color: "from-indigo-50 to-purple-50",
    borderColor: "border-indigo-300",
    iconColor: "text-indigo-600",
    highlight: true
  },
  {
    icon: Globe,
    emoji: "🌐",
    name: "Enterprise Sovereign",
    price: "Custom",
    reach: "Unlimited",
    value: "National / Global Coordination & Predictive Governance",
    color: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600"
  }
];

export function TierPositioning() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((tier, index) => {
        const Icon = tier.icon;
        return (
          <Card 
            key={index}
            className={`${tier.borderColor} bg-gradient-to-br ${tier.color} ${tier.highlight ? 'ring-2 ring-indigo-300 shadow-lg' : ''} relative`}
          >
            {tier.highlight && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white">
                Current Tier
              </Badge>
            )}
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{tier.emoji}</span>
                <Icon className={`w-5 h-5 ${tier.iconColor}`} />
              </div>
              <CardTitle className="text-slate-800">{tier.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-slate-900">{tier.price}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Reach</p>
                <p className="text-slate-900">{tier.reach}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Core Value</p>
                <p className="text-sm text-slate-700">{tier.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
