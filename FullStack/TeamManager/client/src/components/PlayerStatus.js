import React from 'react'
const PlayerStatus = (props) => {
    const { players ,match:{params:{id:gameId}} } = props;
    const buttonStyle=(playerStatus,buttonStatus)=>{
        return buttonStatus==="Playing"&&playerStatus==="Playing"?{color:'white',backgroundColor:'green'}
        :buttonStatus==="Not Playing"&&playerStatus==="Not Playing"?{color:'white',backgroundColor:'red'}
        :buttonStatus==="Undecided"&&playerStatus==="Undecided"?{color:'black',backgroundColor:'yellow'}
        :{color:'black',backgroundColor:'white'}
    }
    console.log("render Player Status");
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {players.sort((a,b) => (a.name > b.name) ? 1 :-1)
            .map((item,index)=>{
                return <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                            <button style={buttonStyle(item['game'+gameId],"Playing")} onClick={(e)=>props.updatePlayer({['game'+gameId]:"Playing"},item._id)}>Playing</button>
                            <button style={buttonStyle(item['game'+gameId],"Not Playing")} onClick={(e)=>props.updatePlayer({['game'+gameId]:"Not Playing"},item._id)}>Not Playing</button>
                            <button style={buttonStyle(item['game'+gameId],"Undecided")} onClick={(e)=>props.updatePlayer({['game'+gameId]:"Undecided"},item._id)}>Undecided</button>
                            </td>
                        </tr>
            })}
            </tbody>
            </table>
 
        </div>
    )

}

export default PlayerStatus
