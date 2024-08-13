import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DetailProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then((response) => {
            setProduct(response.data)
        })
    })
    return(
        <div>
            Detail Product: {id}
            <h6>Name: {product.name}</h6>
            <h6>Price: {product.price}</h6>
            <h6>Quantity: {product.quantity}</h6>
        </div>
    )
}