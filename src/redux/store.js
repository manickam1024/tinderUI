import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./slice";

const store = configureStore({
  reducer: {
    authentication: authreducer,
  },
});

export default store;
