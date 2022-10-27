import React from 'react';
import {IChat} from "../../data/interfaces";
import './chat_menu.css';
import {useAppSelector} from "../../store/redux";


type chatProps = {
    chat: IChat
}

const ChatMenu = (props: chatProps) => {

    const {currentUser} = useAppSelector(state => state.currentUserReducer)
    console.log(currentUser)

    return (
        <div className={'chat_menu'}>

             <div className={'message_area'}>
                 <div className={'start'}>
                     Начало диалога
                 </div>

                 {props.chat.messages.map((message) => {
                     return <div key={message.id} className={message.owner.id == currentUser.id ?
                         'message' :
                         ''
                     }>
                         <div className={message.owner.id == currentUser.id ?
                             'message_block my_message' :
                             'message_block friend_message'
                         }>
                             <div className={'username'}>
                                 {message.owner.nickname}
                             </div>
                             <div className={message.owner.id == currentUser.id ?
                                 'my_message_text' :
                                 'friend_message_text'
                             }>
                                 {message.text}
                             </div>
                         </div>
                     </div>
                 })}
             </div>
            <div>
                <form>
                    <input type={'file'}/>
                    <div className={'message_form'}>
                        <textarea rows={2}/>
                        <button className={'send_btn'}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatMenu;
