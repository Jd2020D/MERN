import React,{useState,useEffect} from 'react';

const PlanetComponent=(props)=> {
    const [result,setResult]=useState({});
    useEffect(() => {
        props.info({searchIn:'planets',id:props.id});
        fetch('https://swapi.dev/api/planets/'+props.id)
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
                <p>Climate: {result.climate}</p>     
                <p>Terrain: {result.terrain}</p>     
                <p>Surface Water: {result.surface_water}</p>     
                <p>Population: {result.population}</p>
            </div>
            
        }
        </>
    )
}

export default PlanetComponent;
