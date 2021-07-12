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

  function handleAvatarClick() {
    updateAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    updateEditProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    updateAddPlacePopupState(true);
  }

  function handleCardClick() {
    console.log('Card clicked');
  }

  function closeAllPopups() {
    updateAvatarPopupState(false);
    updateEditProfilePopupState(false);
    updateAddPlacePopupState(false);
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
      <ImagePopup />
      {/* <div className="popup popup_role_edit">
        <div className="popup__container">
          <form action="#" name="profile" className="popup__form popup__form_role_edit" noValidate>
            <h2 className="popup__header">Edit Profile</h2>
            <div className="popup__input-container">
              <input type="text" id="name" name="name" placeholder="Name" className="popup__input popup__input_role_name" required minLength="2" maxLength="40" />
              <span className="popup__input-error popup__input-error_name"></span>
              <input type="text" id="title" name="about" placeholder="Title" className="popup__input popup__input_role_title" required minLength="2" maxLength="200" />
              <span className="popup__input-error popup__input-error_title"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_edit">
              Save
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_edit" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_add">
        <div className="popup__container">
          <form action="#" name="place" className="popup__form popup__form_role_add" noValidate>
            <h2 className="popup__header">New place</h2>
            <div className="popup__input-container">
              <input type="text" id="place" name="name" placeholder="Title" className="popup__input popup__input_role_image-title" required minLength="1" maxLength="30" />
              <span className="popup__input-error popup__input-error_place"></span>
              <input type="url" id="url" name="link" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
              <span className="popup__input-error popup__input-error_url"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_add">
              Create
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_add" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_avatar">
        <div className="popup__container">
          <form action="#" name="avatar" className="popup__form popup__form_role_avatar" noValidate>
            <h2 className="popup__header">Change profile picture</h2>
            <div className="popup__input-container popup__input-container_role_avatar">
              <input type="url" id="avatar-url" name="avatar" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
              <span className="popup__input-error popup__input-error_avatar-url"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_avatar">
              Save
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_avatar" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_delete">
        <div className="popup__container">
          <form action="#" name="place" className="popup__form popup__form_role_delete" noValidate>
            <h2 className="popup__header">Are you sure?</h2>
            <button type="submit" className="popup__save-button popup__save-button_role_delete">
              Yes
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_delete" aria-label="Close"></button>
        </div>
      </div> */}
      {/* <div className="popup popup_role_image">
        <div className="popup__container popup__container_role_image">
          <figure className="popup__figure">
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button type="button" className="popup__close popup__close_role_image" aria-label="Close"></button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
