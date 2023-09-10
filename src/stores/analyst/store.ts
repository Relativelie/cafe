import { SnapshotIn, flow, types } from 'mobx-state-tree';
import { Ingredient, TotalNutrients } from '.';
import { postAnalyst } from 'services/analyst';

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
        const res = yield postAnalyst(ingredients);
        if (res.ingredients.length) {
          self.ingredients?.push(
            ...res.map(({ ingredient }: any) => convertToIngredient(ingredient)),
          );
        }
        self.totalNutrient = convertToTotalNutrients(res['totalNutrients']);
        self.healthLabels = res['healthLabels'];
      } finally {
        self.isLoading = false;
      }
    });

    const convertToIngredient = (data: any) => {
      return Ingredient.create({
        label: data.text,
        measure: `${data.parsed[0].quantity} ${data.parsed[0].measure}`,
        enercKcal: data.totalDaily['ENERC_KCAL'].quantity,
        fat: data.totalDaily['FAT'].quantity,
        protein: data.totalDaily['PROCNT'].quantity,
        carbs: data.totalDaily['CHOCDF'].quantity,
      });
    };

    const convertToTotalNutrients = (data: any) => {
      console.log(data);
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
