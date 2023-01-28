import {
  Instance,
  types,
} from "mobx-state-tree";

export enum DietEnum {
  Balanced = "balanced",
  HighFiber = "high-fiber",
  HighProtein = "high-protein",
  lowCarb = "low-carb",
  LowFat = "low-fat",
  LowSodium = "low-sodium",
}

export enum CuisineEnum {
  American = "american",
  Asian = "asian",
  British = "british",
  Caribbean = "caribbean",
  CentralEurope = "central europe",
  Chinese = "chinese",
  EasternEurope = "eastern europe",
  French = "french",
  Greek = "greek",
  Indian = "indian",
  Italian = "italian",
  Japanese = "japanese",
  Korean = "korean",
  Kosher = "kosher",
  Mediterranean = "mediterranean",
  Mexican = "mexican",
  MiddleEastern = "middle eastern",
  Nordic = "nordic",
  SouthAmerican = "south american",
  SouthEastAsian = "south east asian",
  World = "world",
}

const parseFiltersType =
  (enumVal: {
    [
      key: string
    ]: any;
  }) => {
    let dict: any =
      {};
    Object.keys(
      enumVal,
    ).map(
      (key) =>
        (dict[
          enumVal[
            key
          ]
        ] =
          types.boolean),
    );
    return types.model(
      { ...dict },
    );
  };

export const Filter =
  types.model({
    q: types.string,
    diet: parseFiltersType(
      DietEnum,
    ),
    cuisineType:
      parseFiltersType(
        CuisineEnum,
      ),
  });

export type FilterType =
  Instance<
    typeof Filter
  >;

export enum AllFiltersENUM {
  Search = "q",
  Diet = "diet",
  CuisineType = "cuisineType",
}

export enum AllFiltersTitlesENUM {
  Diet = "Diet",
  CuisineType = "Cuisine",
}

export const checkboxFiltersValues =
  {
    [AllFiltersENUM.CuisineType]:
      CuisineEnum,
    [AllFiltersENUM.Diet]:
      DietEnum,
  };

enum ImageSizeENUM {
  THUMBNAIL = "THUMBNAIL",
  SMALL = "SMALL",
  REGULAR = "REGULAR",
  LARGE = "LARGE",
}

const ImageModel =
  types.model({
    url: types.string,
    width:
      types.number,
    height:
      types.number,
  });

export const Recipe =
  types.model({
    label:
      types.string,

    // uri: types.string,
    image:
      types.string,
    // images: types.model({
    //   THUMBNAIL: ImageModel,
    //   SMALL: ImageModel,
    //   REGULAR: ImageModel,
    //   LARGE: ImageModel,
    // }),
    // source: types.string,
    // url: types.string,
    // shareAs: types.string,
    // yield: types.number,
    dietLabels:
      types.array(
        types.string,
      ),
    healthLabels:
      types.array(
        types.string,
      ),
    // cautions: types.frozen(),
    ingredientLines:
      types.array(
        types.string,
      ),
    // ingredients: types.frozen(),

    calories:
      types.number,
    totalWeight:
      types.number,
    totalTime:
      types.number,

    cuisineType:
      types.array(
        types.string,
      ),
    mealType:
      types.array(
        types.string,
      ),
    dishType:
      types.frozen(),
    // digest: types.frozen(),
    // totalDaily: types.frozen(),
    // totalNutrients: types.frozen(),
  });

export type RecipeType =
  Instance<
    typeof Recipe
  >;

export type RecipeResponse =
  {
    from: number;
    to: number;
    count: number;
    _links: {
      self: {
        href: string;
        title: string;
      };
      next: {
        href: string;
        title: string;
      };
    };
    hits: RecipeType[];
  };

// "recipe": {
//   "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_bbfc1a248bd6fe277e35fe01027de91f",
//   "label": "Naomi Duguid's Fried Noodles",
//   "image": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEgBmnMws74aINBUXqwRFX%2BVaLxSvU4P%2FztFvU0XAvWDAiBvIe%2BqpNFA2H2cyz%2BYU94IEL9iAA3cgq40jrD8TLkTxCrVBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjjtYffnRgp09yFMPKqkE5nmZf%2B4%2Btleq8en8V7UqJ7CYjFtXLm8NCKLSqC0jOrQFReU3M7LLtfddu2JEQZdn7lt4a6%2B9PuLfyz7Wuzy5BRtJk%2BZr%2FE2AoUHuATStAMr9g7LPJ%2F9WxgqfMLGkJPe0ZIULKRMYNeFqSxlW2h%2BSlTJJiblfnSQwgu8OPZcIRqW8IDNTySh7xKPbbnX4ScC%2FQairFioIWNniYwhBK518UxZ1CxpL6DiuZJsMUWoVdeU%2BKwy6n78HmaHBtgjejSU3HzesBoyw%2FBXRT4xP9FyT%2BSBejeSnsHpWPk%2Fr2DTD3XLLupXupCsN%2BZ6W9rJ7KOer16fRBSglTxQdKDE7sYysYl3HFmaRtl31DrDrzby%2BbESGqsIdkXaR3fFxsiMbL5O3IMGrp0y18Z9PkJTUKINKbmsO9DlaGXjVpun%2FPRcjfshC4YS2xq3sxJp37ebs%2BOiJiXLvS4WdALRbOFBDVSACqg53CMMZBeaQVFLUA%2FGdyJ7KGlz3dz1H4XIJqma7wdNUEQmKQNWRUuquoRecbHHNb%2F9eSis8Ld1qVoL70H4dwRyyCd4US0H9oizisZdOao9debZZpFX5JHbMk9Em4H9rvtP2TD%2FKFi0gZlsgDBRPku5TpwBM98g2CJelFbMfMSDpACdHqqRPUIoRhhPFk5iIOhVeuJ4Dd%2B6C35uqUHR9mdFFUysN7ZnhQIxPvV5cpC7HqBFKHYYdj2soxsSVx%2FU9trJnT%2FWspcP8jjCpgcGeBjqqASKe6A3IXh7%2FtmyMsyJy5P58dccHGiTZjOsdiq87%2Fhk0RzuRfQf9UB7GzlC2j3O7tQ8mRif1BTPvBfa1rV6bY9bY1w8B9hxm27es0%2FLoOTAnfVepuHO0%2FwCuaOY1bcu5sTikoqcmpzpzAVW8b0nLBtG3A%2FnUt4pFc%2BrWfMIX5M0U4ULbyz7Wao67cr08Hm%2FOKnfAfEIcq%2FBeaX7TiL5Wp0%2BGTCMtEzjTZBgk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T213604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN7CZUJX5%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65363764d2baa6ed080f6f40ced5b6c79f30d8246e137963ba4a760558c6be24",
//   "images": {
//       "THUMBNAIL": {
//           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEgBmnMws74aINBUXqwRFX%2BVaLxSvU4P%2FztFvU0XAvWDAiBvIe%2BqpNFA2H2cyz%2BYU94IEL9iAA3cgq40jrD8TLkTxCrVBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjjtYffnRgp09yFMPKqkE5nmZf%2B4%2Btleq8en8V7UqJ7CYjFtXLm8NCKLSqC0jOrQFReU3M7LLtfddu2JEQZdn7lt4a6%2B9PuLfyz7Wuzy5BRtJk%2BZr%2FE2AoUHuATStAMr9g7LPJ%2F9WxgqfMLGkJPe0ZIULKRMYNeFqSxlW2h%2BSlTJJiblfnSQwgu8OPZcIRqW8IDNTySh7xKPbbnX4ScC%2FQairFioIWNniYwhBK518UxZ1CxpL6DiuZJsMUWoVdeU%2BKwy6n78HmaHBtgjejSU3HzesBoyw%2FBXRT4xP9FyT%2BSBejeSnsHpWPk%2Fr2DTD3XLLupXupCsN%2BZ6W9rJ7KOer16fRBSglTxQdKDE7sYysYl3HFmaRtl31DrDrzby%2BbESGqsIdkXaR3fFxsiMbL5O3IMGrp0y18Z9PkJTUKINKbmsO9DlaGXjVpun%2FPRcjfshC4YS2xq3sxJp37ebs%2BOiJiXLvS4WdALRbOFBDVSACqg53CMMZBeaQVFLUA%2FGdyJ7KGlz3dz1H4XIJqma7wdNUEQmKQNWRUuquoRecbHHNb%2F9eSis8Ld1qVoL70H4dwRyyCd4US0H9oizisZdOao9debZZpFX5JHbMk9Em4H9rvtP2TD%2FKFi0gZlsgDBRPku5TpwBM98g2CJelFbMfMSDpACdHqqRPUIoRhhPFk5iIOhVeuJ4Dd%2B6C35uqUHR9mdFFUysN7ZnhQIxPvV5cpC7HqBFKHYYdj2soxsSVx%2FU9trJnT%2FWspcP8jjCpgcGeBjqqASKe6A3IXh7%2FtmyMsyJy5P58dccHGiTZjOsdiq87%2Fhk0RzuRfQf9UB7GzlC2j3O7tQ8mRif1BTPvBfa1rV6bY9bY1w8B9hxm27es0%2FLoOTAnfVepuHO0%2FwCuaOY1bcu5sTikoqcmpzpzAVW8b0nLBtG3A%2FnUt4pFc%2BrWfMIX5M0U4ULbyz7Wao67cr08Hm%2FOKnfAfEIcq%2FBeaX7TiL5Wp0%2BGTCMtEzjTZBgk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T213604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN7CZUJX5%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=96935209c639fdb9deda7aa093e5a78fe9bd169a0ce4fc88e6cbbc41a79fd5b4",
//           "width": 100,
//           "height": 100
//       },
//       "SMALL": {
//           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEgBmnMws74aINBUXqwRFX%2BVaLxSvU4P%2FztFvU0XAvWDAiBvIe%2BqpNFA2H2cyz%2BYU94IEL9iAA3cgq40jrD8TLkTxCrVBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjjtYffnRgp09yFMPKqkE5nmZf%2B4%2Btleq8en8V7UqJ7CYjFtXLm8NCKLSqC0jOrQFReU3M7LLtfddu2JEQZdn7lt4a6%2B9PuLfyz7Wuzy5BRtJk%2BZr%2FE2AoUHuATStAMr9g7LPJ%2F9WxgqfMLGkJPe0ZIULKRMYNeFqSxlW2h%2BSlTJJiblfnSQwgu8OPZcIRqW8IDNTySh7xKPbbnX4ScC%2FQairFioIWNniYwhBK518UxZ1CxpL6DiuZJsMUWoVdeU%2BKwy6n78HmaHBtgjejSU3HzesBoyw%2FBXRT4xP9FyT%2BSBejeSnsHpWPk%2Fr2DTD3XLLupXupCsN%2BZ6W9rJ7KOer16fRBSglTxQdKDE7sYysYl3HFmaRtl31DrDrzby%2BbESGqsIdkXaR3fFxsiMbL5O3IMGrp0y18Z9PkJTUKINKbmsO9DlaGXjVpun%2FPRcjfshC4YS2xq3sxJp37ebs%2BOiJiXLvS4WdALRbOFBDVSACqg53CMMZBeaQVFLUA%2FGdyJ7KGlz3dz1H4XIJqma7wdNUEQmKQNWRUuquoRecbHHNb%2F9eSis8Ld1qVoL70H4dwRyyCd4US0H9oizisZdOao9debZZpFX5JHbMk9Em4H9rvtP2TD%2FKFi0gZlsgDBRPku5TpwBM98g2CJelFbMfMSDpACdHqqRPUIoRhhPFk5iIOhVeuJ4Dd%2B6C35uqUHR9mdFFUysN7ZnhQIxPvV5cpC7HqBFKHYYdj2soxsSVx%2FU9trJnT%2FWspcP8jjCpgcGeBjqqASKe6A3IXh7%2FtmyMsyJy5P58dccHGiTZjOsdiq87%2Fhk0RzuRfQf9UB7GzlC2j3O7tQ8mRif1BTPvBfa1rV6bY9bY1w8B9hxm27es0%2FLoOTAnfVepuHO0%2FwCuaOY1bcu5sTikoqcmpzpzAVW8b0nLBtG3A%2FnUt4pFc%2BrWfMIX5M0U4ULbyz7Wao67cr08Hm%2FOKnfAfEIcq%2FBeaX7TiL5Wp0%2BGTCMtEzjTZBgk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T213604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN7CZUJX5%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a06ad2a1006cc1c7374e493c95dff929592a79b13f00586abf4eb6e1e8c55a37",
//           "width": 200,
//           "height": 200
//       },
//       "REGULAR": {
//           "url": "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEgBmnMws74aINBUXqwRFX%2BVaLxSvU4P%2FztFvU0XAvWDAiBvIe%2BqpNFA2H2cyz%2BYU94IEL9iAA3cgq40jrD8TLkTxCrVBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMjjtYffnRgp09yFMPKqkE5nmZf%2B4%2Btleq8en8V7UqJ7CYjFtXLm8NCKLSqC0jOrQFReU3M7LLtfddu2JEQZdn7lt4a6%2B9PuLfyz7Wuzy5BRtJk%2BZr%2FE2AoUHuATStAMr9g7LPJ%2F9WxgqfMLGkJPe0ZIULKRMYNeFqSxlW2h%2BSlTJJiblfnSQwgu8OPZcIRqW8IDNTySh7xKPbbnX4ScC%2FQairFioIWNniYwhBK518UxZ1CxpL6DiuZJsMUWoVdeU%2BKwy6n78HmaHBtgjejSU3HzesBoyw%2FBXRT4xP9FyT%2BSBejeSnsHpWPk%2Fr2DTD3XLLupXupCsN%2BZ6W9rJ7KOer16fRBSglTxQdKDE7sYysYl3HFmaRtl31DrDrzby%2BbESGqsIdkXaR3fFxsiMbL5O3IMGrp0y18Z9PkJTUKINKbmsO9DlaGXjVpun%2FPRcjfshC4YS2xq3sxJp37ebs%2BOiJiXLvS4WdALRbOFBDVSACqg53CMMZBeaQVFLUA%2FGdyJ7KGlz3dz1H4XIJqma7wdNUEQmKQNWRUuquoRecbHHNb%2F9eSis8Ld1qVoL70H4dwRyyCd4US0H9oizisZdOao9debZZpFX5JHbMk9Em4H9rvtP2TD%2FKFi0gZlsgDBRPku5TpwBM98g2CJelFbMfMSDpACdHqqRPUIoRhhPFk5iIOhVeuJ4Dd%2B6C35uqUHR9mdFFUysN7ZnhQIxPvV5cpC7HqBFKHYYdj2soxsSVx%2FU9trJnT%2FWspcP8jjCpgcGeBjqqASKe6A3IXh7%2FtmyMsyJy5P58dccHGiTZjOsdiq87%2Fhk0RzuRfQf9UB7GzlC2j3O7tQ8mRif1BTPvBfa1rV6bY9bY1w8B9hxm27es0%2FLoOTAnfVepuHO0%2FwCuaOY1bcu5sTikoqcmpzpzAVW8b0nLBtG3A%2FnUt4pFc%2BrWfMIX5M0U4ULbyz7Wao67cr08Hm%2FOKnfAfEIcq%2FBeaX7TiL5Wp0%2BGTCMtEzjTZBgk&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230124T213604Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFN7CZUJX5%2F20230124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65363764d2baa6ed080f6f40ced5b6c79f30d8246e137963ba4a760558c6be24",
//           "width": 300,
//           "height": 300
//       }
//   },
//   "source": "Serious Eats",
//   "url": "http://www.seriouseats.com/recipes/2012/10/naomi-duguids-fried-noodles.html",
//   "shareAs": "http://www.edamam.com/recipe/naomi-duguid-s-fried-noodles-bbfc1a248bd6fe277e35fe01027de91f/-/balanced",
//   "yield": 2,
//   "dietLabels": [
//       "Balanced",
//       "Low-Sodium"
//   ],
//   "healthLabels": [
//       "Sugar-Conscious",
//       "Low Potassium",
//       "Kidney-Friendly",
//       "Vegetarian",
//       "Pescatarian",
//       "Dairy-Free",
//       "Tree-Nut-Free",
//       "Soy-Free",
//       "Fish-Free",
//       "Shellfish-Free",
//       "Pork-Free",
//       "Red-Meat-Free",
//       "Crustacean-Free",
//       "Celery-Free",
//       "Mustard-Free",
//       "Sesame-Free",
//       "Lupine-Free",
//       "Mollusk-Free",
//       "Alcohol-Free",
//       "Sulfite-Free",
//       "Kosher"
//   ],
//   "cautions": [],
//   "ingredientLines": [
//       "1 cup dried egg noodles",
//       "Peanut oil, for frying"
//   ],
//   "ingredients": [{
//           "text": "1 cup dried egg noodles",
//           "quantity": 1,
//           "measure": "cup",
//           "food": "egg noodles",
//           "weight": 38,
//           "foodCategory": "grains",
//           "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
//           "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
//       },
//       {
//           "text": "Peanut oil, for frying",
//           "quantity": 0,
//           "measure": null,
//           "food": "Peanut oil",
//           "weight": 0.5167999999999999,
//           "foodCategory": "Oils",
//           "foodId": "food_ackj525b2vo905bisrwjabfanm5t",
//           "image": "https://www.edamam.com/food-img/827/82725f6b015e75a059ba2569c768eb68.jpg"
//       }
//   ],
//   "calories": 196.30800000000002,
//   "totalWeight": 43.7,
//   "totalTime": 20,
//   "cuisineType": [
//       "asian"
//   ],
//   "mealType": [
//       "lunch/dinner"
//   ],
//   "dishType": [
//       "main course"
//   ],
//   "totalNutrients": {
//       "ENERC_KCAL": {
//           "label": "Energy",
//           "quantity": 196.30800000000002,
//           "unit": "kcal"
//       },
//       "FAT": {
//           "label": "Fat",
//           "quantity": 7.3872,
//           "unit": "g"
//       },
//       "FASAT": {
//           "label": "Saturated",
//           "quantity": 1.4117,
//           "unit": "g"
//       },
//       "FATRN": {
//           "label": "Trans",
//           "quantity": 0.02318,
//           "unit": "g"
//       },
//       "FAMS": {
//           "label": "Monounsaturated",
//           "quantity": 3.1091600000000006,
//           "unit": "g"
//       },
//       "FAPU": {
//           "label": "Polyunsaturated",
//           "quantity": 2.32978,
//           "unit": "g"
//       },
//       "CHOCDF": {
//           "label": "Carbs",
//           "quantity": 27.0826,
//           "unit": "g"
//       },
//       "CHOCDF.net": {
//           "label": "Carbohydrates (net)",
//           "quantity": 25.828599999999998,
//           "unit": "g"
//       },
//       "FIBTG": {
//           "label": "Fiber",
//           "quantity": 1.254,
//           "unit": "g"
//       },
//       "SUGAR": {
//           "label": "Sugars",
//           "quantity": 0.7143999999999999,
//           "unit": "g"
//       },
//       "SUGAR.added": {
//           "label": "Sugars, added",
//           "quantity": 0,
//           "unit": "g"
//       },
//       "PROCNT": {
//           "label": "Protein",
//           "quantity": 5.3808,
//           "unit": "g"
//       },
//       "CHOLE": {
//           "label": "Cholesterol",
//           "quantity": 31.92,
//           "unit": "mg"
//       },
//       "NA": {
//           "label": "Sodium",
//           "quantity": 7.98,
//           "unit": "mg"
//       },
//       "CA": {
//           "label": "Calcium",
//           "quantity": 13.3,
//           "unit": "mg"
//       },
//       "MG": {
//           "label": "Magnesium",
//           "quantity": 22.04,
//           "unit": "mg"
//       },
//       "K": {
//           "label": "Potassium",
//           "quantity": 92.72,
//           "unit": "mg"
//       },
//       "FE": {
//           "label": "Iron",
//           "quantity": 1.5255100000000001,
//           "unit": "mg"
//       },
//       "ZN": {
//           "label": "Zinc",
//           "quantity": 0.73017,
//           "unit": "mg"
//       },
//       "P": {
//           "label": "Phosphorus",
//           "quantity": 91.58,
//           "unit": "mg"
//       },
//       "VITA_RAE": {
//           "label": "Vitamin A",
//           "quantity": 6.46,
//           "unit": "µg"
//       },
//       "VITC": {
//           "label": "Vitamin C",
//           "quantity": 0,
//           "unit": "mg"
//       },
//       "THIA": {
//           "label": "Thiamin (B1)",
//           "quantity": 0.43054000000000003,
//           "unit": "mg"
//       },
//       "RIBF": {
//           "label": "Riboflavin (B2)",
//           "quantity": 0.16188,
//           "unit": "mg"
//       },
//       "NIA": {
//           "label": "Niacin (B3)",
//           "quantity": 3.1870600000000002,
//           "unit": "mg"
//       },
//       "VITB6A": {
//           "label": "Vitamin B6",
//           "quantity": 0.08208,
//           "unit": "mg"
//       },
//       "FOLDFE": {
//           "label": "Folate equivalent (total)",
//           "quantity": 140.6,
//           "unit": "µg"
//       },
//       "FOLFD": {
//           "label": "Folate (food)",
//           "quantity": 11.02,
//           "unit": "µg"
//       },
//       "FOLAC": {
//           "label": "Folic acid",
//           "quantity": 76.38,
//           "unit": "µg"
//       },
//       "VITB12": {
//           "label": "Vitamin B12",
//           "quantity": 0.11019999999999999,
//           "unit": "µg"
//       },
//       "VITD": {
//           "label": "Vitamin D",
//           "quantity": 0.11399999999999999,
//           "unit": "µg"
//       },
//       "TOCPHA": {
//           "label": "Vitamin E",
//           "quantity": 1.03493,
//           "unit": "mg"
//       },
//       "VITK1": {
//           "label": "Vitamin K",
//           "quantity": 0.2299,
//           "unit": "µg"
//       },
//       "Sugar.alcohol": {
//           "label": "Sugar alcohol",
//           "quantity": 0,
//           "unit": "g"
//       },
//       "WATER": {
//           "label": "Water",
//           "quantity": 3.4238,
//           "unit": "g"
//       }
//   },
//   "totalDaily": {
//       "ENERC_KCAL": {
//           "label": "Energy",
//           "quantity": 9.815400000000002,
//           "unit": "%"
//       },
//       "FAT": {
//           "label": "Fat",
//           "quantity": 11.364923076923077,
//           "unit": "%"
//       },
//       "FASAT": {
//           "label": "Saturated",
//           "quantity": 7.0584999999999996,
//           "unit": "%"
//       },
//       "CHOCDF": {
//           "label": "Carbs",
//           "quantity": 9.027533333333333,
//           "unit": "%"
//       },
//       "FIBTG": {
//           "label": "Fiber",
//           "quantity": 5.016,
//           "unit": "%"
//       },
//       "PROCNT": {
//           "label": "Protein",
//           "quantity": 10.761599999999998,
//           "unit": "%"
//       },
//       "CHOLE": {
//           "label": "Cholesterol",
//           "quantity": 10.64,
//           "unit": "%"
//       },
//       "NA": {
//           "label": "Sodium",
//           "quantity": 0.3325,
//           "unit": "%"
//       },
//       "CA": {
//           "label": "Calcium",
//           "quantity": 1.33,
//           "unit": "%"
//       },
//       "MG": {
//           "label": "Magnesium",
//           "quantity": 5.247619047619048,
//           "unit": "%"
//       },
//       "K": {
//           "label": "Potassium",
//           "quantity": 1.9727659574468086,
//           "unit": "%"
//       },
//       "FE": {
//           "label": "Iron",
//           "quantity": 8.475055555555556,
//           "unit": "%"
//       },
//       "ZN": {
//           "label": "Zinc",
//           "quantity": 6.6379090909090905,
//           "unit": "%"
//       },
//       "P": {
//           "label": "Phosphorus",
//           "quantity": 13.082857142857144,
//           "unit": "%"
//       },
//       "VITA_RAE": {
//           "label": "Vitamin A",
//           "quantity": 0.7177777777777777,
//           "unit": "%"
//       },
//       "VITC": {
//           "label": "Vitamin C",
//           "quantity": 0,
//           "unit": "%"
//       },
//       "THIA": {
//           "label": "Thiamin (B1)",
//           "quantity": 35.87833333333334,
//           "unit": "%"
//       },
//       "RIBF": {
//           "label": "Riboflavin (B2)",
//           "quantity": 12.452307692307691,
//           "unit": "%"
//       },
//       "NIA": {
//           "label": "Niacin (B3)",
//           "quantity": 19.919125,
//           "unit": "%"
//       },
//       "VITB6A": {
//           "label": "Vitamin B6",
//           "quantity": 6.313846153846153,
//           "unit": "%"
//       },
//       "FOLDFE": {
//           "label": "Folate equivalent (total)",
//           "quantity": 35.15,
//           "unit": "%"
//       },
//       "VITB12": {
//           "label": "Vitamin B12",
//           "quantity": 4.591666666666667,
//           "unit": "%"
//       },
//       "VITD": {
//           "label": "Vitamin D",
//           "quantity": 0.7599999999999999,
//           "unit": "%"
//       },
//       "TOCPHA": {
//           "label": "Vitamin E",
//           "quantity": 6.899533333333333,
//           "unit": "%"
//       },
//       "VITK1": {
//           "label": "Vitamin K",
//           "quantity": 0.19158333333333333,
//           "unit": "%"
//       }
//   },
//   "digest": [{
//           "label": "Fat",
//           "tag": "FAT",
//           "schemaOrgTag": "fatContent",
//           "total": 7.3872,
//           "hasRDI": true,
//           "daily": 11.364923076923077,
//           "unit": "g",
//           "sub": [{
//                   "label": "Saturated",
//                   "tag": "FASAT",
//                   "schemaOrgTag": "saturatedFatContent",
//                   "total": 1.4117,
//                   "hasRDI": true,
//                   "daily": 7.0584999999999996,
//                   "unit": "g"
//               },
//               {
//                   "label": "Trans",
//                   "tag": "FATRN",
//                   "schemaOrgTag": "transFatContent",
//                   "total": 0.02318,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Monounsaturated",
//                   "tag": "FAMS",
//                   "schemaOrgTag": null,
//                   "total": 3.1091600000000006,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Polyunsaturated",
//                   "tag": "FAPU",
//                   "schemaOrgTag": null,
//                   "total": 2.32978,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               }
//           ]
//       },
//       {
//           "label": "Carbs",
//           "tag": "CHOCDF",
//           "schemaOrgTag": "carbohydrateContent",
//           "total": 27.0826,
//           "hasRDI": true,
//           "daily": 9.027533333333333,
//           "unit": "g",
//           "sub": [{
//                   "label": "Carbs (net)",
//                   "tag": "CHOCDF.net",
//                   "schemaOrgTag": null,
//                   "total": 25.828599999999998,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Fiber",
//                   "tag": "FIBTG",
//                   "schemaOrgTag": "fiberContent",
//                   "total": 1.254,
//                   "hasRDI": true,
//                   "daily": 5.016,
//                   "unit": "g"
//               },
//               {
//                   "label": "Sugars",
//                   "tag": "SUGAR",
//                   "schemaOrgTag": "sugarContent",
//                   "total": 0.7143999999999999,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               },
//               {
//                   "label": "Sugars, added",
//                   "tag": "SUGAR.added",
//                   "schemaOrgTag": null,
//                   "total": 0,
//                   "hasRDI": false,
//                   "daily": 0,
//                   "unit": "g"
//               }
//           ]
//       },
//       {
//           "label": "Protein",
//           "tag": "PROCNT",
//           "schemaOrgTag": "proteinContent",
//           "total": 5.3808,
//           "hasRDI": true,
//           "daily": 10.761599999999998,
//           "unit": "g"
//       },
//       {
//           "label": "Cholesterol",
//           "tag": "CHOLE",
//           "schemaOrgTag": "cholesterolContent",
//           "total": 31.92,
//           "hasRDI": true,
//           "daily": 10.64,
//           "unit": "mg"
//       },
//       {
//           "label": "Sodium",
//           "tag": "NA",
//           "schemaOrgTag": "sodiumContent",
//           "total": 7.98,
//           "hasRDI": true,
//           "daily": 0.3325,
//           "unit": "mg"
//       },
//       {
//           "label": "Calcium",
//           "tag": "CA",
//           "schemaOrgTag": null,
//           "total": 13.3,
//           "hasRDI": true,
//           "daily": 1.33,
//           "unit": "mg"
//       },
//       {
//           "label": "Magnesium",
//           "tag": "MG",
//           "schemaOrgTag": null,
//           "total": 22.04,
//           "hasRDI": true,
//           "daily": 5.247619047619048,
//           "unit": "mg"
//       },
//       {
//           "label": "Potassium",
//           "tag": "K",
//           "schemaOrgTag": null,
//           "total": 92.72,
//           "hasRDI": true,
//           "daily": 1.9727659574468086,
//           "unit": "mg"
//       },
//       {
//           "label": "Iron",
//           "tag": "FE",
//           "schemaOrgTag": null,
//           "total": 1.5255100000000001,
//           "hasRDI": true,
//           "daily": 8.475055555555556,
//           "unit": "mg"
//       },
//       {
//           "label": "Zinc",
//           "tag": "ZN",
//           "schemaOrgTag": null,
//           "total": 0.73017,
//           "hasRDI": true,
//           "daily": 6.6379090909090905,
//           "unit": "mg"
//       },
//       {
//           "label": "Phosphorus",
//           "tag": "P",
//           "schemaOrgTag": null,
//           "total": 91.58,
//           "hasRDI": true,
//           "daily": 13.082857142857144,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin A",
//           "tag": "VITA_RAE",
//           "schemaOrgTag": null,
//           "total": 6.46,
//           "hasRDI": true,
//           "daily": 0.7177777777777777,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin C",
//           "tag": "VITC",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": true,
//           "daily": 0,
//           "unit": "mg"
//       },
//       {
//           "label": "Thiamin (B1)",
//           "tag": "THIA",
//           "schemaOrgTag": null,
//           "total": 0.43054000000000003,
//           "hasRDI": true,
//           "daily": 35.87833333333334,
//           "unit": "mg"
//       },
//       {
//           "label": "Riboflavin (B2)",
//           "tag": "RIBF",
//           "schemaOrgTag": null,
//           "total": 0.16188,
//           "hasRDI": true,
//           "daily": 12.452307692307691,
//           "unit": "mg"
//       },
//       {
//           "label": "Niacin (B3)",
//           "tag": "NIA",
//           "schemaOrgTag": null,
//           "total": 3.1870600000000002,
//           "hasRDI": true,
//           "daily": 19.919125,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin B6",
//           "tag": "VITB6A",
//           "schemaOrgTag": null,
//           "total": 0.08208,
//           "hasRDI": true,
//           "daily": 6.313846153846153,
//           "unit": "mg"
//       },
//       {
//           "label": "Folate equivalent (total)",
//           "tag": "FOLDFE",
//           "schemaOrgTag": null,
//           "total": 140.6,
//           "hasRDI": true,
//           "daily": 35.15,
//           "unit": "µg"
//       },
//       {
//           "label": "Folate (food)",
//           "tag": "FOLFD",
//           "schemaOrgTag": null,
//           "total": 11.02,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Folic acid",
//           "tag": "FOLAC",
//           "schemaOrgTag": null,
//           "total": 76.38,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin B12",
//           "tag": "VITB12",
//           "schemaOrgTag": null,
//           "total": 0.11019999999999999,
//           "hasRDI": true,
//           "daily": 4.591666666666667,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin D",
//           "tag": "VITD",
//           "schemaOrgTag": null,
//           "total": 0.11399999999999999,
//           "hasRDI": true,
//           "daily": 0.7599999999999999,
//           "unit": "µg"
//       },
//       {
//           "label": "Vitamin E",
//           "tag": "TOCPHA",
//           "schemaOrgTag": null,
//           "total": 1.03493,
//           "hasRDI": true,
//           "daily": 6.899533333333333,
//           "unit": "mg"
//       },
//       {
//           "label": "Vitamin K",
//           "tag": "VITK1",
//           "schemaOrgTag": null,
//           "total": 0.2299,
//           "hasRDI": true,
//           "daily": 0.19158333333333333,
//           "unit": "µg"
//       },
//       {
//           "label": "Sugar alcohols",
//           "tag": "Sugar.alcohol",
//           "schemaOrgTag": null,
//           "total": 0,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "g"
//       },
//       {
//           "label": "Water",
//           "tag": "WATER",
//           "schemaOrgTag": null,
//           "total": 3.4238,
//           "hasRDI": false,
//           "daily": 0,
//           "unit": "g"
//       }
//   ]
// },
