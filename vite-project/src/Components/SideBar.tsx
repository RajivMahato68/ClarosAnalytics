import React from "react";
import { X, Home, Database, Settings } from "lucide-react";
interface SidebarProps {
  activeRoute: string;
  onNavigate: (route: string) => void;
  isMobileOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeRoute,
  onNavigate,
  isMobileOpen,
  onClose,
}) => {
  const navigationItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/data", label: "Data", icon: Database },
    { id: "/settings", label: "Settings", icon: Settings },
  ];

  const handleNavigation = (route: string) => {
    onNavigate(route);
    onClose();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-18 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  activeRoute === item.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-lg">
            <div className="flex items-center justify-between h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4">
              <h2 className="text-xl font-bold">Dashboard</h2>
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="py-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                      activeRoute === item.id
                        ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};
