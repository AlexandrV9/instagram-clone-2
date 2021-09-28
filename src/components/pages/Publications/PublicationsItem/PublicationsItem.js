import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './PublicationsItem.css';
import pathIconDots from '../../../../images/icon/icon-three-dots.svg';
import pathLikeIcon from '../../../../images/icon/icon-like.svg';
import pathCommentIcon from '../../../../images/icon/icon-message.svg';
import pathPaperPlaneIcon from '../../../../images/icon/icon-paper-plane.svg';
import pathNotesIcon from '../../../../images/icon/icon-save.svg';
import * as api from '../../../../utils/api';

import { 
  updateCard,
} from '../../../../features/currenUser/currentUserSlice';

const PublicationsItem = ({
  card,
}) => {

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.currentUser.value).userId;
  const user = useSelector((state) => state.currentUser.value);

  const handleLikeCard = async (card) => {
    await api.updateNumberOfLikes(card, userId, card.likes+1 );
    dispatch(updateCard(card));
    
  }

  return (
    <li className="publications__item-list" id={card._id}>
      
      <div className="publications__wrapper-top">
        <div className="publications__wrapper-image">
          <Link to = "/"><img className="publications__avatar-image" src={user.avatar} alt="Изображение аватара" /></Link>
        </div>
        <div className="publications__wrapper-text">
          <p className="publications__id-profile">{user._id}</p>
          <a href="#11"className="publications__link-location">33 водопада</a>
        </div>

        <button className="button publications__button-action-menu">
          <img className="publications__icon publications__icon-dots" alt="Иконка троеточия" src={pathIconDots}/>
        </button>


      </div>

      <img className="publications__item-image" src={card.link} alt="Изображение"/>

      <div className="publications__wrapper-bottom">
        <div className="publications__wrapper-button">
          <div className="publications__wrapper-left-button">
            <button className="publications__button publications__button-like" onClick={() => handleLikeCard(card)}>
              <img className="publications__icon publications__icon-like" src={pathLikeIcon} alt="Иконка лайка"/>
            </button>
            <button className="publications__button publications__button-comment">
              <img className="publications__icon publications__icon-comment" src={pathCommentIcon} alt="Иконка сообщения"/>
            </button>
            <button className="publications__button publications__button-">
              <img className="publications__icon publications__icon-paper-plane" src={pathPaperPlaneIcon} alt="Иконка бумажного самолётика"/>
            </button>
          </div>

          <button className="publications__button publications__button-notes">
            <img className="publications__icon publications__icon-notes" src={pathNotesIcon} alt="Иконка заметок"/>
          </button>

        </div>
        <p className="publications__likes">Нравится <span className="publications__likes-number">{card.likes}</span></p>
      </div>
    </li>
  );
}

export default PublicationsItem;
