import React from 'react';
import {useAppSelector} from "../store/redux";
import ChatList from "./chat/chat_list";
import './start_menu.css'

const StartMenu = () => {

    const {currentUser} = useAppSelector(state => state.auth)

    return (
        <div className={'container'}>
            {currentUser.nickname !== '' ?
                <ChatList/>
                :
                <h2 className={'helper_text'}>Прежде, чем начать пользоваться Chat APP, вам необходимо войти в свой аккаунт</h2>
            }
        </div>
    );
};

export default StartMenu;
