
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Check if the current path is a dashboard path
  const isDashboardPage = location.pathname.startsWith('/dashboard');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* Only show footer if NOT on a dashboard page */}
      {!isDashboardPage && <Footer />}
    </div>
  );
};

export default Layout;
