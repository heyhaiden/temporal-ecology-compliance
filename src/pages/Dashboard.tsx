import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Bird, ThermometerIcon, Map, FileAudio, FileText, Settings, Laptop, CloudSunRain } from "lucide-react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthProvider"; // Import the auth hook

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth(); // Use auth context
  const [userName, setUserName] = useState("Demo User");
  const location = useLocation();
  
  useEffect(() => {
    // If not authenticated and not loading, redirect to login
    if (!loading && !user) {
      navigate('/auth');
    }
    
    // Update username from auth context
    if (user) {
      const displayName = user.fullName || user.email?.split('@')[0] || "User";
      setUserName(displayName);
    }
  }, [user, loading, navigate]);

  // Improved helper function to determine if a link is active
  const isLinkActive = (path) => {
    // For Overview, it should only be active when exactly on /dashboard or /dashboard/
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname === '/dashboard/';
    }
    // For other pages, check for exact match or path starts with
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/35e560b4-c9cc-4388-80b3-722cfa45b123.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            Temporal
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium">{userName}</span>
            <Button variant="ghost" size="sm" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard container with sidebar and main content */}
      <div className="flex pt-16 flex-grow">
        {/* Sidebar */}
        <aside className="w-64 fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 z-40 overflow-y-auto flex flex-col">
          <nav className="p-4 space-y-1 flex-1">
            {mainSidebarItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                  isLinkActive(item.path) 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          {/* Admin section at the bottom */}
          <div className="p-4 mt-auto">
            <Separator className="my-2" />
            <Link
              to="/dashboard/admin"
              className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                isLinkActive('/dashboard/admin') 
                  ? "bg-emerald-50 text-emerald-600" 
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Admin</span>
            </Link>
          </div>
        </aside>

        {/* Main Content - This will render the child routes */}
        <main className="flex-1 ml-64 pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const mainSidebarItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Devices", icon: Laptop, path: "/dashboard/devices" },
  { name: "Classification", icon: Bird, path: "/dashboard/classification" },
  { name: "Environment", icon: CloudSunRain, path: "/dashboard/environment" },
  { name: "Map", icon: Map, path: "/dashboard/map" },
  { name: "Audio Library", icon: FileAudio, path: "/dashboard/audio-library" },
  { name: "Reports", icon: FileText, path: "/dashboard/reports" },
];

export default Dashboard;