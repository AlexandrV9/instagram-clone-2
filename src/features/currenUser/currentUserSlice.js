import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    value: {
      cards: [],
      userId: '',
    },
  },
  reducers: {
    addCurrentDataUser: (state, action) => {
      state.value = action.payload;
    },
    addNewCard: (state, action) => {
      state.value.cards.push(action.payload);
    },
    addCurrentUserId: (state, action) => {
      state.value.userId = action.payload;
    },
  }
})

export const { 
  addCurrentDataUser,
  addNewCard,
  addCurrentUserId,
} = currentUserSlice.actions;

export default currentUserSlice.reducer;