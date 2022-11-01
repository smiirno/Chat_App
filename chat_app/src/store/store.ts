import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage'
import currentUserReducer from './reducers/user_slice';
import chatsReducer from './reducers/chats_slice';


const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth', 'chats']
}

const authPersistConfig = {
    key: 'auth',
    storage: storageSession
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, currentUserReducer),
    chats: chatsReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            })
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
