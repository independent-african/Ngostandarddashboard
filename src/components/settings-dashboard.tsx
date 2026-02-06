import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { 
  Building2,
  Palette,
  Bell,
  CreditCard,
  Save,
  Upload
} from "lucide-react";

export function SettingsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage organization profile and preferences
          </p>
        </div>
      </div>

      <Tabs defaultValue="organization" className="w-full">
        <TabsList>
          <TabsTrigger value="organization">
            <Building2 className="mr-2 h-4 w-4" />
            Organization
          </TabsTrigger>
          <TabsTrigger value="branding">
            <Palette className="mr-2 h-4 w-4" />
            Branding
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Profile</CardTitle>
              <CardDescription>
                Update your organization information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="Atlas Humanitarian NGO" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-type">Organization Type</Label>
                  <Input id="org-type" defaultValue="International NGO" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-address">Address</Label>
                <Input id="org-address" defaultValue="123 Humanitarian Way, Capital City" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org-email">Contact Email</Label>
                  <Input id="org-email" type="email" defaultValue="contact@atlashumanitarian.org" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-phone">Phone Number</Label>
                  <Input id="org-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-description">Description</Label>
                <textarea 
                  id="org-description"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  defaultValue="Atlas Humanitarian NGO works to provide sustainable relief and development assistance to vulnerable communities worldwide."
                />
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>White-Label Branding</CardTitle>
              <CardDescription>
                Customize dashboards and reports with your organization's brand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Organization Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted">
                      <Building2 className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recommended: PNG or SVG, max 2MB
                  </p>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-color">Primary Brand Color</Label>
                    <div className="flex gap-2">
                      <Input id="primary-color" type="color" defaultValue="#4F46E5" className="w-20 h-10" />
                      <Input defaultValue="#4F46E5" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondary-color">Secondary Color</Label>
                    <div className="flex gap-2">
                      <Input id="secondary-color" type="color" defaultValue="#10B981" className="w-20 h-10" />
                      <Input defaultValue="#10B981" className="flex-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-domain">Custom Domain (Optional)</Label>
                  <Input id="custom-domain" placeholder="dashboard.yourorganization.org" />
                  <p className="text-sm text-muted-foreground">
                    Configure a custom domain for your branded dashboard
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Branding
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive updates and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Distribution Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when aid distributions are completed
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Survey Responses</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new survey responses are submitted
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Report Deadlines</Label>
                    <p className="text-sm text-muted-foreground">
                      Alerts for upcoming donor report deadlines
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Verification Queue</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when beneficiaries require verification
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly Summary</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive a weekly summary of project activities
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription>
                Manage your Atlas Sanctum subscription
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 bg-indigo-50 border-2 border-indigo-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-indigo-900 mb-0">Atlas Sanctum — NGO Standard</h3>
                      <Badge className="bg-indigo-600">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Billed annually • Save 20%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-indigo-900">$4,788</p>
                    <p className="text-sm text-muted-foreground">/year</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Projects</span>
                  <span className="text-sm">3 active projects</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Beneficiaries</span>
                  <span className="text-sm">10,247 / 10,000 per project</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Next Billing Date</span>
                  <span className="text-sm">December 15, 2025</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Payment Method</span>
                  <span className="text-sm">•••• 4242</span>
                </div>
              </div>

              <Separator />

              <div className="flex gap-2">
                <Button variant="outline">Update Payment Method</Button>
                <Button variant="outline">Download Invoices</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
