import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import adminReducer from './admin/adminSlice';
import hotelReducer from './admin/hotelSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import roomSlice from './admin/roomSlice';


const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    hotel: hotelReducer,
    room: roomSlice
});
const persistConfig = {
    key: "root",
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     })
    // }
});

export const persistor = persistStore(store);