import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import adminReducer from './admin/adminSlice';
import hotelReducer from './admin/hotelSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer,
    hotel: hotelReducer,
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