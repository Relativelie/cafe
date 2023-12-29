class IngredientEntity {
  label: string;
  measure: string;
  enercKcal: number;
  fat: number;
  protein: number;
  carbs: number;
  mg: number;
  ca: number;
  vitaRae: number;

  constructor(
    label: string,
    measure: string,
    enercKcal: number,
    fat: number,
    protein: number,
    carbs: number,
    mg: number,
    ca: number,
    vitaRae: number,
  ) {
    this.label = label;
    this.measure = measure;
    this.enercKcal = enercKcal;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
    this.mg = mg;
    this.ca = ca;
    this.vitaRae = vitaRae;
  }

  static create(data: any) {
    return new IngredientEntity(
      data.food,
      `${data.quantity} ${data.measure}`,
      data.nutrients['ENERC_KCAL']?.quantity ?? 0,
      data.nutrients['FAT']?.quantity ?? 0,
      data.nutrients['PROCNT']?.quantity ?? 0,
      data.nutrients['CHOCDF']?.quantity ?? 0,
      data.nutrients['MG']?.quantity ?? 0,
      data.nutrients['CA']?.quantity ?? 0,
      data.nutrients['VITA_RAE']?.quantity ?? 0,
    );
  }
}

export default IngredientEntity;
