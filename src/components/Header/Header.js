import React from 'react';
import Logo from '../../Hockey_Victoria_logo.svg.png';
import './Header.css';


const Header = () => {
    return (
        <div className='Header-logo'>
        <div className='Hocky-logo'>
        <img className='logo' src= {Logo} alt=" logo" />
             <p className='logo-title'> Hockey Victoria Play</p>


        </div>
            
        </div>
    );
};

export default Header;