import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ cardData, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardData.owner._id === currentUser._id;
  const isLiked = cardData.likes.some(like => like._id === currentUser._id);

  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <article className="element">
      <img
        className="element__image"
        src={cardData.link}
        alt={`${cardData.name} taken by ${cardData.owner.name}`}
        onClick={handleClick}
      />
      <div className="element__name-box">
        <h2 className="element__name">{cardData.name}</h2>
        <div className="element__like-container">
          <button
            type="button"
            name="Like image"
            className={`element__heart ${isLiked && 'element__heart_liked'}`}
            aria-label="Like photo"></button>
          <p className="element__likes">{cardData.likes.length}</p>
        </div>
      </div>
      <button
        type="button"
        name="Delete image"
        className={`element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`}
        aria-label="Delete photo"></button>
    </article>
  );
}
