import { DataPage } from "../pages/DataPage";
import { HomePage } from "../pages/HomePage";
import { SettingsPage } from "../pages/SettingsPage";

export const Router: React.FC<{ currentRoute: string }> = ({
  currentRoute,
}) => {
  switch (currentRoute) {
    case "/":
      return <HomePage />;
    case "/data":
      return <DataPage />;
    case "/settings":
      return <SettingsPage />;
    default:
      return <HomePage />;
  }
};
