import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListUsers() {
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/users').then((res) => {
            setListUsers(res.data)
            // console.log(res.data)
            console.log(listUsers)
        })
    }, [])
    return (
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th colSpan={3}>Action</th>
                </tr>
                {listUsers.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                        <td>
                            <Link to={`/detail-user/${item.id}`}>
                                <button>Detail</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}