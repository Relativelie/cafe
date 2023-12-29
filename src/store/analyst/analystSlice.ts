import { createSlice } from '@reduxjs/toolkit';

import { analystApi } from '../../services/analyst';
import { AnalystState } from './models/common';

const initialState: AnalystState = {
  ingredients: null,
  totalNutrient: null,
  healthLabels: null,
};

const analystSlice = createSlice({
  name: 'analyst',
  initialState,
  reducers: {
    resetAnalystState(_) {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      analystApi.endpoints.postAnalyst.matchFulfilled,
      (_, action) => action.payload,
    );
  },
});

export const { resetAnalystState } = analystSlice.actions;

export default analystSlice.reducer;
