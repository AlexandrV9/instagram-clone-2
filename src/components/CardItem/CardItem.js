import './CardItem.css';
import React from 'react';

const CardItem = ({ 
  card, 
  pathImageItem, 
  onCardClick,
}) => {

  const handleCardClick = () => {
    onCardClick(card);
  }

  return (
    <li className="photo-cards__item-list">
      <img 
        className="photo-cards__item-image" 
        src ={card.link} alt="Изображение"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default CardItem;