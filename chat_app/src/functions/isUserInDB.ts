import {IUser} from "../data/interfaces";

export function isUserInDB (nickname: string, users_db: IUser[]) {
    for (let i = 0; i < users_db.length; i++) {
        if (users_db[i].nickname === nickname) {
            return true
        }
    }

    return false
}