import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userHotels: [],
    error: null,
    loading: false,
    hotelError: null,
    hotelLoading: false,
    hotelSuccess: null,
};

const hotelSlice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        getHotels: (state, actions) => {
            state.userHotels = actions.payload;
        },
    }
});

export const { getHotels } = hotelSlice.actions
export default hotelSlice.reducer;