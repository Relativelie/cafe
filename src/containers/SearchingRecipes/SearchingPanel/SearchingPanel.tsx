import { Input } from "components";
import URLS from "constants/urls";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "services/recipes/recipes";
import { onChangeFilter } from "store/reducers/recipesReducer/reducer";
import { recipesFilters } from "store/selectors";
import useDebounce from "utils/useDebounce";
import SearchIcon from "../../../assets/svg/search";
import Filters from "./Filters";

type Filters = {
  searchingVal: string;
};

const SearchingPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(recipesFilters);

  return (
    <div className="min-w-[200px] max-w-[400px] h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
      <h3 className="font-dance text-center font-medium">Made with love</h3>
      <Input
        curVal={filters.q}
        handleInputChange={(value) =>
          dispatch(onChangeFilter({ block: "q", value }))
        }
        leftIcon={<SearchIcon />}
      />
      <Filters />
    </div>
  );
};

export default SearchingPanel;
