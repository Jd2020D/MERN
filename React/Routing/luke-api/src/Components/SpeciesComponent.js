import React,{useState,useEffect} from 'react';

const SpeciesComponent=(props)=> {
    const [result,setResult]=useState({});
    useEffect(() => {
        fetch('https://swapi.dev/api/species/'+props.id)
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
                <h1>{result.name}</h1>
                <p>Classification: {result.classification}</p>     
                <p>Designation: {result.designation}</p>     
                <p>Hair colors: {result.hair_colors}</p>     
                <p>Skin colors: {result.skin_colors}</p>
            </div>
            
        }
        </>
    )
}

export default SpeciesComponent;
