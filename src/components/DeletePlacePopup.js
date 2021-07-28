import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function DeletePlacePopup({ isOpen, onClose, onDeletePlace, card }) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeletePlace(card);
  }
  return (
    <>
      <PopupWithForm onSubmit={handleSubmit} name="delete" title="Are You Sure?" buttonLabel="Yes" isOpen={isOpen} onClose={onClose} />
    </>
  );
}
