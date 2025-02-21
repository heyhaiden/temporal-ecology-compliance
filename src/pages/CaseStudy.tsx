
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn how organizations are achieving their biodiversity goals with Temporal.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {caseStudies.map((study) => (
              <article key={study.title} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Link to={study.href}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </Link>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={study.date} className="text-gray-500">
                      {study.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {study.category}
                    </span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      <Link to={study.href}>
                        <span className="absolute inset-0" />
                        {study.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{study.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    title: "Sustainable Housing Development in Surrey",
    href: "/case-study/housing-development",
    description: "How a major housing developer achieved 15% biodiversity net gain through strategic planning and monitoring.",
    date: "Mar 16, 2024",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Infrastructure Project Success in Yorkshire",
    href: "/case-study/infrastructure-project",
    description: "Implementing real-time biodiversity monitoring across a major infrastructure project spanning multiple sites.",
    date: "Mar 10, 2024",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
];

export default CaseStudy;
