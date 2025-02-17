
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Temporal
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                location.pathname === "/" ? "text-emerald-600" : "text-gray-600"
              )}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600 flex items-center",
                location.pathname.includes("/solutions") ? "text-emerald-600" : "text-gray-600"
              )}>
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/solutions/habitat-monitoring" className="w-full">
                    Habitat Monitoring
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/solutions/compliance-reporting" className="w-full">
                    Compliance Reporting
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/pricing"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                location.pathname === "/pricing" ? "text-emerald-600" : "text-gray-600"
              )}
            >
              Pricing
            </Link>
            
            <Link
              to="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-600",
                location.pathname === "/contact" ? "text-emerald-600" : "text-gray-600"
              )}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
                Login
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
