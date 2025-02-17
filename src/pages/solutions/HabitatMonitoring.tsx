import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Signal, Wifi, Database, BarChart, Check } from "lucide-react";

const HabitatMonitoring = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Habitat Monitoring Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your biodiversity monitoring with our advanced AI-powered platform. Get real-time insights and automated analysis for comprehensive habitat management.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">How It Works</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={step.title} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <span className="text-lg font-semibold text-white">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Key Features</h3>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
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

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Why Choose Temporal</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-x-3">
                <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const howItWorks = [
  {
    title: "Deploy Sensors",
    description: "Install our smart monitoring devices across your habitat sites with minimal disruption.",
  },
  {
    title: "Collect Data",
    description: "Automated collection of habitat data including imagery, environmental metrics, and biodiversity indicators.",
  },
  {
    title: "Generate Insights",
    description: "Our AI analyzes the data to provide actionable insights and compliance recommendations.",
  },
];

const features = [
  {
    name: "Real-Time Monitoring",
    description: "24/7 monitoring with advanced sensor systems that capture detailed habitat changes while respecting wildlife.",
    icon: Signal,
  },
  {
    name: "Real-Time Connectivity",
    description: "Instant data transmission to our secure cloud platform, ensuring you never miss critical habitat changes.",
    icon: Wifi,
  },
  {
    name: "Intelligent Data Storage",
    description: "Organized storage system with smart tagging and advanced search capabilities for easy reference.",
    icon: Database,
  },
  {
    name: "Advanced Analytics",
    description: "AI-powered analysis providing trending data and predictive insights for proactive habitat management.",
    icon: BarChart,
  },
];

const benefits = [
  "Reduce monitoring costs by up to 60% through automation",
  "Save hundreds of hours on manual data collection and analysis",
  "Ensure 100% compliance with BNG requirements",
  "Get early warnings about potential habitat issues",
  "Access historical data and trends instantly",
  "Receive expert support from our team of ecologists",
];

export default HabitatMonitoring;
