import URLS from "constants/urls";
import Layout from "containers/Layout";
import SearchingRecipesPage from "containers/Recipes";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout />}>
        <Route
          path={URLS.SEARCHING_RECIPES_PAGE}
          element={<SearchingRecipesPage />}
        />
      </Route>
      <Route path="*" element={<Navigate to={URLS.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;
