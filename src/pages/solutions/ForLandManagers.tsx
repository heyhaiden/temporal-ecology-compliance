
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Map, BarChart3, Bell, Calendar, Users, Clock } from "lucide-react";

const ForLandManagers = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Land Management"
            className="w-full h-[600px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-48">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-medium tracking-tight sm:text-6xl mb-6">
              Land Management Solutions
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Streamline your land management operations with real-time monitoring and powerful analytics tools.
            </p>
            <div className="mt-8 flex gap-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Schedule Demo
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

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Site Mapping",
    description: "Interactive maps and spatial analysis tools.",
    icon: Map
  },
  {
    title: "Performance Analytics",
    description: "Track and analyze biodiversity metrics.",
    icon: BarChart3
  },
  {
    title: "Alert System",
    description: "Real-time notifications for critical events.",
    icon: Bell
  },
  {
    title: "Scheduling",
    description: "Plan and manage site maintenance activities.",
    icon: Calendar
  },
  {
    title: "Team Management",
    description: "Coordinate staff and contractor activities.",
    icon: Users
  },
  {
    title: "Historical Data",
    description: "Access historical site performance data.",
    icon: Clock
  }
];

export default ForLandManagers;
