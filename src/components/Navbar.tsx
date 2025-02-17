
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/242c82b9-1801-4d36-b154-c2134253ae1e.png"
              alt="Temporal"
              className="h-8 w-auto"
            />
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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-emerald-600 bg-transparent",
                      location.pathname.includes("/solutions") ? "text-emerald-600" : "text-gray-600"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/solutions/environmental-monitoring"
                            className="block p-2 hover:bg-gray-100 rounded-md"
                          >
                            Environmental Monitoring
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/solutions/digital-platform"
                            className="block p-2 hover:bg-gray-100 rounded-md"
                          >
                            Digital Platform
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
