import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    const [title, setTitle] = useState(props.product?props.product.title:""); 
    const [price, setPrice] = useState(props.product?props.product.price:0);
    const [description, setDescription] = useState(props.product?props.product.description:"");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/create', {
            title,
            price,
            description
        })
            .then(res=>{setDescription("");setPrice(0);setTitle("")})
            .catch(err=>console.log(err ))
    }
    const onUpdateHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/edit/'+props.product._id, {
            title,
            price,
            description
        })
            .then(res=>{console.log(res.data)})
            .catch(err=>console.log(err ))
    }

    return (
        <center>
                    <form onSubmit={props.product?onUpdateHandler: onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value={props.product?"Update":"Submit"}/>
        </form>

        </center>
    )
}