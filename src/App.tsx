
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import CaseStudy from "./pages/CaseStudy";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import ForDevelopers from "./pages/solutions/ForDevelopers";
import ForLandManagers from "./pages/solutions/ForLandManagers";
import ForEcologists from "./pages/solutions/ForEcologists";
import HabitatMonitoring from "./pages/solutions/HabitatMonitoring";
import ComplianceReporting from "./pages/solutions/ComplianceReporting";
import HousingDevelopment from "./pages/case-studies/HousingDevelopment";
import InfrastructureProject from "./pages/case-studies/InfrastructureProject";
import Dashboard from "./pages/Dashboard";
import Classification from "./pages/Classification";
import Environment from "./pages/Environment";
import Map from "./pages/Map";
import AudioLibrary from "./pages/AudioLibrary";
import Reports from "./pages/Reports";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="auth" element={<Auth />} />
        <Route path="contact" element={<Contact />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/for-developers" element={<ForDevelopers />} />
        <Route path="solutions/for-land-managers" element={<ForLandManagers />} />
        <Route path="solutions/for-ecologists" element={<ForEcologists />} />
        <Route path="solutions/habitat-monitoring" element={<HabitatMonitoring />} />
        <Route path="solutions/compliance-reporting" element={<ComplianceReporting />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="case-studies/housing-development" element={<HousingDevelopment />} />
        <Route path="case-studies/infrastructure-project" element={<InfrastructureProject />} />
        <Route path="resources" element={<Resources />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/classification" element={<Classification />} />
      <Route path="/dashboard/environment" element={<Environment />} />
      <Route path="/dashboard/map" element={<Map />} />
      <Route path="/dashboard/audio" element={<AudioLibrary />} />
      <Route path="/dashboard/reports" element={<Reports />} />
      <Route path="/dashboard/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
