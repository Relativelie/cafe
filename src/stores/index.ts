import { Instance, types } from 'mobx-state-tree';
import { RecipeStore } from './recipes';
import { AnalystStore } from './analyst';

export const RootStore = types.model('RootStore', {
  recipeStore: RecipeStore,
  analystStore: AnalystStore,
});

export interface IRootStore extends Instance<typeof RootStore> {}
