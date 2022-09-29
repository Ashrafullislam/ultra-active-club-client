import React from 'react';
import './Player.css';

const Player = (props) => {
  const {name,age,picture,time,gender,text} = props.player
  console.log(props.player);
  return (
    <div className='player'>
    
      <img src= {picture} alt='player img' />
      <div className='player-info'>
      <h3 className='player-name'> {name}  </h3>
      <p className='player-details'> Age: {age}</p>
      <p className='player-details' > Time: {time}m </p>
      <p className='player-details'> Gender:  {gender}  </p> 
      <p className='about'>About: <small>{text} </small></p>
      </div>
      <div className='player-add-btn'>
        <button className='add-to-list-btn'> Add to List</button>
      </div>
      
    </div>
  );
};

export default Player;