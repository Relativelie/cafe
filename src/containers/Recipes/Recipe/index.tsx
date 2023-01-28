import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "store";

const Recipe =
  observer(() => {
    const {
      recipeStore,
    } = useStore();
    const {
      filters,
      isLoading,
      selectedRecipe,
    } = toJS(
      recipeStore,
    );
    const {
      loadRecipes,
    } = recipeStore;
    console.log(
      selectedRecipe,
    );
    return (
      <div>
        {selectedRecipe && (
          <div className="h-screen">
            <div className="w-full h-64 flex items-center justify-center bg-recipe-poster bg-cover bg-center">
              <div className="relative p-4 bg-black/40">
                <div className="absolute -bottom-4 left-[35%] px-4 py-[1px] text-black bg-white">
                  <h5 className="font-semibold">
                    {"u can do it ♡".toUpperCase()}
                  </h5>
                </div>
                <div className="border-2 border-white p-4">
                  <p className="text-5xl text-white">
                    {
                      selectedRecipe?.label
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-10 justify-center items-center gap-10">
              <div className="w-fit h-fit border-4 border-white rounded-full overflow-hidden">
                <img
                  src={
                    selectedRecipe?.image
                  }
                  alt="recipe"
                />
              </div>
              <div className="flex flex-col gap-8">
                <h3 className="font-semibold">{`${selectedRecipe?.ingredientLines.length} Ingredients`}</h3>
                <div className="flex flex-col gap-2">
                  {selectedRecipe?.ingredientLines.map(
                    (
                      ingredient,
                      index,
                    ) => (
                      <p
                        className="h5"
                        key={`ingredient-${index}`}
                      >
                        {
                          ingredient
                        }
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

export default Recipe;

// calories
// :
// 3801.9864860000002
// cuisineType
// :
// ['american']
// dietLabels
// :
// (2) ['High-Protein', 'Low-Carb']
// dishType
// :
// ['main course']
// healthLabels
// :
// (23) ['Sugar-Conscious', 'Keto-Friendly', 'Dairy-Free', 'Gluten-Free', 'Wheat-Free', 'Egg-Free', 'Peanut-Free', 'Tree-Nut-Free', 'Soy-Free', 'Fish-Free', 'Shellfish-Free', 'Pork-Free', 'Crustacean-Free', 'Celery-Free', 'Mustard-Free', 'Sesame-Free', 'Lupine-Free', 'Mollusk-Free', 'Alcohol-Free', 'Sulfite-Free', 'FODMAP-Free', 'Kosher', 'Immuno-Supportive']
// image
// :
// "https://edamam-product-images.s3.amazonaws.com/web-img/894/8945e48691bc8c41d18677ae4955e259.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICzKfegA0gm3HfRhOtjbAN10u1pYyf8JSpGCxDktRqVVAiA815xrkZGD3XV2F3PUWRLlKXInKbaQ1UKkIK2GvynWbirMBAgdEAAaDDE4NzAxNzE1MDk4NiIMBKAAQ0IzWSL%2FLHSaKqkEtqGkc1PgBMcp%2BQj%2BIDZUY5%2FUyCWl08sE58zRPkaLSO%2Bck4uOWZ1OSXn3OSTUKaO2Rz%2FcDCW73xqzBEUj8kFp1GMmmvI1od1TqgFcALKBBIhY35zRl1GIibCLa1mVOhh6zs0UcaMqjCdxA1u6Jc8CgbEO%2FG05KaIl3r9dkTkb3VTn18lsWqQxwP%2FDe1Itr%2FuXSYxgbLmQhdMT1zORH3xQEmkYDfy5lSZ8mWaCJ9%2F8lMg5xAltzuwADQdDWH63EcmEQapnolf2lFHTfHyte1XTTdh2Wu%2FhaQ6Ch4LEXQ3VuiPBaV7b6yfUmAgLUf2o7YJrdHSUFyVP%2BqruB1PN5SXNFIM2GB6vgTApUcycUGVny12byNkEagQWj4VzDn1cRN7uC0hR4JEDBODjzF0Siq9vo6ycsfS8pJahZ6vxdLKtCk1AMp8Uz7CrThbSL5duiQu%2FCxNupxdpjZNUgGOdyg9QoRjR9PWEH6P3I%2FSAgCs2Rl4uln0b72fMM8qB6lSwXAfjNnyXW%2F2Qh7R%2BmGcZ%2BPm8%2FKUnycMDENjB%2Fdy7FM0JlSo85h87CMbuYMOXbN1M6GwhbkUe09orSuPZJZzf0hNf7qKwniCRBlsO14GukdaXkzYXznGN%2F1z7KMI8hOm%2FCytgCtadZTxQrQLAjmbawfaqsCIE3tONl1XIWLgit0JEwmJNmS3laJinQ0EHQbkp9%2ByEUvHRTV23T7lwmXmzrrODmbVzVNd31PpQTTDcjcaeBjqqAelIzaT3pFP5lV7fZhht9RKpBtxarU3%2FdRtvLVtpa96L85QRwhTucZOB%2BEZD%2FGNQX7FkJFxwOUSMt%2FPXvcW7vJWU6qDv%2FoPYfBWhQOpUtbB20ey1bq4kiWyYziu1MRSngRNI1T84sW6cHlDuF3kio87mBOIMG96BqNAztnfddqMbdnGzBbqm1pbBb%2FJyDrQ%2FQO5wU50LSAIfjLTSgvWaSQBpQ9a6CQsQFh4I&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230125T203732Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGB2GLZJC%2F20230125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4d2ccda49927d28077eba3f4da368e12f05a85a8dbc09b0d35907b589a735ef"
// ingredientLines
// :
// (5) ['One 6-pound/2.7-kilogram rack of beef', '2 to 3 tablespoons kosher salt', '2 tablespoons canola or olive oil', '2 teaspoons coarsely cracked black pepper', '2 teaspoons coarsely cracked coriander seeds']
// label
// :
// "Grilled and Roasted Beef"
// mealType
// :
// ['lunch/dinner']
// totalTime
// :
// 1433
// totalWeight
// :
// 2768.946994512941
