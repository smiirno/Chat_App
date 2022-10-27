import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentUserReducer from './reducers/user_slice';
import chatsReducer from './reducers/chats_slice';
import currentChatReducer from './reducers/current_chat_slice';

const rootReducer = combineReducers({
    currentUserReducer, chatsReducer, currentChatReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
