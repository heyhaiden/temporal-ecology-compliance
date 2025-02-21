
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, FileCheck, BarChart3, Calendar, Clock, Shield, Database, LineChart, Bell, FileText } from "lucide-react";

const ComplianceReporting = () => {
  return <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-medium mb-4">Smart Compliance Management</div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6 text-gray-900">
                BNG Report Generator Pro
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Streamline your biodiversity net gain reporting with our intelligent platform that automates compliance documentation and provides real-time tracking of your environmental commitments.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>)}
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-2">View Reports</Button>
              </div>
            </div>
            <div>
              <img alt="Compliance Dashboard" className="rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600">
              Our compliance reporting system simplifies the complex process of BNG reporting and tracking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-16">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Reporting Tools</h3>
                <div className="space-y-4">
                  {reportingFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{feature.description}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Analysis Features</h3>
                <div className="space-y-4">
                  {analysisFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{feature.description}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Compliance Management</h3>
                <div className="space-y-4">
                  {complianceFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{feature.description}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Data Management</h3>
                <div className="space-y-4">
                  {dataFeatures.map((feature, index) => <div key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{feature.description}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Simplify Your Compliance Reporting Today
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-8 text-emerald-100 mb-8">
            Join organizations that have streamlined their BNG compliance process with our automated reporting solution.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

const benefits = [
  "Automated Report Generation",
  "Real-time Compliance Tracking",
  "Regulatory Updates Integration"
];

const workflowSteps = [{
  title: "Data Collection",
  description: "Gather environmental metrics and site data automatically",
  icon: Database
}, {
  title: "Analysis",
  description: "Process data through our compliance algorithms",
  icon: BarChart3
}, {
  title: "Report Generation",
  description: "Create comprehensive compliance reports",
  icon: FileCheck
}, {
  title: "Monitoring",
  description: "Track and update compliance status",
  icon: LineChart
}];

const reportingFeatures = [{
  icon: FileText,
  description: "Automated BNG report generation with custom templates"
}, {
  icon: BarChart3,
  description: "Visual data presentation and executive summaries"
}, {
  icon: Clock,
  description: "Historical tracking and version control"
}];

const analysisFeatures = [{
  icon: LineChart,
  description: "Trend analysis and progress tracking"
}, {
  icon: Shield,
  description: "Compliance risk assessment"
}, {
  icon: BarChart3,
  description: "Performance metrics and KPI monitoring"
}];

const complianceFeatures = [{
  icon: Bell,
  description: "Automated deadline reminders and alerts"
}, {
  icon: Calendar,
  description: "Compliance calendar with milestone tracking"
}, {
  icon: Shield,
  description: "Regulatory requirement monitoring"
}];

const dataFeatures = [{
  icon: Database,
  description: "Secure data storage and management"
}, {
  icon: FileCheck,
  description: "Audit trail and change logging"
}, {
  icon: Shield,
  description: "Data validation and quality checks"
}];

export default ComplianceReporting;
