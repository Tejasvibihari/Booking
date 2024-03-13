import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentHotel: [],
    storeHotel: [],
    hloading: false,
    error: null,
    hsuccess: false,
};

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        addHotelStart: (state) => {
            state.hloading = true;
            state.hsuccess = false;
        },
        addHotelSuccess: (state, actions) => {
            state.currentHotel.push(actions.payload);
            state.hloading = false;
            state.hsuccess = true;
        },
        addHotelFailure: (state, action) => {
            state.hloading = false;
            state.error = action.payload;
            state.hsuccess = false;
        },
        storeHotelData: (state, action) => {
            if (Array.isArray(action.payload)) {
                state.storeHotel.push(...action.payload);
            } else {
                state.storeHotel.push(action.payload);
            }
        },
        hotelSuccessNotification: (state) => {
            state.hsuccess = true;
            state.hloading = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addHotelStart, addHotelSuccess, storeHotelData, hotelSuccessNotification, addHotelFailure } = hotelSlice.actions

export default hotelSlice.reducer