import URLS from "constants/urls";
import Layout from "containers/Layout";
import SearchingResults from "containers/SearchingResults";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={URLS.HOME} element={<Layout />}>
        <Route path={URLS.SEARCHING_RES} element={<SearchingResults />} />
      </Route>
      <Route path="*" element={<Navigate to={URLS.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;
