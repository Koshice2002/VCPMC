import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../actions/authAction";
import { ILogin } from "../../types";

export interface AuthState {
    currentUser: any;
    loading: boolean;
}

const initialState: AuthState = {
    currentUser: null,
    loading: false
}

export const authLogin = createAsyncThunk(
    'auth/login',
    async (user: ILogin) => {
        const { email, password, role } = user;
        return await loginApi(email, password, role);
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Define other reducers here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(authLogin.rejected, (state, action) => {
            state.loading = false;
            // Handle rejection here
        });
    }
});

export default authSlice.reducer;