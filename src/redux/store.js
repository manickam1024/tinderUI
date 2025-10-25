import { configureStore } from "@reduxjs/toolkit";
import userdatareducer from "./slice";

const store = configureStore({
  reducer: {
    userdatakey: userdatareducer,
  },
});

export default store;
