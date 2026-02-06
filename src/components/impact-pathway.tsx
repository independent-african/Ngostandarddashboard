import { Card, CardContent } from "./ui/card";
import { ArrowDown, Sparkles, Building2, Globe } from "lucide-react";

const pathwaySteps = [
  {
    icon: Sparkles,
    emoji: "🕊️",
    title: "Grassroots Enablement",
    subtitle: "Free Tier",
    description: "Empowers innovation",
    color: "bg-sky-100 text-sky-700 border-sky-300"
  },
  {
    icon: Building2,
    emoji: "🏛️",
    title: "Operational Scaling",
    subtitle: "Atlas Sanctum",
    description: "Empowers scale and intelligence",
    color: "bg-indigo-100 text-indigo-700 border-indigo-300",
    highlight: true
  },
  {
    icon: Globe,
    emoji: "🌐",
    title: "Institutional Transformation",
    subtitle: "Enterprise",
    description: "Empowers sovereignty and systemic transformation",
    color: "bg-purple-100 text-purple-700 border-purple-300"
  }
];

export function ImpactPathway() {
  return (
    <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
      <CardContent className="p-8">
        <div className="flex flex-col items-center gap-6">
          {pathwaySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="w-full max-w-md">
                <Card className={`${step.color} border-2 ${step.highlight ? 'ring-2 ring-indigo-400 shadow-lg scale-105' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80">
                        <span className="text-2xl">{step.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-0">{step.title}</h3>
                        <p className="text-sm opacity-80 mb-2">{step.subtitle}</p>
                        <p className="text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < pathwaySteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
