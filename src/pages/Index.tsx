
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                Empowering Builders With Streamlined BNG Reporting
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Simplify your biodiversity net gain compliance with our automated monitoring and reporting solutions. Built for the UK's evolving environmental regulations.
              </p>
              <div className="mt-8 flex gap-x-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/case-study">
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/242c82b9-1801-4d36-b154-c2134253ae1e.png"
                alt="Monitoring Device"
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
              Advanced Monitoring Features
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
    name: "Real-Time Analytics",
    description: "Continuous monitoring and analysis of environmental data with instant alerts and notifications.",
    icon: Check,
  },
  {
    name: "Cloud Integration",
    description: "Seamless data synchronization and storage with secure cloud-based infrastructure.",
    icon: Check,
  },
  {
    name: "Compliance Reports",
    description: "Automated generation of compliance reports following UK biodiversity guidelines.",
    icon: Check,
  },
];

export default Index;
