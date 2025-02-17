import { CircleDollarSign, Cloud, CpuIcon, FileCheck, LineChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Solutions = () => {
  return (
    <div className="py-24 sm:py-32">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Integrated Hardware & Software Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive ecosystem combines cutting-edge monitoring devices with powerful software to streamline your BNG compliance process.
          </p>
        </div>

        {/* Hardware Section */}
        <div className="mt-16 sm:mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  Advanced Monitoring Hardware
                </h3>
                <p className="text-gray-600 mb-6">
                  State-of-the-art monitoring devices designed for reliability and accuracy in environmental data collection.
                </p>
                <ul className="space-y-4">
                  {hardwareFeatures.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <div className="mt-8 lg:mt-0">
              <img
                src="/placeholder.svg"
                alt="Monitoring Device"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Software Section */}
        <div className="mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/placeholder.svg"
                alt="Software Dashboard"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>

            <Card className="order-1 lg:order-2 mt-8 lg:mt-0 relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                  Powerful Software Platform
                </h3>
                <p className="text-gray-600 mb-6">
                  Cloud-based software solution that transforms environmental data into actionable insights and compliance reports.
                </p>
                <ul className="space-y-4">
                  {softwareFeatures.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.name}</h4>
                        <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const hardwareFeatures = [
  {
    name: "Precision Sensors",
    description: "Industry-leading accuracy with our advanced environmental monitoring sensors.",
    icon: CpuIcon,
  },
  {
    name: "Durability",
    description: "Weather-resistant design built for long-term outdoor deployment.",
    icon: ShieldCheck,
  },
  {
    name: "Real-time Data",
    description: "Continuous monitoring with instant data transmission to our cloud platform.",
    icon: LineChart,
  },
];

const softwareFeatures = [
  {
    name: "Cloud Platform",
    description: "Secure, scalable infrastructure for data storage and processing.",
    icon: Cloud,
  },
  {
    name: "Automated Reports",
    description: "Generate compliance documentation with a single click.",
    icon: FileCheck,
  },
  {
    name: "Cost Efficiency",
    description: "Reduce manual work and save time with automated workflows.",
    icon: CircleDollarSign,
  },
];

export default Solutions;
