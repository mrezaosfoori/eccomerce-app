import * as types from "../constants/authConstants"
const initialState = {
  userData: null,
  refreshToken: null,
  accessToken: null,
  signInError: null,
  signUpError: [],
  successMessage: null,
  isModeratorOfThisCommunity: false,
  contextAuthData: null,
  trustedAuthContextData: [],
  blockedAuthContextData: [],
  userPreferences: null,
  contextAuthError: null,
};

// Use the initialState as a default value
export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    console.log({payload})

  switch (type) {
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        userData: payload ? payload : null,
        signInError: null,
      };
       case types.SET_USER_DATA:
      return {
        ...state,
        userData: payload ? payload : null,
      };
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
