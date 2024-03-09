import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice';
import adminReducer from './admin/adminSlice';





export default configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     })
    // }
});