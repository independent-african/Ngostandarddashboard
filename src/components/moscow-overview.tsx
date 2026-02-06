import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

const priorityLevels = [
  {
    icon: CheckCircle2,
    level: "Must Have",
    color: "bg-emerald-100 text-emerald-700 border-emerald-300",
    iconColor: "text-emerald-600",
    emoji: "🟢",
    description: "Essential for Atlas Sanctum MVP — required for humanitarian value and economic scalability."
  },
  {
    icon: AlertCircle,
    level: "Should Have",
    color: "bg-amber-100 text-amber-700 border-amber-300",
    iconColor: "text-amber-600",
    emoji: "🟡",
    description: "Recommended for early post-MVP rollout to increase usability, retention, and interoperability."
  },
  {
    icon: Info,
    level: "Could Have",
    color: "bg-orange-100 text-orange-700 border-orange-300",
    iconColor: "text-orange-600",
    emoji: "🟠",
    description: "Enhancements that improve intelligence and governance for mature deployments."
  },
  {
    icon: XCircle,
    level: "Won't Have",
    color: "bg-rose-100 text-rose-700 border-rose-300",
    iconColor: "text-rose-600",
    emoji: "🔴",
    description: "Excluded from MVP to control complexity and deployment cost."
  }
];

export function MoscowOverview() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {priorityLevels.map((priority, index) => {
        const Icon = priority.icon;
        return (
          <Card key={index} className={`border-2 ${priority.color}`}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{priority.emoji}</span>
                <Icon className={`w-5 h-5 ${priority.iconColor}`} />
              </div>
              <CardTitle className="text-base">{priority.level}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-90">{priority.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
