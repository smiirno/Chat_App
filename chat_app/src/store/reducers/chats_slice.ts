import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat, IMessage, IUser} from "../../data/interfaces";


interface ChatsState {
    chats: IChat[],
}

const initialState: ChatsState = {
    chats: [
        // {
        //     id: 1,
        //     numberOfRoom: 1337,
        //     password: 'some password',
        //     users: [],
        //     messages: [
        //         {
        //             id: 0,
        //             owner: {
        //                 id: 0,
        //                 nickname: 'admin',
        //                 password: 'admin'
        //             },
        //             text: 'Привет, как дела?',
        //             date: Date.now()
        //         },
        //         {
        //             id: 1,
        //             owner: {
        //                 id: 1,
        //                 nickname: 'test',
        //                 password: 'test'
        //             },
        //             text: 'Привет, хорошо, как у тебя?',
        //             date: Date.now()
        //         },
        //         {
        //             id: 2,
        //             owner: {
        //                 id: 0,
        //                 nickname: 'admin',
        //                 password: 'admin'
        //             },
        //             text: 'Все отлично!',
        //             date: Date.now()
        //         }
        //     ]
        // },
        // {
        //     id: 2,
        //     numberOfRoom: 1946,
        //     password: 'password',
        //     users: [],
        //     messages: []
        // }
    ]
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
        }
    }
})

export const {addChat, removeChat} = chatsSlice.actions
export default chatsSlice.reducer
