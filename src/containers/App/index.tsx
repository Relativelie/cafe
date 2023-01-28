import axios from "axios";
import Viewing from "components/Viewing";
import {
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import ErrorBoundaries from "../../components/ErrorBoundary";
// import Searching from "../Recipes/RecipesList";
import config from "config";
import { NotificationToaster } from "components";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { store } from "store";

export type SearchingData =
  {
    recipe: {
      ingredientLines: string[];
      label: string;
      image: string;
    };
  };

function App() {
  // const { t } = useTranslation();
  // const [searchingData, setSearchingData] = useState<SearchingData[]>();
  // const [searchingVal, setSearchingVal] = useState("");
  // console.log(searchingData);
  // const fetch = async () => {
  //   axios
  //     .get(
  //       `${config.service.BASE_RECIPES_URL}&q=avocado&app_id=${config.service.API_RECIPES_ID}&app_key=${config.service.API_RECIPES_KEY}`
  //     )
  //     .then(function (response) {
  //       // handle success
  //       setSearchingData(response.data.hits);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };

  // useEffect(() => {
  //   fetch();
  // }, [searchingVal]);

  return (
    <BrowserRouter>
      <ErrorBoundaries>
        <AppRoutes />
        <NotificationToaster />
      </ErrorBoundaries>
    </BrowserRouter>
  );
}

export default App;
