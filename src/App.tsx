import { useState } from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "./components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Separator } from "./components/ui/separator";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "./components/ui/breadcrumb";
import { Building2, TrendingUp, Globe, Shield, Zap, HeartHandshake, BarChart3, CheckCircle2, ListChecks, Layers, Home } from "lucide-react";
import { AppSidebar } from "./components/app-sidebar";
import { DashboardOverview } from "./components/dashboard-overview";
import { ProjectsDashboard } from "./components/projects-dashboard";
import { BeneficiaryRegistryDashboard } from "./components/beneficiary-registry-dashboard";
import { DataCollectionDashboard } from "./components/data-collection-dashboard";
import { AidDistributionDashboard } from "./components/aid-distribution-dashboard";
import { ImpactAnalyticsDashboard } from "./components/impact-analytics-dashboard";
import { DonorReportsDashboard } from "./components/donor-reports-dashboard";
import { SettingsDashboard } from "./components/settings-dashboard";
import { PricingHero } from "./components/pricing-hero";
import { EconomicTable } from "./components/economic-table";
import { HumanitarianTable } from "./components/humanitarian-table";
import { BalanceComparison } from "./components/balance-comparison";
import { TierPositioning } from "./components/tier-positioning";
import { ImpactPathway } from "./components/impact-pathway";
import { MoscowOverview } from "./components/moscow-overview";
import { CorePlatformFeatures } from "./components/core-platform-features";
import { RequirementsMustHave } from "./components/requirements-must-have";
import { RequirementsShouldHave } from "./components/requirements-should-have";
import { RequirementsCouldHave } from "./components/requirements-could-have";
import { RequirementsWontHave } from "./components/requirements-wont-have";

export default function App() {
  const [activeView, setActiveView] = useState("#overview");

  const getViewTitle = (view: string) => {
    const viewMap: Record<string, string> = {
      "#overview": "Dashboard Overview",
      "#projects": "Projects",
      "#beneficiaries": "Beneficiary Registry",
      "#beneficiaries/all": "All Beneficiaries",
      "#beneficiaries/add": "Add New Beneficiary",
      "#beneficiaries/duplicates": "Duplicate Check",
      "#beneficiaries/verify": "Verification Queue",
      "#surveys": "Data Collection",
      "#distribution": "Aid Distribution",
      "#analytics": "Impact Analytics",
      "#reports": "Donor Reports",
      "#integrations": "Integrations",
      "#users": "User Management",
      "#security": "Data Security",
      "#settings": "Settings",
      "#help": "Help & Support",
      "#pricing": "Pricing & Features"
    };
    return viewMap[view] || "Atlas Sanctum";
  };

  const renderContent = () => {
    if (activeView === "#overview") {
      return <DashboardOverview />;
    }

    if (activeView === "#projects") {
      return <ProjectsDashboard />;
    }

    if (activeView === "#beneficiaries" || activeView.startsWith("#beneficiaries/")) {
      return <BeneficiaryRegistryDashboard />;
    }

    if (activeView === "#surveys") {
      return <DataCollectionDashboard />;
    }

    if (activeView === "#distribution") {
      return <AidDistributionDashboard />;
    }

    if (activeView === "#analytics") {
      return <ImpactAnalyticsDashboard />;
    }

    if (activeView === "#reports") {
      return <DonorReportsDashboard />;
    }

    if (activeView === "#settings") {
      return <SettingsDashboard />;
    }

    if (activeView === "#pricing") {
      return (
        <div className="space-y-12">
          {/* Hero Section */}
          <PricingHero />

          {/* MoSCoW Framework Section */}
          <section id="requirements">
            <div className="flex items-center gap-3 mb-6">
              <ListChecks className="w-6 h-6 text-indigo-600" />
              <div>
                <h2 className="text-indigo-900">Functional Requirements</h2>
                <p className="text-sm text-muted-foreground">MoSCoW Prioritization Framework</p>
              </div>
            </div>
            
            {/* MoSCoW Overview */}
            <div className="mb-8">
              <MoscowOverview />
            </div>

            {/* Core Platform Features Overview */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-emerald-600" />
                <h3 className="text-emerald-900">Core Platform Capabilities</h3>
              </div>
              <CorePlatformFeatures />
            </div>

            {/* Detailed Requirements Tabs */}
            <Tabs defaultValue="must-have" className="w-full">
              <TabsList className="grid w-full grid-cols-4 h-auto">
                <TabsTrigger value="must-have" className="flex items-center gap-2">
                  <span className="text-lg">🟢</span>
                  <span className="hidden sm:inline">Must Have</span>
                  <Badge variant="secondary" className="ml-1">9</Badge>
                </TabsTrigger>
                <TabsTrigger value="should-have" className="flex items-center gap-2">
                  <span className="text-lg">🟡</span>
                  <span className="hidden sm:inline">Should Have</span>
                  <Badge variant="secondary" className="ml-1">5</Badge>
                </TabsTrigger>
                <TabsTrigger value="could-have" className="flex items-center gap-2">
                  <span className="text-lg">🟠</span>
                  <span className="hidden sm:inline">Could Have</span>
                  <Badge variant="secondary" className="ml-1">4</Badge>
                </TabsTrigger>
                <TabsTrigger value="wont-have" className="flex items-center gap-2">
                  <span className="text-lg">🔴</span>
                  <span className="hidden sm:inline">Won't Have</span>
                  <Badge variant="secondary" className="ml-1">3</Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="must-have" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-emerald-900 mb-2">🟢 Must Have — Essential for MVP</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      These are essential for the Atlas Sanctum MVP — required to deliver both humanitarian value and economic scalability.
                    </p>
                  </div>
                  <RequirementsMustHave />
                </div>
              </TabsContent>

              <TabsContent value="should-have" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-amber-900 mb-2">🟡 Should Have — Post-MVP Priority</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Recommended for early post-MVP rollout to increase usability, retention, and interoperability.
                    </p>
                  </div>
                  <RequirementsShouldHave />
                </div>
              </TabsContent>

              <TabsContent value="could-have" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-orange-900 mb-2">🟠 Could Have — Mature Deployment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enhancements that improve intelligence and governance for mature deployments.
                    </p>
                  </div>
                  <RequirementsCouldHave />
                </div>
              </TabsContent>

              <TabsContent value="wont-have" className="mt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-rose-900 mb-2">🔴 Won't Have (Initially) — Deferred</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Excluded from the MVP to control complexity and deployment cost.
                    </p>
                  </div>
                  <RequirementsWontHave />
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Economic Breakdown */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <h2 className="text-indigo-900">Economic Breakdown</h2>
            </div>
            <EconomicTable />
          </section>

          {/* Humanitarian Breakdown */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <HeartHandshake className="w-6 h-6 text-rose-600" />
              <h2 className="text-indigo-900">Humanitarian Breakdown</h2>
            </div>
            <HumanitarianTable />
          </section>

          {/* Economic-Humanitarian Balance */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h2 className="text-indigo-900">Economic–Humanitarian Balance</h2>
            </div>
            <BalanceComparison />
          </section>

          {/* Tier Positioning */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-purple-600" />
              <h2 className="text-indigo-900">Tier Positioning in Ecosystem</h2>
            </div>
            <TierPositioning />
          </section>

          {/* Strategic Impact Pathway */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-amber-600" />
              <h2 className="text-indigo-900">Strategic Impact Pathway</h2>
            </div>
            <ImpactPathway />
          </section>

          {/* Long-Term Vision */}
          <section>
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-indigo-600" />
                  <CardTitle className="text-indigo-900">Long-Term Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Atlas Sanctum bridges community-led humanitarian action with institutional-grade intelligence.
                  It's the operational core for NGOs transitioning from local pilots to regional ecosystems — where 
                  data, ethics, and compassion converge into sustainable, measurable impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                    Data-Driven Impact
                  </Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                    Ethical AI
                  </Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                    Sustainable Scale
                  </Badge>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700">
                    Regional Ecosystems
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      );
    }

    // Placeholder for other views
    return (
      <Card>
        <CardHeader>
          <CardTitle>{getViewTitle(activeView)}</CardTitle>
          <CardDescription>
            This section is currently under development. Navigation is functional.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Content for {getViewTitle(activeView)} will be implemented here.
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar activeView={activeView} onNavigate={setActiveView} />
        
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-white/80 backdrop-blur-sm px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" onClick={() => setActiveView("#overview")}>
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getViewTitle(activeView)}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className="cursor-pointer hover:bg-secondary/80"
                onClick={() => setActiveView("#pricing")}
              >
                <CheckCircle2 className="w-3 h-3 mr-1" />
                $499/mo
              </Badge>
              <Badge 
                variant="outline"
                className="hidden sm:flex"
              >
                10,247 Beneficiaries
              </Badge>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto p-6 max-w-7xl">
              {renderContent()}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4">
              <div className="text-center text-sm text-muted-foreground">
                <p>© 2025 Atlas Sanctum. Empowering NGOs to scale impact intelligently.</p>
              </div>
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
