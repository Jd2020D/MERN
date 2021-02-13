import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [props.id])
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return (
        <center>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                                Delete
                            </button>

        </center>
    )
}
