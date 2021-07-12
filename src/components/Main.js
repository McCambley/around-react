export default function Main() {
  function handleAvatarClick() {
    const avatarUpdatePopup = document.querySelector('.popup_role_avatar');
    avatarUpdatePopup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const profileEditor = document.querySelector('.popup_role_edit');
    profileEditor.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const imageAdderPopup = document.querySelector('.popup_role_add');
    imageAdderPopup.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info-box">
          <div className="profile__avatar-wrapper">
            <img id="avatar" alt="" className="profile__avatar shimmer" />
            <div onClick={handleAvatarClick} className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__text">
            <div className="profile__text-top">
              <h1 className="profile__name shimmer">Loading...</h1>
              <button onClick={handleEditProfileClick} type="button" name="Edit profile" className="profile__edit-button hide" aria-label="Edit profile"></button>
            </div>
            <p className="profile__title shimmer">Loading...</p>
          </div>
        </div>
        <button onClick={handleAddPlaceClick} type="button" name="Add image" className="profile__add-button hide" aria-label="Add image"></button>
      </section>

      <section className="elements">
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
        <article className="element element_loading">
          <img className="element__image shimmer" alt="" />
          <div className="element__name-box shimmer">
            <div className="element__name"></div>
            <div className="element__like-container"></div>
          </div>
        </article>
      </section>
    </main>
  );
}
