import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat, IMessage} from "../../data/interfaces";


interface ChatsState {
    chats: IChat[],
}

const initialState: ChatsState = {
    chats: []
}

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        addChat (state, action: PayloadAction<IChat>) {
            state.chats.push(action.payload)
        },
        removeChat (state, action: PayloadAction<IChat>) {
            state.chats = state.chats.filter(chat => chat.id !== action.payload.id)
        },
        updateChatMessages (state, action: PayloadAction<IMessage>) {
            for (let i = 0; i < state.chats.length; i++) {
                if (state.chats[i].numberOfRoom === action.payload.numberOfRoom) {
                    state.chats[i].messages.push(action.payload)
                }
            }
        }
    }
})

export const {addChat, removeChat, updateChatMessages} = chatsSlice.actions
export default chatsSlice.reducer
