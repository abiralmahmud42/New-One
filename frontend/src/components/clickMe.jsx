/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';

const ClickMe = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState([]);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTitle('');
    setDescription('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = { title, description };
    setGoals([...goals, newGoal]);
    handleClosePopup();
  };

  return (
    <>
      <button className="center-button" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faPlus} /> Click Me
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handleClosePopup}>
                &times;
              </span>
              <form onSubmit={handleSubmit}>
                <div className="pop">
                  <div className="form-group">
                    <p>Title</p>
                    <input
                      className="zzz"
                      placeholder="What do you want to achieve?"
                      type="text"
                      id="title"
                      value={title}
                      onChange={handleTitleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <p>Description</p>
                    <textarea
                      className="nnn"
                      placeholder="Describe your goal"
                      id="description"
                      value={description}
                      onChange={handleDescriptionChange}
                      required
                    ></textarea>
                  </div>
                  <div className='nai'>
                    <button className="add-button" type="submit">
                      Add New Goal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="goal-box">
        <div className="goals-list">
          {goals.map((goal, index) => (
            <div key={index} className="goal-item">
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
              <div className="goal-icons">
                <div className='g-icon'>
                    <div className='fav-icon'>
                    <FontAwesomeIcon icon={faHeart} className="icon favorite-icon"  /> Favorite
                    </div>
                    <div className='com-icon'>
                     <FontAwesomeIcon icon={faCheck} className="icon complete-icon"  /> Complete
                   </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClickMe;
