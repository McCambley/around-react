export default function ImagePopup() {
  return (
    <div className="popup popup_role_image">
      <div className="popup__container popup__container_role_image">
        <figure className="popup__figure">
          <img src="#" alt="#" className="popup__image" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
        <button type="button" className="popup__close popup__close_role_image" aria-label="Close"></button>
      </div>
    </div>
  );
}
