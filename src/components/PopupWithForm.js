export default function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_role_${props.name} ${props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
          <form onSubmit={props.onSubmit} action="#" name={props.title} className={`popup__form popup__form_role_${props.name}`} noValidate>
            <h2 className="popup__header">{props.title}</h2>
            {props.children}
            <button type="submit" className={`popup__save-button popup__save-button_role_${props.name}`}>
              {props.buttonLabel}
            </button>
          </form>
          <button type="button" className={`popup__close popup__close_role_${props.name}`} aria-label="Close" onClick={props.onClose}></button>
        </div>
      </div>
    </>
  );
}
