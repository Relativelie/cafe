import { clone, flow, SnapshotIn, types } from 'mobx-state-tree'
import { FiltersENUM, Filter, Recipe, RecipeType } from './models'
import { getNextRecipes, getRecipes } from 'services/recipes'
import { HttpResponseError } from 'errors/errors'
import toast from 'react-hot-toast'
import { initializeFilters } from './helpers'

export const RecipeStore = types
  .model('RecipeStore', {
    recipesData: types.maybeNull(types.array(Recipe)),
    filters: types.optional(Filter, initializeFilters()),
    selectedRecipe: types.maybeNull(Recipe),
    isLoading: types.optional(types.boolean, false),
    nextPage: types.maybeNull(types.string),
    likedRecipes: types.optional(types.array(types.string), []),
  })
  .actions((self) => {
    function onChangeFilter<T>(block: FiltersENUM, value: T, blockItemKey?: string) {
      if (!blockItemKey) {
        self.filters = {
          ...self.filters,
          [block]: value,
        }
      } else {
        const blockFilters = clone(self.filters[block]) as object
        self.filters = {
          ...self.filters,
          [block]: {
            ...blockFilters,
            [blockItemKey]: value,
          },
        }
      }
    }

    const onClickRecipe = (recipe: RecipeType | null) => {
      self.selectedRecipe = recipe
    }

    const loadRecipes = flow(function* () {
      try {
        self.isLoading = true
        const res = yield getRecipes(self.filters)
        self.recipesData = res.hits.length
          ? res.hits.map(({ recipe }: any) => convertToRecipe(recipe))
          : null
        self.nextPage = res['_links'].next?.href ?? null
      } catch (e) {
        if (e instanceof HttpResponseError) {
          toast.error(e.message)
        } else {
          console.info(e)
        }
      } finally {
        self.isLoading = false
      }
    })

    const loadNextRecipesList = flow(function* () {
      try {
        self.isLoading = true
        if (!self.nextPage) return

        const res = yield getNextRecipes(self.nextPage)
        if (res.hits.length) {
          self.recipesData?.push(...res.hits.map(({ recipe }: any) => convertToRecipe(recipe)))
        }
        self.nextPage = res['_links'].next?.href ?? null
      } catch (e) {
        if (e instanceof HttpResponseError) {
          toast.error(e.message)
        } else {
          console.info(e)
        }
      } finally {
        self.isLoading = false
      }
    })

    const convertToRecipe = (data: any) => {
      return Recipe.create({
        url: data.url,
        totalDaily: `${Math.round(data.totalDaily.ENERC_KCAL.quantity)}%`,
        label: data.label,
        image: data.image,
        dietLabels: data.dietLabels,
        healthLabels: data.healthLabels,
        ingredientLines: data.ingredientLines,
        calories: data.calories,
        totalWeight: data.totalWeight,
        totalTime: data.totalTime,
        cuisineType: data.cuisineType,
        mealType: data.mealType,
        dishType: data.dishType,
      })
    }

    return {
      onChangeFilter,
      onClickRecipe,
      loadRecipes,
      loadNextRecipesList,
    }
  })

export type IRecipeStore = SnapshotIn<typeof RecipeStore>
