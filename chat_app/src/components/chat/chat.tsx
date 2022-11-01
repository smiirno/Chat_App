import React, {useState} from 'react';
import {IChat} from "../../data/interfaces";
import './chat.css'
import {useAppDispatch} from "../../store/redux";
import ChatMenu from "./chat_menu";
import {Formik, Form} from 'formik';
import {Button, TextField} from "@mui/material";
import * as yup from "yup";
import {removeChat} from "../../store/reducers/chats_slice";


type chatProps = {
    chat: IChat
}

const Chat = (props: chatProps) => {

    const [isChatSelected, setIsChatSelected] = useState<boolean>(false)
    const [wrongPassword, setWrongPassword] = useState<string>('');

    const dispatch = useAppDispatch()

    const removeChatFromList = () => {
        dispatch(removeChat(props.chat))
    }

    const closeChat = () => {
        setIsChatSelected(false)
        setWrongPassword('')
    }

    const validationSchema = yup.object({
        password: yup.string()
            .required('Введите пароль')
    })

    return (
        <div className={'chat'}>
            <h4>Номер комнаты: {props.chat.numberOfRoom}</h4>
            {isChatSelected ?
                <div style={{marginTop: 10}}>
                    <button onClick={closeChat} className={'leave_btn'}>Выйти</button>
                    <ChatMenu chat={props.chat}/>
                </div>
                :
                <Formik
                    initialValues = {{
                        password: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        if (values.password === props.chat.password) {
                            setIsChatSelected(true)
                        } else {
                            setWrongPassword('Неверный пароль')
                        }
                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit} style={{marginTop: 10}}>
                            <TextField name={'password'} id={'password'} placeholder={'Пароль'} style={{marginRight: 15}}
                                       onChange={formik.handleChange}
                                       error={Boolean(wrongPassword)}
                                       helperText={wrongPassword} size={'small'}/>
                            <button type={'submit'} className={'connect_btn'}>Присоединиться</button>
                            <button onClick={removeChatFromList} className={'remove_btn'}>Удалить</button>
                        </Form>
                    )}
                </Formik>
            }
        </div>
    );
};

export default Chat;
