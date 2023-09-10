import React from 'react';
import { IRootStore, RootStore } from 'stores';

export const store = RootStore.create({
  recipeStore: {},
  analystStore: {},
});

const storeContext = React.createContext<IRootStore>(store);
export const StoreProvider = storeContext.Provider;
export const useStore = () => React.useContext(storeContext);
