import { account } from "../../lib/appwrite/";
import * as interfaces from "../../../lib/types";

export async function initializeAuth() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    console.log(error, "getaccount");
  }
}

export const signInAction = (formData:sign, action) => async (dispatch) => {
  console.log(action,dispatch)
  try {
    const session = await account.createEmailPasswordSession(formData);
    console.log({ session });

    return session;

    return session;
  } catch (error) {
    console.log(error, "getaccount");
  }
};
