class RecipeEntity {
  label: string;
  image: string;
  uri: string;
  dietLabels: string[];
  healthLabels: string[];
  ingredientLines: string[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: any;
  totalDaily: string;

  constructor(
    label: string,
    image: string,
    uri: string,
    dietLabels: string[],
    healthLabels: string[],
    ingredientLines: string[],
    calories: number,
    totalWeight: number,
    totalTime: number,
    cuisineType: string[],
    mealType: string[],
    dishType: any,
    totalDaily: string,
  ) {
    this.label = label;
    this.image = image;
    this.uri = uri;
    this.dietLabels = dietLabels;
    this.healthLabels = healthLabels;
    this.ingredientLines = ingredientLines;
    this.calories = calories;
    this.totalWeight = totalWeight;
    this.totalTime = totalTime;
    this.cuisineType = cuisineType;
    this.mealType = mealType;
    this.dishType = dishType;
    this.totalDaily = `${Math.round((totalDaily as any)['ENERC_KCAL'].quantity)}%`;
  }

  static create(data: {
    label: string;
    image: string;
    uri: string;
    dietLabels: string[];
    healthLabels: string[];
    ingredientLines: string[];
    calories: number;
    totalWeight: number;
    totalTime: number;
    cuisineType: string[];
    mealType: string[];
    dishType: any;
    totalDaily: string;
  }): RecipeEntity {
    return new RecipeEntity(
      data.label,
      data.image,
      data.uri,
      data.dietLabels,
      data.healthLabels,
      data.ingredientLines,
      data.calories,
      data.totalWeight,
      data.totalTime,
      data.cuisineType,
      data.mealType,
      data.dishType,
      data.totalDaily,
    );
  }
}

export default RecipeEntity;
