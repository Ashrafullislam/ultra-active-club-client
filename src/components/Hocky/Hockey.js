import React, { useEffect, useState,  } from 'react';
import Player from '../players/Player';
import  './Hockey.css';
import Profile from '../../profile.jpg';

const Hockey = () => {
    
    const [players,setPlayers] = useState([]);
    const [times,setTimes] = useState([0]);
    //set time break 
    const [breakTime,setBreakTime] = useState([]);
    

    //event handlar pass the function 
    const AddToList = (props) => {
        const {name,time} = props;
        console.log(time)
        const newTime = parseInt(times) + parseInt(time);  
        setTimes(newTime);
        localStorage.setItem(name,times)
     
    }

    // add event handlar to set the breake time 
    const AddBreakTime = (props) => {
        console.log(props);
        setBreakTime(props);
        
    }

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
             players.map(player => <Player key = {player.id} player = {player} 
             handlar = {AddToList}
             >  </Player>)
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
                <h3> Add Break </h3>
                <div className='break-btn'>
                    <button onClick={()=> AddBreakTime(10)} className='break-btn-time'> 10m</button> 
                    <button  onClick={()=> AddBreakTime(15)}  className='break-btn-time'> 15m</button> 
                    <button onClick={()=> AddBreakTime(20)}  className='break-btn-time'> 20m</button> 
                    <button  onClick={()=> AddBreakTime(25)}  className='break-btn-time'> 25m</button> 
                    <button onClick={()=> AddBreakTime(30)}  className='break-btn-time'> 30m</button> 
                </div>
              </div>
              
              <div className="play-details">
                 <h3> Play Details</h3>
                  <div className='play-time'>
                     <div className='play-time-div'>
                        <span> <b> Play Time</b> </span>
                        <small> <span> {times} </span>  minutes </small>
                    </div>

                 <div style={{marginTop:15}}>  
                    <div className='play-time-div'>
                        <span> <b> Break Time </b> </span>
                        <small> <span>{breakTime} </span> minutes </small>
                      </div>
                  </div>
                 
                  </div>
                <div className='activity-btn-div'> 
                    <button className='activity-btn' > Activity Compleated </button>
                </div>

              </div> 
         </div>
    </div>
    ); 
};

export default Hockey;