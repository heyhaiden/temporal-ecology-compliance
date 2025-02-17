
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HousingDevelopment = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/case-study">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sustainable Housing Development in Surrey
              </h1>
              <div className="mt-6 flex items-center gap-x-4 text-xs">
                <time dateTime="2024-03-16" className="text-gray-500">
                  Mar 16, 2024
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Case Study
                </span>
              </div>
              
              <div className="mt-10">
                <img
                  src="/lovable-uploads/242c82b9-1801-4d36-b154-c2134253ae1e.png"
                  alt="Surrey Housing Development"
                  className="aspect-[16/9] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="mt-16 space-y-8 text-lg leading-8 text-gray-600">
                <p>
                  A major housing developer in Surrey faced the challenge of achieving a 15% biodiversity net gain across their new development project. This case study explores how they utilized Temporal's environmental monitoring solutions to exceed their targets.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Challenge</h2>
                <p>
                  The development project needed to demonstrate measurable biodiversity improvements while maintaining construction efficiency and meeting strict regulatory requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Solution</h2>
                <p>
                  Implementation of Temporal's comprehensive monitoring system included:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Installation of advanced environmental sensors across the site</li>
                  <li>Real-time data collection and analysis</li>
                  <li>Automated compliance reporting</li>
                  <li>Integration with existing project management systems</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Results</h2>
                <p>
                  Through the implementation of our solutions, the developer achieved:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>18% biodiversity net gain, exceeding the target by 3%</li>
                  <li>50% reduction in monitoring and reporting time</li>
                  <li>Real-time visibility into environmental impacts</li>
                  <li>Streamlined compliance process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingDevelopment;
