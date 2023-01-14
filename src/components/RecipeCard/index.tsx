type RecipeCardProps = {
  image: string;
  title: string;
  dietLabels: string[];
  cousineLabels: string[];
  calories: number;
  ingredientsCount: number;
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  dietLabels,
  cousineLabels,
  calories,
  ingredientsCount,
}) => {
  const parseLabels = (labels: string[]) => {
    return labels.length > 3 ? labels.splice(0, 3) : labels;
  };

  return (
    <div className="min-h-[200px] w-[280px] relative flex flex-col justify-between pb-2 px-2 rounded-3xl border-4 border-transparent bg-white cursor-pointer hover:border-green-300 hover:border-4 ">
      <div>
        <div className="flex justify-end">
          <div className="absolute w-[45%] -top-[15%] left-2 border-4 border-white rounded-full overflow-hidden">
            <img src={image} alt={title} />
          </div>
          <div className="w-2/3 h-24 flex items-center justify-center">
            <p className="text-black font-bold">{calories}kcal/100g</p>
          </div>
        </div>
        <h5 className="mt-1 text-black text-center font-medium">{title}</h5>
      </div>

      <div className="flex flex-col items-center mt-2">
        <div className="flex flex-wrap gap-x-2 ">
          {parseLabels(dietLabels).map((item) => (
            <p className="text-black">#{item.toLowerCase()}</p>
          ))}
          {parseLabels(cousineLabels).map((item) => (
            <p className="text-black">#{item}</p>
          ))}
        </div>
        <div className="w-fit px-2 rounded-lg bg-green-300">
          <p className="text-black text-center">
            {ingredientsCount} INGREDIENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
