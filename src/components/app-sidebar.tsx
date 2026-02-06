import {
  Building2,
  LayoutDashboard,
  Users,
  FileText,
  Send,
  BarChart3,
  FileBarChart,
  Settings,
  HelpCircle,
  ChevronDown,
  Database,
  Shield,
  Globe,
  Folder,
  Bell,
  User,
  LogOut
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const navigationItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    url: "#overview",
    badge: null,
  },
  {
    title: "Projects",
    icon: Folder,
    url: "#projects",
    badge: "3",
  },
];

const coreOperations = [
  {
    title: "Beneficiary Registry",
    icon: Users,
    url: "#beneficiaries",
    badge: "10,247",
    subItems: [
      { title: "All Beneficiaries", url: "#beneficiaries/all" },
      { title: "Add New", url: "#beneficiaries/add" },
      { title: "Duplicate Check", url: "#beneficiaries/duplicates" },
      { title: "Verification Queue", url: "#beneficiaries/verify", badge: "12" },
    ],
  },
  {
    title: "Data Collection",
    icon: FileText,
    url: "#surveys",
    subItems: [
      { title: "Survey Builder", url: "#surveys/builder" },
      { title: "Active Surveys", url: "#surveys/active", badge: "5" },
      { title: "Offline Sync", url: "#surveys/sync" },
      { title: "Field Reports", url: "#surveys/reports" },
    ],
  },
  {
    title: "Aid Distribution",
    icon: Send,
    url: "#distribution",
    badge: "New",
    subItems: [
      { title: "Cash Transfers", url: "#distribution/cash" },
      { title: "Vouchers", url: "#distribution/vouchers" },
      { title: "Mobile Money", url: "#distribution/mobile" },
      { title: "Transaction History", url: "#distribution/history" },
    ],
  },
  {
    title: "Impact Analytics",
    icon: BarChart3,
    url: "#analytics",
    subItems: [
      { title: "ML Insights", url: "#analytics/ml" },
      { title: "Outcome Tracking", url: "#analytics/outcomes" },
      { title: "SDG Mapping", url: "#analytics/sdg" },
      { title: "Predictive Models", url: "#analytics/predictive" },
    ],
  },
];

const complianceReporting = [
  {
    title: "Donor Reports",
    icon: FileBarChart,
    url: "#reports",
    subItems: [
      { title: "Generate Report", url: "#reports/generate" },
      { title: "USAID Template", url: "#reports/usaid" },
      { title: "EU Template", url: "#reports/eu" },
      { title: "UN OCHA Template", url: "#reports/unocha" },
      { title: "Scheduled Reports", url: "#reports/scheduled" },
    ],
  },
];

const systemSettings = [
  {
    title: "Integrations",
    icon: Globe,
    url: "#integrations",
    subItems: [
      { title: "API Keys", url: "#integrations/api" },
      { title: "CRM Connections", url: "#integrations/crm" },
      { title: "GIS Data Sources", url: "#integrations/gis" },
      { title: "Webhooks", url: "#integrations/webhooks" },
    ],
  },
  {
    title: "User Management",
    icon: Shield,
    url: "#users",
    subItems: [
      { title: "Team Members", url: "#users/team" },
      { title: "Roles & Permissions", url: "#users/roles" },
      { title: "Access Logs", url: "#users/logs" },
      { title: "Invitations", url: "#users/invites", badge: "2" },
    ],
  },
  {
    title: "Data Security",
    icon: Database,
    url: "#security",
    subItems: [
      { title: "Encryption Status", url: "#security/encryption" },
      { title: "Backup & Recovery", url: "#security/backup" },
      { title: "Audit Trail", url: "#security/audit" },
      { title: "Compliance Checks", url: "#security/compliance" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#settings",
    subItems: [
      { title: "Organization Profile", url: "#settings/org" },
      { title: "Branding", url: "#settings/branding" },
      { title: "Notifications", url: "#settings/notifications" },
      { title: "Billing", url: "#settings/billing" },
    ],
  },
];

interface AppSidebarProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
}

export function AppSidebar({ activeView = "overview", onNavigate }: AppSidebarProps) {
  const handleNavigation = (url: string) => {
    if (onNavigate) {
      onNavigate(url);
    }
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-sidebar-accent">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold">Atlas Sanctum</span>
                  <span className="text-xs text-muted-foreground">NGO Standard</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item.url)}
                    isActive={activeView === item.url}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Core Operations */}
        <SidebarGroup>
          <SidebarGroupLabel>Core Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {coreOperations.map((item) => (
                <Collapsible key={item.title} defaultOpen={item.title === "Beneficiary Registry"}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto mr-2">
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              onClick={() => handleNavigation(subItem.url)}
                              isActive={activeView === subItem.url}
                            >
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <Badge variant="outline" className="ml-auto text-xs">
                                  {subItem.badge}
                                </Badge>
                              )}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Compliance & Reporting */}
        <SidebarGroup>
          <SidebarGroupLabel>Compliance & Reporting</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {complianceReporting.map((item) => (
                <Collapsible key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              onClick={() => handleNavigation(subItem.url)}
                              isActive={activeView === subItem.url}
                            >
                              <span>{subItem.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System & Settings */}
        <SidebarGroup>
          <SidebarGroupLabel>System & Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemSettings.map((item) => (
                <Collapsible key={item.title}>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto mr-2">
                            {item.badge}
                          </Badge>
                        )}
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              onClick={() => handleNavigation(subItem.url)}
                              isActive={activeView === subItem.url}
                            >
                              <span>{subItem.title}</span>
                              {subItem.badge && (
                                <Badge variant="outline" className="ml-auto text-xs">
                                  {subItem.badge}
                                </Badge>
                              )}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Help & Support */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => handleNavigation("#help")}>
                  <HelpCircle className="h-4 w-4" />
                  <span>Help & Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="hover:bg-sidebar-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" alt="User" />
                    <AvatarFallback className="bg-indigo-600 text-white">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5 flex-1 text-left">
                    <span className="text-sm">Jane Doe</span>
                    <span className="text-xs text-muted-foreground">Project Manager</span>
                  </div>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
