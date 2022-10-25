import React, {useState} from 'react';
import {useAppSelector} from "../../../store/redux";
import Chat from "../chat";
import {searchChat} from "../../../functions/searchChat";
import './chat_list.css'


const ChatList = () => {

    const {chats} = useAppSelector(state => state.chatsReducer)

    const [currentSearchedValue, setCurrentSearchedValue] = useState<string>('')
    const searchedChats = searchChat(currentSearchedValue, chats)

    function keyUpHandler (event: React.FormEvent<HTMLInputElement>) {
        setCurrentSearchedValue(event.currentTarget.value)
    }


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('It works')
    }

    return (
        <div>
            <div className={'chat_form'}>
                <form onSubmit={event => submitHandler(event)}>
                    <input type={'text'} placeholder={'Номер комнаты'} style={{marginRight: 15}}/>
                    <input type={'text'} placeholder={'Пароль'} style={{marginRight: 15}}/>
                    <button type={'submit'} className={'login_btn'}>Создать</button>
                </form>
                <div>
                    <label>Поиск: </label>
                    <input type={'number'} onKeyUp={(event) => {keyUpHandler(event)}} placeholder={'Введите номер комнаты'} />
                </div>
            </div>
            {searchedChats.map((chat) => {
                return <Chat key={chat.id} chat={chat}/>
            })}
        </div>
    );
};

export default ChatList;
