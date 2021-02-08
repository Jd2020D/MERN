import React,{useState,useEffect} from 'react';

const FilmComponent=(props)=> {
    const [result,setResult]=useState({});
    useEffect(() => {
        fetch('https://swapi.dev/api/films/'+props.id)
            .then(response=>{
                if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error('Something went wrong');
                  }                
            })
            .then(response => setResult(response))
            .catch(err=>{})       

    }, [props.id]);
    return (
        <>
        {
            Object.keys(result).length === 0?<div>These aren't the droids you're looking for</div>
            :<div>
                <h1>{result.title}</h1>
                <p>Director: {result.director}</p>     
                <p>Producer: {result.producer}</p>     
                <p>Release Date: {result.release_date}</p>     
                <p>Openin Crawl: {result.opening_crawl}</p>
            </div>
            
        }
        </>
    )
}

export default FilmComponent;
