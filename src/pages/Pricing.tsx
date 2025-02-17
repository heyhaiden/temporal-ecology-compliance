
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                plan.featured ? 'bg-gray-900 sm:-mx-4 sm:p-10' : 'bg-white'
              }`}
            >
              <h3 className={`text-lg font-semibold leading-8 ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-semibold leading-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                  /month
                </span>
              </p>
              <ul className={`mt-8 space-y-3 text-sm leading-6 ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className={`h-6 w-5 flex-none ${plan.featured ? 'text-white' : 'text-emerald-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full ${
                  plan.featured
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const pricingPlans = [
  {
    name: "Basic",
    description: "Essential features for small projects",
    price: "£99",
    featured: false,
    features: [
      "Up to 5 project sites",
      "Basic reporting templates",
      "Email support",
      "30-day data retention",
    ],
  },
  {
    name: "Professional",
    description: "Advanced features for growing organizations",
    price: "£299",
    featured: true,
    features: [
      "Unlimited project sites",
      "Advanced reporting suite",
      "24/7 priority support",
      "1-year data retention",
      "Custom report branding",
      "API access",
    ],
  },
];

export default Pricing;
