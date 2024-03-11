import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    error: null,
    loading: false,
    signInWarn: null,
    signUpSuccess: null,
    signUpWarn: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            state.isAuthenticated = true;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signInWarning: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.signInWarn = "Incorrect Email or Password";
        },
        signUpStart: (state) => {
            state.loading = true;
        },
        signUpSuccess: (state) => {
            state.loading = false;
            state.error = null;
            state.signUpAlert = "Account created successfully";
        },
        signUpWarning: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.signUpWarn = "User Already Exists";
        },
        signUpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInWarning, signInFailure, signUpStart, signUpSuccess, signUpWarning, signUpFailure } = userSlice.actions

export default userSlice.reducer