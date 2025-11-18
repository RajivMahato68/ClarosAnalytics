import { Menu } from "lucide-react";

interface HeaderProps {
  currentRoute: string;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onMenuClick,
}) => {
  const getPageTitle = (route: string) => {
    switch (route) {
      case "/":
        return "Home";
      case "/data":
        return "Data";
      case "/users":
        return "Users";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex-1 md:flex-none">
          <h1 className="text-xl font-bold text-gray-800 ml-2 md:ml-0">
            {getPageTitle(currentRoute)}
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-sm text-gray-600">
            Welcome back!
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
      </div>
    </header>
  );
};
