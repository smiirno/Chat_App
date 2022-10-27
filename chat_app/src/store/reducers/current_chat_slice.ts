import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChat, IMessage} from "../../data/interfaces";


// interface CurrentChatState {
//     currentChat: IChat,
// }
//
// const initialState: CurrentChatState = {
//     currentChat: {
//         id: 0,
//         numberOfRoom: 0,
//         password: '',
//         users: [],
//         messages: []
//     }
// }
//
// export const currentChatSlice = createSlice({
//     name: 'chat',
//     initialState,
//     reducers: {
//         selectChat (state, action: PayloadAction<IChat>) {
//             state.currentChat = action.payload
//         },
//         addMessage (state, action: PayloadAction<IMessage>) {
//             state.currentChat.messages.push(action.payload)
//         }
//     }
// })
//
// export const {selectChat, addMessage} = currentChatSlice.actions
// export default currentChatSlice.reducer
