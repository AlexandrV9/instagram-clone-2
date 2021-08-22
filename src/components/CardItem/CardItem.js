import './CardItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
      <HashLink to = {`/publications/#${card._id}`}>
        <img 
          className="photo-cards__item-image" 
          src ={card.link} alt="Изображение"
          onClick={handleCardClick}
        />
      </HashLink>
    </li>
  );
}

export default CardItem;