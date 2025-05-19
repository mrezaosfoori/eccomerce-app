import { account } from "../../lib/appwrite/config";
import * as interfaces from "../../lib/types";
import * as types from "../constants/authConstants";

export const initializeAuth = () => async (dispatch) => {
  try {
    const currentAccount = await account.get();
    if (currentAccount) {
      dispatch(setUserData(currentAccount));
    }
  } catch (error) {
    console.log(error, "getaccount");
  }
};

export const setUserData = (userData) => async (dispatch) => {
  dispatch({ type: types.SET_USER_DATA, payload: userData });
};

export const logoutAction = (navigate) => async (dispatch) => {
  try {
    const session = await account.deleteSession("current");
    console.log(navigate, !!session);
    if (session) {
      dispatch({ type: types.LOGOUT, payload: session });
      navigate("/sign-in");
    }

    return session;
  } catch (error) {
    console.log(error)
  }
};

export const signInAction = (formData, navigate) => async (dispatch) => {
  try {
    const session = await account.createEmailPasswordSession(
      formData.email,
      formData.password
    );
    if (session) {
      dispatch({
        type: types.SIGNIN_SUCCESS,
        payload: session,
      });
      navigate("/");
    }

    return session;
  } catch (error) {
    dispatch({
      type: types.SIGNIN_FAIL,
      playload: types.ERROR_MESSAGE,
    });
    console.log(error, "getaccount");
  }
};
