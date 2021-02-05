import React from 'react'
import { navigate } from '@reach/router';


const WordComponent=(props)=> {
    return (
        <div style={{padding:'20px 30px 20px 30px'}}>
            {            
            props.color!==undefined?<span style={{color:props.color,backgroundColor:props.backGroundColor,padding:'10px 30px 10px 30px',border:'1px solid black',margin:'10px'}}>the word is: {props.word}</span>
            :props.word ==="home"?"welcome"
            :!isNaN(props.word)?"The number is: "+props.word
            :"The word is: "+props.word
            }
        </div>
    )
};

export default WordComponent;
