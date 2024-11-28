import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage';

const rootReducer = combineReducers({user: userReducer});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (geDefaultMiddleware) => geDefaultMiddleware({
        serializableCheck: false,
    }), 
})

export const persistor = persistStore(store);