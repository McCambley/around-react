import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <>
      <PopupWithForm onSubmit={handleSubmit} name="avatar" title="Change Profile Picture" buttonLabel="Save" isOpen={isOpen} onClose={onClose}>
        <div className="popup__input-container popup__input-container_role_avatar">
          <input
            ref={inputRef}
            type="url"
            id="avatar-url"
            name="avatar"
            placeholder="Image link"
            className="popup__input popup__input_role_image-link"
            required
          />
          <span className="popup__input-error popup__input-error_avatar-url" />
        </div>
      </PopupWithForm>
    </>
  );
}
