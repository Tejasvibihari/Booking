import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentHotel: [],
    storeHotel: [],
    loading: false,
    error: null,
};

export const hotelSlice = createSlice({
    name: 'addHotel',
    initialState,
    reducers: {
        addHotelStart: (state) => {
            state.loading = true;
        },
        addHotelSuccess: (state, actions) => {
            state.currentHotel.push(actions.payload);
            state.loading = false;
        },
        addHotelFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        storeHotelData: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.storeHotel.push(...action.payload);
            } else {
                state.storeHotel.push(action.payload);
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { addHotelStart, addHotelSuccess, storeHotelData, addHotelFailure } = hotelSlice.actions

export default hotelSlice.reducer