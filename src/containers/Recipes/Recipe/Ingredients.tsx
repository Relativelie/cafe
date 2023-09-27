import React from 'react';

type IngredientsProps = {
  image: string;
  ingredients: Array<string>;
};

const Ingredients: React.FC<IngredientsProps> = ({ image, ingredients }) => {
  return (
    <div className="flex justify-center items-center gap-12 pb-8 md:pb-0">
      <div className="w-fit h-fit border-4 border-white rounded-full overflow-hidden">
        <img src={image} alt="recipe" />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="font-semibold text-green-300">{`${ingredients.length} Ingredients`}</h3>
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
