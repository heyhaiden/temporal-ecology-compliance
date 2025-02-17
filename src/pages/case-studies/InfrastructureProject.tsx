
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const InfrastructureProject = () => {
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
                Infrastructure Project Success in Yorkshire
              </h1>
              <div className="mt-6 flex items-center gap-x-4 text-xs">
                <time dateTime="2024-03-10" className="text-gray-500">
                  Mar 10, 2024
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Case Study
                </span>
              </div>
              
              <div className="mt-10">
                <img
                  src="/lovable-uploads/242c82b9-1801-4d36-b154-c2134253ae1e.png"
                  alt="Yorkshire Infrastructure Project"
                  className="aspect-[16/9] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="mt-16 space-y-8 text-lg leading-8 text-gray-600">
                <p>
                  A major infrastructure project in Yorkshire implemented Temporal's real-time biodiversity monitoring system across multiple sites, revolutionizing their environmental compliance process.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Challenge</h2>
                <p>
                  Managing environmental compliance across multiple construction sites while maintaining project timelines and meeting stringent regulatory requirements.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Solution</h2>
                <p>
                  Temporal provided a comprehensive monitoring solution including:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Multi-site sensor network deployment</li>
                  <li>Centralized data management system</li>
                  <li>Custom compliance reporting tools</li>
                  <li>Mobile monitoring capabilities</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12">The Results</h2>
                <p>
                  The implementation resulted in:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>40% reduction in compliance management time</li>
                  <li>Real-time environmental impact monitoring</li>
                  <li>Improved stakeholder communication</li>
                  <li>Zero compliance violations during the project duration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureProject;
