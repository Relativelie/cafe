import URLS from 'constants/urls';
import { Analyst } from 'containers/Analyst';
import Layout from 'containers/Layout';
import Recipes from 'containers/Recipes';
import Recipe from 'containers/Recipes/Recipe';
import RecipesList from 'containers/Recipes/RecipesList';
import { Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout />}>
        <Route path={URLS.RECIPES.BASE} element={<Recipes />}>
          <Route path={URLS.RECIPES.SEARCH} element={<RecipesList />} />
          <Route path={URLS.RECIPES.RECIPE} element={<Recipe />} />
        </Route>
        <Route path={URLS.ANALYST} element={<Analyst />}></Route>
      </Route>
      <Route path="*" element={<Navigate to={URLS.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;
