import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import { navigate, Link, Router } from "@reach/router"
import axios from 'axios';

export default (props) => {
    const [errors, setErrors] = useState([]);
    const createAuthor = author =>{
        axios.post("http://localhost:8000/api/createNewAuthor",author)
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
            <p>Add a new author:&nbsp;
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
           <AuthorForm onSubmitProp={createAuthor} initialName="" />
        </div>
    )
}