import React from 'react';
import { PopupClosureContext } from '../contexts/PopupClosureContext';

export default function PopupWithForm(props) {
  const [isValid, updateFormValidity] = React.useState(false);
  const formRef = React.useRef();
  const overlayRef = React.useRef();
  const popupCloserContext = React.useContext(PopupClosureContext);

  React.useEffect(() => {
    updateFormValidity(formRef.current.checkValidity());
  }, [props.isOpen]);

  function checkFormValidity() {
    updateFormValidity(formRef.current.checkValidity());
  }

  // function logEvent(e) {
  //   console.log(e.target);
  //   console.log(overlayRef.current);
  //   console.log(e.target === overlayRef.current);
  // }

  return (
    <>
      <div
        className={`popup popup_role_${props.name} ${props.isOpen && 'popup_opened'}`}
        ref={overlayRef}
        // onClick={e => e.target === overlayRef.current && props.onClose()}
        onClick={popupCloserContext.closeOnOverlay}>
        <div className="popup__container">
          <form
            noValidate
            ref={formRef}
            onChange={checkFormValidity}
            onSubmit={props.onSubmit}
            action="#"
            name={props.title}
            className={`popup__form popup__form_role_${props.name}`}>
            <h2 className="popup__header">{props.title}</h2>
            {props.children}
            <button
              type="submit"
              className={`popup__save-button popup__save-button_role_${props.name} ${!isValid && 'popup__save-button_disabled'}`}
              disabled={!isValid}>
              {props.buttonLabel}
            </button>
          </form>
          <button type="button" className={`popup__close popup__close_role_${props.name}`} aria-label="Close" onClick={props.onClose}></button>
        </div>
      </div>
    </>
  );
}
