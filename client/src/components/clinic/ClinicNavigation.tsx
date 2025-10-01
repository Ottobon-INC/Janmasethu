import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  UserCheck, 
  BarChart3, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Heart,
  Menu,
  X
} from "lucide-react";

interface NavigationItem {
  key: string;
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { key: "dashboard", href: "/clinic/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { key: "leads", href: "/clinic/leads", icon: Users, label: "Lead Management" },
  { key: "appointments", href: "/clinic/appointments", icon: Calendar, label: "Appointments" },
  { key: "patients", href: "/clinic/patients", icon: UserCheck, label: "Patients" },
  { key: "reports", href: "/clinic/reports", icon: BarChart3, label: "Reports" },
];

interface ClinicNavigationProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export default function ClinicNavigation({ collapsed = false, onCollapsedChange }: ClinicNavigationProps) {
  const [location] = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleToggleCollapse = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      onCollapsedChange?.(!collapsed);
    }
  };

  const handleLogout = () => {
    window.location.href = "/clinic";
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  // Mobile Navigation
  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggleCollapse}
          className="fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-lg md:hidden"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">Samnada Clinic</h2>
                    <p className="text-xs text-gray-500">Management Portal</p>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 p-2 space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location === item.href;
                  
                  return (
                    <Link key={item.key} href={item.href} onClick={handleLinkClick}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start p-3 h-auto transition-all duration-200 ${
                          isActive 
                            ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        data-testid={`nav-${item.key}`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{item.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="p-2 border-t border-gray-200">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="w-full justify-start p-3 h-auto text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  data-testid="nav-logout"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span className="font-medium">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop Navigation
  return (
    <div className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Samnada Clinic</h2>
              <p className="text-xs text-gray-500">Management Portal</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleToggleCollapse}
          className="p-1.5 hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-2 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.href;
          
          return (
            <Link key={item.key} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start p-3 h-auto transition-all duration-200 ${
                  isActive 
                    ? "bg-purple-50 text-purple-700 border-r-2 border-purple-600" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } ${collapsed ? "px-2" : ""}`}
                data-testid={`nav-${item.key}`}
              >
                <Icon className={`w-5 h-5 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-gray-200">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full justify-start p-3 h-auto text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 ${
            collapsed ? "px-2" : ""
          }`}
          data-testid="nav-logout"
        >
          <LogOut className={`w-5 h-5 ${collapsed ? "" : "mr-3"}`} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </Button>
      </div>
    </div>
  );
}