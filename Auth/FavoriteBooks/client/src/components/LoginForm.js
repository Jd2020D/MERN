import React, { useState } from "react"
// import { navigate, Link, Router } from "@reach/router"

const LoginForm = props => {
    const { onSubmitProp,changeView } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = e => {
        e.preventDefault()
        onSubmitProp({email,password});

    }
    return(
        <div className="container"  style={{border:'1px solid black',height:'200px'}} >
            <div className="row">
                <div className="col-12">
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label>email:</label>
                            <input onChange={(e)=>setEmail(e.target.value)} value ={email} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input onChange={(e)=>setPassword(e.target.value)} value ={password} type="text" className="form-control"/>
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
export default LoginForm;
