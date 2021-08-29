import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import phonebookReducer from "./phonebook/phonebook-reducers";

const contactsPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: "filter",
};
const persistedReducer = persistReducer(
  contactsPersistConfig,
  phonebookReducer
);
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV !== 'production',
  devTools: true,
});

const persistor = persistStore(store);

export default { store, persistor };
