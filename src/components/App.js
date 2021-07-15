import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, updateAvatarPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, updateEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, updateAddPlacePopupState] = React.useState(false);
  const [selectedCard, updateSelectedCard] = React.useState();

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

  function closeAllPopups() {
    updateAvatarPopupState(false);
    updateEditProfilePopupState(false);
    updateAddPlacePopupState(false);
    updateSelectedCard();
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatarClick={handleAvatarClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit" title="Edit Profile" buttonLabel="Save" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input type="text" id="name" name="name" placeholder="Name" className="popup__input popup__input_role_name" required minLength="2" maxLength="40" />
          <span className="popup__input-error popup__input-error_name"></span>
          <input type="text" id="title" name="about" placeholder="Title" className="popup__input popup__input_role_title" required minLength="2" maxLength="200" />
          <span className="popup__input-error popup__input-error_title"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="add" title="New Place" buttonLabel="Create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container">
          <input type="text" id="place" name="name" placeholder="Title" className="popup__input popup__input_role_image-title" required minLength="1" maxLength="30" />
          <span className="popup__input-error popup__input-error_place"></span>
          <input type="url" id="url" name="link" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
          <span className="popup__input-error popup__input-error_url"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Change Profile Picture" buttonLabel="Save" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="popup__input-container popup__input-container_role_avatar">
          <input type="url" id="avatar-url" name="avatar" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
          <span className="popup__input-error popup__input-error_avatar-url"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Are You Sure?" buttonLabel="Yes" onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
