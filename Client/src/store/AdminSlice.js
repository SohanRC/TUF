import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAdmin: false,
}

const adminSlice = createSlice({
    name: "Admin",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAdmin = true;
        },
        logout: (state, action) => {
            state.isAdmin = false;
        }
    }
})

export default adminSlice.reducer

export const { login, logout } = adminSlice.actions