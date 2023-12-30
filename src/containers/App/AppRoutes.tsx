import { Navigate, Route, Routes } from 'react-router-dom';

import URLS from 'constants/urls';
import { Analyst } from 'containers/Analyst';
import Layout from 'containers/Layout';
import Recipes from 'containers/Recipes';
import RecipesList from 'containers/Recipes/RecipesList';
import Recipe from 'containers/Recipes/Recipe';
import Home from 'containers/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout />}>
        <Route path={URLS.HOME} element={<Home />} />
        <Route path={URLS.RECIPES.BASE} element={<Recipes />}>
          <Route path={URLS.RECIPES.SEARCH} element={<RecipesList />} />
          <Route path={URLS.RECIPES.RECIPE} element={<Recipe />} />
        </Route>
        <Route path={URLS.ANALYST} element={<Analyst />}></Route>
      </Route>
      <Route path='*' element={<Navigate to={URLS.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;
