import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err=>console.log(err))
    }
    return (
        <center>
            <h1>All Products</h1>
            {props.products.map((product, idx)=>{
                return <p key={idx}>
                            <Link to = {`/${product._id}`}>{product.title}</Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}}>
                                Delete
                            </button>

                        </p> 
            })}
        </center>
    )
}
