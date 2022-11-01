import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import {useAppDispatch} from "../../store/redux";
import {Button, TextField} from "@mui/material";
import {login, registration} from "../../store/reducers/user_slice";
import {users_db} from "../../data/db";
import {useNavigate} from "react-router-dom";
import {isUserInDB} from "../../functions/isUserInDB";
import {getUserFromDB} from "../../functions/getUserFromDB";
import {checkPassword} from "../../functions/checkPassword";
import './login.css'


const Login = () => {

    const navigate = useNavigate()

    const [wrongPassword, setWrongPassword] = useState<string>('')

    const dispatch = useAppDispatch();

    const validationSchema = yup.object({
        nickname: yup.string()
            .min(2, 'Минимум 2 символа')
            .required('Введите никнейм'),
        password: yup.string()
            .min(4, 'Минимум 4 символа')
            .required('Введите пароль')
    })



    return (
        <div className={'container login'}>
            <Formik
                initialValues={{
                    nickname: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    if (isUserInDB(values.nickname, users_db)) {
                        if (checkPassword(values.nickname, values.password, users_db)) {
                            const user = getUserFromDB(values.nickname, users_db)
                            dispatch(login(user))
                            resetForm({values: {nickname: '', password: ''}})
                            navigate('/')
                        } else {
                            setWrongPassword('Неверный пароль')
                        }
                    } else {
                        const user = {
                            id: users_db.length,
                            ...values
                        }
                        dispatch(registration(user))
                        resetForm({values: {nickname: '', password: ''}})
                        navigate('/')
                    }
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
                        <div>
                            <TextField name={'nickname'} id={'nickname'} placeholder={'Никнейм'} className={'text_field'}
                                       onChange={formik.handleChange}
                                       error={formik.touched.nickname && Boolean(formik.errors.nickname)}
                                       helperText={formik.touched.nickname && formik.errors.nickname} size={'small'}
                            />

                            <TextField name={'password'} id={'password'} placeholder={'Пароль'} style={{marginRight: 10}}
                                       onChange={formik.handleChange}
                                       error={formik.touched.password && Boolean(formik.errors.password) || formik.touched.password && Boolean(wrongPassword)}
                                       helperText={formik.touched.password && formik.errors.password || formik.touched.password && wrongPassword} size={'small'}
                            />
                        </div>
                        <button type="submit" className={'login_btn'}>Войти</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
