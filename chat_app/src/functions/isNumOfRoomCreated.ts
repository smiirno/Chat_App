import {IChat} from "../data/interfaces";

export function isNumOfRoomCreated (numberOfRoom: number, chats: IChat[]) {
    for ( let i = 0; i < chats.length; i++) {
        if (chats[i].numberOfRoom === numberOfRoom) {
            return true
        }
    }

    return false
}