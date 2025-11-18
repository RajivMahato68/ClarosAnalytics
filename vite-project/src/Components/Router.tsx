import { DataPage } from "../Pages/DataPage";
import { HomePage } from "../Pages/HomePage";
import { SettingsPage } from "../Pages/SettingsPage";

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
