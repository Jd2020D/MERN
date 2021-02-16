import React, { useState } from "react"
// import { navigate, Link, Router } from "@reach/router"

const RegisterForm = props => {
    const { onSubmitProp,changeView } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");

    const onSubmit = e => {
        e.preventDefault()
        onSubmitProp({firstName,lastName,email,password,confirmPassword,country});

    }
    return(
        <div className="container" style={{border:'1px solid black',height:'200px'}}>
            <div className="row">
                <div className="col-12">
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                    <div className="form-group">
                            <label>First Name:</label>
                            <input onChange={(e)=>setFirstName(e.target.value)} value ={firstName} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input onChange={(e)=>setLastName(e.target.value)} value ={lastName} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>email:</label>
                            <input onChange={(e)=>setEmail(e.target.value)} value ={email} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password Confirm:</label>
                            <input onChange={(e)=>setConfirmPassword(e.target.value)} value ={confirmPassword} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Country:</label>
                            <input onChange={(e)=>setCountry(e.target.value)} value ={country} type="text" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>changeView()} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default RegisterForm;
