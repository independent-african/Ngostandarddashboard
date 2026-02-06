import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { DollarSign, Target, Sparkles } from "lucide-react";

export function PricingHero() {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-3">
        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-300">
          <Sparkles className="w-3 h-3 mr-1" />
          NGO Standard Tier
        </Badge>
        <h1 className="text-4xl md:text-5xl text-indigo-900 max-w-3xl mx-auto">
          Scale your impact — intelligently, transparently, globally.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <CardTitle className="text-emerald-900">Pricing</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <p className="text-3xl text-emerald-900">$499</p>
                <p className="text-sm text-emerald-700">per project / month</p>
              </div>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Save 20% with annual billing
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-blue-900">Designed For</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              Established NGOs managing multiple interventions with up to <strong>10,000 beneficiaries</strong> per project.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
