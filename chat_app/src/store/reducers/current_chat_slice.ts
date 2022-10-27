import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat} from "../../data/interfaces";


interface CurrentChatState {
    currentChat: IChat,
}

const initialState: CurrentChatState = {
    currentChat: {
        id: 0,
        numberOfRoom: 0,
        password: '',
        users: [],
        messages: []
    }
}

export const currentChatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        selectChat (state, action: PayloadAction<IChat>) {
            state.currentChat.id = action.payload.id
            state.currentChat.password = action.payload.password
            state.currentChat.numberOfRoom = action.payload.numberOfRoom
            state.currentChat.users = action.payload.users
            state.currentChat.messages = action.payload.messages
        }
    }
})

export const {selectChat} = currentChatSlice.actions
export default currentChatSlice.reducer
