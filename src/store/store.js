import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "../features/cards/cardsSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    cards: cardsReducer,
    user: userReducer,
  },
})