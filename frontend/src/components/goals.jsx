// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

const goals = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = { title, description };
        setGoals([...goals, newGoal]);
        handleClosePopup();
        // edit this goal
      };
  return (
    <>
       <div className='goal-box'>
      <div className="goals-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-item">
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default goals