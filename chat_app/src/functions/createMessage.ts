import {IChat, IUser} from "../data/interfaces";
import {formatDate} from "./formatDate";

export function createMessage (text: string, chat: IChat, user: IUser) {
    return {
        numberOfRoom: chat.numberOfRoom,
        id: chat.messages.length,
        owner: user,
        text: text,
        date: formatDate(new Date())
    }
}