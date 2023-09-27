import { RecipeType } from 'stores/recipes';

const fittedLabels = (labels: string[]) => {
  const fittedLabelCount = 3;
  return labels.length > fittedLabelCount ? labels.splice(0, fittedLabelCount) : labels;
};

type RecipeCardProps = {
  recipe: RecipeType;
  onClick: (recipe: RecipeType) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const {
    image,
    label,
    dietLabels,
    cuisineType,
    calories,
    ingredientLines,
    totalWeight,
  } = recipe;

  return (
    <div
      onClick={() => onClick(recipe)}
      className="min-h-[200px] w-[280px] relative flex flex-col justify-between pb-2 px-2 rounded-3xl border-4 border-transparent bg-white cursor-pointer hover:border-green-300 hover:border-4 hover:scale-105 duration-200"
    >
      <>
        <div className="flex justify-end">
          <div className="absolute w-32 h-32 flex items-center justify-center -top-[15%] left-2 border-4 border-white rounded-full overflow-hidden">
            <img src={image} alt={label} />
          </div>
          <div className="w-3/5 h-24 flex items-center justify-center">
            <p className="text-black font-bold">
              {Math.round((calories * 100) / totalWeight)}
              kcal/100g
            </p>
          </div>
        </div>
        <h5 className="mt-1 text-black text-center font-medium">{label}</h5>
      </>

      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-wrap gap-x-2 ">
          {fittedLabels(dietLabels).map((item) => (
            <p key={`${item}-diet-label`} className="text-black">
              #{item.toLowerCase()}
            </p>
          ))}
          {fittedLabels(cuisineType).map((item) => (
            <p key={`${item}-cousine-label`} className="text-black">
              #{item}
            </p>
          ))}
        </div>
        <div className="w-fit px-2 rounded-lg bg-green-300">
          <p className="text-black text-center">{ingredientLines.length} INGREDIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
