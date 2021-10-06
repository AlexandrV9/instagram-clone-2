import React from 'react';

import './PopupCreateCard.css';

const PopupCreateCard = ({
  isOpenPopupCreateCard,
  handleVisiblePopup,
  onAddCard,
}) => {

  const [link, setLink ] = React.useState('');
  const [textLocation, setTextLocation ] = React.useState('');
  const [textDescription, setTextDescription ] = React.useState('');

  const handleChangeUrlImage = event => setLink(event.target.value);
  const handleChangeTextLocation = event => setTextLocation(event.target.value);
  const handleChangeTextDescription = event => setTextDescription(event.target.value);

  const handleSubmit = (event) => {
    document.body.classList.remove('page_lock');
    event.preventDefault();
    onAddCard({
      link,
      textLocation,
      textDescription,
    })
  }
  
  return (
    <div className={`popup popup_type_create-card ${isOpenPopupCreateCard ? 'popup_visible' : ''}`}onClick={handleVisiblePopup}>
      <div className="popup__content popup__content_type_create-card" onClick={event => event.stopPropagation()}>

        <h1 className="popup__title">Добавить новое фото</h1>

        <form 
          className="popup__form popup__form_type_create-card"
          onSubmit={handleSubmit}
          noValidate
        >
          <input 
            id="input_type_url"
            type="url"
            value={link}
            name="url-image"
            className="popup__input popup__input_type_url-image"
            placeholder="Введите ссылку на картинку"
            required
            onChange={handleChangeUrlImage}
          />

          <input 
            id="input_type_text"
            type="text"
            value={textLocation}
            name="text-location"
            className="popup__input popup__input_type_text-location"
            placeholder="Введите место"
            required
            onChange={handleChangeTextLocation}
          />

          <input 
            id="input_type_description"
            type="text"
            value={textDescription}
            name="text-description"
            className="popup__input popup__input_type_description"
            placeholder="Описание к картинке"
            onChange={handleChangeTextDescription}
          />

          <button className="popup__button">Добавить</button>

        </form>
      </div>
    </div>
  );
}

export default PopupCreateCard;