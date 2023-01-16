import { Input } from "components";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "store/reducers/recipesReducer/reducer";
import { recipesFilters } from "store/selectors";
import SearchIcon from "../../../assets/svg/search";
import Filters from "./Filters";

const SearchingPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(recipesFilters);

  return (
    <div className="relative w-full">
      <div className="fixed w-fit h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
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
    </div>
  );
};

export default SearchingPanel;
