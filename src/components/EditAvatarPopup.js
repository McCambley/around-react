import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSubmitting }) {
  const inputRef = React.useRef();
  const [isUrlInputValid, updateUrlInputValidity] = React.useState(false);
  const [errorMessage, updateErrorMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  React.useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen]);

  function checkInputValidity(e) {
    if (!e.target.validity.valid) {
      updateUrlInputValidity(false);
      updateErrorMessage(e.target.validationMessage);
    } else {
      updateUrlInputValidity(true);
      updateErrorMessage('');
    }
  }

  return (
    <>
      <PopupWithForm
        onSubmit={handleSubmit}
        isInvalid={!isUrlInputValid}
        name="avatar"
        title="Change Profile Picture"
        buttonLabel={isSubmitting ? 'Saving...' : 'Save'}
        isOpen={isOpen}
        onClose={onClose}>
        <div className="popup__input-container popup__input-container_role_avatar">
          <input
            ref={inputRef}
            // onChange={(checkInputValidity, checkFormValidity)}
            onChange={checkInputValidity}
            type="url"
            id="avatar-url"
            name="avatar"
            placeholder="Image link"
            className="popup__input popup__input_role_image-link"
            required
          />
          <span className={`popup__input-error popup__input-error_avatar-url ${!isUrlInputValid && 'popup__input-error_active'}`}>
            {errorMessage}
          </span>
        </div>
      </PopupWithForm>
    </>
  );
}
