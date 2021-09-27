import { useSelector } from "react-redux";

import CardItem from './CardItem/CardItem';
import './CardList.css'

const CardList = ({
  userUid,
}) => {

  const cards =  useSelector((state) => state.cards.value);

  return (
      <section className="photo-cards">
        <ul className="photo-cards__unordered-list">
          {cards.map((item) => 
            <CardItem 
              key={item._id}
              card={item}
              userUid={userUid}
            /> 
          )}
        </ul>
      </section>
    
  );
}

export default CardList;