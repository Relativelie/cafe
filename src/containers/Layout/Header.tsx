import URLS from "constants/urls";
import Auth from "containers/Auth";
import { Link } from "react-router-dom";

const routes = [
  {
    path: URLS.RECIPES.BASE,
    title: "Recipes",
  },
];

const Header = () => {
  return (
    <div className="h-14 dark:bg-slate-900/75">
      <div className="fixed top-0 left-0 right-0 flex justify-between mx-2 px-2 py-4 border-b-slate-100 border-b-[0.5px] z-20 dark:bg-slate-900/75">
        <Link to={URLS.HOME} className="h4 font-dance">
          Made with love
        </Link>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Link key={route.path} to={route.path}>
              <h5>{route.title}</h5>
            </Link>
          ))}
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default Header;
