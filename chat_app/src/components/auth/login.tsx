import React, {useState} from 'react';
import './login.css'

const Login = () => {

    const [user, setUser] = useState({});
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('')


    //Пофиксить работу (сохраняет данные если 2 раза нажать кнопку)
    const submitHandler =(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setUser({
            nickname: nickname,
            password: password
        })
        console.log(user, nickname, password)
        setNickname('')
        setPassword('')
    }

    return (
        <div className={'container login'}>
            <form onSubmit={(event => submitHandler(event))}>
                <div>
                    <input type={'text'} onChange={event => setNickname(event.target.value)} placeholder={'Никнейм'} style={{marginRight: 10}}/>
                    <input type={'text'} onChange={event => setPassword(event.target.value)} placeholder={'Пароль'} style={{marginLeft: 10}}/>
                </div>
                <button type={'submit'} className={'login_btn'}>Войти</button>
            </form>
        </div>
    );
};

export default Login;
