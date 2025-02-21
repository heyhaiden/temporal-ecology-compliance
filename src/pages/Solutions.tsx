
import { CircleDollarSign, Cloud, CpuIcon, FileCheck, LineChart, ShieldCheck, LayoutDashboard, Users, Leaf, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-medium mb-4">Complete BNG Solution Suite</div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6 text-gray-900">
                Integrated Solutions for Environmental Success
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Our comprehensive ecosystem combines cutting-edge monitoring devices with powerful software to streamline your BNG compliance process.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Schedule Demo
                </Button>
                <Link to="/case-study">
                  <Button size="lg" variant="outline" className="border-2">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Solutions Overview"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions By Role */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Solutions by Role</h2>
            <p className="text-gray-600">
              Tailored solutions to meet the needs of every stakeholder in your environmental projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roleBasedSolutions.map((solution, index) => (
              <Link key={index} to={solution.link}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <solution.icon className="h-12 w-12 text-emerald-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="text-emerald-600 font-medium">Learn more →</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Core Products</h2>
            <p className="text-gray-600">
              Powerful tools designed to streamline your environmental compliance workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreProducts.map((product, index) => (
              <Link key={index} to={product.link}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <product.icon className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 text-emerald-600 font-medium">Learn more →</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Transform Your Environmental Compliance?
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-8 text-emerald-100 mb-8">
            Get started with our integrated solutions and revolutionize your approach to biodiversity net gain.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Schedule Demo
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-emerald-700">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const roleBasedSolutions = [
  {
    title: "For Developers",
    description: "Streamline BNG compliance in your development projects with integrated planning and monitoring tools.",
    icon: Code2,
    link: "/solutions/for-developers"
  },
  {
    title: "For Land Managers",
    description: "Comprehensive tools for managing and monitoring biodiversity on your sites.",
    icon: Users,
    link: "/solutions/for-land-managers"
  },
  {
    title: "For Ecologists",
    description: "Advanced tools for biodiversity assessment and habitat analysis.",
    icon: Leaf,
    link: "/solutions/for-ecologists"
  }
];

const coreProducts = [
  {
    title: "Habitat Monitoring",
    description: "Advanced environmental sensor system for real-time habitat tracking and analysis.",
    icon: LayoutDashboard,
    link: "/solutions/habitat-monitoring",
    features: [
      "Real-time environmental monitoring",
      "AI-powered data analysis",
      "Automated alerts and notifications"
    ]
  },
  {
    title: "Compliance Reporting",
    description: "Streamlined BNG reporting and compliance management platform.",
    icon: FileCheck,
    link: "/solutions/compliance-reporting",
    features: [
      "Automated report generation",
      "Real-time compliance tracking",
      "Regulatory updates integration"
    ]
  }
];

export default Solutions;
