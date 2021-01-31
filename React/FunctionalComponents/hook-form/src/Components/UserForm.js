import React, { useState } from  'react';
import styles from '../style.module.css'

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordConf, setPasswordConf] = useState("");  
    
//     const createUser = (e) => {
//         e.preventDefault();
//         const newUser = { username, email, password };
//         console.log("Welcome", newUser);
//         setUsername("");
//     };
    
    return(
    <>
        <center>
            <form>
            <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) }  />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Password Confirm: </label>
                    <input type="password" onChange={ (e) => setPasswordConf(e.target.value) } />
                </div>
            </form>
            <div className={styles.formView}>
                <p>First Name <span>{firstName}</span> </p>
                <p>Last Name <span>{lastName}</span></p>
                <p>Email <span>{email}</span></p>
                <p>Password <span>{password}</span></p>
                <p>Password Confirm <span>{passwordConf}</span></p>
            </div>
        </center>
    </>
    );
};
    
export default UserForm;