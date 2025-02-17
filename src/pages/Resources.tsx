
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, Video, Download } from "lucide-react";

const Resources = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources & Guides
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access our comprehensive library of resources to help you understand and implement biodiversity net gain requirements.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <resource.icon className="h-8 w-8 text-emerald-600 mb-4" />
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const resources = [
  {
    title: "Getting Started Guides",
    description: "Essential guides for implementing BNG monitoring",
    icon: FileText,
    items: [
      "BNG Basics: A Comprehensive Guide",
      "Setting Up Your First Project",
      "Understanding Monitoring Requirements",
      "Best Practices for Data Collection",
    ],
  },
  {
    title: "Technical Documentation",
    description: "Detailed technical resources and API documentation",
    icon: Book,
    items: [
      "API Reference Documentation",
      "Integration Guides",
      "Data Export Specifications",
      "Security Best Practices",
    ],
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for using StreamLine",
    icon: Video,
    items: [
      "Platform Overview",
      "Setting Up Monitoring Points",
      "Generating Reports",
      "Advanced Features Tutorial",
    ],
  },
];

export default Resources;
