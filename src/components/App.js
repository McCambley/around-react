import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, updateAvatarPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, updateEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, updateAddPlacePopupState] = React.useState(false);
  const [selectedCard, updateSelectedCard] = React.useState(null);
  const [isLoading, updateLoading] = React.useState(true);
  const [currentUser, updateCurrentUser] = React.useState({});
  const [cards, updateCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getGroupCards()
      .then(data => {
        updateCards(data);
      })
      .catch(err => console.error(`Problem fetching cards cards: ${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(res => {
        updateCurrentUser(res);
        updateLoading(false);
      })
      .catch(err => console.error(`Problem fetching user information: ${err}`));
  }, []);

  function handleAvatarClick() {
    updateAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    updateEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    updateAddPlacePopupState(true);
  }

  function handleCardClick(cardData) {
    updateSelectedCard(cardData);
  }

  function handleUpdateUser(userData) {
    api
      .updateProfile(userData)
      .then(res => {
        updateCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.error(`Problem updating profile: ${err}`));
  }

  function handleUpdateAvatar(userData) {
    api
      .updateAvatar(userData)
      .then(res => {
        updateCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.error(`Problem updating avatar: ${err}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then(likedCard => {
        updateCards(cards.map(cardItem => (cardItem._id === card._id ? likedCard : cardItem)));
      })
      .catch(err => console.error(`Problem updating 'like' status: ${err}`));
  }

  function handleDeleteCard(card) {
    api
      .deleteCard(card._id)
      .then(response => {
        updateCards(cards.filter(stateCard => stateCard !== card));
      })
      .catch(err => console.error(`Problem deleting card: ${err}`));
  }

  function handleAddPlaceSubmit(card) {
    api
      .addCard(card)
      .then(newCard => {
        updateCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.error(`Problem adding new place: ${err}`));
  }

  function closeAllPopups() {
    updateAvatarPopupState(false);
    updateEditProfilePopupState(false);
    updateAddPlacePopupState(false);
    updateSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatarClick={handleAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          isLoading={isLoading}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCard}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlace={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name="delete" title="Are You Sure?" buttonLabel="Yes" onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
