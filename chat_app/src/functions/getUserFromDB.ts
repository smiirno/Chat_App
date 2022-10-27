import {IUser} from "../data/interfaces";

export function getUserFromDB (nickname: string, users_db: IUser[]) {
    for (let i = 0; i < users_db.length; i++) {
        if (users_db[i].nickname === nickname) {
            return users_db[i]
        }
    }

    return {
        id: 0,
        nickname: '',
        password: ''
    }
}