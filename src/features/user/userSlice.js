import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    addDataUser: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const { 
  addDataUser,
} = userSlice.actions;

export default userSlice.reducer;