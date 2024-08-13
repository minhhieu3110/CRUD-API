import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddProduct() {
    const [product, setProduct] = useState({id:'', name:'', price:'', quantity:''});
    const [notice, setNotice] = useState('')
    const navigate = useNavigate();
    const addProduct = async () => {
        try{
            await axios.post('http://localhost:3000/products', product).then((res) => {
                setNotice('Add Product Success')
                navigate('/')
            })
        }catch (e) {
            setNotice(e.message)
        }
    }
    return(
        <>
            <h6>Add Product</h6>
            <br/>
            <input onChange={(e)=>{
                setProduct({...product, name: e.target.value})
            }} placeholder='Name'/><br/><br/>
            <input onChange={(e)=>{
                setProduct({...product, price: e.target.value})
            }} placeholder='Price'/><br/><br/>
            <input onChange={(e)=>{
                setProduct({...product, quantity: e.target.value})
            }} placeholder='Quantity'/><br/><br/>
            <button onClick={addProduct}>Add</button><br/>
            <div style={{color:'red'}}>{notice}</div>
        </>
    )
}