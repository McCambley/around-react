import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSubmitting }) {
  const [name, updateName] = React.useState('');
  const [description, updateDescription] = React.useState('');
  const [isNameInputValid, updateNameInputValidity] = React.useState(false);
  const [isAboutInputValid, updateAboutInputValidity] = React.useState(false);
  const [nameErrorMessage, updateNameErrorMessage] = React.useState('');
  const [aboutErrorMessage, updateAboutErrorMessage] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChange(evt, stateUpdater, validityUpdater) {
    stateUpdater(evt.target.value);
    validityUpdater(evt);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  function checkNameInputValidity(e) {
    if (!e.target.validity.valid) {
      updateNameInputValidity(false);
      updateNameErrorMessage(e.target.validationMessage);
    } else {
      updateNameInputValidity(true);
      updateNameErrorMessage('');
    }
  }

  function checkAboutInputValidity(e) {
    if (!e.target.validity.valid) {
      updateAboutInputValidity(false);
      updateAboutErrorMessage(e.target.validationMessage);
    } else {
      updateAboutInputValidity(true);
      updateAboutErrorMessage('');
    }
  }

  React.useEffect(() => {
    updateName(currentUser.name || '');
    updateDescription(currentUser.about || '');
  }, [currentUser, isOpen]);

  return (
    <>
      <PopupWithForm
        onSubmit={handleSubmit}
        name="edit"
        title="Edit Profile"
        buttonLabel={isSubmitting ? 'Saving...' : 'Save'}
        isOpen={isOpen}
        onClose={onClose}
        isInvalid={!(isNameInputValid && isAboutInputValid)}>
        <div className="popup__input-container">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={evt => handleChange(evt, updateName, checkNameInputValidity)}
            className="popup__input popup__input_role_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className={`popup__input-error popup__input-error_name ${!isNameInputValid && 'popup__input-error_active'}`}>{nameErrorMessage}</span>
          <input
            type="text"
            id="title"
            name="about"
            placeholder="Title"
            value={description}
            onChange={evt => handleChange(evt, updateDescription, checkAboutInputValidity)}
            className="popup__input popup__input_role_title"
            required
            minLength="2"
            maxLength="200"
          />
          <span className={`popup__input-error popup__input-error_title ${!isAboutInputValid && 'popup__input-error_active'}`}>
            {aboutErrorMessage}
          </span>
        </div>
      </PopupWithForm>
    </>
  );
}
