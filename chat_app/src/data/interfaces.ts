export interface IUser {
    id: number
    nickname: string,
    password: string
}

export interface IMessage {
    id: number
    owner: IUser,
    text: string,
    date: Date
}

export interface IChat {
    id: number,
    numberOfRoom: number,
    password: string,
    users: IUser[],
    messages: IMessage[]
}