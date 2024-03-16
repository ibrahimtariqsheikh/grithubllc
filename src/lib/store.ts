// Import necessary functionalities from Redux Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shopReducer from "@/lib/features/shop/shopSlice";

const combinedReducers = combineReducers({
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shop"],
};

const makeConfiguredStore = () =>
  configureStore({
    reducer: combinedReducers,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, combinedReducers);
    let store: any = configureStore({
      reducer: persistedReducer,
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
