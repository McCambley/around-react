import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {
  // const [userName, updateUserName] = React.useState('');
  // const [userDescription, updateUserDescription] = React.useState('');
  // const [userAvatar, updateUserAvatar] = React.useState('');
  const [cards, updateCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getGroupCards().then(data => {
      updateCards(data);
    });
  }, []);

  function handleCardLike(card) {
    // determine if card is liked by current user
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    // send new like to the server and update state
    api.changeLikeCardStatus(card._id, isLiked).then(likedCard => {
      updateCards(cards.map(cardItem => (cardItem._id === card._id ? likedCard : cardItem)));
    });
  }

  function handleDeleteCard(card) {
    api.deleteCard(card._id).then(response => {
      updateCards(cards.filter(stateCard => stateCard !== card));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-box">
          <div className="profile__avatar-wrapper">
            <img
              id="avatar"
              src={currentUser.avatar}
              alt=""
              className={`profile__avatar ${props.isLoading ? 'shimmer' : ''}`}
            />
            <div onClick={props.onEditAvatarClick} className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__text">
            <div className="profile__text-top">
              <h1 className={`profile__name ${props.isLoading ? 'shimmer' : ''}`}>{currentUser.name}</h1>
              <button
                onClick={props.onEditProfileClick}
                type="button"
                name="Edit profile"
                className={`profile__edit-button ${props.isLoading ? 'hide' : ''}`}
                aria-label="Edit profile"></button>
            </div>
            <p className={`profile__title ${props.isLoading ? 'shimmer' : ''}`}>{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          name="Add image"
          className={`profile__add-button ${props.isLoading ? 'hide' : ''}`}
          aria-label="Add image"></button>
      </section>
      <section className="elements">
        {cards.map((card, index) => (
          <Card
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCard}
            key={index}
            cardData={card}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
