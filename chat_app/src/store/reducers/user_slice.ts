import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../data/interfaces";
import {users_db} from "../../data/db";


interface CurrentUserState {
    currentUser: IUser,
}

const initialState: CurrentUserState = {
    currentUser: {
        id: -1,
        nickname: '',
        password: ''
    }
}

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        login (state, action: PayloadAction<IUser>) {
            state.currentUser = action.payload
        },
        registration (state, action: PayloadAction<IUser>) {
            users_db.push(action.payload)
            state.currentUser = action.payload
        },
        logout(state) {
            state.currentUser = initialState.currentUser
        }
    }
})

export const {login, registration, logout} = currentUserSlice.actions
export default currentUserSlice.reducer
