import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    signUpSuccess: "",
    signUpWarn: "",
    signUpError: "",
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
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
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
            state.signUpError = action.payload;
            state.signUpWarn = "User Already Exists";
        },
        signUpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.signUpError = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure, signUpStart, signUpSuccess, signUpWarning, signUpFailure } = userSlice.actions

export default userSlice.reducer