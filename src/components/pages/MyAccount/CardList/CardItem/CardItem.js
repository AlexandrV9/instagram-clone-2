import React from 'react';

import './CardItem.css';

const CardItem = ({ 
  card, 
  onOpenCard
}) => {

  const handleOpenImage = () => {
    onOpenCard(`/publications/#${card._id}`)
  }

  return (
    <li className="photo-cards__item-list">
      <img 
        className="photo-cards__item-image" 
        src ={card.link} alt="Изображение"
        onClick={handleOpenImage}
      />
    </li>
  );
}

export default CardItem;