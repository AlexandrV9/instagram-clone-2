import './ImagePopup.css';

const ImagePopup = ({
  card,
  onClose
}) => {
  return (
    <div className={`popup popup_type_image ${ card ? 'popup_visible' : ''}`}>
      <div className="popup__wrapper">
        <button
          onClick={onClose}
          className="button popup__close-button"
        >
          Закрыть окно
        </button>
        <img 
          src={card.link}
          alt='c'
          className="popup__image"
        />
      </div>
    </div>
  );
}

export default ImagePopup;