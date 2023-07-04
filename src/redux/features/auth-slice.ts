import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { config } from "../../app/helpers";

type InitialState = {
  value: {
    isAuth: boolean;
    user: User;
  };
};
const initialState = {
  value: {
    isAuth: false,
    user: {},
  },
} as InitialState;
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return {
        value: {
          isAuth: false,
          user: null,
        },
      };
    },
    logIn: (
      _,
      action: PayloadAction<{
        username: string;
        full_name: string;
        id: any;
        email: string;
        token: string;
      }>
    ) => {
      return {
        value: {
          isAuth: true,
          user: action.payload,
        },
      };
    },
  },
});


export const { logIn, logOut } = auth.actions;
export default auth.reducer;
