
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Clock, Shield, LineChart, Check } from "lucide-react";

const ComplianceReporting = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="Infrastructure and nature"
            className="w-full h-[600px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-48">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Compliance Reporting
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Streamline your BNG compliance reporting with our intelligent platform. Generate accurate reports automatically.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Features Section */}
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
              Key Features
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.name} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-x-3">
                      <feature.icon className="h-6 w-6 text-emerald-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-24 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-x-3">
                  <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: "Smart Report Generation",
    description: "Create professional BNG compliance reports in minutes with intelligent templates.",
    icon: FileCheck,
  },
  {
    name: "Progress Tracking",
    description: "Monitor compliance status with live dashboards and deadline alerts.",
    icon: Clock,
  },
  {
    name: "Regulatory Compliance",
    description: "Stay up-to-date with changing regulations through automated updates.",
    icon: Shield,
  },
  {
    name: "Performance Analytics",
    description: "Track biodiversity improvements with detailed metrics and visual reports.",
    icon: LineChart,
  },
];

const benefits = [
  "75% reduction in reporting time",
  "Zero calculation errors",
  "Audit-ready documentation",
  "Expert compliance team support",
];

export default ComplianceReporting;
