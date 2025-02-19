
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code2, GitBranch, Package, Terminal, Database, Code } from "lucide-react";

const ForDevelopers = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="Developer Environment"
            className="w-full h-[600px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-48">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-medium tracking-tight sm:text-6xl mb-6">
              Developer Tools & APIs
            </h1>
            <p className="text-lg leading-8 text-gray-100 mb-8">
              Integrate environmental monitoring data into your applications with our comprehensive API and developer tools.
            </p>
            <div className="mt-8 flex gap-x-6">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get API Key
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="border-2 border-white bg-gray-900/60 text-white hover:bg-gray-900/80">
                  View Documentation
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
    title: "RESTful API",
    description: "Modern REST API with comprehensive documentation and examples.",
    icon: Code
  },
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for popular programming languages.",
    icon: Package
  },
  {
    title: "Version Control",
    description: "Full version control and change management.",
    icon: GitBranch
  },
  {
    title: "CLI Tools",
    description: "Command-line tools for automation and scripting.",
    icon: Terminal
  },
  {
    title: "Data Access",
    description: "Direct access to environmental monitoring data.",
    icon: Database
  },
  {
    title: "Code Examples",
    description: "Ready-to-use code samples and templates.",
    icon: Code2
  }
];

export default ForDevelopers;
