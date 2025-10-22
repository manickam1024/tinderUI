import { createSlice } from "@reduxjs/toolkit";

const authentication = createSlice({
  name: "authentication",
  initialState: { username: "", token: "" },
  reducers: {
    addcredentials: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export default authentication.reducer;
export const { addcredentials } = authentication.actions;
