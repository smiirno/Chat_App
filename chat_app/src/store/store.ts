import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from './reducers/user_slice';
import chatsReducer from './reducers/chats_slice';


const rootReducer = combineReducers({
    currentUserReducer, chatsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
