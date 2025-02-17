import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, LineChart, Cloud, FileText } from "lucide-react";

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
                src="/placeholder.svg"
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

      {/* Trusted By Section */}
      <section className="py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Trusted By Industry Leaders
          </h2>
          <div className="mx-auto mt-10 flex animate-carousel">
            <div className="flex space-x-16 min-w-full items-center justify-around">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  className="max-h-12 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  src="/placeholder.svg"
                  alt="Client logo"
                />
              ))}
            </div>
            <div className="flex space-x-16 min-w-full items-center justify-around">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i + 6}
                  className="max-h-12 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  src="/placeholder.svg"
                  alt="Client logo"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col bg-white p-8 shadow-sm ring-1 ring-gray-200 rounded-xl">
                <blockquote className="flex-1">
                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                </blockquote>
                <div className="mt-8 flex items-center gap-x-4">
                  <img
                    src="/placeholder.svg"
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to StreamLine Your BNG Reporting?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Join thousands of satisfied customers who have simplified their environmental compliance process with StreamLine.
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
    name: "Real-Time Analytics",
    description: "Continuous monitoring and analysis of environmental data with instant alerts and notifications.",
    icon: LineChart,
  },
  {
    name: "Cloud Integration",
    description: "Seamless data synchronization and storage with secure cloud-based infrastructure.",
    icon: Cloud,
  },
  {
    name: "Compliance Reports",
    description: "Automated generation of compliance reports following UK biodiversity guidelines.",
    icon: FileText,
  },
];

const testimonials = [
  {
    quote: "StreamLine has revolutionized how we handle our environmental compliance. The automated reporting saves us countless hours each month.",
    author: "Sarah Johnson",
    role: "Environmental Manager",
  },
  {
    quote: "The real-time monitoring capabilities have transformed our ability to respond to environmental changes quickly and effectively.",
    author: "Michael Chen",
    role: "Project Director",
  },
  {
    quote: "The platform's intuitive interface and comprehensive reporting features make it an invaluable tool for our compliance needs.",
    author: "Emma Roberts",
    role: "Sustainability Lead",
  },
];

export default Index;
