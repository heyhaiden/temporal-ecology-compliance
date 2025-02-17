
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Wifi, Database, BarChart } from "lucide-react";

const HabitatMonitoring = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Habitat Monitoring Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Advanced monitoring systems designed specifically for biodiversity net gain requirements, providing real-time insights into habitat health and development.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
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

        <div className="mt-16 flex justify-center">
          <Link to="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: "High-Resolution Imaging",
    description: "Advanced camera systems for detailed habitat documentation and monitoring.",
    icon: Camera,
  },
  {
    name: "Real-Time Connectivity",
    description: "Wireless connectivity ensures immediate data transmission to our cloud platform.",
    icon: Wifi,
  },
  {
    name: "Data Storage & Analysis",
    description: "Secure cloud storage with advanced analysis tools for habitat assessment.",
    icon: Database,
  },
  {
    name: "Automated Reporting",
    description: "Generate detailed habitat monitoring reports with just a few clicks.",
    icon: BarChart,
  },
];

export default HabitatMonitoring;
