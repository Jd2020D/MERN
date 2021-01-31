import React, { useState } from  'react';
import styles from '../style.module.css'

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [passwordConf, setPasswordConf] = useState("");  
    const [passwordConfError, setPasswordConfError] = useState("");  
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        e.target.value.length < 2?setFirstNameError("First Name must be at least 2 characters !"):setFirstNameError('');
        }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        e.target.value.length < 2?setLastNameError("Last Name must be at least 2 characters !"):setLastNameError('');
        }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5?setEmailError("Email must be at least 5 characters !"):setEmailError('');
        }
    const handlePass = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8?setPasswordError("Password be at least 8 characters !"):setPasswordError('');
        if(passwordConf.length>0)
            e.target.value !== passwordConf?setPasswordConfError("Password Confirm isnt match"):setPasswordConfError("");

    }
    const handlePassConf = (e) => {
        setPasswordConf(e.target.value);
        if(password !== e.target.value ||e.target.value.length <8 )
            setPasswordConfError("Password Confirm isnt match")
        else
            setPasswordConfError("");
    }
    return(
    <>
        <center>
            <form>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstName } />
                </div>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }

                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } />
                </div>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                    }
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail }  />
                </div>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePass } />
                </div>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                <div>
                    <label>Password Confirm: </label>
                    <input type="password" onChange={ handlePassConf } />
                </div>
                {
                    passwordConfError ?
                    <p style={{color:'red'}}>{ passwordConfError }</p> :
                    ''
                    }

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