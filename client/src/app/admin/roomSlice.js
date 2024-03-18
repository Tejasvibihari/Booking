import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentRoom: [],
    storeRoom: [],
    rLoading: false,
    error: null,
    rSuccess: false,
};

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        addRoomStart: (state) => {
            state.rLoading = true;
            state.rSuccess = false;
        },
        addRoomSuccess: (state, actions) => {
            state.currentRoom.push(actions.payload);
            state.rLoading = false;
            state.rSuccess = true;
        },
        addRoomFailure: (state, action) => {
            state.rLoading = false;
            state.error = action.payload;
            state.rSuccess = false;
        },
        storeRoomData: (state, action) => {
            state.storeRoom = action.payload;
        },
        // storeRoomData: (state, action) => {
        //     if (Array.isArray(action.payload)) {
        //         state.storeRoom.push(...action.payload);
        //     } else {
        //         state.storeRoom.push(action.payload);
        //     }
        // },
        RoomSuccessNotification: (state) => {
            state.rSuccess = true;
            state.rLoading = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addRoomStart, addRoomSuccess, storeRoomData, RoomSuccessNotification, addRoomFailure } = roomSlice.actions

export default roomSlice.reducer