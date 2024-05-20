/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

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
              <Link to="/" className={`hhh ${activePath === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>
                <li><i className="fas fa-home"></i> Home</li>
              </Link>
              <Link to="/favorites" className={`hhh ${activePath === '/favorites' ? 'active' : ''}`} onClick={() => handleLinkClick('/favorites')}>
                <li><i className="fas fa-heart"></i> Favorites</li>
              </Link>
              <Link to="/inProgress" className={`hhh ${activePath === '/inProgress' ? 'active' : ''}`} onClick={() => handleLinkClick('/inProgress')}>
                <li><i className="fas fa-tasks"></i> In Progress</li>
              </Link>
              <Link to="/complete" className={`hhh ${activePath === '/complete' ? 'active' : ''}`} onClick={() => handleLinkClick('/complete')}>
                <li><i className="fas fa-check-circle"></i> Complete</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
