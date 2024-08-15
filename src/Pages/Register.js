import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register(){
    const [registered, setRegistered] = useState({id:'',username:'',password:'',email:''});
    const [notice, setNotice] = useState('')
    const navigate = useNavigate();
    const Register = async () => {
        try{
            await axios.post('http://localhost:3000/register',registered).then((res)=>{
              setNotice('Register Success')
            })
        }catch (e) {
            setNotice(e.message)
        }
    }
    return(
        <>
            <h2>Register</h2>
            <input onChange={(e)=>{
                setRegistered({...registered, username: e.target.value})
            }} placeholder={'Username'}/><br/><br/>
            <input onChange={(e)=>{
                setRegistered({...registered, password: e.target.value})
            }} type="password" placeholder={'Password'}/><br/><br/>
            <input onChange={(e)=>{
                setRegistered({...registered, email: e.target.value})
            }} type="email" placeholder={'Email'}/><br/><br/>
            <button className='btn-action' onClick={Register}>Register</button>
            <button className='btn-action' onClick={()=> navigate('/login')}>Login</button>
            <div style={{color:'red'}}>{notice}</div>
        </>
    )
}