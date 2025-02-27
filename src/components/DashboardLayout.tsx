
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Bird, ThermometerIcon, Map, FileAudio, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Classification", icon: Bird, path: "/dashboard/classification" },
  { name: "Environment", icon: ThermometerIcon, path: "/dashboard/environment" },
  { name: "Map", icon: Map, path: "/dashboard/map" },
  { name: "Audio Library", icon: FileAudio, path: "/dashboard/audio" },
  { name: "Reports", icon: FileText, path: "/dashboard/reports" },
  { name: "Admin", icon: Settings, path: "/dashboard/admin" },
];

interface DashboardLayoutProps {
  children: ReactNode;
  userName?: string;
  onSignOut?: () => void;
}

const DashboardLayout = ({ 
  children, 
  userName = "Demo User", 
  onSignOut 
}: DashboardLayoutProps) => {
  const location = useLocation();
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    if (onSignOut) {
      onSignOut();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/35e560b4-c9cc-4388-80b3-722cfa45b123.png" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
            BatDetect
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium">{userName}</span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard container with sidebar and main content */}
      <div className="flex pt-16 flex-grow">
        {/* Sidebar */}
        <aside className="w-64 fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 z-40 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 w-full px-3 py-2 text-sm rounded-lg ${
                  location.pathname === item.path
                    ? "bg-emerald-50 text-emerald-600" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 pb-16">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
