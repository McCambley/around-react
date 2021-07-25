import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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
        />
        <Footer />
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name="add" title="New Place" buttonLabel="Create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__input-container">
            <input type="text" id="place" name="name" placeholder="Title" className="popup__input popup__input_role_image-title" required minLength="1" maxLength="30" />
            <span className="popup__input-error popup__input-error_place" />
            <input type="url" id="url" name="link" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
            <span className="popup__input-error popup__input-error_url" />
          </div>
        </PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name="delete" title="Are You Sure?" buttonLabel="Yes" onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
