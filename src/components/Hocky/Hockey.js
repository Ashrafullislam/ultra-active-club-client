import React, { useEffect, useState,  } from 'react';
import Player from '../players/Player';
import  './Hockey.css';
import Profile from '../../profile.jpg';

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

          <div className='profile'> 
             <img  className='porfile-picture' src = {Profile} alt='Profile Pic' />
                <div className='profile-info'>
                <p><b> Ashrafull Islam</b> </p>
                <p className='location' > Habiganj,Sylhet </p>
                </div>
            </div>

            <div className='person-details' >
                <div>
                  <small> <span className='font-style'> 75 </span> kg</small>
                   <p> Weight</p>
                   </div>

                   <div>
                   <small> <span className='font-style'> 6.4 </span> </small>
                   <p> Height</p>
                   </div>
                   <div>
                   <small> <span className='font-style'> 24 </span> yrs</small>
                    <p> Age</p>
                   </div>
                  
              </div>

              <div className='break'>
                <h4> Add Break </h4>
                <div className='break-btn'>
                    <button className='break-btn-time'> 10m</button> 
                    <button className='break-btn-time'> 15m</button> 
                    <button className='break-btn-time'> 20m</button> 
                    <button className='break-btn-time'> 25m</button> 
                    <button className='break-btn-time'> 30m</button> 

                </div>
              
              </div>
         </div>
    </div>
    ); 
};

export default Hockey;