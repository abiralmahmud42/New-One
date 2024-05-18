/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const complete = () => {
  return (
    <>
     <div className='home'>
      <div className="container">
      <button className="center-button">  <FontAwesomeIcon icon={faPlus} />  Click Me</button>
     </div>
     <div className="favorite-goals">
      <h1>Completed Goals</h1>
      <p>(0)</p>
    </div>
    </div>
      
    </>
  )
}

export default complete