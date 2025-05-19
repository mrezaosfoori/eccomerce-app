import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";
import { initializeAuth } from "./actions/authActions";

const CreateAppStore = async () => {
  try {
    const store = configureStore({
      reducer: rootReducer,
    });
await store.dispatch(initializeAuth());
    return store;
  } catch (error) {
    console.log({ error });
  }
};

export default CreateAppStore;
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
