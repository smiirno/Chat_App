import {IUser} from "../data/interfaces";

export function checkPassword (nickname: string, password: string, users_db: IUser[]) {
    for (let i = 0; i < users_db.length; i++) {
        if (users_db[i].nickname === nickname && users_db[i].password === password) {
            return true
        }
        if (users_db[i].nickname === nickname && users_db[i].password !== password) {
            return false
        }
    }

    return false
}