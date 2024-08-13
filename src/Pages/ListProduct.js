import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ListProduct() {
    const [dataProducts, setDataProducts] = useState([]);
    const getData =()=>{
        axios.get('http://localhost:3000/products').then((res) => {
            setDataProducts(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const removeProduct = async (id) => {
        try {
            let confirmDelete = window.confirm('Are you sure delete product ?');
            if (confirmDelete) {
                await axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
                    getData()
                })
            }
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <>
            <h6>List Products</h6>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th colSpan={3}>Action</th>
                </tr>
                {dataProducts.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Link to={`/edit-product/${item.id}`}>
                                <button>Edit</button>
                            </Link>
                        </td>
                        <td>
                            <button onClick={() => removeProduct(item.id)}>Delete</button>
                        </td>
                        <td>
                            <Link to={`/detail-product/${item.id}`}>
                                <button>Detail</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}