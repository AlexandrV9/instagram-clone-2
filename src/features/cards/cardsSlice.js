import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    value: [],
  },
  reducers: {
    addInitialCards: (state, action) => {
      state.value = action.payload;
    },
    addNewCard: (state, action) => {
      state.value.push(action.payload);
    },
  }
})

export const { 
  addInitialCards,
  addNewCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;