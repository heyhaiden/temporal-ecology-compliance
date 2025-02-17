
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Activity, ArrowRight, Brain, BarChart3, Database, Wifi, Battery, Ruler, Droplets, Wind, AlertTriangle, Smartphone, Shield } from "lucide-react";

const HabitatMonitoring = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-600 font-medium mb-4">AI-Powered Environmental Monitoring</div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6 text-gray-900">
                StreamLine Smart Sensor
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Our advanced environmental sensor combines cutting-edge AI technology with precise monitoring capabilities to revolutionize biodiversity tracking and reporting.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  View Specs
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/lovable-uploads/249881cd-11b1-4d6d-9745-c955bb2ce7b0.png"
                alt="StreamLine Smart Sensor"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600">
              Our smart sensor utilizes advanced AI algorithms to deliver accurate environmental monitoring and reporting.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center mb-16">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Sensor Capabilities</h3>
                <div className="space-y-4">
                  {sensorCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <capability.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{capability.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">AI Features</h3>
                <div className="space-y-4">
                  {aiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{feature.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Power & Connectivity</h3>
                <div className="space-y-4">
                  {powerConnectivity.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{item.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Physical Specifications</h3>
                <div className="space-y-4">
                  {physicalSpecs.map((spec, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <spec.icon className="h-5 w-5 text-emerald-600 mt-1" />
                      <span className="text-gray-600">{spec.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Transform Your Environmental Monitoring Today
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-8 text-emerald-100 mb-8">
            Get started with StreamLine's AI-powered sensor solution and revolutionize your approach to environmental compliance.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-emerald-700">
              Request Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  "AI-Powered Analysis",
  "24/7 Monitoring",
  "Real-time Alerts"
];

const workflowSteps = [
  {
    title: "Data Collection",
    description: "Continuous monitoring of environmental parameters",
    icon: Database
  },
  {
    title: "AI Analysis",
    description: "Advanced processing using machine learning algorithms",
    icon: Brain
  },
  {
    title: "Insights Generation",
    description: "Real-time insights and predictive analytics",
    icon: BarChart3
  },
  {
    title: "Reporting",
    description: "Automated compliance report generation",
    icon: Activity
  }
];

const sensorCapabilities = [
  {
    icon: Ruler,
    description: "Temperature: -40°C to +85°C (±0.1°C)"
  },
  {
    icon: Droplets,
    description: "Humidity: 0-100% RH (±2%)"
  },
  {
    icon: Wind,
    description: "Air Quality: PM2.5, CO2, VOC"
  }
];

const aiFeatures = [
  {
    icon: AlertTriangle,
    description: "Real-time anomaly detection"
  },
  {
    icon: Activity,
    description: "Predictive maintenance alerts"
  },
  {
    icon: Brain,
    description: "Automated pattern recognition"
  }
];

const powerConnectivity = [
  {
    icon: Battery,
    description: "Solar-powered with battery backup"
  },
  {
    icon: Wifi,
    description: "4G LTE & WiFi connectivity"
  },
  {
    icon: Smartphone,
    description: "Bluetooth 5.0 for local access"
  }
];

const physicalSpecs = [
  {
    icon: Shield,
    description: "IP67 weatherproof rating"
  },
  {
    icon: Ruler,
    description: "Dimensions: 15 x 10 x 5 cm"
  },
  {
    icon: Activity,
    description: "Weight: 300g"
  }
];

export default HabitatMonitoring;
