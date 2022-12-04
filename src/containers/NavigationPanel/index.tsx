import { Input } from "components";
import URLS from "constants/urls";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipes } from "services/recipes/recipes";
import useDebounce from "utils/useDebounce";
import SearchIcon from "../../assets/svg/search";
import Filters from "./Filters";

type Filters = {
  searchingVal: string;
};

const NavigationPanel = () => {
  const [filters, setFilters] = useState({
    q: "",
  });
  const navigate = useNavigate();

  const debouncedVal = useDebounce<string>(filters.q, 1000);

  useEffect(() => {
    navigate(URLS.SEARCHING_RES, {
      state: filters,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedVal]);

  function handleFilterChange<T>(key: string, value: T) {
    setFilters({ ...filters, [key]: value });
  }
  return (
    <div className="min-w-[200px] max-w-[400px] h-screen flex flex-col gap-6 px-2 pt-2 border-r-[0.5px] border-white/70 bg-white/10">
      <h3 className="font-dance text-center font-medium">Made with love</h3>
      <Input
        curVal={filters.q}
        handleInputChange={(value) => handleFilterChange("q", value)}
        leftIcon={<SearchIcon />}
      />
      <Filters />
    </div>
  );
};

export default NavigationPanel;
