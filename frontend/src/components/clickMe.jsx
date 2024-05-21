import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHeart, faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ClickMe = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTitle('');
    setDescription('');
    setEditingIndex(null);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const newGoal = { title, description, timestamp };
    if (editingIndex !== null) {
      const updatedGoals = goals.map((goal, index) =>
        index === editingIndex ? newGoal : goal
      );
      setGoals(updatedGoals);
    } else {
      setGoals([...goals, newGoal]);
    }
    handleClosePopup();
  };

  const handleEditClick = (index) => {
    setTitle(goals[index].title);
    setDescription(goals[index].description);
    setEditingIndex(index);
    setShowPopup(true);
  };

  const handleDeleteClick = (index) => {
    const updatedGoals = goals.filter((_, goalIndex) => goalIndex !== index);
    setGoals(updatedGoals);
  };

  const timeDifference = (timestamp) => {
    const now = new Date();
    const createdTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now - createdTime) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} second${diffInSeconds !== 1 ? 's' : ''} ago`;
    }
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    }
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
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
                  <div className="nai">
                    <button className="add-button" type="submit">
                      {editingIndex !== null ? 'Update Goal' : 'Add New Goal'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="goalbox">
        <div className="goals-list">
          {goals.map((goal, index) => (
            <div key={index} className="goal-item">
              <div className="title">
                <div className='oggy'>
                <p className="goal-title">{goal.title} </p>
                <p><span className="goal-timestamp">{timeDifference(goal.timestamp)}  </span></p>
                </div>
                <div className="edit-delete">
                  <div className="edit-icon" onClick={() => handleEditClick(index)}>
                    <FontAwesomeIcon icon={faEdit} className="icon edit-icon" />
                  </div>
                  <div className="delete-icon" onClick={() => handleDeleteClick(index)}>
                    <FontAwesomeIcon icon={faTrash} className="icon delete-icon" />
                  </div>
                </div>
              </div>
             
              <p>{goal.description}</p>
              <div className="goal-icons">
                <div className="g-icon">
                  <div className="fav-icon">
                    <FontAwesomeIcon icon={faHeart} className="icon favorite-icon" /> Favorite
                  </div>
                  <div className="com-icon">
                    <FontAwesomeIcon icon={faCheck} className="icon complete-icon" /> Complete
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
