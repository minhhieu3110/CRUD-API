import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState({username: "", password: ""});
    const [notice, setNotice] = useState('')
    const Login =async ()=>{
        try{
            await axios.post('http://localhost:3000/login',dataLogin).then((res) => {
                const sendData ={
                    name: dataLogin.username
                }
                setNotice("Login Success")
                navigate('/',{state: sendData})
            })
        }catch {
            setNotice('Invalid username or password')
        }
    }
    return (
        <>
            <h2>Login</h2>
            <input onChange={(e)=>{
                setDataLogin(({...dataLogin, username: e.target.value}))
            }} placeholder={'Username'}/><br/><br/>
            <input onChange={(e)=>{
                setDataLogin({...dataLogin, password: e.target.value})
            }} type="password" placeholder={'Password'}/><br/><br/>
            <button className='btn-action' onClick={Login}>Login</button>
            <button className='btn-action' onClick={() => navigate('/register')}>Register</button>
            <div style={{color:'red'}}>{notice}</div>
        </>
    )
}