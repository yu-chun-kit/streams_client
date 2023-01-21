import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId: any) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
