import URLS from "constants/urls";
import Layout from "containers/Layout";
import SearchingRecipesPage from "containers/Recipes";
import Recipe from "containers/Recipes/Recipe";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const AppRoutes =
  () => {
    return (
      <Routes>
        <Route
          path={
            URLS.HOME
          }
          element={
            <Layout />
          }
        >
          <Route
            path={
              URLS
                .RECIPES
                .BASE
            }
          >
            <Route
              path={
                URLS
                  .RECIPES
                  .BASE
              }
              element={
                <SearchingRecipesPage />
              }
            />
            <Route
              path={
                URLS
                  .RECIPES
                  .RECIPE
              }
              element={
                <Recipe />
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to={
                URLS.HOME
              }
              replace
            />
          }
        />
      </Routes>
    );
  };

export default AppRoutes;
