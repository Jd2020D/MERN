import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
export default props => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                            setProduct(res.data); 
                            setLoaded(true);
                        })
            .catch(err=>console.log(err))
    }, [props.id])
    return (
        <center>
            <h1>Update Product</h1>
            {loaded&&<ProductForm loaded={loaded} product={product}/>}
        </center>
    )
}
