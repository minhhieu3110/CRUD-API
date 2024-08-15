import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DetailUser(){
    const {id}=useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id).then((response) => {
            setUser(response.data)
        })
    })
    return(
        <>
            <h3>Detail User {id}</h3>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Email: {user.email}</p>
        </>
    )
}