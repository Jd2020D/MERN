import React, { useEffect, useState } from 'react';
import { navigate, Link, Router } from "@reach/router"
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

export default (props) => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }, [])
    
    const updateAuthor = author =>{
        axios.put("http://localhost:8000/api/authors/edit/"+id,author)
            .then(() => navigate("/"))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }
    return (
        <div>
            <p><Link to="/">Home</Link></p>
                    <p>Update Author :&nbsp;
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
                    {loaded?"":<p><Link to="/new">Add Author</Link></p>}

                    
           {loaded && <AuthorForm  onSubmitProp={updateAuthor} initialName={author.name} />}
        </div>
    )
}