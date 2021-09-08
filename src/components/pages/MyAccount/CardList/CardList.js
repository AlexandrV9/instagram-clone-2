import { useHistory } from 'react-router';

import CardItem from './CardItem/CardItem';
import Loader from '../../../common/Loader/Loader';
import './CardList.css'

const CardList = ({
  cards,
  onCardClick,
  onClose,
  isOtherUser,
  userUid,
  myUserUid,
  dataOtherUser,
  userProfile
}) => {

  const history = useHistory();

  const handleOpenCard = (url) => {
    history.push(url, {cards, userUid, userProfile});
  }

  return (
    myUserUid ? (
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
    )
    :
    <Loader />
  );
}

export default CardList;