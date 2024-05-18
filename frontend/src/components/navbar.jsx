/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  return (
     <>
     <div className='navbar'>
     <div className='box'>
      </div>
      <nav>
      <div>
        <div className='first'>
            <div className="logo"></div>
            <p className="goals">Goals</p>
        </div>     
        <ul className='hhh'>
          <Link to="/" className='hhh'><li> <i className="fas fa-home"></i> Home </li></Link>
          <Link to="/favorites"className='hhh'><li> <i className="fas fa-heart"></i> Favorites </li></Link>
          <Link to="/inProgress" className='hhh'><li> <i className="fas fa-tasks"></i> In Progress </li></Link>
          <Link to="/complete" className='hhh'><li> <i className="fas fa-check-circle"></i> Complete </li></Link>
        </ul>
      </div>
      </nav>
     </div>
     
    </>
    
  );
}

export default Navbar;
