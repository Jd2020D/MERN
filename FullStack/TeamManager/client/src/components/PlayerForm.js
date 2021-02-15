import React, { useState } from "react"
import { navigate, Link, Router } from "@reach/router"

const PlayerForm = props => {
    const { onSubmitProp } = props;
    const [name, setName] = useState("");
    const [prefPosition, setPrefPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmit = e => {
        e.preventDefault()
        onSubmitProp({name,prefPosition}).then(errors=>setErrors(errors))
        
    }
    console.log(errors)
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                    <div className="form-group">
                            <label>Player Name:</label>
                            <input onChange={(e)=>setName(e.target.value)} value ={name} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Preferred Position:</label>
                            <input onChange={(e)=>setPrefPosition(e.target.value)} value ={prefPosition} type="text" className="form-control"/>
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm">Cancel</button>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PlayerForm;
