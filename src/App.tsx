
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";
import HousingDevelopment from "./pages/case-studies/HousingDevelopment";
import InfrastructureProject from "./pages/case-studies/InfrastructureProject";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HabitatMonitoring from "./pages/solutions/HabitatMonitoring";
import ComplianceReporting from "./pages/solutions/ComplianceReporting";
import ForDevelopers from "./pages/solutions/ForDevelopers";
import ForLandManagers from "./pages/solutions/ForLandManagers";
import ForEcologists from "./pages/solutions/ForEcologists";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/habitat-monitoring" element={<HabitatMonitoring />} />
              <Route path="/solutions/compliance-reporting" element={<ComplianceReporting />} />
              <Route path="/solutions/for-developers" element={<ForDevelopers />} />
              <Route path="/solutions/for-land-managers" element={<ForLandManagers />} />
              <Route path="/solutions/for-ecologists" element={<ForEcologists />} />
              <Route path="/case-study" element={<CaseStudy />} />
              <Route path="/case-study/housing-development" element={<HousingDevelopment />} />
              <Route path="/case-study/infrastructure-project" element={<InfrastructureProject />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
