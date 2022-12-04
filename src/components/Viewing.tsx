import { SearchingData } from "containers/App";

type ViewingProps = {
  searchingData?: SearchingData[];
};

const Viewing: React.FC<ViewingProps> = ({ searchingData }) => {
  console.log(searchingData, "searchingData");
  return (
    <div className="flex flex-col">
      {searchingData &&
        searchingData.map((recipe, index) => {
          return (
            <div key={index}>
              <p>{recipe.recipe.label}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Viewing;
