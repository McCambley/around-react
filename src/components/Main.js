import React from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main(props) {
  const [userName, updateUserName] = React.useState('');
  const [userDescription, updateUserDescription] = React.useState('');
  const [userAvatar, updateUserAvatar] = React.useState('');
  const [isLoading, updateLoading] = React.useState(true);
  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then(({ name, about, avatar }) => {
      updateUserName(name);
      updateUserDescription(about);
      updateUserAvatar(avatar);
      updateLoading(false);
    });
  }, []);

  React.useEffect(() => {
    api.getGroupCards().then(data => {
      updateCards(data);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-box">
          <div className="profile__avatar-wrapper">
            <img id="avatar" src={userAvatar} alt="" className={`profile__avatar ${isLoading ? 'shimmer' : ''}`} />
            <div onClick={props.onEditAvatarClick} className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__text">
            <div className="profile__text-top">
              <h1 className={`profile__name ${isLoading ? 'shimmer' : ''}`}>{userName}</h1>
              <button onClick={props.onEditProfileClick} type="button" name="Edit profile" className={`profile__edit-button ${isLoading ? 'hide' : ''}`} aria-label="Edit profile"></button>
            </div>
            <p className={`profile__title ${isLoading ? 'shimmer' : ''}`}>{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlaceClick} type="button" name="Add image" className={`profile__add-button ${isLoading ? 'hide' : ''}`} aria-label="Add image"></button>
      </section>
      <section className="elements">
        {cards.map((card, index) => (
          <Card key={index} cardData={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
