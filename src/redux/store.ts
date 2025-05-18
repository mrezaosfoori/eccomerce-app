import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk"

const CreateAppStore = async () => {
  try {
    const store = configureStore({
      reducer: rootReducer,
      middleware:[thunk]
    });
    return store;
  } catch (error) {
    console.log({ error });
  }
};

export default CreateAppStore;
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<Return = void> = ThunkAction<
  Return,
  RootState,
  unknown,
  AnyAction
>;
