import { BackButton } from "components";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "store";

const Recipe = observer(() => {
  const { recipeStore } = useStore();
  const { selectedRecipe } = toJS(recipeStore);

  return (
    <div>
      {selectedRecipe && (
        <div className="h-screen flex flex-col gap-10">
          <div className="h-64 grid grid-cols-[80px_1fr_80px] grid-rows-[50px_1fr_80px] bg-recipe-poster bg-cover bg-center">
            <BackButton title="to recipe list" />
            <div className="col-start-2 row-start-2 relative p-4 bg-black/50">
              <div className="absolute -bottom-4 left-[40%] px-4 py-[1px] text-black bg-white">
                <h5 className="font-semibold">{"u can do it ♡".toUpperCase()}</h5>
              </div>
              <div className="border-2 border-white p-4">
                <p className="text-5xl text-white">{selectedRecipe.label}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-center uppercase font-semibold text-green-300 mb-8">
              Nutrition
            </h3>
            <div className="flex justify-center gap-10">
              <div>
                <h5 className="font-semibold text-center">
                  {Math.round(
                    (selectedRecipe.calories * 100) / selectedRecipe.totalWeight,
                  )}
                </h5>
                <h5 className="uppercase">calories/100g</h5>
              </div>
              <div>
                <h5 className="font-semibold text-center">{selectedRecipe.totalDaily}</h5>
                <h5 className="uppercase">daily value</h5>
              </div>
            </div>
          </div>

          {selectedRecipe.dietLabels.length && (
            <div>
              <h3 className="text-center uppercase font-semibold text-green-300 mb-8">
                Diet Type
              </h3>

              <h5 className="font-semibold text-center">
                {selectedRecipe.dietLabels.toString()}
              </h5>
            </div>
          )}
          <div className="flex justify-center items-center gap-12">
            <div className="w-fit h-fit border-4 border-white rounded-full overflow-hidden">
              <img src={selectedRecipe.image} alt="recipe" />
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="font-semibold text-green-300">{`${selectedRecipe.ingredientLines.length} Ingredients`}</h3>
              <div className="flex flex-col gap-2">
                {selectedRecipe.ingredientLines.map((ingredient, index) => (
                  <p className="h5" key={`ingredient-${index}`}>
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Recipe;
