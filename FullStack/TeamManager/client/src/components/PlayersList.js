import React from 'react'

const PlayersList = props => {
    const { players } = props;
    const deletePlayer = (playerId) => {
        
    }

    return (
        <div>
                       <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {players.sort((a,b) => (a.name > b.name) ? 1 :-1)
            .map((item,index)=>{
                return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.prefPosition}</td>
                            <td>
                            <button onClick={(e)=>{props.deleteProduct(item._id)}}>Delete</button>
                            </td>
                        </tr>
            })}
            </tbody>
            </table>
 
        </div>
    )
}


export default PlayersList
