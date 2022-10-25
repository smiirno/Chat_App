import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat, IMessage, IUser} from "../../data/interfaces";


interface ChatsState {
    chats: IChat[],
}

const initialState: ChatsState = {
    chats: [
        {
            id: 0,
            numberOfRoom: 1337,
            password: 'string',
            users: [],
            messages: []
        },
        {
            id: 1,
            numberOfRoom: 1946,
            password: 'string',
            users: [],
            messages: []
        }
    ]
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        createChat (state, action: PayloadAction<IChat>) {
            state.chats.push(action.payload)
        },
        removeChat (state, action: PayloadAction<IChat>) {
            state.chats = state.chats.filter(chat => chat.id !== action.payload.id)
        }
    }
})

export const {createChat, removeChat} = chatsSlice.actions
export default chatsSlice.reducer
