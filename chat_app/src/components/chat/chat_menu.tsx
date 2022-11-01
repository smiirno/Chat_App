import React from 'react';
import {IChat, IMessage} from "../../data/interfaces";
import './chat_menu.css';
import {Formik, Form} from 'formik';
import * as yup from "yup";
import {useAppDispatch, useAppSelector} from "../../store/redux";
import {Button, TextField} from "@mui/material";
import {createMessage} from "../../functions/createMessage";
import {updateChatMessages} from "../../store/reducers/chats_slice";
import {formatDate} from "../../functions/formatDate";


type chatProps = {
    chat: IChat
}

const ChatMenu = (props: chatProps) => {

    const {currentUser} = useAppSelector(state => state.auth)

    const dispatch = useAppDispatch()

    const validationSchema = yup.object({
        text: yup.string()
            .required('Поле не может быть пустым')
    })

    return (
        <div className={'chat_menu'}>

             <div className={'message_area'}>
                 <div className={'start'}>
                     Начало диалога
                 </div>

                 {props.chat.messages.map((message) => {
                     return <div key={message.id} className={message.owner.nickname == currentUser.nickname ?
                         'message' :
                         ''
                     }>
                         <div className={message.owner.nickname == currentUser.nickname ?
                             'message_block my_message' :
                             'message_block friend_message'
                         }>
                             <div className={'username'}>
                                 {message.owner.nickname + ' ' + message.date}
                             </div>
                             <div className={message.owner.nickname == currentUser.nickname ?
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
                <Formik
                    initialValues={{
                        text: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        const message: IMessage = createMessage(values.text, props.chat, currentUser)
                        dispatch(updateChatMessages(message))
                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit} className={'message_form'}>
                            <TextField name={'text'} id={'text'} placeholder={'Сообщение'} size={'small'} multiline fullWidth
                                       maxRows={3} onChange={formik.handleChange}
                                       error={formik.touched.text && Boolean(formik.errors.text)}
                                       helperText={formik.touched.text && formik.errors.text}
                            />
                            <Button type={'submit'} color="primary" variant="contained">Отправить</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ChatMenu;
