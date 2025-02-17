
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Signal, Wifi, Database, BarChart } from "lucide-react";

const HabitatMonitoring = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Two deer in natural habitat"
            className="w-full h-[600px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-48">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-medium tracking-tight sm:text-6xl mb-6">
              Smart Habitat Monitoring
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Transform your biodiversity monitoring with AI-powered insights and real-time tracking for better habitat management.
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
              Ready to Transform Your Habitat Monitoring?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Join leading organizations who have simplified their environmental monitoring with our platform.
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
    name: "Real-Time Monitoring",
    description: "Advanced sensor systems that capture detailed habitat changes while respecting wildlife, providing immediate insights into your ecosystem.",
    icon: Signal,
  },
  {
    name: "Seamless Connectivity",
    description: "Instant data transmission ensuring you never miss critical habitat changes, with robust offline capabilities for remote locations.",
    icon: Wifi,
  },
  {
    name: "Intelligent Storage",
    description: "Organized storage system with smart tagging and advanced search capabilities for easy reference and reporting.",
    icon: Database,
  },
  {
    name: "Advanced Analytics",
    description: "AI-powered analysis providing trending data and predictive insights for proactive habitat management decisions.",
    icon: BarChart,
  },
];

export default HabitatMonitoring;
