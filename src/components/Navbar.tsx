import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu, Signal, FileCheck } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/35e560b4-c9cc-4388-80b3-722cfa45b123.png"
              alt="Temporal Logo"
              className="h-8 w-auto"
            />
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
                "text-sm font-medium transition-colors hover:text-emerald-600 flex items-center [data-state=open]:text-emerald-600",
                location.pathname.includes("/solutions") ? "text-emerald-600" : "text-gray-600"
              )}>
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuItem>
                  <Link to="/solutions/habitat-monitoring" className="w-full flex items-center space-x-2 py-2">
                    <Signal className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Habitat Monitoring</p>
                      <p className="text-xs text-gray-500">Real-time habitat tracking</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/solutions/compliance-reporting" className="w-full flex items-center space-x-2 py-2">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Compliance Reporting</p>
                      <p className="text-xs text-gray-500">Automated BNG reports</p>
                    </div>
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
            <div className="hidden md:block">
              <Link to="/auth">
                <Button variant="ghost" className="text-sm font-medium text-gray-600 hover:text-emerald-600">
                  Login
                </Button>
              </Link>
            </div>
            <Link to="/contact">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                Get Started
              </Button>
            </Link>
            
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="w-full">
                  <nav className="flex flex-col items-center gap-6 pt-6">
                    <Link
                      to="/"
                      className="text-lg font-medium transition-colors hover:text-emerald-600"
                    >
                      Home
                    </Link>
                    <Link
                      to="/solutions"
                      className="text-lg font-medium transition-colors hover:text-emerald-600"
                    >
                      Solutions
                    </Link>
                    <div className="w-full text-center">
                      <div className="space-y-4">
                        <Link
                          to="/solutions/habitat-monitoring"
                          className="block text-base font-medium text-gray-900 hover:text-emerald-600"
                        >
                          Habitat Monitoring
                        </Link>
                        <Link
                          to="/solutions/compliance-reporting"
                          className="block text-base font-medium text-gray-900 hover:text-emerald-600"
                        >
                          Compliance Reporting
                        </Link>
                      </div>
                    </div>
                    <Link
                      to="/pricing"
                      className="text-lg font-medium transition-colors hover:text-emerald-600"
                    >
                      Pricing
                    </Link>
                    <Link
                      to="/contact"
                      className="text-lg font-medium transition-colors hover:text-emerald-600"
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
