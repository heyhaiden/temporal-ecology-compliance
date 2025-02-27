
import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import Solutions from "@/pages/Solutions";
import CaseStudy from "@/pages/CaseStudy";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Contact from "@/pages/Contact";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import Overview from "@/pages/dashboard/Overview";

// Lazy-loaded dashboard pages
const Classification = lazy(() => import("@/pages/dashboard/Classification"));
const Environment = lazy(() => import("@/pages/dashboard/Environment"));
const Map = lazy(() => import("@/pages/dashboard/Map"));
const AudioLibrary = lazy(() => import("@/pages/dashboard/AudioLibrary"));
const Reports = lazy(() => import("@/pages/dashboard/Reports"));
const Admin = lazy(() => import("@/pages/dashboard/Admin"));

// Company pages
const ForDevelopers = lazy(() => import("@/pages/solutions/ForDevelopers"));
const ForEcologists = lazy(() => import("@/pages/solutions/ForEcologists"));
const ForLandManagers = lazy(() => import("@/pages/solutions/ForLandManagers"));
const ComplianceReporting = lazy(() => import("@/pages/solutions/ComplianceReporting"));
const HabitatMonitoring = lazy(() => import("@/pages/solutions/HabitatMonitoring"));

// Case studies
const HousingDevelopment = lazy(() => import("@/pages/case-studies/HousingDevelopment"));
const InfrastructureProject = lazy(() => import("@/pages/case-studies/InfrastructureProject"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true, 
        element: <Index /> 
      },
      { 
        path: "solutions", 
        element: <Solutions /> 
      },
      { 
        path: "solutions/developers", 
        element: <Suspense fallback={<div>Loading...</div>}><ForDevelopers /></Suspense> 
      },
      { 
        path: "solutions/ecologists", 
        element: <Suspense fallback={<div>Loading...</div>}><ForEcologists /></Suspense> 
      },
      { 
        path: "solutions/land-managers", 
        element: <Suspense fallback={<div>Loading...</div>}><ForLandManagers /></Suspense> 
      },
      { 
        path: "solutions/compliance-reporting", 
        element: <Suspense fallback={<div>Loading...</div>}><ComplianceReporting /></Suspense> 
      },
      { 
        path: "solutions/habitat-monitoring", 
        element: <Suspense fallback={<div>Loading...</div>}><HabitatMonitoring /></Suspense> 
      },
      { 
        path: "case-study", 
        element: <CaseStudy /> 
      },
      { 
        path: "case-studies/housing-development", 
        element: <Suspense fallback={<div>Loading...</div>}><HousingDevelopment /></Suspense> 
      },
      { 
        path: "case-studies/infrastructure-project", 
        element: <Suspense fallback={<div>Loading...</div>}><InfrastructureProject /></Suspense> 
      },
      { 
        path: "pricing", 
        element: <Pricing /> 
      },
      { 
        path: "resources", 
        element: <Resources /> 
      },
      { 
        path: "contact", 
        element: <Contact /> 
      },
      { 
        path: "auth", 
        element: <Auth /> 
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { 
        index: true, 
        element: <Overview /> 
      },
      { 
        path: "classification", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><Classification /></Suspense> 
      },
      { 
        path: "environment", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><Environment /></Suspense> 
      },
      { 
        path: "map", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><Map /></Suspense> 
      },
      { 
        path: "audio-library", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><AudioLibrary /></Suspense> 
      },
      { 
        path: "reports", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><Reports /></Suspense> 
      },
      { 
        path: "admin", 
        element: <Suspense fallback={<div className="p-8">Loading...</div>}><Admin /></Suspense> 
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
