export default function Card(props) {
  return (
    <article className="element">
      <img className="element__image" src={props.cardData.link} alt={`Photo of ${props.cardData.name} taken by ${props.cardData.owner.name}`} />
      <div className="element__name-box">
        <h2 className="element__name">{props.cardData.name}</h2>
        <div className="element__like-container">
          <button type="button" name="Like image" className="element__heart" aria-label="Like photo"></button>
          <p className="element__likes">{props.cardData.likes.length}</p>
        </div>
      </div>
      <button type="button" name="Delete image" className="element__delete" aria-label="Delete photo"></button>
    </article>
  );
}
