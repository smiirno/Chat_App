import React, {useState} from 'react';
import {IChat} from "../../data/interfaces";
import './chat.css'
import {useAppDispatch, useAppSelector} from "../../store/redux";
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
    const {chats} = useAppSelector(state => state.chatsReducer)

    const dispatch = useAppDispatch()

    const removeChatFromList = () => {
        dispatch(removeChat(props.chat))
        console.log(chats)
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
                    <Button onClick={closeChat} color="primary" variant="contained">Выйти</Button>
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
                            <Button type={'submit'} color="primary" variant="contained" style={{marginRight: 15}}>Присоединиться</Button>
                            <Button onClick={removeChatFromList} color="error" variant="contained">Удалить</Button>
                        </Form>
                    )}
                </Formik>
            }
        </div>
    );
};

export default Chat;
