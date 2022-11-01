import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/redux";
import Chat from "./chat";
import {searchChat} from "../../functions/searchChat";
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import {Button, TextField} from "@mui/material";
import {addChat} from "../../store/reducers/chats_slice";
import {isNumOfRoomCreated} from "../../functions/isNumOfRoomCreated";
import './chat_list.css'


const ChatList = () => {

    const {chats} = useAppSelector(state => state.chats)
    const {currentUser} = useAppSelector(state => state.auth)
    const [wrongNumberOfRoom, setWrongNumberOfRoom] = useState<string>('');

    const dispatch = useAppDispatch()

    const [currentSearchedValue, setCurrentSearchedValue] = useState<string>('')
    const searchedChats = searchChat(currentSearchedValue, chats)

    function searchHandler (event:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCurrentSearchedValue(event.currentTarget.value)
    }

    const validationSchema = yup.object({
        numberOfRoom: yup.number()
            .min(2, 'Минимум 2 символа')
            .required('Введите номер комнаты'),
        password: yup.string()
            .min(4, 'Минимум 4 символа')
            .required('Введите пароль')
    })

    return (
        <div>
            <div className={'chat_form'}>
                <Formik
                    initialValues={{
                        numberOfRoom : 0,
                        password: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values => {
                        if (!isNumOfRoomCreated(values.numberOfRoom, chats)) {
                            const chat = {
                                id: chats.length,
                                numberOfRoom: values.numberOfRoom,
                                password: values.password,
                                users: [currentUser],
                                messages: []
                            }
                            dispatch(addChat(chat))
                        } else {
                            setWrongNumberOfRoom('Комната с таким номером уже существует')
                        }
                    })}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                            <TextField type={'number'} name={'numberOfRoom'} id={'numberOfRoom'} placeholder={'Номер комнаты'} style={{marginRight: 15}}
                                       onChange={formik.handleChange}
                                       error={formik.touched.numberOfRoom && Boolean(formik.errors.numberOfRoom) || formik.touched.numberOfRoom && Boolean(wrongNumberOfRoom)}
                                       helperText={formik.touched.numberOfRoom && formik.errors.numberOfRoom || formik.touched.numberOfRoom && wrongNumberOfRoom} size={"small"}/>

                            <TextField type={'password'} name={'password'} id={'password'} placeholder={'Пароль'} style={{marginRight: 15}}
                                       onChange={formik.handleChange}
                                       error={formik.touched.password && Boolean(formik.errors.password)}
                                       helperText={formik.touched.password && formik.errors.password} size={'small'}/>
                            <button type="submit" className={'create_btn'}>Создать</button>
                        </Form>
                    )}
                </Formik>
                <div>
                    <TextField type={'number'} placeholder={'Поиск комнаты'} size={'small'}
                               onChange={(event) => {searchHandler(event)}}/>
                </div>
            </div>
            {searchedChats.map((chat) => {
                return <Chat key={chat.id} chat={chat}/>
            })}
        </div>
    );
};

export default ChatList;
