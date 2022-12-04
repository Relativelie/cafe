import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RecipesRes } from "services/recipes/models";
import { getRecipes } from "services/recipes/recipes";

type SearchingProps = {
  setSearchingVal?: Dispatch<SetStateAction<string>>;
  searchingVal?: string;
};

const SearchingResults: React.FC<SearchingProps> = ({
  setSearchingVal,
  searchingVal,
}) => {
  const [data, setData] = useState<RecipesRes>();
  const location = useLocation();
  const filters = location.state !== null ? location.state : undefined;
  console.log(filters);

  useEffect(() => {
    getRecipes(filters).then(res => setData(res))
  }, [filters]);

  // const handleInputChange = (newVal: string) => {
  //   setSearchingVal(newVal);
  // };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[minmax(200px,_600px)] justify-center">
        {/* <Input
          curVal={searchingVal}
          handleInputChange={handleInputChange}
          leftIcon={<SearchIcon />}
        /> */}
      </div>
    </div>
  );
};

export default SearchingResults;
