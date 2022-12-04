import NavigationPanel from "containers/NavigationPanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavigationPanel />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
