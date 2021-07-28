import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const [name, updateName] = React.useState('');
  const [link, updateLink] = React.useState('');

  function handleChange(e, stateUpdater) {
    stateUpdater(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  React.useEffect(() => {
    updateName('');
    updateLink('');
  }, [props.isOpen]);

  return (
    <>
      <PopupWithForm
        name="add"
        title="New Place"
        buttonLabel={props.isSubmitting ? 'Saving...' : 'Save'}
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}>
        <div className="popup__input-container">
          <input
            type="text"
            id="place"
            name="name"
            placeholder="Title"
            className="popup__input popup__input_role_image-title"
            required
            minLength="1"
            maxLength="30"
            value={name}
            onChange={e => handleChange(e, updateName)}
          />
          <span className="popup__input-error popup__input-error_place" />
          <input
            type="url"
            id="url"
            name="link"
            placeholder="Image link"
            className="popup__input popup__input_role_image-link"
            value={link}
            onChange={e => handleChange(e, updateLink)}
            required
          />
          <span className="popup__input-error popup__input-error_url" />
        </div>
      </PopupWithForm>
    </>
  );
}
