import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDocument } from "../../../../../types";

// Define the type for the payload of each action
type SetUserPayload = UserDocument | null;
type SetLoadingPayload = boolean;
type SetErrorPayload = string | null;

export type AuthState = {
  user: UserDocument | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  isLoading: true,
  error: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<SetUserPayload>) {
      state.user = action.payload;
      state.isLoading = false;
    },
    setLoading(state, action: PayloadAction<SetLoadingPayload>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<SetErrorPayload>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
