import './CardList.css'
import CardItem from '../CardItem/CardItem';
import { useHistory } from 'react-router';

const CardList = ({
  cards,
  onCardClick,
  onClose,
  loggedIn,
  isOtherUser,
  userUid,
  dataOtherUser,
  userProfile
}) => {

  const history = useHistory();

  const handleOpenCard = (url) => {
    history.push(url, {cards, userUid, userProfile});
  }

  return (
    loggedIn && (
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
  );
}

export default CardList;