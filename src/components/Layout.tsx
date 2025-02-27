
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Check if the current path starts with /dashboard
  const isDashboardPage = location.pathname.startsWith('/dashboard');
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboardPage && <Navbar />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isDashboardPage && <Footer />}
    </div>
  );
};

export default Layout;
