import SearchingPanel from "containers/SearchingRecipes/SearchingPanel/SearchingPanel";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
