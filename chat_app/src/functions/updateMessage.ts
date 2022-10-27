import {IMessage} from "../data/interfaces";

export function updateMessage (message: IMessage, messagesArray: IMessage[]) {
    messagesArray.push(message)
    return messagesArray
}