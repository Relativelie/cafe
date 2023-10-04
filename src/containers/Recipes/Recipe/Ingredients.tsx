import React from 'react';
import { useTheme } from 'theme/themeProvider';

type IngredientsProps = {
  image: string;
  ingredients: Array<string>;
};

const Ingredients: React.FC<IngredientsProps> = ({ image, ingredients }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-12 pb-8 md:pb-0">
      <div
        style={{ borderColor: theme.colors.defaultInverse }}
        className="w-fit h-fit border-4 rounded-full overflow-hidden"
      >
        <img src={image} alt="recipe" />
      </div>
      <div className="flex flex-col gap-8">
        <h3
          style={{ color: theme.colors.success }}
          className="font-semibold"
        >{`${ingredients.length} Ingredients`}</h3>
        <div className="flex flex-col gap-2">
          {ingredients.map((ingredient, index) => (
            <p className="h5" key={`ingredient-${index}`}>
              {ingredient}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
