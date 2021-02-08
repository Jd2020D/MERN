import React,{useState,useEffect} from 'react';
import { Link } from '@reach/router';

const PeopleComponent=(props)=> {
    const [result,setResult]=useState({});
    useEffect(() => {
        console.log("inside useEeffect of peaople");
        props.info({searchIn:'people',id:props.id});
        fetch('https://swapi.dev/api/people/'+props.id)
            .then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error('Something went wrong');
                  }                
            })
            .then(person => {
                fetch(person.homeworld)
                .then(response => response.json())
                .then(response => 
                    setResult(Object.assign(person,
                        {
                            homeWorldName:response.name,
                            homeWorldId:response.url.match("\/([a-z0-9_-]*[\/]?)$")[0].split('/')[1]
                        })))            
            })
            .catch(err=>{})       

        
    }, [props.id]);
    console.log("render people comp.");

    return (
        Object.keys(result).length === 0?<div>These aren't the droids you're looking for</div>
        :       <div>
            
            <h1>{result.name}</h1>
            <p>Height: {result.height}</p>     
            <p>Mass: {result.mass}</p>     
            <p>Hair color: {result.hair_color}</p>     
            <p>Skin color: {result.skin_color}</p>
            <p>Home world: <Link to={`/planets/${result.homeWorldId}`}>{result.homeWorldName}</Link></p>

            
        </div>
    )
}

export default PeopleComponent;
