import React, {useEffect, useState} from 'react';
import {IChat} from "../../data/interfaces";
import './chat.css'
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {selectChat} from "../../store/reducers/current_chat_slice";
import ChatMenu from "./chat_menu";

type chatProps = {
    chat: IChat
}

const Chat = (props: chatProps) => {

    // const dispatch = useAppDispatch()
    // const {currentChat} = useAppSelector(state => state.currentChatReducer)
    //
    // let navigate = useNavigate()
    //
    // useEffect(() => {
    //     dispatch(selectChat(props.chat))
    //     console.log(currentChat)
    // }, [props.chat])
    //
    // const click = () => {
    //
    // }

    const [isChatSelected, setIsChatSelected] = useState<boolean>(false)

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // navigate(`/${props.chat.numberOfRoom}`)
        setIsChatSelected(true)
    }

    const closeChat = () => {
        setIsChatSelected(false)
    }

    return (
        <div className={'chat'}>
            <h4>Номер комнаты: {props.chat.numberOfRoom}</h4>
            {isChatSelected ?
                <div>
                    <button onClick={closeChat} className={'login_btn'}>Выйти</button>
                    <ChatMenu chat={props.chat}/>
                </div>
                :
                <form onSubmit={event => submitHandler(event)}>
                    <input type={'text'} placeholder={'Пароль'} style={{marginRight: 15}}/>
                    <button type={'submit'} className={'login_btn'}>Присоединиться</button>
                </form>
            }

        </div>
    );
};

export default Chat;
