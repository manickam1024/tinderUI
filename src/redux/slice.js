import { createSlice } from "@reduxjs/toolkit";

const userdatacomponent = createSlice({
  name: "userdataslice",
  initialState: { userdata: "", loggedIn: false },
  reducers: {
    adduserdata: (state, action) => {
      state.userdata = action.payload;
    },
    toggle: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default userdatacomponent.reducer;
export const { adduserdata, toggle } = userdatacomponent.actions;
