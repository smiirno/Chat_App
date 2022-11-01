import React from 'react';
import {useAppSelector} from "../store/redux";
import ChatList from "./chat/chat_list";

const StartMenu = () => {

    const {currentUser} = useAppSelector(state => state.auth)

    return (
        <div className={'container'}>
            {currentUser.nickname !== '' ?
                <ChatList/>
                :
                <h1>Прежде, чем начать пользоваться Chat APP, вам необходимо войти в свой аккаунт</h1>
            }
        </div>
    );
};

export default StartMenu;
