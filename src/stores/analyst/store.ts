import { SnapshotIn, flow, types } from 'mobx-state-tree';
import { Ingredient, TotalNutrients } from '.';
import { postAnalyst } from 'services/analyst';
import { HttpResponseError } from 'errors/errors';
import toast from 'react-hot-toast';

export const AnalystStore = types
  .model('AnalystStore', {
    ingredients: types.maybeNull(types.array(Ingredient)),
    totalNutrient: types.maybeNull(TotalNutrients),
    healthLabels: types.maybeNull(types.array(types.string)),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const getNutrition = flow(function* (ingredients: Array<string>) {
      try {
        self.isLoading = true;
        const res = yield postAnalyst(ingredients);

        self.ingredients = res.ingredients.length
          ? res.ingredients.map(({ parsed }: any) => convertToIngredient(parsed[0]))
          : null;

        self.totalNutrient = convertToTotalNutrients(res['totalNutrients']);
        self.healthLabels = res['healthLabels'];
      } catch (e) {
        if (e instanceof HttpResponseError) {
          toast.error(e.message);
        } else {
          console.info(e);
        }
      } finally {
        self.isLoading = false;
      }
    });

    const convertToIngredient = (data: any) => {
      return Ingredient.create({
        label: data.food,
        measure: `${data.quantity} ${data.measure}`,
        enercKcal: data.nutrients['ENERC_KCAL'].quantity,
        fat: data.nutrients['FAT'].quantity,
        protein: data.nutrients['PROCNT'].quantity,
        carbs: data.nutrients['CHOCDF'].quantity,
        mg: data.nutrients['MG'].quantity,
        ca: data.nutrients['CA'].quantity,
        vitaRae: data.nutrients['VITA_RAE'].quantity,
      });
    };

    const convertToTotalNutrients = (data: any) => {
      return TotalNutrients.create({
        enercKcal: `${data['ENERC_KCAL'].quantity.toFixed(1)}kcal`,
        vitaRae: `${data['VITA_RAE'].quantity.toFixed(1)}µg`,
        protein: `${data['PROCNT'].quantity.toFixed(1)}g`,
        tocpha: `${data['TOCPHA'].quantity.toFixed(1)}mg`,
        chocdf: `${data['CHOCDF'].quantity.toFixed(1)}g`,
        fat: `${data['FAT'].quantity.toFixed(1)}g`,
        fasat: `${data['FASAT'].quantity.toFixed(1)}g`,
        fatrn: `${data['FATRN'].quantity.toFixed(1)}g`,
        mg: `${data['MG'].quantity.toFixed(1)}mg`,
        ca: `${data['CA'].quantity.toFixed(1)}mg`,
      });
    };

    return {
      getNutrition,
    };
  });

export interface IAnalystStore extends SnapshotIn<typeof AnalystStore> {}
