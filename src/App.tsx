
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import HabitatMonitoring from "./pages/solutions/HabitatMonitoring";
import ComplianceReporting from "./pages/solutions/ComplianceReporting";
import ForDevelopers from "./pages/solutions/ForDevelopers";
import ForLandManagers from "./pages/solutions/ForLandManagers";
import ForEcologists from "./pages/solutions/ForEcologists";
import HousingDevelopment from "./pages/case-studies/HousingDevelopment";
import InfrastructureProject from "./pages/case-studies/InfrastructureProject";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="case-study" element={<CaseStudy />} />
          <Route path="auth" element={<Auth />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="solutions/habitat-monitoring" element={<HabitatMonitoring />} />
          <Route path="solutions/compliance-reporting" element={<ComplianceReporting />} />
          <Route path="solutions/for-developers" element={<ForDevelopers />} />
          <Route path="solutions/for-land-managers" element={<ForLandManagers />} />
          <Route path="solutions/for-ecologists" element={<ForEcologists />} />
          <Route path="case-study/housing-development" element={<HousingDevelopment />} />
          <Route path="case-study/infrastructure-project" element={<InfrastructureProject />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
