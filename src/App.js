import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img id="logo" src={logo} alt="Around the U.S." className="logo" />
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__info-box">
            <div className="profile__avatar-wrapper">
              <img id="avatar" alt="" className="profile__avatar shimmer" />
              <div className="profile__avatar-overlay"></div>
            </div>
            <div className="profile__text">
              <div className="profile__text-top">
                <h1 className="profile__name shimmer">Loading...</h1>
                <button type="button" name="Edit profile" className="profile__edit-button hide" aria-label="Edit profile"></button>
              </div>
              <p className="profile__title shimmer">Loading...</p>
            </div>
          </div>
          <button type="button" name="Add image" className="profile__add-button hide" aria-label="Add image"></button>
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
      <footer className="footer">
        <p className="footer__copyright">&copy; 2021 Around the U.S.</p>
      </footer>
      <div className="popup popup_role_edit">
        <div className="popup__container">
          <form action="#" name="profile" className="popup__form popup__form_role_edit" novalidate>
            <h2 className="popup__header">Edit Profile</h2>
            <div className="popup__input-container">
              <input type="text" id="name" name="name" placeholder="Name" className="popup__input popup__input_role_name" required minlength="2" maxlength="40" />
              <span className="popup__input-error popup__input-error_name"></span>
              <input type="text" id="title" name="about" placeholder="Title" className="popup__input popup__input_role_title" required minlength="2" maxlength="200" />
              <span className="popup__input-error popup__input-error_title"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_edit">
              Save
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_edit" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_add">
        <div className="popup__container">
          <form action="#" name="place" className="popup__form popup__form_role_add" novalidate>
            <h2 className="popup__header">New place</h2>
            <div className="popup__input-container">
              <input type="text" id="place" name="name" placeholder="Title" className="popup__input popup__input_role_image-title" required minlength="1" maxlength="30" />
              <span className="popup__input-error popup__input-error_place"></span>
              <input type="url" id="url" name="link" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
              <span className="popup__input-error popup__input-error_url"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_add">
              Create
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_add" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_avatar">
        <div className="popup__container">
          <form action="#" name="avatar" className="popup__form popup__form_role_avatar" novalidate>
            <h2 className="popup__header">Change profile picture</h2>
            <div className="popup__input-container popup__input-container_role_avatar">
              <input type="url" id="avatar-url" name="avatar" placeholder="Image link" className="popup__input popup__input_role_image-link" required />
              <span className="popup__input-error popup__input-error_avatar-url"></span>
            </div>
            <button type="submit" className="popup__save-button popup__save-button_role_avatar">
              Save
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_avatar" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_delete">
        <div className="popup__container">
          <form action="#" name="place" className="popup__form popup__form_role_delete" novalidate>
            <h2 className="popup__header">Are you sure?</h2>
            <button type="submit" className="popup__save-button popup__save-button_role_delete">
              Yes
            </button>
          </form>
          <button type="button" className="popup__close popup__close_role_delete" aria-label="Close"></button>
        </div>
      </div>
      <div className="popup popup_role_image">
        <div className="popup__container popup__container_role_image">
          <figure className="popup__figure">
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button type="button" className="popup__close popup__close_role_image" aria-label="Close"></button>
        </div>
      </div>
    </div>
  );
}

export default App;
