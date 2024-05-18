/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  return (
    <>
      <div className="home">
        <div className="container">
          <button className="center-button" onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faPlus} /> Click Me
          </button>
        </div>
        <div className="favorite-goals">
          <h1>All Goals</h1>
          <p>(0)</p>

        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <form>
              <div className='pop'>
              <div className="form-group">
                <p>Title</p>
                <input
                  className='zzz'
                  placeholder='What do you want to achive?'
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
                  className='nnn'
                  placeholder='Describe your goal'
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Add New Goal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
