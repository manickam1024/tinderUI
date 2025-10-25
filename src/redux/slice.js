import { createSlice } from "@reduxjs/toolkit";

const userdatacomponent = createSlice({
  name: "userdataslice",
  initialState: { userdata: "" },
  reducers: {
    adduserdata: (state, action) => {
      state.userdata = action.payload;
    },
  },
});

export default userdatacomponent.reducer;
export const { adduserdata } = userdatacomponent.actions;
