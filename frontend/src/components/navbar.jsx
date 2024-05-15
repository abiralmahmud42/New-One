/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  return (
     <>
     <div className='box'>
      </div>
      <nav>
      <div>
        <div className='first'>
            <div className="logo"></div>
            <p className="goals">Goals</p>
        </div>     
        <ul>
          <li><a href="/"> <i className="fas fa-home"></i> Home</a></li>
          <li><a href="/favoritex"> <i className="fas fa-heart"></i> Favorite</a></li>
          <li><a href="/inProgress"> <i className="fas fa-tasks"> </i> In Progress</a></li>
          <li><a href="/complete"> <i className="fas fa-check-circle"></i> Complete</a></li>
        </ul>
      </div>
    </nav>
    </>
    
  );
}

export default Navbar;
