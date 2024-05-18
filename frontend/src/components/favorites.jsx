/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const favorites = () => {
  return (
    <>
      <div className="container">
      <button className="center-button">  <FontAwesomeIcon icon={faPlus} />  Click Me</button>
     </div>
     <div className="favorite-goals">
      <h1>Favorite Goals</h1>
      <p>(0)</p>
    </div>
      
    </>
  )
}

export default favorites