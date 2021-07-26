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
    api.getGroupCards().then(data => {
      updateCards(data);
    });
  }, []);

  React.useEffect(() => {
    api.getUserInfo().then(res => {
      updateCurrentUser(res);
      updateLoading(false);
    });
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
    api.updateProfile(userData).then(res => {
      updateCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(userData) {
    api.updateAvatar(userData).then(res => {
      updateCurrentUser(res);
      closeAllPopups();
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then(likedCard => {
      updateCards(cards.map(cardItem => (cardItem._id === card._id ? likedCard : cardItem)));
    });
  }

  function handleDeleteCard(card) {
    api.deleteCard(card._id).then(response => {
      updateCards(cards.filter(stateCard => stateCard !== card));
    });
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card).then(newCard => {
      updateCards([newCard, ...cards]);
      closeAllPopups();
    });
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
