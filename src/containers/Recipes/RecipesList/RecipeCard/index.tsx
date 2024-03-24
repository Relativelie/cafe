import clsx from 'clsx';
import RecipeEntity from 'store/recipes/models/RecipeEntity';
import { useTheme } from 'theme/themeProvider';
import Labels from './Labels';
import IngredientsCount from './IngredientsCount';
import RecipeDetails from './RecipeDetails';

type RecipeCardProps = {
  recipe: RecipeEntity;
  onClick: (id: string) => void;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const { theme } = useTheme();

  const { image, label, dietLabels, cuisineType, calories, ingredientLines, totalWeight } = recipe;

  return (
    <button
      onClick={() => onClick(recipe.uri)}
      style={{ backgroundColor: theme.colors.defaultInverse }}
      className={clsx(
        theme.hoverBorders.success,
        'min-h-[200px] w-[280px] relative flex flex-col justify-between pb-2 px-2 rounded-3xl border-4 border-transparent cursor-pointer hover:border-4 hover:scale-105 duration-200',
      )}
    >
      <RecipeDetails image={image} label={label} calories={calories} totalWeight={totalWeight} />

      <div className='flex flex-col items-center mt-2'>
        <Labels dietLabels={dietLabels} cuisineType={cuisineType} />
        <IngredientsCount count={ingredientLines.length} />
      </div>
    </button>
  );
};

export default RecipeCard;
