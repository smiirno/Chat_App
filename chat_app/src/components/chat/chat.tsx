import React from 'react';
import {IChat} from "../../data/interfaces";
import './chat.css'

type chatProps = {
    chat: IChat
}

const Chat = (props: chatProps) => {

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('It works')
    }

    return (
        <div className={'chat'}>
            <h4>Номер комнаты: {props.chat.numberOfRoom}</h4>
            <form onSubmit={event => submitHandler(event)}>
                <input type={'text'} placeholder={'Пароль'} style={{marginRight: 15}}/>
                <button type={'submit'} className={'login_btn'}>Присоединиться</button>
            </form>
        </div>
    );
};

export default Chat;
