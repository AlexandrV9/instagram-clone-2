import './PublicationsItem.css';
import React from 'react';
import pathAvatarImage from '../../images/car.jpeg';
import firebase from 'firebase';

import pathIconDots from '../../images/icon/icon-three-dots.svg';
import pathLikeIcon from '../../images/icon/icon-like.svg';
import pathCommentIcon from '../../images/icon/icon-message.svg';
import pathPaperPlaneIcon from '../../images/icon/icon-paper-plane.svg';
import pathNotesIcon from '../../images/icon/icon-save.svg';

import { Link } from 'react-router-dom';

const PublicationsItem = ({
  card,
  userUid,
}) => {
  const [likes, setLikes] = React.useState(card.likes);

  const handleLikeCard = (card) => {

    firebase.database().ref("users/"  + userUid).child('cards/'+ card._id + '/likes').once('value', function(snapshot) {
        let currentNumberLikes = snapshot.val();
        currentNumberLikes+=1;
        firebase.database().ref('/users/' + userUid + '/cards/' + card._id).update({
          likes: currentNumberLikes,
        })
        setLikes(currentNumberLikes);
    });
  }


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
        <p className="publications__likes">Нравится <span className="publications__likes-number">{likes}</span></p>
      </div>
    </li>
  );
}

export default PublicationsItem;
