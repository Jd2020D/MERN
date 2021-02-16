import React,{lazy, useEffect, useState} from 'react'
import Authentication from './Authentication';
import axios from 'axios';
import { BooksList } from '../components/BooksList';
axios.defaults.withCredentials=true;


export const Main = (props) => {
    const   [isAuthenticated, setIsAuthenticated]  = useState(false);
    const   [user, setUser]  = useState({});
    const   [books, setBooks]  = useState([]);
    // console.log(user);
    console.log("state changed")
    useEffect(() => {
             axios.get("http://localhost:8000/api/user",{withCredentials:true})
            .then(response=> setUser(response.data))
            .catch(err=>console.log(err))    
        
            axios.get("http://localhost:8000/api/books",{withCredentials:true})
            .then(response=>{
                //let test = [...books, response.data]
                setBooks(response.data)
            })
            .catch(err=>console.log(err))
    
        console.log("render");
    }, [user._id])
    const isAuth = ()=>{
        axios.get("http://localhost:8000/api/user",{withCredentials:true})
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            {!user._id&&<Authentication authenticated={()=>setIsAuthenticated(true)}/>}
            {books.length>0&&<BooksList books={books}/>}

            <div style={{border:'1px solid black',width:'200px',height:'200px'}}>No data</div>

        </div>
    )
}
