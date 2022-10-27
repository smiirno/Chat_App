export interface IUser {
    id: number
    nickname: string,
    password: string
}

export interface IMessage {
    id: number,
    numberOfRoom: number,
    owner: IUser,
    text: string,
    date: number
}

export interface IChat {
    id: number,
    numberOfRoom: number,
    password: string,
    users: IUser[],
    messages: IMessage[]
}