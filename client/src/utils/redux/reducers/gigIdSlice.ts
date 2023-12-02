import { createSlice } from "@reduxjs/toolkit";

const gigId = createSlice({
  name: "gigId",
  initialState: {
    gigId: "",
  },
  reducers: {
    setGigId(state, action) {
      state.gigId = action.payload;
    },
  },
});

export const { setGigId } = gigId.actions;
export default gigId.reducer;
