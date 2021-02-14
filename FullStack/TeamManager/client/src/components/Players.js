import {
    BrowserRouter as Router,
    Link,
    Route, // for later
    Switch
  } from 'react-router-dom'
  import React from 'react'
import PlayersList from './PlayersList'

const Players = (props) => {
    console.log(props.players)
    const {players}=props;
    console.log(players)
    return (
        
        <div>
                    <Route path={props.match.path+"/list"}  render={(props)=>(<PlayersList {...props} players={players}/>)}/>

        </div>


    )
}

export default Players
