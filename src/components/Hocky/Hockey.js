import React, { useEffect, useState,  } from 'react';
import Player from '../players/Player';
import  './Hockey.css';

const Hockey = () => {
    const [players,setPlayers] = useState([]);
    // console.log(players)

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className='Hockey'>
            <div className='Player-container'>
             <div className='player-inner-div'>
             {
             players.map(player => <Player key = {player.id} player = {player} > </Player> )
            }
             </div>
        </div>
        <div className="profile-container">
         <h1> Profile </h1>
        </div>
    </div>
    ); 
};

export default Hockey;