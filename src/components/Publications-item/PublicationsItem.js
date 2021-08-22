import './PublicationsItem.css';

import pathAvatarImage from '../../images/car.jpeg';

import pathIconDots from '../../images/icon/icon-three-dots.svg';
import pathLikeIcon from '../../images/icon/icon-like.svg';
import pathCommentIcon from '../../images/icon/icon-message.svg';
import pathPaperPlaneIcon from '../../images/icon/icon-paper-plane.svg';
import pathNotesIcon from '../../images/icon/icon-save.svg';


import { Link } from 'react-router-dom';

const PublicationsItem = ({
  card,
}) => {

  return (
    <li className="publications__item-list" id={card._id}>
      
      <div className="publications__wrapper-top">
        <div className="publications__wrapper-image">
          <Link to = "/"><img className="publications__avatar-image" src={pathAvatarImage} alt="Изображение аватара" /></Link>
        </div>
        <div className="publications__wrapper-text">
          <p className="publications__id-profile">info.3.7.9</p>
          <a href="#11"className="publications__link-location">33 водопада</a>
        </div>


        <button className="button publications__button-action-menu">
          <img className="publications__icon publications__icon-dots" alt="Иконка троеточия" src={pathIconDots}/>
        </button>


      </div>

      <img className="publications__item-image" src={card.link} alt="Изображение"/>

      <div className="publications__wrapper-bottom">
        <div className="publications__wrapper-button">
          <button className="publications__button publications__button-like">
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
    </li>
  );
}

export default PublicationsItem;
