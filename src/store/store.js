import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logger } from 'redux-logger';
import {  
  persistStore,  
  persistReducer,  
  FLUSH,  
  REHYDRATE,  
  PAUSE,  
  PERSIST,  
  PURGE,  
  REGISTER,
} from 'redux-persist'
  
import storage from 'redux-persist/lib/storage';
  
import currentUser from '../features/currenUser/currentUserSlice';
import loggedInUserSlice from '../features/loggedInUser/loggedInUserSlice';

const persistConfig = {  
  key: 'root',  
  version: 1,  
  storage,
}

const rootReducer = combineReducers({
  currentUser: currentUser,
  loggedInUser: loggedInUserSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
  
const store = configureStore({
  reducer: persistedReducer,
  middleware:
    (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger)
})

const persistor = persistStore(store);

export {
  persistor,
  store,
}