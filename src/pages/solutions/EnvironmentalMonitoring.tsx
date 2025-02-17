
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const EnvironmentalMonitoring = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                Environmental Monitoring Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Advanced monitoring systems designed to track, measure, and analyze environmental changes with precision and reliability.
              </p>
              <div className="mt-8 flex gap-x-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/case-study">
                  <Button size="lg" variant="outline">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Environmental Monitoring"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Monitoring Features
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-xl">
                <div className="mb-6">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 flex-1 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    name: "Real-Time Data Collection",
    description: "Continuous monitoring of environmental parameters with instant data transmission.",
    icon: Leaf,
  },
  {
    name: "Global Coverage",
    description: "Widespread sensor network providing comprehensive environmental insights.",
    icon: Globe,
  },
  {
    name: "Cloud Integration",
    description: "Seamless data synchronization with our secure cloud infrastructure.",
    icon: Cloud,
  },
];

export default EnvironmentalMonitoring;
