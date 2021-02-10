import React from 'react'
import { Link } from '@reach/router';

export default props => {
    return (
        <center>
            <h1>All Products</h1>
            {props.products.map((product, idx)=>{
                return <p key={idx}><Link to = {`/${product._id}`}>{product.title}</Link></p> 
            })}
        </center>
    )
}
