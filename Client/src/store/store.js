import { configureStore } from "@reduxjs/toolkit";
import AdminSliceReducer from "./AdminSlice";

export const store = configureStore({
    reducer: {
        Admin : AdminSliceReducer,
    },
})
