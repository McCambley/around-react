import PopupWithForm from './PopupWithForm';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, updateName] = React.useState('');
  const [description, updateDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChange(evt, stateUpdater) {
    stateUpdater(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    updateName(currentUser.name || '');
    updateDescription(currentUser.about || '');
  }, [currentUser]);

  return (
    <>
      <PopupWithForm
        onSubmit={handleSubmit}
        name="edit"
        title="Edit Profile"
        buttonLabel="Save"
        isOpen={isOpen}
        onClose={onClose}>
        <div className="popup__input-container">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={evt => handleChange(evt, updateName)}
            className="popup__input popup__input_role_name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error popup__input-error_name" />
          <input
            type="text"
            id="title"
            name="about"
            placeholder="Title"
            value={description}
            onChange={evt => handleChange(evt, updateDescription)}
            className="popup__input popup__input_role_title"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error popup__input-error_title" />
        </div>
      </PopupWithForm>
    </>
  );
}
