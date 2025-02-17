
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Clock, Shield, LineChart } from "lucide-react";

const ComplianceReporting = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compliance Reporting Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline your BNG compliance reporting with our automated tools and expert guidance, ensuring accuracy and timely submission.
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
    name: "Automated Compliance Reports",
    description: "Generate comprehensive BNG compliance reports automatically from your monitoring data.",
    icon: FileCheck,
  },
  {
    name: "Real-Time Progress Tracking",
    description: "Monitor your compliance progress in real-time with detailed metrics and insights.",
    icon: Clock,
  },
  {
    name: "Regulatory Updates",
    description: "Stay compliant with automatic updates reflecting the latest regulatory requirements.",
    icon: Shield,
  },
  {
    name: "Performance Analytics",
    description: "Track and analyze your biodiversity net gain achievements over time.",
    icon: LineChart,
  },
];

export default ComplianceReporting;
