
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Clock, Shield, LineChart } from "lucide-react";

const ComplianceReporting = () => {
  return (
    <div className="pt-16">
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
            <h1 className="text-4xl font-medium tracking-tight sm:text-6xl mb-6">
              Compliance Reporting
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Streamline your BNG compliance reporting with our intelligent platform. Generate accurate reports automatically.
            </p>
            <div className="mt-8 flex gap-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/case-study">
                <Button size="lg" variant="outline" className="border-2 border-white bg-gray-900/60 text-white hover:bg-gray-900/80">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl mb-16">
              Key Features
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.name} className="relative overflow-hidden bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <feature.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Streamline Your Compliance Reporting?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Join thousands of satisfied customers who have simplified their environmental compliance process.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    name: "Smart Report Generation",
    description: "Create professional BNG compliance reports in minutes with intelligent templates and automated data population.",
    icon: FileCheck,
  },
  {
    name: "Progress Tracking",
    description: "Monitor compliance status with live dashboards and deadline alerts, ensuring you stay ahead of requirements.",
    icon: Clock,
  },
  {
    name: "Regulatory Compliance",
    description: "Stay up-to-date with changing regulations through automated updates and expert guidance.",
    icon: Shield,
  },
  {
    name: "Performance Analytics",
    description: "Track biodiversity improvements with detailed metrics and visual reports for stakeholder presentations.",
    icon: LineChart,
  },
];

export default ComplianceReporting;
