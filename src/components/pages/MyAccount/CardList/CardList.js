import { useHistory } from 'react-router';
import { useSelector } from "react-redux";

import CardItem from './CardItem/CardItem';
import './CardList.css'

const CardList = ({
  onCardClick,
  onClose,
  isOtherUser,
  userUid,
  dataOtherUser,
  userProfile
}) => {

  const history = useHistory();
  const cards =  useSelector((state) => state.cards.value);

  const handleOpenCard = (url) => {
    history.push(url, {cards, userUid, userProfile});
  }

  return (
      <section className="photo-cards">
        <ul className="photo-cards__unordered-list">
          {cards.map((item) => 
            <CardItem 
              key={item._id}
              card={item}
              onCardClick={onCardClick}
              onClose={onClose}
              isOtherUser={isOtherUser}
              userUid={userUid}
              dataOtherUser={dataOtherUser}
              onOpenCard={handleOpenCard}
            /> 
          )}
        </ul>
      </section>
    
  );
}

export default CardList;