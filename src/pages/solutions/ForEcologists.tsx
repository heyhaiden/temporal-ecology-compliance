
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LineChart, FileSpreadsheet, Camera, Leaf, PieChart, Share2 } from "lucide-react";

const ForEcologists = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Ecological Survey"
            className="w-full h-[600px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-48">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-medium tracking-tight sm:text-6xl mb-6">
              Ecological Assessment Tools
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Advanced tools for biodiversity assessment, species monitoring, and habitat analysis.
            </p>
            <div className="mt-8 flex gap-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started
                </Button>
              </Link>
              <Link to="/resources">
                <Button size="lg" variant="outline" className="border-2 border-white bg-gray-900/60 text-white hover:bg-gray-900/80">
                  View Resources
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
    title: "Data Collection",
    description: "Digital tools for field surveys and data collection.",
    icon: FileSpreadsheet
  },
  {
    title: "Species Monitoring",
    description: "Track and analyze species populations.",
    icon: LineChart
  },
  {
    title: "Photo Documentation",
    description: "Capture and organize site photography.",
    icon: Camera
  },
  {
    title: "Habitat Assessment",
    description: "Tools for habitat condition assessment.",
    icon: Leaf
  },
  {
    title: "Biodiversity Metrics",
    description: "Calculate and visualize biodiversity scores.",
    icon: PieChart
  },
  {
    title: "Collaboration",
    description: "Share data and collaborate with team members.",
    icon: Share2
  }
];

export default ForEcologists;
