import { PopupClosureContext } from '../contexts/PopupClosureContext';
import React from 'react';

export default function ImagePopup(props) {
  const popupCloserContext = React.useContext(PopupClosureContext);

  React.useEffect(() => {
    document.addEventListener('keydown', popupCloserContext.closeOnEscape);

    return () => {
      document.removeEventListener('keydown', popupCloserContext.closeOnEscape);
    };
  }, []);

  return (
    <div
      className={`popup popup_role_image ${props.card && 'popup_opened'}`}
      onClick={popupCloserContext.closeOnOverlay}
      // onKeyDown={popupCloserContext.closeOnEscape}
    >
      <div className="popup__container popup__container_role_image">
        <figure className="popup__figure">
          <img src={`${props.card ? props.card.link : '#'}`} alt="#" className="popup__image" />
          <figcaption className="popup__caption">{`${props.card && props.card.name}`}</figcaption>
        </figure>
        <button type="button" className="popup__close popup__close_role_image" aria-label="Close" onClick={props.onClose}></button>
      </div>
    </div>
  );
}
