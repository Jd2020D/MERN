import React,{useState,useEffect} from 'react';
import { navigate } from '@reach/router'
const SearchFormComponent=(props)=> {
    const [path,setPath]=useState(window.location.pathname.split("/")[1]);
    const [id,setId]=useState(window.location.pathname.split("/")[2]);
    const searchPaths=["people","planets","films","species"];
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/'+document.getElementById("searchIn").value+"/"+document.getElementById("id").value)
    }    
    console.log("render search comp.")
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>Search for:
                <select id='searchIn' onChange={(e)=>setPath(e.target.value)} value={path} >
                    {
                    searchPaths.map((item,index)=>{
                        return <option key={index} value={item}>{item}</option>
                    })
                    }
                </select>
                </label>
                <label>ID: 
                <input type="text" id="id" style={{width:'20px'}} value={id} onChange={(e)=>setId(e.target.value)} />
                </label>
                <input type="submit" value="Search"/>

            </form>
        </div>
    )
}

export default SearchFormComponent;
