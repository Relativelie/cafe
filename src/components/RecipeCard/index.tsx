import { Recipe, RecipeType } from "stores/recipes/models";

const parseLabels = (labels: string[]) => {
  return labels.length > 3 ? labels.splice(0, 3) : labels;
};

type RecipeCardProps = {
  recipe: RecipeType;
  onClick: (recipe: RecipeType) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const {
    image,
    label: title,
    dietLabels,
    cuisineType: cousineLabels,
    calories,
    ingredientLines,
    totalWeight,
  } = recipe;

  return (
    <div
      onClick={() => onClick(recipe)}
      className="min-h-[200px] w-[280px] relative flex flex-col justify-between pb-2 px-2 rounded-3xl border-4 border-transparent bg-white cursor-pointer hover:border-green-300 hover:border-4 "
    >
      <>
        <div className="flex justify-end">
          <div className="absolute w-[45%] -top-[15%] left-2 border-4 border-white rounded-full overflow-hidden">
            <img src={image} alt={title} />
          </div>
          <div className="w-2/3 h-24 flex items-center justify-center">
            <p className="text-black font-bold">
              {Math.round((calories * 100) / totalWeight)}
              kcal/100g
            </p>
          </div>
        </div>
        <h5 className="mt-1 text-black text-center font-medium">{title}</h5>
      </>

      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-wrap gap-x-2 ">
          {parseLabels(dietLabels).map((item) => (
            <p key={`${item}-diet-label`} className="text-black">
              #{item.toLowerCase()}
            </p>
          ))}
          {parseLabels(cousineLabels).map((item) => (
            <p key={`${item}-cousine-label`} className="text-black">
              #{item}
            </p>
          ))}
        </div>
        <div className="w-fit px-2 rounded-lg bg-green-300">
          <p className="text-black text-center">
            {ingredientLines.length} INGREDIENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
