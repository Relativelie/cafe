import { Input } from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes, onChangeFilter } from "store/reducers/recipesReducer/reducer";
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

  const debouncedVal = useDebounce<string>(filters.q, 1000);



  return (
    <div className="h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
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
