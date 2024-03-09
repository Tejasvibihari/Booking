import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentAdminr: null,
    error: null,
    loading: false,
    adminSignInWarn: null,
    adminSignUpSuccess: null,
    adminSignUpWarn: null,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        adminSignInStart: (state) => {
            state.loading = true;
        },
        adminSignInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        adminSignInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        adminSignInWarning: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.signInWarn = "Incorrect Email or Password";
        },
        adminSignUpStart: (state) => {
            state.loading = true;
        },
        adminSignUpSuccess: (state) => {
            state.loading = false;
            state.error = null;
            state.signUpAlert = "Account created successfully";
        },
        adminSignUpWarning: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.signUpWarn = "Admin Already Exists";
        },
        adminSignUpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
})

// Action creators are generated for each case reducer function
export const { adminSignInStart, adminSignInSuccess, adminSignInWarning, adminSignInFailure, adminSignUpStart, adminSignUpSuccess, adminSignUpWarning, adminSignUpFailure } = adminSlice.actions

export default adminSlice.reducer