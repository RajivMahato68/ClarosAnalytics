import { useState } from "react";
import { Sidebar } from "./components/SideBar";
import { Header } from "./components/Header";
import { Router } from "./components/Router";

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>("/");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        activeRoute={currentRoute}
        onNavigate={handleNavigate}
        isMobileOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          currentRoute={currentRoute}
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <Router currentRoute={currentRoute} />
        </main>
      </div>
    </div>
  );
};

export default App;
