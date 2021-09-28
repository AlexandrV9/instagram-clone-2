import { useSelector } from "react-redux";

import CardItem from './CardItem/CardItem';
import './CardList.css'

const CardList = () => {

  const cards =  useSelector((state) => state.currentUser.value).cards;

  return (
      <section className="photo-cards">
        <ul className="photo-cards__unordered-list">
          {cards.map((item) => 
            <CardItem 
              key={item._id}
              card={item}
            /> 
          )}
        </ul>
      </section>
    
  );
}

export default CardList;