
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Cloud, CpuIcon, FileCheck, CircleDollarSign, ShieldCheck } from "lucide-react";

const Solutions = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                Solutions for Environmental Compliance
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Comprehensive solutions combining advanced hardware and intelligent software to streamline your BNG compliance process.
              </p>
              <div className="mt-8 flex gap-x-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Explore Solutions
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
                alt="Solutions Overview"
                className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              Our Solution Suite
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the solution that best fits your environmental compliance needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {solutions.map((solution) => (
              <Link 
                key={solution.name} 
                to={solution.path}
                className="relative group"
              >
                <div className="flex flex-col bg-white p-8 h-full shadow-sm ring-1 ring-gray-200 rounded-xl transition-all duration-200 hover:shadow-lg hover:ring-emerald-200">
                  <div className="mb-6">
                    <solution.icon className="h-12 w-12 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{solution.name}</h3>
                  <p className="mt-4 flex-1 text-sm text-gray-600">{solution.description}</p>
                  <div className="mt-6 flex items-center text-emerald-600 group-hover:text-emerald-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Temporal
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive ecosystem delivers everything you need for successful BNG compliance
            </p>
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

const solutions = [
  {
    name: "Environmental Monitoring",
    description: "Advanced monitoring systems for precise environmental data collection and analysis.",
    icon: LineChart,
    path: "/solutions/environmental-monitoring",
  },
  {
    name: "Digital Platform",
    description: "Comprehensive software solution for managing environmental data and generating compliance reports.",
    icon: Cloud,
    path: "/solutions/digital-platform",
  },
];

const features = [
  {
    name: "Advanced Technology",
    description: "State-of-the-art sensors and monitoring devices for accurate data collection.",
    icon: CpuIcon,
  },
  {
    name: "Automated Reporting",
    description: "Generate comprehensive compliance reports with just a few clicks.",
    icon: FileCheck,
  },
  {
    name: "Cost-Effective",
    description: "Reduce operational costs while maintaining high-quality environmental monitoring.",
    icon: CircleDollarSign,
  },
  {
    name: "Secure & Reliable",
    description: "Enterprise-grade security ensuring your data is protected at all times.",
    icon: ShieldCheck,
  },
  {
    name: "Real-time Insights",
    description: "Monitor and analyze environmental data in real-time for better decision making.",
    icon: LineChart,
  },
  {
    name: "Cloud Integration",
    description: "Seamless integration with our secure cloud infrastructure for data storage and processing.",
    icon: Cloud,
  },
];

export default Solutions;
