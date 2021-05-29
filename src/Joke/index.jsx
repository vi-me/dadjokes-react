import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [numberOfUpLikes, setNumberOfUpLikes] = useState(likes);
  const [numberOfDownLikes, setNumberOfDownLikes] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={() => setNumberOfUpLikes(numberOfUpLikes + 1)}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {numberOfUpLikes}
        </span>

        <button
          onClick={() => setNumberOfDownLikes(numberOfDownLikes + 1)}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {numberOfDownLikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;
