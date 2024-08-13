import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditProduct() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [editProduct, setEditProduct] = useState({id:'', name:'', price:'', quantity:''});
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then((res) => {
            setEditProduct({
                id: res.data.id,
                name: res.data.name,
                price: res.data.price,
                quantity: res.data.quantity
            })
        })
    },[])
    const saveProduct = async ()=>{
        try{
            await axios.put(`http://localhost:3000/products/${id}`,editProduct).then((res)=>{
                navigate('/')
                alert("Product Successfully Updated")
            })
        }catch (error){
            alert(error.message)
        }
    }
    return(
        <>
            <h6>Edit Product</h6><br/>
            <input value={editProduct.name} onChange={(e)=>{
                setEditProduct({...editProduct, name: e.target.value})
            }} placeholder='Name'/><br/><br/>
            <input value={editProduct.price} onChange={(e)=>{
                setEditProduct({...editProduct, price: e.target.value})
            }} placeholder='Price'/><br/><br/>
            <input value={editProduct.quantity} onChange={(e)=>{
                setEditProduct({...editProduct, quantity: e.target.value})
            }} placeholder='Quantity'/><br/><br/>
            <button onClick={saveProduct}>Save</button>
        </>
    )
}