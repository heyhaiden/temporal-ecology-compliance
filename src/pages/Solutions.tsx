
import { CircleDollarSign, Cloud, CpuIcon, FileCheck, LineChart, ShieldCheck } from "lucide-react";

const Solutions = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Integrated Hardware & Software Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive ecosystem combines cutting-edge monitoring devices with powerful software to streamline your BNG compliance process.
            </p>
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Advanced Monitoring Hardware</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  State-of-the-art monitoring devices designed for reliability and accuracy in environmental data collection.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {hardwareFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-emerald-600" />
                        {feature.name}
                      </dt>
                      <dd className="inline ml-1">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-emerald-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div className="relative mx-auto max-w-2xl lg:mx-0">
                  <img
                    src="/placeholder.svg"
                    alt="Monitoring Device"
                    className="w-full rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powerful Software Platform</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Cloud-based software solution that transforms environmental data into actionable insights and compliance reports.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {softwareFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-emerald-600" />
                        {feature.name}
                      </dt>
                      <dd className="inline ml-1">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-emerald-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div className="relative mx-auto max-w-2xl lg:mx-0">
                  <img
                    src="/placeholder.svg"
                    alt="Software Dashboard"
                    className="w-full rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const hardwareFeatures = [
  {
    name: "Precision Sensors",
    description: ": Industry-leading accuracy with our advanced environmental monitoring sensors.",
    icon: CpuIcon,
  },
  {
    name: "Durability",
    description: ": Weather-resistant design built for long-term outdoor deployment.",
    icon: ShieldCheck,
  },
  {
    name: "Real-time Data",
    description: ": Continuous monitoring with instant data transmission to our cloud platform.",
    icon: LineChart,
  },
];

const softwareFeatures = [
  {
    name: "Cloud Platform",
    description: ": Secure, scalable infrastructure for data storage and processing.",
    icon: Cloud,
  },
  {
    name: "Automated Reports",
    description: ": Generate compliance documentation with a single click.",
    icon: FileCheck,
  },
  {
    name: "Cost Efficiency",
    description: ": Reduce manual work and save time with automated workflows.",
    icon: CircleDollarSign,
  },
];

export default Solutions;
