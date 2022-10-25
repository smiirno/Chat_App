import {IChat} from "../data/interfaces";

export function searchChat (value: string, chats: IChat[]) {

    let searchedChats: IChat[] = []

    const currentValue = value
    searchedChats = chats.filter((chat:IChat) => {
        return chat.numberOfRoom.toString().startsWith(currentValue)
    })

    return searchedChats
}
