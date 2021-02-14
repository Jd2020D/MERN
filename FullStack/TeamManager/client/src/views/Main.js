import React, {useState, useEffect} from "react"
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
    Route, // for later
    Switch
  } from 'react-router-dom'
import Players from '../components/Players'
import PlayersList from '../components/PlayersList'
import PlayerForm from "../components/PlayerForm"
import PlayerStatus from "../components/PlayerStatus"
const Main = props => {
    const [players, setPlayers] = useState([])
    const [loaded,setLoaded]=useState(false);
    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllplayers")
            .then(response => {setPlayers((response.data))
                                setLoaded(true)})
            .catch(error => console.log("There was an issue: ", error))
    },[])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/players/delete/' + playerId)
            .then(res => {
                removeFromDom(playerId)
            })
            .catch(err=>console.log(err))
    }
    const gameNavStyle=(targetId,id)=>{
        if(id===targetId)
            return {color:'red'};
        else
            return{};
    }
    return(
        <div>
                    {loaded&&
                    <Route 
                    path="/players"  
                    render={(props)=>(
                        <>
                            <div>
                                <Link to="/players/list" style={{color:'red'}}>Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link>
                            </div>
                            <Route 
                            path={props.match.path+"/list"}  
                            render={(props)=>(
                                <>
                                    <div>
                                        <Link to="/players/list" style={{color:'red'}}>List</Link> | <Link to="/players/addplayer">Add Player</Link>
                                    </div>  
                                    <PlayersList {...props} players={players}/>
                                </>
                            )}/>
                            <Route 
                            path={props.match.path+"/addplayer"}  
                            render={(props)=>(
                                <>
                                    <div>
                                        <Link to="/players/list" >List</Link> | <Link to="/players/addplayer" style={{color:'red'}}>Add Player</Link>
                                    </div>
                                    <PlayerForm {...props}/>
                                </>
                            )}/>
                        </>
                        )}
                    />}

                    {loaded&&
                    <Route  
                    path="/status/game"  
                    render={(props)=>(
                        <>
                            <div>
                                <Link to="/players/list" >Manage Players</Link> | <Link to="/status/game/1" style={{color:'red'}}>Manage Player Status</Link>
                            </div>
                            <Route path={props.match.path+"/:id"}   
                                render={(props)=>(
                                <>
                                <div>
                                    <Link to="/status/game/1" style={gameNavStyle("1",props.match.params.id)}>Game 1</Link> | <Link to="/status/game/2" style={gameNavStyle("2",props.match.params.id)}>Game 2</Link> | <Link to="/status/game/3" style={gameNavStyle("3",props.match.params.id)}>Game 3</Link> 
                                </div>
                                <PlayerStatus   {...props} players={players}/>
                                
                                </>
                                
                            )}/>
                        </>
                        )}
                    />}
                    

        </div>
    )

}

export default Main
