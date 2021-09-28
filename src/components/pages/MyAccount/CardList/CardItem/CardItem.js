import React from 'react';
import { useHistory } from 'react-router';

import './CardItem.css';

const CardItem = ({ 
  card, 
}) => {

  const history = useHistory();

  const handleOpenImage = () => {
    history.push(`/publications/#${card._id}`);
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